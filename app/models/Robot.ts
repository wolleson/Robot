type Direction = "N" | "E" | "S" | "W";
const directions: Direction[] = ["N", "E", "S", "W"];

export class Robot {
    public x: number = 0;
    public y: number = 0;
    public direction: Direction = "N";    
    public readonly moveHandlerMap = {
        "N": () => this.y++,
        "E": () => this.x++,
        "S": () => this.y--,
        "W": () => this.x--
    }

    public move() {
        const handler = this.moveHandlerMap[this.direction];
        handler();
    }

    public turnRight() {
        const currentDirectionIndex = directions.indexOf(this.direction);
        
        if (currentDirectionIndex == (directions.length - 1)) {
            this.direction = directions[0];
            return;
        }

        this.direction = directions[currentDirectionIndex + 1];
    }

    public turnLeft() {
        const currentDirectionIndex = directions.indexOf(this.direction);

        if (currentDirectionIndex == 0) {
            this.direction = directions[directions.length - 1];
            return;
        } 

        this.direction = directions[currentDirectionIndex - 1];
    }
}
