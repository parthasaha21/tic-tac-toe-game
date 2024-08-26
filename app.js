let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let msgPara = document.querySelector("#msg");

let turn0 = true;
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const restGame = () => {
    turn0 = true; 
    enbBox();
    msg.classList.add("hide");
};

box.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");

        if (turn0 === true) {
            box.innerText = "o";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;

        checkPatterns();
    });
});

const disbBox = () => {
    box.forEach((b) => {
        b.disabled = true;
    });
};

const enbBox = () => {
    box.forEach((b) => {
        b.disabled = false;
        b.innerText = "";
    });
};

const showWinner = (winner) => {
    msgPara.innerText = `Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");

    disbBox();
};

const checkPatterns = () => {
    for (let patterns of winPatterns) {
        let pos1val = box[patterns[0]].innerText;
        let pos2val = box[patterns[1]].innerText;
        let pos3val = box[patterns[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newBtn.addEventListener("click", restGame);
resetBtn.addEventListener("click", restGame);
