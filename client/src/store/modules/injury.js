import axios from 'axios';
// import { stat } from 'fs';

const state = {
    injuries: [],
    showInjuries :[]
};

const getters = {
    allInjuries: (state)=> state.injuries,
    displayInjuries:(state)=>state.showInjuries
};

const actions = {
    //action to fetch all data from database
    async fetchInjuries({ commit }) {
        const response = await axios.get(
            'http://localhost:5000/api/injuries/all/'
        );
        
        commit('setInjuries',response.data);
    },
    //action to fetch data which is true from database
    async fetchDisplayInjuries({ commit }) {
        const response = await axios.get(
            'http://localhost:5000/api/injuries/'
        );
        
        commit('setDisplayInjuries',response.data);
    },
    //action to update database
    async switchValue({ commit }, data) {
        const response= await axios.post('http://localhost:5000/api/injuries/'+data.id+'/'+data.type+'/'+data.value);
        commit('updateDisplayInjuries',response.data);
    }
};

const mutations = {
    setInjuries: (state, injuries) => (state.injuries = injuries),
    setDisplayInjuries: (state, data) => (state.showInjuries = data),
    updateDisplayInjuries: (state, injuryData) => {
        state.showInjuries =injuryData
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}