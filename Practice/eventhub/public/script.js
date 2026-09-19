// FORM SUBMIT
const form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("Fill all fields");
    } else {
      localStorage.setItem("success", "true");
      window.location.href = "/";
    }
  });
}

// SHOW MODAL
if (localStorage.getItem("success") === "true") {
  const modal = document.getElementById("modal");

  if (modal) {
    modal.style.display = "flex";
  }

  localStorage.removeItem("success");
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("modal").style.display = "none";
}