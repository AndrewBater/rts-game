"use strict";

const UNIT_RADIUS = 5;
const UNIT_SELECTED_RADIUS = UNIT_RADIUS + 3;
const UNIT_MOVE_SPEED = 2;
const UNIT_MAX_DIST_FROM_TARGET = 50;

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
        var deltaX = this.destX - this.x;
        var deltaY = this.destY - this.y;
        var distanceToMove = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
        var moveX = UNIT_MOVE_SPEED * deltaX/distanceToMove;
        var moveY = UNIT_MOVE_SPEED * deltaY/distanceToMove;
        if (distanceToMove > UNIT_MOVE_SPEED) {
            this.x += moveX;
            this.y += moveY;
        } else {
            this.x = this.destX;
            this.y = this.destY;
        }
    }

    this.setDest = function(nearX, nearY) {
        this.destX = nearX + Math.random() * UNIT_MAX_DIST_FROM_TARGET;
        this.destY = nearY + Math.random() * UNIT_MAX_DIST_FROM_TARGET;
    }

    this.isInArea = function(topX, topY, bottomX, bottomY) {
        if (this.x < topX || this.x > bottomX || this.y < topY || this.y > bottomY) {
            return false;
        }
        return true;
    }

    this.draw = function() {
        paintCircle(this.x, this.y, UNIT_RADIUS, "white");
    }

    this.drawSelectedBox = function() {
        paintOutlineRect(this.x - UNIT_SELECTED_RADIUS, this.y - UNIT_SELECTED_RADIUS, this.x + UNIT_SELECTED_RADIUS, this.y + UNIT_SELECTED_RADIUS, "green");
    }
}