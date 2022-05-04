const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");

describe("Unit Tests for ExplorerService Class", () => {
    test("1) Cantidad de explorers", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const cualesExplorers = ExplorerService.filterByMission(explorers, "node");
        const cuantosExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(cuantosExplorers).toBe(10);
    });

    test("2) Usename de explorer", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const expUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(expUsernames).toContain("ajolonauta1");
    });
});