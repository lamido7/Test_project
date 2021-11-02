function Ucase(str){

   var strArray = str.split(' ')
   var newStrArray = []

    for( i=0; i < strArray.length; i++){
        newStrArray.push(strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1))
    }
    return newStrArray.join(' ')
}
console.log(Ucase(' class name completion for the attribute'))


function Type(x){
  
   return typeof(x)
}
console.log(Type('true'))
