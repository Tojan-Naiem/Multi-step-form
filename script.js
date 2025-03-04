document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  const steps = Array.from(document.querySelectorAll(".card"));

  let currentStep = 0;

  const validateStep = (curStep) => {
    const inputs = steps[curStep].querySelectorAll("input");
    console.log(inputs);
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        isValid = false;
      }
    });

    return isValid;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form is being submitted");
    if (validateStep(currentStep)) {
      alert("Form submitted successfully!! Yay:)");
      console.log("Form Data:", new FormData(form));
    } else {
      alert("Something went wrong :( try again");
    }
  });
});
