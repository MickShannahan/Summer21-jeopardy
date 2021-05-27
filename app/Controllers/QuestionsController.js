import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";

function _draw(){
  let question = ProxyState.question
  let qElem = document.getElementById('question')
  let answerElem = document.getElementById('answer')
  qElem.innerHTML = question.Template
  answerElem.innerText = question.answer
}

function _toggleScreen(){
  document.getElementById('question').classList.toggle('screen')
}


export default class QuestionsController{
  constructor(){
    ProxyState.on('question', _draw)
    ProxyState.on('question', _toggleScreen)
    console.log('questinos controller');
    this.getQuestion()
  }


  getQuestion(){
    try {
      _toggleScreen()
      console.log('get question')
      questionsService.getQuestion()
    } catch (error) {
      console.error(error)
    }
  }
}