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

paymentForm?.addEventListener("submit", (e) => {
  e.preventDefault();
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
});
