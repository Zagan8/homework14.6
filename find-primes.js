function findPrimes (firstNum,secondNum){
    function isPrime(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }
    const primaryArr = [];
    for(let i = firstNum;i<secondNum;i++){
        if(isPrime(i)){
            primaryArr.push(i);
        }
    }
    return primaryArr;
} 

module.exports=findPrimes;