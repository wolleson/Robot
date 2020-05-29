assert = require("assert");

const robotService = require("../services/RobotService.ts");

describe("Geral", () => {
  it("Invalid command", () => {
    assert.throws(() => {
      robotService.executeCommand("A");
    });
  });

  it("Big move", () => {
    var retorno = robotService.executeCommand("MRMRMLMLMMMMRMMRMMMM");
    assert.equal(retorno, "(4, 0, S)");
  });

  it("Run out and back", () => {
    assert.throws(() => {
      robotService.executeCommand("MMMMMMMMMMMMMRRMMMMMMMMM");
    });
  });

  it("Run all area", () => {
    var retorno = robotService.executeCommand(
      "MMMMRMRMMMMLMLMMMMRMRMMMMLMLMMMM"
    );
    assert.equal(retorno, "(4, 4, N)");
  });

  it("Run arround", () => {
    var retorno = robotService.executeCommand("MMMMRMMMMRMMMMRMMMMR");
    assert.equal(retorno, "(0, 0, N)");
  });
});
