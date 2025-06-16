let currentMethod = "credit-card";

document.querySelectorAll(".payment-method")?.forEach((method) => {
  method.addEventListener("click", () => {
    document.querySelector(".payment-method.border-gold")?.classList.remove("border-gold");
    method.classList.add("border-gold");
    currentMethod = method.dataset.method;
  });
});

const cardNumberInput = document.querySelector("#card-number");

cardNumberInput?.addEventListener("input", (e) => {
  if (cardNumberInput.value.replaceAll(" ", "").length >= 16) {
    cardNumberInput.value = cardNumberInput.value.slice(0, 19);
  } else if ((e.target.value.length + 1) % 5 === 0 || e.target.value.length === 4) {
    cardNumberInput.value += " ";
  }
});

const expiryDateInput = document.querySelector("#expiry-date");

expiryDateInput?.addEventListener("input", (e) => {
  if (e.target.value.length >= 4) {
    expiryDateInput.value = expiryDateInput.value.slice(0, 5);
  } else if ((e.target.value.length + 1) % 3 === 0 || e.target.value.length === 2) {
    expiryDateInput.value += "/";
  }
});

const paymentForm = document.querySelector("#payment-form");
const validationModal = document.querySelector("#validation-modal");
const requireList = document.querySelector("#require-list");
const loader = document.querySelector("#loader");

validationModal.querySelector(".close-button")?.addEventListener("click", () => {
  validationModal.classList.add(...["opacity-0"]);
  setTimeout(() => validationModal.classList.add(...["invisible"]), 250);
});

const openValidationModal = () => {
  validationModal.classList.remove(...["invisible", "opacity-0"]);
};

paymentForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  requireList.innerHTML = ``;

  const formData = new FormData(e.target);

  // register
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  console.log(firstName, lastName, email, phone);

  // payment
  const method = currentMethod;
  const cardNumber = formData.get("card_number");
  const name = formData.get("name_card");
  const expiry = formData.get("expiry_date");
  const securityCode = formData.get("security_code");
  const remember = formData.get("remember");
  console.log(cardNumber, email, name, expiry, securityCode, remember);

  const requireFields = ["first_name", "last_name", "email", "phone", "card_number", "name_card", "expiry_date", "security_code"];
  const missingFields = [];
  let emailFormatValid = true;

  // Checking Required Fields

  requireFields.forEach((field) => {
    if (!formData.get(field)) {
      missingFields.push(field);
    }
    requireList.innerHTML = missingFields.map((field) => `<li>${field.replace("_", " ")} field is required</li>`).join("");
  });

  if (email !== "" && !(/\S+@\S+\.\S+/).test(email)) {
    requireList.innerHTML += `<li>Incorrect email format.</li>`;
  }

  if (missingFields.length > 0 || !(/\S+@\S+\.\S+/).test(email)) {
    openValidationModal();
    return;
  }

  loader.classList.remove(...["invisible", "opacity-0"]);

  setTimeout(() => {
    // Credit Card Validation

    const creditCardError = false;
    if (creditCardError) {
      requireList.innerHTML += `<li>Invalid credit card details close</li>`;
      openValidationModal();
      loader.classList.add(...["invisible", "opacity-0"]);
      return;
    }

    const success = true;

    if (success) {
      window.location.href = "./event-booking-success.html";
    } else {
      window.location.href = "./event-booking-error.html";
    }
  }, 3000);
});
