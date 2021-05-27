



export default class Question{
  constructor({question, answer, value, category}){
    this.question = question
    this.answer = answer
    this.points = value
    this.category = category.title
  }

  get Template(){
    return `
    <b class="col-6 text-right">${this.category}</b>
    <b class="col-6 text-secondary"> ${this.points}</b>
    <div class="col-12 p-3 rounded">
    ${this.question}
    </div>
    `
  }
}