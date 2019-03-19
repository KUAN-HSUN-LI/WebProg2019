let cvsWrapper = null;
let bg, bgW, bgH;
let base, baseH;
let x1, y1;
let vx, vy;
let ay;
let triAng;
let birdX, birdY, birdW, birdH, birdRight, birdDown;
let pipe, pipeX1, pipeX2, pipeY1, pipeY2, pipeW, pipeH;
let pipe1Up_Down, pipe1Low_Top;
let pipe2Up_Down, pipe2Low_Top;
let pipe1Right, pipe2Right;
let assets = [];
let randBird, randBg, randPipe, randPipeH;
let start;
let message;
let gameOver;
let wingSound, hitSound, dieSound, pointSound;
let score;
let numW, numH;
let dead;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    base = loadImage('./assets/sprites/base.png');
    assets['bird'] = ['blue', 'red', 'yellow'].map(color =>
        ['upflap', 'midflap', 'downflap'].map(flap => loadImage(`./assets/sprites/${color}bird-${flap}.png`))
    );
    assets['pipe'] = ['green', 'red'].map(color =>
        ['upper', 'lower'].map(side => loadImage(`./assets/sprites/pipe-${color}-${side}.png`))
    );
    assets['bg'] = ['day', 'night'].map(time => loadImage(`./assets/sprites/background-${time}.png`));
    assets['num'] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => loadImage(`./assets/sprites/${num}.png`));
    message = loadImage('./assets/sprites/message.png');
    gameOver = loadImage('./assets/sprites/gameover.png');
    wingSound = loadSound('./assets/audio/wing.wav');
    hitSound = loadSound('./assets/audio/hit.wav');
    dieSound = loadSound('./assets/audio/die.wav');
    pointSound = loadSound('./assets/audio/point.wav');
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById('canvasWrapper');
    const myCanvas = createCanvas(cvsWrapper.offsetWidth, cvsWrapper.offsetHeight);
    myCanvas.parent('canvasWrapper');
    randBird = Math.floor(Math.random() * 3);
    randBg = Math.floor(Math.random() * 2);
    randPipe = Math.floor(Math.random() * 2);
    x1 = 0;
    vx = 0;
    vy = 1;
    ay = 10;
    triAng = 0;
    y1 = 0;
    t = 0;
    bg = assets['bg'][randBg];
    bgW = bg.width * 1.6;
    bgH = bg.height * 1.6;
    bird = assets['bird'][randBird];
    birdX = window.width / 2.25;
    birdY = window.height / 1.95;
    birdW = bird[0].width * 1.5;
    birdH = bird[0].height * 1.5;
    birdRight = birdX + birdW + 1;
    baseH = base.height * 1.5;
    pipe = assets['pipe'][randPipe];
    pipeW = pipe[0].width * 1.5;
    pipeH = pipe[0].height * 1.5;
    pipeX1 = window.width;
    pipeX2 = window.width * 1.5 + pipeW * 0.5;
    pipeY1 = Math.floor(Math.random() * 300) + baseH;
    pipeY2 = Math.floor(Math.random() * 300) + baseH;
    pipe1Up_Down = pipeY1 + pipeH - 585;
    pipe1Low_Top = pipeY1 + 15;
    pipe2Up_Down = pipeY2 + pipeH - 585;
    pipe2Low_Top = pipeY2 + 15;
    pipe1Right = pipeX1 + pipeW;
    pipe2Right = pipeX2 + pipeW;
    start = false;
    score = 0;
    num = assets['num'];
    numW = num[0].width * 1.5;
    numH = num[0].height * 1.5;
    dead = false;
}

function draw() {
    // Render function (called per frame.)
    backGround();
    if (start) {
        drawPipe();
        displayScore();
    } else {
        menu();
    }
    drawBase();
    die();
    drawBird();
}

function keyPressed() {
    if (keyCode === 32 && !dead) {
        if (!start) {
            start = true;
        }
        vy = -3;
        triAng = -PI / 4;
        wingSound.play();
    }
}

function backGround() {
    x1 -= 2;
    vx += 1;
    if (x1 < -window.width) {
        x1 += window.width;
        vx -= window.width;
    }
    translate(x1, y1);
    image(bg, 0, 0, window.width, window.height);
    image(bg, window.width, 0, window.width, window.height);
    translate(-x1, y1);
}

