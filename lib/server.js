const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request,response) => {
    const mission = request.params.mission; //:mision es el query params
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request,response) => {
    const mission = request.params.mission; //:mision es el query params
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request,response) => {
    const mission = request.params.mission; //:mision es el query params
    const explorersUsername = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(explorersUsername);
});

//fizzbuzz endpoint
app.get("/v1/fizzbuzz/:score", (request,response) => {
    const number = request.params.score; //:mision es el query params
    const fizzbuzzByScore = ExplorerController.getFizzbuzzByNumber(number);
    response.json({score: number, trick: fizzbuzzByScore});
});

app.listen(port, () => {
    console.log(`FizzBuzz API corriendo en localhost:${port}`);
});