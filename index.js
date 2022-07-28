let add = document.getElementById("add");
let zero = document.getElementById("zero");
let sub = document.getElementById("sub");
let result = document.getElementById("counter");
let count = 0;
add.addEventListener("click" , () => {
    count++;
    result.innerHTML = count;
});
zero.addEventListener("click" , () => {
    count = 0;
    result.innerHTML = count;
});
sub.addEventListener("click" , () => {
    count--;
    result.innerHTML = count;
});