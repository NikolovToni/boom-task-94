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
  }

  addBananas(newMonkeys) {
    newMonkeys = this.emojis.map((e) => {
      // return `${e} ${this.banana}`;
      return newMonkeys.push(`${e} ${this.banana}`);
    });

    console.log(newMonkeys);
  }
}
