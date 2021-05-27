import PlayersController from "./Controllers/PlayersController.js";
import QuestionsController from "./Controllers/QuestionsController.js";
import ValuesController from "./Controllers/ValuesController.js";


class App {
  valuesController = new ValuesController();

  playersController = new PlayersController()

  questionsController = new QuestionsController()
}

window["app"] = new App();
