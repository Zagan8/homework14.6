const color=require('colors')
function paintNumbers(arr){
const coloredArray = arr.map((number)=>{
    return number.toString().random
})
console.log(...coloredArray);
}

module.exports = paintNumbers;