<script setup>
  import Iter from '../Iter.vue';
  import useEditorValue from './editorValue';

  const props = defineProps({
    keyJson: String
  })

  const { editor, value, setValue } = useEditorValue(props.keyJson)
  
</script>

<template>
  {{ keyJson }} -
  <div v-for="(item, key) of value">
    <Iter :keyJson="`${keyJson}.${key}`" />
  </div>
</template>