import { initDialog } from "./dialog.js";
import { initEventForm } from "./event-form.js";

export function initEventFromDialog() {
  const dialog = initDialog("event-form");
  const eventForm = initEventForm();

  document.addEventListener("event-create-request", () => {
    dialog.open();
  });
}
