
const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const { elements: { email, password }} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        
    return console.log("Все поля должны быть заполненны!");
  }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}






