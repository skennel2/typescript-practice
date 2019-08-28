var Rect = /** @class */ (function () {
    function Rect(width, height) {
        this.width = width;
        this.height = height;
    }
    Rect.prototype.draw = function () {
        console.log('width' + this.width + ' - ' + 'height' + this.height);
    };
    return Rect;
}());
function testClient() {
    var rect = new Rect(10, 10);
    rect.draw();
}
testClient();
