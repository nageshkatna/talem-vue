<template lang="html">
  <sui-table fixed single-line>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Id</sui-table-header-cell>
        <sui-table-header-cell>Injury</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-bind:key="display.id" v-for="display in displayInjuries">
        <sui-table-cell>{{display.id}}</sui-table-cell>
        <sui-table-cell>{{display.type}}</sui-table-cell>
        <sui-table-cell positive><sui-icon name="check"/> {{display.value}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Display',
  computed: mapGetters(["displayInjuries"]),
  methods:{
    ...mapActions(['fetchDisplayInjuries']), //mapping actions to get data from DB which have status on or true
  },
  data(){
    return {
      displayData: []
    }
  },
  created() {
    this.fetchDisplayInjuries(); //fetching data from DB which have status on or true on the load of the component
  }
};
</script>