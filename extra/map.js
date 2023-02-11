const map=new Map([['a',23],['b',34]])

map.set('g',12)
console.log(map.size);
map.delete('a')
console.log(map.size);
console.log(map.has('b'));
map.clear()
console.log(map.size);

for([key,value] of map){
    console.log(`${key}:${value}`);
}