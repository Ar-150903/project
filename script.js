var weather = "summer";
function setup() {
    createCanvas(50 * side, 50 * side);
    background('#acacac');
}

socket = io();
side = 20;

function drawWeather(w){
    var p=document.getElementById("seasons");
    weather=w;
    console.log(weather);
    if(weather=="summer"){
        p.innerText="Summer";
    }
    else if(weather=="autumn"){
        p.innerText="Autumn";
    }
    else if(weather=="winter"){
        p.innerText="Winter";
    }
    else if(weather=="spring"){
        p.innerText="Spring";
    }
}


function drawMatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if(weather=="summer"){
                    fill("green");
                }
                else if(weather=="autumn"){
                    fill("darkgreen");
                }
                else if(weather=="winter"){
                    fill("white");
                }
                else if(weather=="spring"){
                    fill("lightgreen");
                }
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

            else if (matrix[y][x] == 6) {
                fill("purple");
            }

            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);

            // fill("blue")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }
}


socket.on("matrix",drawMatrix);
socket.on("exanak",function(w){
    weather=w;
});
socket.on("exanak",drawWeather);