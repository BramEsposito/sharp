<?php

namespace Code16\Sharp\EntityList\Commands;

use Code16\Sharp\Form\Fields\SharpFormField;
use Code16\Sharp\Form\Layout\FormLayoutColumn;

abstract class Command
{
    /**
     * @var array
     */
    protected $fields;

    /**
     * @param string $message
     * @return array
     */
    protected function info(string $message)
    {
        return [
            "action" => "info",
            "message" => $message
        ];
    }

    /**
     * @return array
     */
    protected function reload()
    {
        return [
            "action" => "reload"
        ];
    }

    /**
     * @param mixed $ids
     * @return array
     */
    protected function refresh($ids)
    {
        return [
            "action" => "refresh",
            "items" => (array)$ids
        ];
    }

    /**
     * @param string $bladeView
     * @param array $params
     * @return array
     */
    protected function view(string $bladeView, array $params = [])
    {
        return [
            "action" => "view",
            "html" => view($bladeView, $params)->render()
        ];
    }

    /**
     * Add a form field.
     *
     * @param SharpFormField $field
     * @return $this
     */
    protected function addField(SharpFormField $field)
    {
        $this->fields[] = $field;

        return $this;
    }

    /**
     * @return string|null
     */
    public function confirmationText()
    {
        return null;
    }

    /**
     * Build the optional Command form, calling ->addField()
     */
    public function buildForm()
    {
    }

    /**
     * Build the optional Command form layout.
     *
     * @param FormLayoutColumn $column
     */
    public function buildFormLayout(FormLayoutColumn &$column)
    {
    }

    /**
     * @return array
     */
    public function form()
    {
        $this->buildForm();

        return collect($this->fields)->map(function($field) {
            return $field->toArray();
        })->keyBy("key")->all();
    }

    /**
     * @return array|null
     */
    public function formLayout()
    {
        if(!$this->fields) {
            return null;
        }

        $column = new FormLayoutColumn(12);
        $this->buildFormLayout($column);

        if(empty($column->fieldsToArray()["fields"])) {
            foreach($this->fields as $field) {
                $column->withSingleField($field->key());
            }
        }

        return $column->fieldsToArray()["fields"];
    }

    /**
     * @return string
     */
    public abstract function type(): string;

    /**
     * @return string
     */
    public abstract function label(): string;
}