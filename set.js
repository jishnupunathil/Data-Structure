const set=new Set([1,2,3,4])
set.add(6)
console.log(set.has(5));
console.log(set.has(4));
set.delete(2)
console.log(`size=${set.size}`);
set.clear()
console.log(`size=${set.size}`);

for(item of set){
    console.log(item);
}