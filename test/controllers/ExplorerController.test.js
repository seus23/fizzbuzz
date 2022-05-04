const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController Class", () => {
    test("1) Cuales explorers estan en node", () => {
        const cualesExplorers = ExplorerController.getExplorersByMission("node");
        const howmanyExp = cualesExplorers.length;
        expect(howmanyExp).toBe(10);
    });

    test("2) Username de explorer", () => {
        const expUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(expUsernames).toContain("ajolonauta1");
    });

    test("3) Cunatos explorers en java", () => {
        const hmExplorers = ExplorerController.getExplorersAmonutByMission("java");
        expect(hmExplorers).toBe(5);
    });

    test("4) fizzbuzz by number", () =>{
        const fbByNumber = ExplorerController.getFizzbuzzByNumber(15);
        expect(fbByNumber).toBe("FIZZBUZZ");
    });

});