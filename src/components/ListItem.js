import { Component } from "../core/Component";
import dayjs from "dayjs";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: dayjs(new Date()).format(
        "DD/MM/YYYY, HH:mm:ss"
      ),
      amount: props.amount,
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";
    //<div class="donate-item">19/01/2024, 18:12:01 - <b>$1</b></div>
    this.$elementB = document.createElement("b");
    this.$elementB.textContent = ` - ${props.amount}$`;

    this.$rootElement.innerText = `${this.state.date}    `;
    this.$rootElement.appendChild(this.$elementB);

    console.log("из ListItem", this.state.amount);
    console.log("из ListItem", this.state.id);
    console.log("из ListItem", this.state.date);

    // ...
  }
}
