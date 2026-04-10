class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }
  
  hash(key) {
    let total = 0;
    for (let i=0; i<key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.table.length;
  }
  
  set(key, value) {
    const index = this.hash(key);
    
    if(!this.table[index]) this.table[index] = [];
    
    const bucket = this.table[index];
    
    for(let item of bucket) {
      if(item.key === key) {
        item.value = value;
        return;
      }
    }
    bucket.push({key, value});
  }
  
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    
    if(!bucket) return undefined;
    
    for(let item of bucket) {
      if(item.key === key) {
        return item.value;
      }
    }
    return undefined;
  }
  
  display(){
    console.log(this.table);
  }
  
  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if(!bucket) return false;
    
    for (let i=0; i<bucket.length; i++) {
      if(bucket[i].key === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

// const table = new HashTable();
// table.set('name','zuhair');
// table.set('age', 9)
// table.set('enam','savad');
// table.set('eman', 'aju');
// table.set('eag', 25);
// table.set('ega', 'twenty')
// table.display()
// console.log(table.get('enam'));
