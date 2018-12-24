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

for (var g = 0; g <= 600; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 1;
}

for (var g = 0; g <= 100; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 2;
}

for (var g = 0; g <= 65; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 3;
}

for (var g = 0; g <= 120; g++) {
    var x = Math.floor(Math.random() * 50);
    var y = Math.floor(Math.random() * 50);
    matrix[y][x] = 4;
}

for (var g = 0; g <= 120; g++) {
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

weatherinit=0;
weather = "summer";

function sendWeather(){
    weatherinit++;
    if(weatherinit%4==0){
        weather = "spring";
    }
    else if(weatherinit%4==3){
        weather = "winter";
    }
    else if(weatherinit%4==2){
        weather = "autumn";
    }
    else if(weatherinit%4==1){
        weather = "summer";
    }
    io.sockets.emit("exanak", weather);
}

setInterval(sendWeather, 3000);

xotAchec=600;
xotakerCnvec=100;
gishatichCnvec=65;
amenakerCnvec=120;
mardCnvec=120;
shunCnvec=0;

xotakerMahacav=0;
gishatichMahacav=0;
amenakerMahacav=0;
mardMahacav=0;
shunMahacav=0;

xotKeran=0;
xotakerKeran=0;
gishatichKeran=0;
amenakerKeran=0;
mardKeran=0;
shunKeran=0;


var fs = require('fs');

var obj = {"info": [] };
function statistics() {    
    xotKa=grassArr.length;
    xotakerKa=xotakerArr.length;
    gishatichKa=gishatichArr.length;
    amenakerKa=amenakerArr.length;
    mardKa=mardArr.length;
    shunKa=shunArr.length;
    obj.info.splice(0,4);
    var file = "statistics.json"
    obj.info.push({"Achac xoteri qanaky": xotAchec,
                "Cnvac xotakerneri qanaky": xotakerCnvec,
                "Cnvac gishatichneri qanaky": gishatichCnvec,
                "Cnvac amenakerneri qanaky": amenakerCnvec,
                "Cnvac mardkanc qanaky": mardCnvec,
                "Cnvac shneri qanaky": shunCnvec});
    obj.info.push({"Mahacac xotakerneri qanaky": xotakerMahacav,
                "Mahacac gishatichneri qanaky": gishatichMahacav,
                "Mahacac amenakerneri qanaky": amenakerMahacav,
                "Mahacac mardkanc qanaky": mardMahacav,
                "Mahacac shneri qanaky": shunMahacav});
    obj.info.push({"Kervac xoteri qanaky": xotKeran,
                "Kervac xotakerneri qanaky": xotakerKeran,
                "Kervac gishatichneri qanaky": gishatichKeran,
                "Kervac amenakerneri qanaky": amenakerKeran,
                "Kervac mardkanc qanaky": mardKeran,
                "Kervac shneri qanaky": shunKeran}); //shunKeran=0 misht 
    obj.info.push({"Exac xoteri qanaky": xotKa,
                "Exac xotakerneri qanaky": xotakerKa,
                "Exac gishatichneri qanaky": gishatichKa,
                "Exac amenakerneri qanaky": amenakerKa,
                "Exac mardkanc qanaky": mardKa,
                "Exac shneri qanaky": shunKa});            
    fs.writeFileSync(file, JSON.stringify(obj));
}

setInterval(statistics, 3000)