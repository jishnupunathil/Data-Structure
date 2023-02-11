// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//     }

//     hash(key) {
//         let address = 0
//         for (let i = 0; i < key.length; i++) {
//             address = address + key.charCodeAt(i)
//         }
//         return address % this.table.length
//     }
//     add(key, value) {
//         let index = this.hash(key)
//         // this.table[index]=[[key,value]]

//         let bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             let sameKey = bucket.find((n) => n[0] === key)
//             if (sameKey) {
//                 sameKey[1] = value
//             }
//             bucket.push([key, value])
//         }
//     }

//     ge(key) {
//         let index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             let same = bucket.find((n) => n[0] === key)
//             if (same) {
//                 return same[1]

//             }
//         }
//         return false


//     }

//     remove(key){
//         let index=this.hash(key)

//         const bucket=this.table[index]

//         if(bucket){
//             let same=bucket.find((n)=>n[0]===key)

//             bucket.splice(bucket.indexOf(same),1)
//         }
//     }

//     display(){
//         for(let i=0;i,this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }

// }

// const hash = new HashTable(1)

// hash.add("mane", "John Doe")
// hash.add("name","kvk")
// hash.add(5, "John")

// hash.add(5,'arju')

// hash.add('jis', 65374568)

// hash.remove(5)
// // console.log(hash);
// hash.display()

// // console.log(hash.ge(5));

class HashTable{
    constructor(size){
        this.table=new Array(size)
    }

    hash(key){
        let address=0
        for(let i=0;i<key.length;i++)
        { address=address+key.charCodeAt(i)
        }
        return address%this.table.length
    }
    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket) this.table[index]=[[key,value]]
        else{
            let sameKey=bucket.find((n)=>n[0]===key)
            if(sameKey) sameKey[1]=value
            else bucket.push([key,value])
        }
    }
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let same=bucket.find((n)=> n[0]===key)
            if(same) return same[1]
        }
        else return false
    }
    remove(key)
    {
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let same=bucket.find((n)=>n[0]===key)
            bucket.splice(bucket.indexOf(same),1)
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
            console.log(i,this.table[i]);
            }
        }
    }
}

const hash=new HashTable(1)
hash.set('name','jishnu')
hash.set('age',20)
hash.set('names','jishnu')
hash.set('ages',20)
// hash.display()
console.log(hash);