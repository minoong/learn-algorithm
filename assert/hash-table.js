class HashTable {
  constructor(size) {
    this.size = size || 100;
    this.storage = [];
  }
  getHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    console.log(hash % this.size);
    return hash % this.size;
  }
  add(key, value) {
    const index = this.getHash(key);

    if (undefined === this.storage[index]) {
      console.log("add");
      this.storage[index] = [[key, value]];
    }

    let isDup = false;

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        this.storage[index][i][1] = value;
        isDup = true;
      }
    }

    if (!isDup) this.storage[index] = [...this.storage[index], [key, value]];
  }
  remove(key) {
    const index = this.getHash(key);

    if (undefined === this.storage[index]) {
      return false;
    }

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        this.storage[index] = [
          ...this.storage[index].slice(0, i),
          ...this.storage[index].slice(i + 1),
        ];

        return true;
      }
    }

    return false;
  }

  get(key) {
    const index = this.getHash(key);

    if (undefined === this.storage[index]) {
      return null;
    } else if (
      this.storage[index].length === 1 &&
      this.storage[index][0][0] === key
    ) {
      return this.storage[index][0][1];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }

    return null;
  }
}

if (!window.dataStructure) {
  window.dataStructure = {};
  window.dataStructure.HashTable = HashTable;
}
