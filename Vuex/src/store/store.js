import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

// Anything that gets put into the store MUST have a unique key, no repeats
export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations, // Mutations must be syncronous
    actions,  // use to run asyncronously
    modules: {
        counter
    }
});
