<script setup>
  import { ref, provide } from 'vue'
  import Iter from './components/Iter.vue'
  import test from './test.json'
  import Editor from './jsonEditor';

  const editor = new Editor(test);

  provide('editor', editor);

</script>

<template>
  <div v-for="(item, key) of editor.json">
    <Iter :keyJson="key" />
  </div>
</template>

<style scoped>
</style>
