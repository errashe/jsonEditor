import { ref, computed } from 'vue'

export default class Editor {
  _json = ref({});
  
  constructor(json) {
    this.json = json;
  }

  set json(value) {
    this._json.value = value;
  }

  get json() {
    return this._json.value;
  }

  byKey(where, key) {
    let el = where;
    if (!key) return el;
    for (const part of key.split('.')) {
      el = el[part];
      if (el == undefined) throw Error('NOT FOUND');
    }
    return el;
  }

  getByKey(key) {
    return this.byKey(this.json, key)
  }

  setByKey(key, val) {
    let tmp = key.split('.')
    const k = tmp.pop()
    tmp = tmp.join('.')
    let el = this.getByKey(tmp)
    el[k] = val;
  }
}