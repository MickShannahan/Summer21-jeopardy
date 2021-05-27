

export default class Player{
  constructor({id, name, points}){
    this.id = id
    this.name = name
    this.points = points
  }

  get Template(){
    return `
  <div class="row bg-dark border text-light cursor " title="click to set active player" onclick="app.playersController.setPlayer('${this.id}')">
    <div class="col-6 player-select">${this.name}</div>
    <div class="col-6 text-right ">${this.points}</div>
  </div>
    `
  }
}