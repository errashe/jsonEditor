<script setup>
  import { ref, computed, inject } from 'vue'

  import { map } from './display/display'
  
  const props = defineProps({
    keyJson: String
  })

  const editor = inject('editor')

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const valJson = computed(() => editor.getByKey(props.keyJson))
  const typeJson = computed(() => typeof valJson.value)
  const cmpJson = computed(() => map[typeJson.value])

</script>

<template>
  <div>
    <component :is="cmpJson" :keyJson="keyJson"></component>
  </div>
</template>

<style scoped>
  div {
    margin-left: 10px;
  }
</style>