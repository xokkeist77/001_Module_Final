import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    this.$donatesContainer = document.createElement("div");
    this.$donatesContainer.className = "donates-container";

    this.$donatesContainerTitle =
      document.createElement("h2");
    this.$donatesContainerTitle.className =
      "donates-container__title";
    this.$donatesContainerTitle.innerText =
      "Список донатов";
    this.$donatesContainer.appendChild(
      this.$donatesContainerTitle
    );

    this.$rootElement.appendChild(this.$donatesContainer);

    this.$listContainer = this.$donatesContainer;

    // ...
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
    // ...
  }
}