function drawBird() {
    ++t;
    if (start) {
        vy += ay * 0.02;
        birdY += vy;
        triAng += 0.03;
    }
    translate(birdX, birdY);
    rotate(triAng);
    if (t == 20) t = 0;
    if (t >= 0 && t < 5) {
        image(bird[0], 0, 0, birdW, birdH);
    } else if ((t >= 5 && t < 10) || (t >= 15 && t < 20)) {
        image(bird[1], 0, 0, birdW, birdH);
    } else if (t >= 10 && t < 15) {
        image(bird[2], 0, 0, birdW, birdH);
    }
    translate(-birdX, -birdY);
}

function drawBase() {
    translate(x1, y1);
    image(base, 0, window.height - baseH, window.width, baseH);
    image(base, window.width, window.height - baseH, window.width, baseH);
    translate(-x1, y1);
}

function drawPipe() {
    if (pipeX1 <= -pipeW) {
        pipeX1 = window.width;
        pipeY1 = Math.floor(Math.random() * 300) + baseH;
        pipe1Up_Down = pipeY1 + pipeH - 585;
        pipe1Low_Top = pipeY1 + 15;
    }
    if (pipeX2 <= -pipeW) {
        pipeX2 = window.width;
        pipeY2 = Math.floor(Math.random() * 300) + baseH;
        pipe2Up_Down = pipeY2 + pipeH - 585;
        pipe2Low_Top = pipeY2 + 15;
    }
    pipe1Right = pipeX1 + pipeW;
    pipe2Right = pipeX2 + pipeW;
    image(pipe[1], pipeX1, pipeY1, pipeW, pipeH);
    image(pipe[0], pipeX1, pipeY1 - 600, pipeW, pipeH);
    image(pipe[1], pipeX2, pipeY2, pipeW, pipeH);
    image(pipe[0], pipeX2, pipeY2 - 600, pipeW, pipeH);
    pipeX1 -= 2;
    pipeX2 -= 2;
}

function die() {
    let flag = false;
    if (birdY <= 0 || Math.abs(birdY - window.height + baseH + birdH) <= 20) {
        flag = true;
    } else if (birdRight == pipeX1 && (birdY + birdH > pipe1Low_Top || birdY < pipe1Up_Down)) {
        flag = true;
    } else if (birdRight > pipeX1 && birdX < pipeX1 + pipeW && (birdY + birdH > pipe1Low_Top || birdY < pipe1Up_Down)) {
        flag = true;
    } else if (birdRight == pipeX2 && (birdY + birdH > pipe2Low_Top || birdY < pipe2Up_Down)) {
        flag = true;
    } else if (birdRight > pipeX2 && birdX < pipeX2 + pipeW && (birdY + birdH > pipe2Low_Top || birdY < pipe2Up_Down)) {
        flag = true;
    }
    if (!dead && flag) {
        hitSound.play();
        dieSound.play();
        dead = true;
        setTimeout(setup, 5000);
    }
    if (flag) {
        image(
            gameOver,
            window.width / 2 - (gameOver.width / 2) * 1.5,
            window.height / 6,
            gameOver.width * 1.5,
            gameOver.height * 1.5
        );
        x1 += 2;
        pipeX1 += 2;
        pipeX2 += 2;
        if (Math.abs(birdY - window.height + baseH + birdH) <= 20) {
            birdY = 550;
            ay = 0;
            vy = 0;
            triAng -= 0.03;
            --t;
        }
    }
}

function menu() {
    // translate(-x1, y1);
    if (!start) {
        image(message, window.width * 0.125, window.height / 32, window.width * 0.75, window.height * 0.75);
    }
}

function displayScore() {
    if (birdRight - pipe1Right < 2 && birdRight - pipe1Right >= 0) {
        ++score;
        pointSound.play();
    }
    if (birdRight - pipe2Right < 2 && birdRight - pipe2Right >= 0) {
        ++score;
        pointSound.play();
    }
    if (!dead) {
        if (score < 10) {
            image(num[score], window.width / 2, 100, numW, numH);
        } else if (score >= 10 && score < 100) {
            image(num[Math.floor(score / 10)], window.width / 2 - 20, 100, numW, numH);
            image(num[score % 10], window.width / 2 + 20, 100, numW, numH);
        }
    } else {
        if (score < 10) {
            image(num[score], window.width / 2, 300, numW, numH);
        } else if (score >= 10 && score < 100) {
            image(num[Math.floor(score / 10)], window.width / 2 - 20, 300, numW, numH);
            image(num[score % 10], window.width / 2 + 20, 300, numW, numH);
        }
    }
}
