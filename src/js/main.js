"use strict";

var canvas, context, intervalId;
var testUnit;

window.onload = function() {
    canvas = document.getElementById("GameCanvas");
    context = canvas.getContext("2d");

    testUnit = new unitClass();
    testUnit.reset();

    intervalId = setInterval(updateAll, 1000/30);
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
}

function drawAll() {
    paintRect(0, 0, canvas.width, canvas.height, "black");
}