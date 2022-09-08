import ArrayCmp from './ArrayCmp.vue'
import NumberCmp from './NumberCmp.vue'
import ObjectCmp from './ObjectCmp.vue'
import StringCmp from './StringCmp.vue'

const map = {
  'array': ArrayCmp,
  'number': NumberCmp,
  'object': ObjectCmp,
  'string': StringCmp
};


export { ArrayCmp, NumberCmp, StringCmp, ObjectCmp, map};