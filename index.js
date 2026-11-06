// PAGE LOAD DAN KEYIN ISHLASIN
window.onload = function () {

  const openBtn = document.getElementById("openRegister");
  const modal = document.getElementById("registerModal");
  const closeBtn = document.getElementById("closeModal");
  const registerForm = document.getElementById("registerForm");

  console.log(openBtn, modal, closeBtn, registerForm); // TEKSHIR

  // AGAR BITTASI NULL BO'LSA - HTML XATO
  if (!openBtn || !modal || !closeBtn || !registerForm) {
    alert("HTML da id xato!");
    return;
  }

  // OPEN MODAL
  openBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  // CLOSE MODAL
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // SUBMIT
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = registerForm.children[0].value.trim();
    const email = registerForm.children[1].value.trim();
    const password = registerForm.children[2].value.trim();

    if (name === "" || email === "" || password === "") {
      alert("Hammasini to‘ldir!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Ishladi ✅");

    registerForm.reset();
    modal.style.display = "none";
  });

};