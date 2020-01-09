import uniqueId from 'lodash/uniqueId';
import { action, computed, observable } from 'mobx';

export default class Item {
  id = uniqueId;
  list;
  @observable value = '';
  @observable packed = false;

  constructor({ value, list }) {
    this.value = value;
    this.list = list;
  }

  @computed
  get unpacked() {
    return !this.packed;
  }

  @action.bound
  get toggle() {
    return (this.packed = !this.packed);
  }

  @action.bound
  remove() {
    this.list.removeItem(this);
  }
}
