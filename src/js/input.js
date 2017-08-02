"use strict";

var selectionStartX = 0;
var selectionStartY = 0;
var selectionEndX = 0;
var selectionEndY = 0;
var isSelecting = false;

function setupInput() {
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);
}

function handleMouseDown(evt) {
    var mousePos = findCurrentMousePosition(evt);
    selectionStartX = selectionEndX = mousePos.x;
    selectionStartY = selectionEndY = mousePos.y;
    isSelecting = true;
}

function handleMouseUp(evt) {
    isSelecting = false;
}

function handleMouseMove(evt) {
    if (isSelecting) {
        var mousePos = findCurrentMousePosition(evt);
        selectionEndX = mousePos.x;
        selectionEndY = mousePos.y;
    }
}

function findCurrentMousePosition(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return { x: mouseX, y: mouseY };
}

function updateMousePosition(evt) {
    findCurrentMousePosition(evt);
    for(var i=0; i < playerUnits.length; i++) {
        playerUnits[i].setDest(mouseX, mouseY);
    }
}