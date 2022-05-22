function longWord(str){

    var array1 = str.match(/\w[a-z]{0,}/gi) 
    var result = array1[0]

    for(var x = 1; x < array1.length; x++){
        if(result.length < array1[x].length){
            result = array1[x]
        }
    }
    return result
}
console.log(longWord('Web Development Tutorial'))

function reverseNum(num){

    num = num + ''
    return num.split('').reverse().join('')
    

}
console.log(reverseNum(32165))