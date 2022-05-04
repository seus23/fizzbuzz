const ExplorerController = require('./../../lib/controllers/ExplorerController');

describe("Unit Tests for ExplorerController Class", () => {
    test("1) Cuales explorers estan en node", () => {
        const cualesExplorers = ExplorerController.getExplorersByMission('node');
        const howmanyExp = cualesExplorers.length;
        expect(howmanyExp).toBe(10);
    });

    test("2) Username de explorer", () => {
        const expUsernames = ExplorerController.getExplorersUsernamesByMission('node');
        expect(expUsernames).toContain("ajolonauta1");
    });
});