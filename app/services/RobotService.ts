import {Robot} from "../models/Robot"

type Command = "M" | "L" | "R";

class RobotService {

    public commandHandlerMap = {
        "M": (robot: Robot) => robot.move(),
        "L": (robot: Robot) => robot.turnLeft(),
        "R": (robot: Robot) => robot.turnRight()
    }

    public executeCommand = (commands: string) => {
        const validCommandPattern = new RegExp("[M|R|L]", "i");

        if (!validCommandPattern.test(commands)) {
            throw "Invalid Command";
        }
        
        const robot = new Robot();

        const commandsArray = Array.from(commands) as Command[];

        commandsArray.forEach((command: Command) => {
            const handler = this.commandHandlerMap[command];
            handler(robot);

            const validXPosition = robot.x >= 0 && robot.x <= 5;
            const validYPosition = robot.y >= 0 && robot.y <= 5;
    
            if (!validXPosition || !validYPosition) {
                throw "Invalid Command";
            }
        })
        return `(${robot.x}, ${robot.y}, ${robot.direction})`;
    }

}

const robotService = new RobotService();
module.exports = robotService;


