const minN = 1;
const maxN = 100;
const answer = Math.floor(Math.random() * (maxN - minN + 1)) + minN;

let valueN = 0;
let guess;
let run = true;
while (run) {
    guess = prompt(`${minN} -${maxN}`)
    guess = Number(guess)

    if (isNaN(guess)) {
        alert("duzgun rəqəm daxil edin")
    }
    else if (guess < minN || guess > maxN) {
        alert("duzgun rəqəm daxil edin")
    }
    else {
        valueN++;
        if (guess < answer) {
            alert("yuxari reqem daxil edin")
        }
        else if (guess > answer) {
            alert("asagi qerem daxil edin")
        }
        else {
            alert(`duzgun cavabdir!duzgun cavab : ${answer}`)
            run = false
        }
    };


} 