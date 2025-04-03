export function initEventForm() {
  const formElement = document.querySelector("[data-event-form]");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submited");
  });

  return {};
}
