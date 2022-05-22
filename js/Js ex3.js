function fizzbuzz(){
    for(var i =0; i < 100; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            alert("FizzBuzz " + i);
        } else if (i % 3 === 0) {
            alert("Fizz " + i);
        } else if (i % 5 === 0) {
            alert("Buzz " + i);
        } else {
           alert(i);
        }

    }
}
fizzbuzz()