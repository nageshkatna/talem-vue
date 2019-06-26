<template>
  <div>
    <div class="injuries" v-bind:key="injury.id" v-for="injury in allInjuries">
      <sui-checkbox v-bind:label="injury.type" toggle v-model="injury.value" class="toggleButtons" 
      v-on:change="switchValueFunc(injury.id,injury.type,injury.value)"/>
    </div>
  </div>
</template>



<script>
import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Injuries',
  computed: mapGetters(["allInjuries"]),
  methods: {
    //mapping vuex actions
    ...mapActions(['fetchInjuries']),
    ...mapActions(["switchValue"]),
    //function to switch value in DB
    switchValueFunc: function(id,type,value) {
      const data = {
        id:id,
        type:type,
        value: value
      }
      this.switchValue(data)
    }
  },
  created(){ //on the load of the component fetching all data
    this.fetchInjuries();
  },
  data(){
    // const val = this.allInjuries;
    return {
      value: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.injuries{
  margin-top: 1%;
}
.toggleButtons{
  margin-right: 1%;
}
</style>
