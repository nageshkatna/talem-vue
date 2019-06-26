<template>
  <sui-form >
    <sui-form-field>
      <label>Upload File</label>
      <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
    </sui-form-field>
    <sui-button type="button" @click="submitFile()">Submit</sui-button>
  </sui-form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'upload',
  data(){
  return {
    file: ''
  }
},
  methods: {
    submitFile: function(){
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post( 'http://localhost:5000/api/upload/',
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(result => {
        console.log(result);
        console.log('SUCCESS!!');
      })
      .catch(function(){
        console.log('FAILURE!!');
      });
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    }
  }
}
</script>

<style>

</style>

