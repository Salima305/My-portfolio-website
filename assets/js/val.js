
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

// Name Validation
nameInput.addEventListener("input", function () {
  let pattern = /^[A-Za-z ]{3,}$/;

  if (!pattern.test(nameInput.value)) {
    document.getElementById("nameError").innerText =
      "Name must contain at least 3 letters";
  } else {
    document.getElementById("nameError").innerText = "";
  }
});

// Email Validation
emailInput.addEventListener("input", function () {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!pattern.test(emailInput.value)) {
    document.getElementById("emailError").innerText =
      "Enter a valid email";
  } else {
    document.getElementById("emailError").innerText = "";
  }
});
 const scriptURL="https://script.google.com/macros/s/AKfycbyejAJSlIa0UPR78bmioo32SjawkmiBN0zNb_XzUkuHP1bB93dHPpH59q6UEc5qd_DOsg/exec"
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop redirect
 
const loading=document.getElementById("loading");
const success = document.getElementById("success");
const error = document.getElementById("error");
success.style.display = "block";
  loading.style.display = "block";
  success.style.display="none";
error.style.display = "none";

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(response => {
    loading.style.display = "none";

    if (response.ok) {
      success.style.display = "block";
      form.reset();
      setTimeout(()=>{
        success.style.display="none";
      },3000);

      
    } else {
      error.style.display = "block";
    }
  })
  .catch(() => {
    loading.style.display = "none";
    error.style.display = "block";
  });
});
