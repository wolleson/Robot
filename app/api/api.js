const robotService = require("../services/RobotService");

module.exports = function (server) {

  server.post("/rest/mars/:comand", function (req, res) {
    var result = robotService.executeCommand(req.params.comand);
    if(result == "Invalid command"){
      res.status(400).send('Invalid command!');
    }
    res.send(result);
  });
  
};
