<script setup>
  import useEditorValue from './editorValue';

  const props = defineProps({
    keyJson: String
  })

  const { editor, value, setValue } = useEditorValue(props.keyJson)
  
</script>

<template>
  {{ keyJson }} - {{ value }}
</template>