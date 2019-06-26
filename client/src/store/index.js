import Vuex from 'vuex';
import Vue from 'vue';
import injury from './modules/injury';

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
    modules: {
        injury
    }
})