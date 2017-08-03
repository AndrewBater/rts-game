"use strict";

const MIN_DRAG_DIST = 10;
var selectionStartX = 0;
var selectionStartY = 0;
var selectionEndX = 0;
var selectionEndY = 0;
var isSelecting = false;

function setupInput() {
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("contextmenu", handleRightClick);
}

function handleMouseDown(evt) {
    if (evt.which == 1) {
        startDrag(evt);
    }
    // else {
    //     evt.preventDefault();
    //     return false;
    // }
}

function handleRightClick(evt) {
    evt.preventDefault();
    sendUnits(evt);
    return false;
}

function startDrag(evt) {
    var mousePos = findCurrentMousePosition(evt);
    selectionStartX = selectionEndX = mousePos.x;
    selectionStartY = selectionEndY = mousePos.y;
    isSelecting = true;
}

function sendUnits(evt) {
    if (!isSelecting) {
        var mousePos = findCurrentMousePosition(evt);
        var unitFormationCols = Math.floor(Math.sqrt(selectedUnits.length + 2));
        for(var i=0; i < selectedUnits.length; i++) {
            selectedUnits[i].setDest(mousePos.x, mousePos.y, i, unitFormationCols);
        }
    }
}

function handleMouseUp(evt) {
    if (evt.which == 1) {
        isSelecting = false;

        selectedUnits = [];

        for (var i = 0; i < playerUnits.length; i++) {
            if (playerUnits[i].isInArea(selectionStartX, selectionStartY, selectionEndX, selectionEndY)) {
                selectedUnits.push(playerUnits[i]);
            }
        }
    }
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