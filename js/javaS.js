function Ucase(str){

   var strArray = str.split(' ')
   var newStrArray = []

    for( i=0; i < strArray.length; i++){
        newStrArray.push(strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1))
    }
    return newStrArray.join(' ')
}
console.log(Ucase('class name completion for the attribute'))


function Type(x){
  
   return typeof(x)
}
console.log(Type('true'))

function areaTri(){
    var side1 = 5
    var side2 = 6
    var side3 = 7

    var s = (side1 + side2 + side3) / 2

    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))
    return area
}console.log(areaTri())

function periarea(){
    var len = 5
    var bre = 13

    area = len * bre
    perimeter = (2*len) + (2*bre)

    console.log('Area : ' + area + ' Perimeter : ' + perimeter)

}
console.log(periarea())

function isPrime(n){

    if(n==1){
        return false;
    }else if(n==2){
        return true
    }else{
        for(var x = 2; x < n; x++){
            if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
    
console.log(isPrime(37))
    


