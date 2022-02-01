/* calendly meetings */
const calendlyMeetingButtons: NodeListOf<HTMLElement> =
  document.querySelectorAll("button.calendly-meeting");

calendlyMeetingButtons.forEach((button) =>
  button.addEventListener("click", function () {
    displayCalendlyEmbed();
  })
);

function displayCalendlyEmbed() {
  Calendly.initPopupWidget({
    url: "https://calendly.com/danieldimitrow/beratungsgespraech?background_color=05191f&text_color=fffefa&primary_color=c4983c",
  });
  return false;
}
