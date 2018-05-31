import Notifications from 'vue-notification';
import { shallowMount, mount, createLocalVue, config } from '@vue/test-utils';
import ActionView from '../components/ActionView.vue';
import Vue from 'vue';

config.stubs['transition-group'] = false;

describe('action-view', ()=>{

    const ModalStub = {
        name:'TestModal',
        template:'<div><slot/></div>'
    };

    const localVue = createLocalVue();
    localVue.use(Notifications);

    function notify(wrapper, ...args) {
        wrapper.vm.$notify(...args);
        // remove notification global data-id to preserve unit
        wrapper.findAll('[data-id]').wrappers.forEach(wrapper=>wrapper.element.removeAttribute('data-id'));
    }

    function createWrapper(options={}) {
        return shallowMount(ActionView, {
            ...options,
            propsData: {
                context: 'form',
                ...options.propsData
            },
            stubs: {
                'SharpModal': ModalStub
            },
            localVue
        })
    }


    test('can mount ActionView', ()=>{
        expect(createWrapper().html()).toMatchSnapshot();
    });

    test('can mount ActionView with notification', ()=>{
        const wrapper = createWrapper({ notifications: true });
        notify(wrapper, { title:'TITLE', text:'MESSAGE', type:'TYPE' });
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('can mount ActionView with closed notification', ()=>{
        const wrapper = createWrapper({ notifications:true });
        notify(wrapper, 'message');
        wrapper.find('[data-test=close-notification]').trigger('click');
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('can mount ActionView with error page', ()=>{
        const wrapper = createWrapper({
            data: {
                showErrorPage: true,
                errorPageData: {
                    status: 404,
                    message: 'ERROR MESSAGE'
                }
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('can mount with action bar', ()=>{
        const BarComponent = { name:'TestBarComponent', template:'<div>BAR COMPONENT</div>' };
        const wrapper = createWrapper({
            computed: {
                barComp:()=>BarComponent
            }
        });
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('can mount with multiple modals', ()=>{
        const wrapper = createWrapper();
        wrapper.vm.showMainModal({ text: 'Modal 1' });
        wrapper.vm.showMainModal({ text: 'Modal 2' });
        expect(wrapper.html()).toMatchSnapshot();
    });

    xtest('handle main modal events', ()=>{
        const wrapper = createWrapper();
        const modalOptions = { text: 'Modal 1', okCallback:jest.fn(), hiddenCallback:jest.fn() };
        wrapper.vm.showMainModal(modalOptions);
        
        let modal = wrapper.find(ModalStub);

        modal.vm.$emit('ok');
        expect(modalOptions.okCallback).toHaveBeenCalled();
    });
});