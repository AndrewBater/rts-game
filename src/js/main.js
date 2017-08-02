"use strict";

var canvas, context, intervalId;
var testUnit;

window.onload = function() {
    canvas = document.getElementById("GameCanvas");
    context = canvas.getContext("2d");

    canvas.addEventListener("mousedown", handleMouseDown);

    testUnit = new unitClass();
    testUnit.reset();

    intervalId = setInterval(updateAll, 1000/30);
}

function handleMouseDown(evt) {
    updateMousePosition(evt);
}

function updateMousePosition(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;

    testUnit.destX = mouseX;
    testUnit.destY = mouseY;
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    testUnit.move();
}

function drawAll() {
    paintRect(0, 0, canvas.width, canvas.height, "black");
    testUnit.draw();
}