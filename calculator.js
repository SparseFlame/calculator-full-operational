var input = 0;
var bypass = 0;
var lock = 0;
var operation = "";

function one(){
    bypass = input * 10;
    input = bypass + 1;
    document.getElementById("answer").innerHTML = input;
}

function two(){
    bypass = input * 10;
    input = bypass + 2;
    document.getElementById("answer").innerHTML = input;
}

function three(){
    bypass = input * 10;
    input = bypass + 3;
    document.getElementById("answer").innerHTML = input;
}

function four(){
    bypass = input * 10;
    input = bypass + 4;
    document.getElementById("answer").innerHTML = input;
}

function five(){
    bypass = input * 10;
    input = bypass + 5;
    document.getElementById("answer").innerHTML = input;
}

function six(){
    bypass = input * 10;
    input = bypass + 6;
    document.getElementById("answer").innerHTML = input;
}

function seven(){
    bypass = input * 10;
    input = bypass + 7;
    document.getElementById("answer").innerHTML = input;
}

function eight(){
    bypass = input * 10;
    input = bypass + 8;
    document.getElementById("answer").innerHTML = input;
}

function nine(){
    bypass = input * 10;
    input = bypass + 9;
    document.getElementById("answer").innerHTML = input;
}

function zero(){
    bypass = input * 10;
    input = bypass + 0;
    document.getElementById("answer").innerHTML = input;
}

function ac(){
    input = 0;
    operation = "";
    bypass = 0;
    lock = 0;
    document.getElementById("answer").innerHTML = "0"
}

function add(){
    operation = "add";
    lock = input;
    input = 0;
}

function minus(){
    operation = "minus";
    lock = input;
    input = 0;
}

function multiply(){
    operation = "multiply";
    lock = input;
    input = 0;
}

function divide(){
    operation = "divide";
    lock = input;
    input = 0;
}

function equals(){
    if(operation == "add"){
        input = lock + input;
        document.getElementById("answer").innerHTML = input;
    }

    if(operation == "minus"){
        input = lock - input;
        document.getElementById("answer").innerHTML = input;
    }

    if(operation == "multiply"){
        input = lock * input;
        document.getElementById("answer").innerHTML = input;
    }

    if(operation == "divide"){
        input = lock/input;
        document.getElementById("answer").innerHTML = input;
    }
}