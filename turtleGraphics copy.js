
//  new Turtle(0, 0)
//  .forward(5)
//  .right()
//  .forward(5)
//  .right()
//  .forward(5)
//  .right()
//  .forward(5)
//  .print()

//-----Create a turtle class------------------------>

class Turtle {

    constructor(x, y) {
        this.x = x,
        this.y = y
        this.grid = [];
        for (let i = 0; i <= 5; i++) {
            let row = [];
            for (let j = 0; j <= 5; j++) {
                let column = [];
                row.push(' ')
            }
            this.grid.push(row)
        } 
        this.direction = 'East';
}

    print() {
        for (let i = 0; i <= this.grid.length -1; i++) {
                const element = this.grid[i].join('')
                console.log(element);
            }
}

    forward(length) {
        if (this.direction === 'East') {
            for (let i = 0; i <= length -1; i++) {
                this.grid[this.y] [this.x + i + 1] = '.'
            }
            this.x += length 
        }  

        if (this.direction === 'West') {
            for (let i = this.x; i > this.x - length + 1; i--) {
                this.grid[this.y -1] [this.x - i + 1] = '.'
            }
            this.x -= length
        } 

        if (this.direction === 'North') {
            for (let i = 1; i <= length; i++) {
                this.grid[this.y - i] [this.x] = '.'
            }
            this.y -= length
        }  

        if (this.direction === 'South') {
            for (let i = 0; i <= length -1; i++) {
                this.grid[this.y + i] [this.x] = '.'
            }
            this.y += length
        }  

        return this; 
    }

    right() {
        if (this.direction === 'East') 
            this.direction = 'South'
        else if (this.direction === 'South') 
            this.direction = 'West' 
        else if (this.direction === 'West') 
            this.direction = 'North'
        else if (this.direction === 'North')
            this.direction = 'East'  
        return this;
    } 



}

const t1 = new Turtle(0, 0)

t1.forward(5).right().forward(5).right().forward(5).right().forward(5).print()
