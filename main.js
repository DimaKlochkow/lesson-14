function counter(defaultValue){
    var value = defaultValue || 0;
    return function(){
        return value++;
    }
}
var count = counter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());