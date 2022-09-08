import { ref, computed, inject } from 'vue'

export default (key) => {
  const editor = inject('editor')
  const value = computed(() => editor.getByKey(key))
  const setValue = (val) => editor.setByKey(key, val)
  const setValueInScope = (k, val) => editor.setByKey(`${key}.${k}`, val)

  return { editor, value, setValue, setValueInScope };
}