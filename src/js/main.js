"use strict";

const PLAYER_START_UNITS = 9;
var canvas, context, intervalId;
var playerUnits = [];
var selectedUnits = [];

window.onload = function() {
    canvas = document.getElementById("GameCanvas");
    context = canvas.getContext("2d");

    setupInput();

    for (var i = 0; i < PLAYER_START_UNITS; i++) {
        var unit = new unitClass();
        unit.reset();
        playerUnits.push(unit);
    }

    intervalId = setInterval(updateAll, 1000/30);
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

    for (var i = 0; i < selectedUnits.length; i++) {
        selectedUnits[i].drawSelectedBox();
    }
    if (isSelecting) {
        paintOutlineRect(selectionStartX, selectionStartY, selectionEndX, selectionEndY, "yellow");
    }
}

function db(message) {
    var debugLog = document.getElementById("debug-log");
    debugLog.innerHTML = message;
}