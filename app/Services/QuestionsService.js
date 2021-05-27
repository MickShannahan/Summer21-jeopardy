import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { questionsApi } from "./axiosService.js";



class QuestionsService{
  async getQuestion() {
    let res = await questionsApi.get()
    console.log(res.data)
    ProxyState.question = new Question(res.data[0])
    console.log('question as a question', ProxyState.question)
  }
  
}

export const questionsService = new QuestionsService()