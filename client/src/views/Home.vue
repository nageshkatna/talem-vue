<template>
  <div class="home">
    <Injuries />
    <Display />
  </div>
</template>

<script>
// @ is an alias to /src
import Injuries from '@/components/Injuries.vue';
import Display from '@/components/Display.vue';

export default {
  name: 'home',
  components: {
    Injuries,
    Display
  }
}
</script>
