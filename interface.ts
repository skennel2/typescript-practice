interface IDrawable {
    draw() : void;
}

class Rect implements IDrawable {

    width : number;
    height: number;

    constructor(width : number, height : number) {
      this.width  = width;
      this.height = height;
    }

    draw(): void {
        console.log('width' + this.width + ' - ' + 'height' + this.height);
    }
    
}

function testClient(){
    let rect : IDrawable = new Rect(10, 10);
    rect.draw();
}

testClient();