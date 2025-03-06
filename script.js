document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  const steps = Array.from(document.querySelectorAll(".card-container"));
  console.log(steps);

  let currentStep = 0;

  const showStep = (stepIndex) => {
    steps.forEach((step, index) => {
      console.log(step, index);
      step.classList.toggle("active", index === stepIndex);
    });
  };
  //console.log(showStep(1));

  const validateStep = (curStep) => {
    const inputs = steps[curStep].querySelectorAll("input");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        isValid = false;
      }
    });

    return isValid;
  };

  document.querySelectorAll(".next-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (validateStep(currentStep)) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

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
