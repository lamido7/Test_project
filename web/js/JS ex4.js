function code(str){

    
    patt1 = /^[a-b]|[0-9]|[a-b]/
    
    if(patt1.test(str)){
        return true
    }else{
        return false
    }
}
console.log(code('a0b'))