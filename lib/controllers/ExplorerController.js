const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");  // para obtener la lista de explorers del archivo json
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernameBM = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersUsernameBM;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const howmanyexp = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return howmanyexp;
    }

    static getFizzbuzzByNumber(number){
        const fizzbuzzBN = FizzbuzzService.applyValidationInNumber(number);
        return fizzbuzzBN
    }

}

module.exports = ExplorerController;