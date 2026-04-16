class HashTable{

    constructor(size=10) {
        this.table = new Array(size);
        this.count = 0;
    }

    hash(key) {
        let total = 0;
        const prime = 31;
        for(let i=0; i<key.length; i++) {
            total = (total*prime + key.charCodeAt(i)) % this.table.length;
        }
        return total;
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
        bucket.push({key,value});
        this.count++;

        if((this.count/this.table.length) > 0.7) {
            this.rehash();
        }
    }

    insert(key, value) {
        const index = this.hash(key);
        if(!this.table[index]) this.table[index] = [];
        this.table[index].push({key, value});
        this.count++;
    }

    rehash() {
        let oldTable = this.table;

        this.table = new Array(this.table.length*2);
        this.count = 0;

        for(let bucket of oldTable) {
            if(bucket) {
                for(let item of bucket) {
                    this.insert(item.key, item.value);
                }
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket) return undefined;
        for(let item of bucket) {
            if(item.key === key) {
                return item.value;
            }
        }
        return undefined;
    }

    display() {
        for(let i=0; i<this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, ':', this.table[i]);
            }
        }
    }

    delete(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket) return null;
        for(let i=0; i<bucket.length; i++) {
            if(bucket[i].key === key) {
                let removed = bucket.splice(i, 1)[0];
                this.count--;
                return removed;
            }
        }
        return null;
    }
}

const table = new HashTable(5);
table.set('ab','Zuhair');
table.set('ba','Riza');
table.set('age',12);
table.set('ega',35);
table.set('eman','Safan')
table.display()
table.delete('name');
table.display()
console.log(table.get('age'));
