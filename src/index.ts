
interface Shape {
    area():number 
    perimeter():number 
}


class Circle implements Shape{
    constructor(private radius:number){
    }

    perimeter(): number {
        return Math.PI*2*this.radius
    }

    
    area(): number {
        return Math.PI*this.radius*this.radius
    }
}

class Rectangle implements Shape{
    constructor(private width:number,private height:number){}
    area(): number {
        return this.height*this.width
    }

    perimeter(): number {
        return 2*(this.width+this.height)
    }
}

function calculateTotalArea(shape:Shape){
    return shape.area()
}

const circle = new Circle(5) 
const rectangle = new Rectangle(5,9) 

console.log('area of circle',calculateTotalArea(circle));
console.log('area of rectangle',calculateTotalArea(rectangle));
