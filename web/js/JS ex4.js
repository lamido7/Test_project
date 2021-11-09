function code(str){

    
    patt1 = /^[a-b]|[0-9]|[a-b]/
    
    if(patt1.test(str)){
        return true
    }else{
        return false
    }
}
console.log(code('a0b'))

function oddEven(){

    for ( var i = 0; i < 15; i++){
        if(i % 2 == 0){
            alert('Even number ' + i)
        }else{
            alert('Odd number ' + i)
        }
    }

}
oddEven()