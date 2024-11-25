import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: "",
    };

    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";

    this.$donateFormInputLabel =
      document.createElement("label");
    this.$donateFormInputLabel.className =
      "donate-form__input-label";
    this.$donateFormInputLabel.innerText =
      "Введите сумму в $";

    this.$donateFormDonateInput =
      document.createElement("input");
    this.$donateFormDonateInput.className =
      "donate-form__donate-input";
    this.$donateFormDonateInput.name = "amount";
    this.$donateFormDonateInput.type = "number";
    this.$donateFormDonateInput.max = "100";
    this.$donateFormDonateInput.min = "1";
    this.$donateFormDonateInput.required = true;

    this.$donateFormSubmitButton =
      document.createElement("button");
    this.$donateFormSubmitButton.disabled = true;
    this.$donateFormSubmitButton.className =
      "donate-form__submit-button";
    this.$donateFormSubmitButton.type = "submit";
    this.$donateFormSubmitButton.innerText = "Задонатить";

    this.$donateFormInputLabel.appendChild(
      this.$donateFormDonateInput
    );

    this.$rootElement.appendChild(
      this.$donateFormInputLabel
    );

    this.$rootElement.appendChild(
      this.$donateFormSubmitButton
    );

    this.$input = this.$donateFormDonateInput;
    this.$button = this.$donateFormSubmitButton;

    this.$input.addEventListener(
      "input",
      this.handleInput.bind(this)
    );
    this.$rootElement.addEventListener(
      "submit",
      this.handleSubmit.bind(this)
    );

    //donates.push(item);
    //console.log(this.state.donates.push(item));

    // ...
  }
  get isValid() {
    return (
      this.state.amount >= 1 && this.state.amount <= 100
    );
  }

  handleInput(event) {
    console.log(event.target.value);
    this.state.amount = event.target.value;
    console.log("this.state.amount = ", this.state.amount);

    console.log(this.isValid);
    if (this.isValid) {
      this.$button.disabled = false;
    } else {
      this.$button.disabled = true;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      console.log("this.state.amount", this.state.amount);
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = "";
      this.$input.value = "";
    }
    // ...
  }
}
