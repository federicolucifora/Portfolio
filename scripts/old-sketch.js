let pImageDiv;
let insideImage = [];
let me;
let scrollPoint = 0;
let pImagePositions;
let isOut = false;

let profileMargin;
let currentPos = [];
let dirIncrease = [];

let vw;
let vh;

function preload() { }

function setup() {
    noCanvas();
    vw = windowWidth / 100;
    vh = windowHeight / 100;

    setProfileImage();
}

function draw() {
    moveProfileImage();
}

//------------------------------------------------------------------------------------------------------------------------------------

function setProfileImage() {
    pImagePositions = [10 * vw, 81 * vh]
    profileMargin = [0 * vw, windowWidth - 15 * vw, 4 * vw, windowHeight - 15 * vw];
    let randomV = p5.Vector.random2D();
    randomV.mult(2);
    let randomDir = randomV.array();

    pImageDiv = select("#pImageDiv");
    pImageDiv.position(currentPos[1], currentPos[2]);
    insideImage = selectAll("#pImageDiv img");

    currentPos = [random(5 * vw, windowWidth - 22 * vw), random(5 * vw, windowHeight - 22 * vw)];
    dirIncrease = [randomDir[0], randomDir[1]];
}

function mouseWheel() {
    scrollPoint = document.documentElement.scrollTop;
}

function moveProfileImage() {


    if ((dirIncrease[0] > 0 && currentPos[0] + dirIncrease[0] >= profileMargin[1]) || (dirIncrease[0] < 0 && currentPos[0] - dirIncrease[0] <= profileMargin[0])) {
        dirIncrease[0] *= -1;
    }

    if ((dirIncrease[1] > 0 && currentPos[1] + dirIncrease[1] >= profileMargin[3]) || (dirIncrease[1] < 0 && currentPos[1] - dirIncrease[1] <= profileMargin[2])) {
        dirIncrease[1] *= -1;
    }

    if (currentPos[1] > profileMargin[3]) {
        isOut = true;
    } else { isOut = false; }

    if (scrollPoint == 0) {
        if (isOut == true) {
            pImageDiv.position(currentPos[0] += dirIncrease[0] * 5, currentPos[1] += dirIncrease[1] * 5);
        } else {
            pImageDiv.position(currentPos[0] += dirIncrease[0], currentPos[1] += dirIncrease[1]);
        }
    } else if (scrollPoint > 0) {
        if (currentPos[1] < pImagePositions[1]) {
            pImageDiv.position(currentPos[0], currentPos[1] += 5)
            if (currentPos[0]< pImagePositions[0]) {
                print("isleft");
                pImageDiv.position(currentPos[0]+=5, currentPos[1]);
            } else if (currentPos[0]>pImagePositions[0]) {
                pImageDiv.position(currentPos[0]-=5, currentPos[1]);
                print("isright");
            } else if (abs(currentPos[0]-pImagePositions[0])<=5) {pImageDiv.position(pImagePositions[0], currentPos[1]);
                print("ison");}
        } else {
            pImageDiv.position(currentPos[0], currentPos[1]);
        }

    }
}

function windowResized() {
    vw = windowWidth / 100;
    vh = windowHeight / 100;
}