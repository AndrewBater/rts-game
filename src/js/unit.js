"use strict";

const UNIT_RADIUS = 5;
const UNIT_MOVE_SPEED = 2;

function unitClass() {
    this.x = 0;
    this.y = 0;
    this.destX = 0;
    this.destY = 0;

    this.reset = function() {
        this.x = Math.random() * canvas.width/4;
        this.y = Math.random() * canvas.height/4;
        this.destX = canvas.width/2;
        this.destY = canvas.height/2;
    }

    this.move = function() {
        if (this.x > this.destX) {
            this.x -= UNIT_MOVE_SPEED;
        }
        if (this.x < this.destX) {
            this.x += UNIT_MOVE_SPEED;
        }
        if (this.y > this.destY) {
            this.y -= UNIT_MOVE_SPEED;
        }
        if (this.y < this.destY) {
            this.y += UNIT_MOVE_SPEED;
        }
    }

    this.draw = function() {
        paintCircle(this.x, this.y, UNIT_RADIUS, "white");
    }
}