let counter = document.getElementById("counter");

let plusOne = document.getElementById("plusOne");
let minusOne = document.getElementById("minusOne");

let int = 0;

plusOne.addEventListener('click', function(){
    int += 1;
    counter.innerHTML = int;
})

minusOne.addEventListener('click', function(){
    int -=1;
    counter.innerHTML = int;
})