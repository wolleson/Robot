"use strict";
var assert = require('assert');
var moveRobot = require('../services/RobotService');
describe('Geral', function () {
    it(' teste 1', function (done) {
        var retorno = moveRobot('AAAAAAAAA');
        console.log('TESTE - - - -');
        console.log(retorno);
        done();
    });
});
