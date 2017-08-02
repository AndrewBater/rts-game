"use strict";

const PLAYER_START_UNITS = 9;
var canvas, context, intervalId;
var playerUnits = [];

window.onload = function() {
    canvas = document.getElementById("GameCanvas");
    context = canvas.getContext("2d");

    canvas.addEventListener("mousedown", handleMouseDown);

    for (var i = 0; i < PLAYER_START_UNITS; i++) {
        var unit = new unitClass();
        unit.reset();
        playerUnits.push(unit);
    }

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
    for(var i=0; i < playerUnits.length; i++) {
        var eachUnit = playerUnits[i];
        eachUnit.destX = mouseX;
        eachUnit.destY = mouseY;
    }
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    for (var i = 0; i < PLAYER_START_UNITS; i++) {
        playerUnits[i].move();
    }
}

function drawAll() {
    paintRect(0, 0, canvas.width, canvas.height, "black");
    for (var i = 0; i < PLAYER_START_UNITS; i++) {
        playerUnits[i].draw();
    }
}