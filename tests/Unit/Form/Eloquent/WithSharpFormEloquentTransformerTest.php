<?php

namespace Code16\Sharp\Tests\Unit\Form\Eloquent;

use Code16\Sharp\Form\Eloquent\SharpFormEloquent;
use Code16\Sharp\Form\Eloquent\WithSharpFormEloquentTransformer;
use Code16\Sharp\Form\SharpForm;
use Code16\Sharp\Tests\Fixtures\Person;
use Code16\Sharp\Tests\SharpTestCase;
use \Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Schema;

class WithSharpFormEloquentTransformerTest extends SharpTestCase
{
    use DatabaseTransactions;

    protected function getEnvironmentSetUp($app)
    {
        // Setup default database to use sqlite :memory:
        $app['config']->set('database.default', 'testbench');
        $app['config']->set('database.connections.testbench', [
            'driver' => 'sqlite',
            'database' => ':memory:',
            'prefix' => '',
        ]);

        Schema::create('people', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->unsignedInteger("mother_id")->nullable();
            $table->timestamps();
        });

        Schema::create('friends', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("person1_id");
            $table->unsignedInteger("person2_id");
            $table->timestamps();
        });
    }

    /** @test */
    function we_can_retrieve_an_array_version_of_a_model()
    {
        $person = Person::create([
            "name" => "John Wayne"
        ]);

        $form = new WithSharpFormEloquentTransformerTestForm();

        $this->assertArraySubset([
                "name" => "John Wayne"
            ], $form->find($person->id)
        );
    }

    /** @test */
    function belongsTo_is_handled()
    {
        $mother = Person::create([
            "name" => "Jane Wayne"
        ]);

        $person = Person::create([
            "name" => "John Wayne",
            "mother_id" => $mother->id
        ]);

        $form = new WithSharpFormEloquentTransformerTestForm();

        $this->assertArraySubset([
                "mother_id" => $person->mother_id,
                "mother" => ["id" => $mother->id, "name" => $mother->name],
            ], $form->find($person->id)
        );
    }

    /** @test */
    function hasOne_is_handled()
    {
        $mother = Person::create([
            "name" => "Jane Wayne"
        ]);

        $son = Person::create([
            "name" => "John Wayne",
            "mother_id" => $mother->id
        ]);

        $form = new WithSharpFormEloquentTransformerTestForm();

        $this->assertArraySubset([
            "elder_son" => ["id" => $son->id, "name" => $son->name],
        ], $form->find($mother->id)
        );
    }

    /** @test */
    function hasMany_is_handled()
    {
        $mother = Person::create([
            "name" => "Jane Wayne"
        ]);

        $son1 = Person::create([
            "name" => "John Wayne",
            "mother_id" => $mother->id
        ]);

        $son2 = Person::create([
            "name" => "Bill Wayne",
            "mother_id" => $mother->id
        ]);

        $form = new WithSharpFormEloquentTransformerTestForm();

        $this->assertArraySubset([
                "sons" => [
                    ["id" => $son1->id, "name" => $son1->name],
                    ["id" => $son2->id, "name" => $son2->name],
                ]
            ], $form->find($mother->id)
        );
    }

    /** @test */
    function belongsToMany_is_handled()
    {
        $person1 = Person::create([
            "name" => "John Wayne"
        ]);

        $person2 = Person::create([
            "name" => "Louise Brooks"
        ]);

        $person3 = Person::create([
            "name" => "Claire Trevor"
        ]);

        $person1->friends()->attach([
            $person2->id, $person3->id
        ]);

        $form = new WithSharpFormEloquentTransformerTestForm();

        $this->assertArraySubset([
                "friends" => [
                    ["id" => $person2->id, "name" => $person2->name],
                    ["id" => $person3->id, "name" => $person3->name],
                ]
            ], $form->find($person1->id)
        );
    }
}

class WithSharpFormEloquentTransformerTestForm extends SharpForm implements SharpFormEloquent
{
    use WithSharpFormEloquentTransformer;

    function findModel($id): Model
    {
        return Person::whereId($id)
            ->with(["sons", "elderSon", "mother", "friends"])
            ->firstOrFail();
    }

    function update($id, array $data): bool { return false; }
    function store(array $data): bool { return false; }
    function delete($id): bool { return false; }
    function buildFormLayout() {}
    function buildFormFields() {}
}