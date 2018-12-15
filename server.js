var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

matrix = [];
matrix = fillMatrix(50, 50);

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

for (var g = 0; g < 600; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 1;
}

for (var g = 0; g < 100; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 2;
}

for (var g = 0; g < 65; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 3;
}

for (var g = 0; g < 120; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 4;
}

for (var g = 0; g < 120; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 5;
}

var Grass = require("./grass.js");
var Xotaker = require("./xotaker.js");
var Gishatich = require("./gishatich.js");
var Amenaker = require("./amenaker.js");
var Mard = require("./mard.js");
var Shun = require("./shun.js");

grassArr = [];
xotakerArr = [];
gishatichArr = [];
amenakerArr = [];
mardArr = [];
shunArr = [];

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

            else if (matrix[y][x] == 6) {
                var sh = new Shun(x, y);
                shunArr.push(sh);
            }
        }
    }

var arajin = false;
io.on('connection', function(socket){
    if(!arajin){
        setInterval(drawServerayin,300);
        arajin = true;
    }
}); 


function drawServerayin() {
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

    for (var i in shunArr) {
        shunArr[i].move();
        shunArr[i].eat();
        shunArr[i].mult();
        shunArr[i].die();
    }
    io.sockets.emit("matrix", matrix);
}
