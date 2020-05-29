"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var directions = ["N", "E", "S", "W"];
var Robot = /** @class */ (function () {
    function Robot() {
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.direction = "N";
        this.moveHandlerMap = {
            "N": function () { return _this.y++; },
            "E": function () { return _this.x++; },
            "S": function () { return _this.y--; },
            "W": function () { return _this.x--; }
        };
    }
    Robot.prototype.move = function () {
        var handler = this.moveHandlerMap[this.direction];
        handler();
    };
    Robot.prototype.turnRight = function () {
        var currentDirectionIndex = directions.indexOf(this.direction);
        if (currentDirectionIndex == (directions.length - 1)) {
            this.direction = directions[0];
            return;
        }
        this.direction = directions[currentDirectionIndex + 1];
    };
    Robot.prototype.turnLeft = function () {
        var currentDirectionIndex = directions.indexOf(this.direction);
        if (currentDirectionIndex == 0) {
            this.direction = directions[directions.length - 1];
            return;
        }
        this.direction = directions[currentDirectionIndex - 1];
    };
    return Robot;
}());
var RobotService = /** @class */ (function () {
    function RobotService() {
        var _this = this;
        this.commandHandlerMap = {
            "M": function (robot) { return robot.move(); },
            "L": function (robot) { return robot.turnLeft(); },
            "R": function (robot) { return robot.turnRight(); }
        };
        this.executeCommand = function (commands) {
            var validCommandPattern = new RegExp("[M|R|L]", "i");
            if (!validCommandPattern.test(commands)) {
                throw "Invalid Command";
            }
            var robot = new Robot();
            var commandsArray = __spreadArrays(commands);
            commandsArray.forEach(function (command) {
                var handler = _this.commandHandlerMap[command];
                handler(robot);
            });
            var validXPosition = robot.x >= 0 && robot.x <= 5;
            var validYPosition = robot.y >= 0 && robot.y <= 5;
            if (!validXPosition || !validYPosition) {
                throw "Invalid Command";
            }
            return "(" + robot.x + ", " + robot.y + ", " + robot.direction + ")";
        };
    }
    return RobotService;
}());
var robotService = new RobotService();
/**
    Alguns cenários de teste:
    Movimento com rotações para direita:
    curl -s --request POST http://localhost:8080/rest/mars/MMRMMRMM
    Saída esperada: (2, 0, S)
    Movimento para esquerda:
    Entrada: curl -s --request POST http://localhost:8080/rest/mars/MML
    Saída esperada: (0, 2, W)
    Repetição da requisição com movimento para esquerda:
    Entrada: curl -s --request POST http://localhost:8080/rest/mars/MML
    Saída esperada: (0, 2, W)
    Comando inválido:
    curl -s --request POST http://localhost:8080/rest/mars/AAA
    Saída esperada: 400 Bad Request
    Posição inválida:
    curl -s --request POST
    http://localhost:8080/rest/mars/MMMMMMMMMMMMMMMMMMMMMMMM
    Saída esperada: 400 Bad Request
*/
