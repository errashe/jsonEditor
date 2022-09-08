<script setup>
  import useEditorValue from './editorValue';

  const props = defineProps({
    keyJson: String
  })

  const { editor, value, setValue } = useEditorValue(props.keyJson)
  
</script>

<template>
  {{ keyJson }} - {{ value }} - <button @click="setValue(222222)">WTF</button>
</template>

<style scoped>
  button {
    /* height: 30px; */
    line-height: 10px;
    padding: 0.3em 0.6em;
    font-size: 0.7em;
  }
</style>