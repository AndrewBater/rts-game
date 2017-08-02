"use strict";

const UNIT_RADIUS = 5;

function unitClass() {
    this.x = 0;
    this.y = 0;

    this.reset = function() {
        this.x = Math.random() * canvas.width/4;
        this.y = Math.random() * canvas.height/4;
    }

    this.move = function() {
    }

    this.draw = function() {
        paintCircle(this.x, this.y, UNIT_RADIUS, "white");
    }
}