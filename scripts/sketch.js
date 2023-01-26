let myCursor;
let profileImage;
let me;
let imgN = 1;
let inside;

let profileMargin;
let rotDir = [];
let rotDirIncrease = [];

let vw;
let vh;

function preload() { }

function setup() {
    noCanvas();
    vw = windowWidth / 100;
    vh = windowHeight / 100;
    myCursor = select("#myCursor");

    setProfileImage();
    switchProfileImage();
}

function draw() {
    moveProfileImage();
    myCursor.position(winMouseX, winMouseY);
}

function setProfileImage() {
    

    let randomRot = [-1, 1];
    let randomV = p5.Vector.random2D();
    randomV.mult(1.5);
    let randomDir = randomV.array();
    print(randomDir);
    profileImage = select("#profileImage");
    inside = select("#inside");
    profileMargin = [0 * vw, windowWidth - 15 * vw, 0 * vw, windowHeight - 15 * vw];

    me = createImg("materials/me1.jpg", "profileImage");
    me.parent(inside);
    rotDir = [0, random(5 * vw, windowWidth - 22 * vw), random(5 * vw, windowHeight - 22 * vw)];
    rotDirIncrease = [random(randomRot), randomDir[0], randomDir[1]];
    profileImage.position(rotDir[1], rotDir[2]);
}

function switchProfileImage() {
    me.remove();
    me = createImg("materials/me"+imgN+".jpg", "profileImage");
    me.parent(inside);
    if (imgN <2) {
        imgN++;
    } else {imgN=1}
    setTimeout(switchProfileImage, 600);
}

function moveProfileImage() {


    if ((rotDirIncrease[1] > 0 && rotDir[1] + rotDirIncrease[1] >= profileMargin[1]) || (rotDirIncrease[1] < 0 && rotDir[1] - rotDirIncrease[1] <= profileMargin[0])) {
        rotDirIncrease[1] *= -1;
    }

    if ((rotDirIncrease[2] > 0 && rotDir[2] + rotDirIncrease[2] >= profileMargin[3]) || (rotDirIncrease[2] < 0 && rotDir[2] - rotDirIncrease[2] <= profileMargin[2])) {
        rotDirIncrease[2] *= -1;
    }

    let currentRot = rotDir[0] += rotDirIncrease[0];
    profileImage.position(rotDir[1] += rotDirIncrease[1], rotDir[2] += rotDirIncrease[2]);
    inside.style("transform", "rotate" + "(" + (-1 * currentRot) + "deg)");
    profileImage.style("transform", "rotate" + "(" + currentRot + "deg)");
}

function windowResized() {
    vw = windowWidth / 100;
    vh = windowHeight / 100;
}