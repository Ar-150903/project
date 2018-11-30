var matrix = [];
matrix = fillMatrix(50, 50);
console.log(matrix);

function fillMatrix(n, m) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {

            matrix[i].push(0);
        }
    }
    return matrix;
}

for (var g = 0; g < 120; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 1;
}

for (var g = 0; g < 100; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 2;
}

for (var g = 0; g < 100; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 3;
}

for (var g = 0; g < 60; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 4;
}

for (var g = 0; g < 80; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 5;
}

var side = 20;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var amenakerArr = [];
var mardArr = [];

function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
    
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y);
                xotakerArr.push(xt);
            }
    
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y);
                gishatichArr.push(gsh);
            }
    
            else if (matrix[y][x] == 4) {
                var am = new Amenaker(x, y);
                amenakerArr.push(am);
            }
    
            else if (matrix[y][x] == 5) {
                var mr = new Mard(x, y);
                mardArr.push(mr);
            }
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }

            else if (matrix[y][x] == 2) {
                fill("yellow");
            }

            else if (matrix[y][x] == 3) {
                fill("red");
            }

            else if (matrix[y][x] == 4) {
                fill("black");
            }

            else if (matrix[y][x] == 5) {
                fill("#ffe0bd");
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);

            // fill("blue")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }

    for (var i in grassArr) {
        grassArr[i].mult();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].move();
        xotakerArr[i].eat();
        xotakerArr[i].mult();
        xotakerArr[i].die();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mult();
        gishatichArr[i].die();
    }

    for (var i in amenakerArr) {
        amenakerArr[i].move();
        amenakerArr[i].eat();
        amenakerArr[i].mult();
        amenakerArr[i].die();
    }

    for (var i in mardArr) {
        mardArr[i].move();
        mardArr[i].eat();
        mardArr[i].mult();
        mardArr[i].die();
    }
}
