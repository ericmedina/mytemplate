import Vue from 'vue';
import Icon from '@/components/elements/Icon.vue';
import Input from '@/components/elements/Input.vue';
import Suggest from '@/components/elements/Suggest.vue';
import TableList from '@/components/elements/TableList.vue';
import FileSelect from '@/components/elements/FileSelect.vue';
import Dropdown from '@/components/elements/Dropdown.vue';

Vue.component('dropdown', Dropdown);
Vue.component('icon', Icon);
Vue.component('pd-input', Input);
Vue.component('suggest', Suggest);
Vue.component('table-list', TableList);
Vue.component('file-select', FileSelect);