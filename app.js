

const startbtn = document.getElementById("b1");
const stopbtn = document.getElementById("b2");
const resetbtn = document.getElementById("b3");

let second = 0;
let mintue = 0;
let count = 0;
let timer = false;
let interval;

startbtn.addEventListener("click", st);
stopbtn.addEventListener("click", stp);
resetbtn.addEventListener("click", reset);

function st() {
    if (!timer) {
        timer = true;
        interval = setInterval(stopwatch, 10);
    }
}

function stp() {
    timer = false;
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    timer = false;
    second = 0;
    mintue = 0;
    count = 0;

    document.getElementById("sec").innerHTML = 0;
    document.getElementById("min").innerHTML = 0;
    document.getElementById("count").innerHTML = 0;
}

function stopwatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            mintue++;
            second = 0;
        }

        document.getElementById("min").innerHTML = mintue;
        document.getElementById("sec").innerHTML = second;
        document.getElementById("count").innerHTML = count;
    }
}
