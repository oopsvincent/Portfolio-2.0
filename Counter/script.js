const button = document.getElementById("btn");
const head = document.getElementById("h");

let i = 0;

function increment() {
    i++;
    head.innerHTML = i;
};

function decrement() {
    i--;
    head.innerHTML = i;
}

function reset() {
    i = 0;
    head.innerHTML = i;
}