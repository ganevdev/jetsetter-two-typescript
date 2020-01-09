import { action, computed, observable } from 'mobx';

import Item from './ItemModel';

export interface IItem {
  packed?: () => void;
  unpacked?: () => void;
  removeItem?: () => void;
  value: string;
}

export default class ItemStore {
  @observable items: IItem[] = [];
  @observable unpackedItemsFilter = '';
  @observable packedItemsFilter = '';

  @computed get packedItems() {
    return this.items.filter((item) => item.packed);
  }

  @computed get unpackedItems() {
    return this.items.filter((item) => item.unpacked);
  }

  @computed get filteredPackedItems() {
    return this.packedItems.filter((item) =>
      item.value.includes(this.unpackedItemsFilter)
    );
  }

  @computed get filteredUnPackedItems() {
    return this.unpackedItems.filter((item) =>
      item.value.includes(this.unpackedItemsFilter)
    );
  }

  // @action.bound
  // addItem(value) {
  //   this.items.push(new Item(value, this));
  // }

  @action.bound
  updatePackedItemsFilter(value) {
    this.packedItemsFilter = value;
  }

  @action.bound
  updateUnpackedItemsFilter(value) {
    this.unpackedItemsFilter = value;
  }

  @action.bound
  remove(itemToRemove) {
    this.items.filter((item) => item === itemToRemove);
  }
}
