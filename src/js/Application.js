import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const emojisElement = document.getElementById("emojis");
    emojis.textContent = "";
    const newPar = document.createElement("p");
  }

  addBananas(newMonkeys) {
    newMonkeys = this.emojis.map((e) => {
      // return `${e} ${this.banana}`;
      return newMonkeys.push(`${e} ${this.banana}`);
    });
  }
}
