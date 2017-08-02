"use strict";

function paintRect(topLeftX, topLeftY, boxWidth, boxHeight, colour) {
    context.fillStyle = colour;
    context.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function paintCircle(centreX, centreY, radius, colour) {
    context.fillStyle = colour;
    context.beginPath();
    context.arc(centreX, centreY, radius, 0, Math.PI*2, true);
    context.fill();
}

function paintText(words, xPos, yPos, colour) {
    context.fillStyle = colour;
    context.fillText(words, xPos, yPos);
}

function paintBitmapCentredWithRotation(bitmap, atX, atY, withAng) {
    context.save();
    context.translate(atX, atY);
    context.rotate(withAng);
    context.drawImage(bitmap, -bitmap.width/2, -bitmap.height/2);
    context.restore();
}