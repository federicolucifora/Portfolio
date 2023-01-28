let pImageDiv;
let insideImage = [];
let me;
let hasScrolled = false;
let scrollPoint = 0;
let isAtFirst = false;
let isAtSecond = false;
let isAtThird = false;

let profileMargin;
let dir = [];
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

function mouseWheel(event) {
    let pageLength = select("html");
    if (scrollPoint >= (0 - event.delta) && event.delta != 0 && (scrollPoint < int(pageLength.style("height")) || event.delta < 0)) {
        scrollPoint += event.delta;
        hasScrolled = true;
    }

    if (scrollPoint > 50 && scrollPoint < 1000) {
        isAtFirst = true;
    } else {isAtFirst = false;}

    if (scrollPoint >= 1000 && scrollPoint < 2000) {
        isAtSecond = true;
    } else {isAtSecond = false;}
}

function setProfileImage() {
    profileMargin = [0 * vw, windowWidth - 15 * vw, 4 * vw, windowHeight - 15 * vw];
    let randomV = p5.Vector.random2D();
    randomV.mult(2);
    let randomDir = randomV.array();

    pImageDiv = select("#pImageDiv");
    pImageDiv.position(dir[1], dir[2]);
    insideImage = selectAll("#pImageDiv img");
    print(insideImage);

    dir = [random(5 * vw, windowWidth - 22 * vw), random(5 * vw, windowHeight - 22 * vw)];
    dirIncrease = [randomDir[0], randomDir[1]];
}

function moveProfileImage() {

    if ((dirIncrease[0] > 0 && dir[0] + dirIncrease[0] >= profileMargin[1]) || (dirIncrease[0] < 0 && dir[0] - dirIncrease[0] <= profileMargin[0])) {
        dirIncrease[0] *= -1;
    }

    if ((dirIncrease[1] > 0 && dir[1] + dirIncrease[1] >= profileMargin[3]) || (dirIncrease[1] < 0 && dir[1] - dirIncrease[1] <= profileMargin[2])) {
        dirIncrease[1] *= -1;
    }

    if (hasScrolled == false) {
        pImageDiv.position(dir[0] += dirIncrease[0], dir[1] += dirIncrease[1]);
    }
    
    if (isAtFirst == true) {
        pImageDiv.position(10 * vw, 81 * vh);
        pImageDiv.style("transition", "1s");
        pImageDiv.addClass("enlargedImage");
        insideImage[1].removeClass("imageTransparent");
        insideImage[0].addClass("imageTransparent");
    }
    
    if (hasScrolled ==true && isAtFirst == false && isAtSecond == false && isAtThird == false){
        pImageDiv.position(dir[0], dir[1]);
        pImageDiv.removeClass("enlargedImage");
        insideImage[0].removeClass("imageTransparent");
        insideImage[1].addClass("imageTransparent");
        setTimeout(function () {
            pImageDiv.position(dir[0] += dirIncrease[0], dir[1] += dirIncrease[1]);
            pImageDiv.style("transition", "0s");
        }, 1000);

    }


}

function windowResized() {
    vw = windowWidth / 100;
    vh = windowHeight / 100;
}