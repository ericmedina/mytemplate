import Icon from './components/elements/Icon.vue';
import Input from './components/elements/Input.vue';
import Suggest from './components/elements/Suggest.vue';
import TableList from './components/elements/TableList.vue';
import FileSelect from './components/elements/FileSelect.vue';
import Dropdown from './components/elements/Dropdown.vue';
import Modal from './components/elements/Modal.vue';

const PampaUI = {
        install(Vue) {
            Vue.component('dropdown', Dropdown);
            Vue.component('icon', Icon);
            Vue.component('pui-input', Input);
            Vue.component('suggest', Suggest);
            Vue.component('table-list', TableList);
            Vue.component('file-select', FileSelect);
            Vue.component('pui-modal', Modal);
        }
    }
    // Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(PampaUI);
}
export default PampaUI