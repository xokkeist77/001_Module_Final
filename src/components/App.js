import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    this.$totalAmount = document.createElement("h1");
    this.$totalAmount.className = "total-amount";
    this.$totalAmount.textContent = "Итого: $"; //шаг 4??? не понятно как сохранить этот span и куда

    this.$spanTotalAmount = document.createElement("span");
    this.$spanTotalAmount.textContent = `${this.state.total}`;

    this.$totalAmount.appendChild(this.$spanTotalAmount);

    this.$rootElement.appendChild(this.$totalAmount);

    // ...

    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this),
    });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount });
    this.state.donates.push(item);

    console.log("из APP", this.state.donates);

    this.donateList.addItem(item);

    this.state.total += amount;

    this.$spanTotalAmount.textContent = `${this.state.total}`;

    // ...
  }
}
