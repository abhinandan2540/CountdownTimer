// let countdown = document.getElementById("ctd");
// let button = document.getElementById("but");
// let screen = document.getElementById("scr");


// button.addEventListener("click", () => {
//     console.log(countdown.value);
//     let i = countdown.value;
//     while (i >= 0) {
//         screen.textContent = i;
//         console.log(i);
//         i -= 1
//     }
// })

let count = 0;

const intervalID = setInterval(() => {
    console.log(`Count: ${count}`);
    count++;

    if (count > 5) {  // Stop after 5 counts
        clearInterval(intervalID);
    }
}, 1000);  // Interval of 1000 ms (1 second)
