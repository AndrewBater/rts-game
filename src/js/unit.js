"use strict";

const UNIT_RADIUS = 5;
const UNIT_SELECTED_RADIUS = UNIT_RADIUS + 3;
const UNIT_MOVE_SPEED = 2;
const UNIT_MAX_DIST_FROM_TARGET = 50;
const UNIT_RANKS_SPACING = UNIT_RADIUS * 3;
const UNIT_EDGE_MARGIN = 5;

function unitClass() {
    this.x = 0;
    this.y = 0;
    this.destX = 0;
    this.destY = 0;
    this.playerControlled = false;
    this.colour = "white";
    this.isAlive = false;

    this.reset = function(playerTeam) {
        this.playerControlled = playerTeam;
        this.isAlive = true;

        if (this.playerControlled) {
            this.x = this.destX = Math.random() * canvas.width/4;
            this.y = this.destY = Math.random() * canvas.height/4;
            if (this.x < UNIT_EDGE_MARGIN) {
                this.destX += UNIT_EDGE_MARGIN;
            }
            if (this.y < UNIT_EDGE_MARGIN) {
                this.destY += UNIT_EDGE_MARGIN;
            }
            this.colour = "red";
        } else {
            this.x = this.destX = canvas.width - (Math.random() * canvas.width/4);
            this.y = this.destY = canvas.height - (Math.random() * canvas.height/4);
            this.colour = "blue";
        }
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

    this.setDest = function(nearX, nearY, formationPosition, formationDimensions) {
        var colNum = formationPosition % formationDimensions;
        var rowNum = Math.floor(formationPosition / formationDimensions);
        this.destX = nearX + colNum * UNIT_RANKS_SPACING;
        this.destY = nearY + rowNum * UNIT_RANKS_SPACING;
    }

    this.isInArea = function(x1, y1, x2, y2) {
        var topX, topY, bottomX, bottomY;
        if (x1 < x2) {
            topX = x1;
            bottomX = x2;
        } else {
            topX = x2;
            bottomX = x1;
        }
        if (y1 < y2) {
            topY = y1;
            bottomY = y2;
        } else {
            topY = y2;
            bottomY = y1;
        }
        if (this.x < topX || this.x > bottomX || this.y < topY || this.y > bottomY) {
            return false;
        }
        return true;
    }

    this.draw = function() {
        if (this.isAlive) {
            paintCircle(this.x, this.y, UNIT_RADIUS, this.colour);
        }
    }

    this.drawSelectedBox = function() {
        paintOutlineRect(this.x - UNIT_SELECTED_RADIUS, this.y - UNIT_SELECTED_RADIUS, this.x + UNIT_SELECTED_RADIUS, this.y + UNIT_SELECTED_RADIUS, "green");
    }
}