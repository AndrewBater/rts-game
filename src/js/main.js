"use strict";

var canvas, context, intervalId;

window.onload = function() {
    canvas = document.getElementById("GameCanvas");
    context = canvas.getContext("2d");

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