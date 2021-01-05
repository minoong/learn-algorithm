### 알고리즘, 자료구조 구현 및 공부

---

1. 이진탐색(binary-searsh.js)

2. 해시테이블(hash-table.js)

> spec

```javascript
class HashTable {
    this.size = size || 100;
    this.storage = [];
  }
  getHash(key) {...}
  add(key, value) {...}
  remove(key) {...}
  get(key) {...}
}

if (!window.dataStructure) {
  window.dataStructure = {};
  window.dataStructure.HashTable = HashTable;
}
```
