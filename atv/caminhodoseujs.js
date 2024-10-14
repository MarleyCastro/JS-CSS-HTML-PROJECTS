document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = form.querySelector("input[name='email']");
    const passwordInput = form.querySelector("input[name='password']");
    const rememberMeCheckbox = form.querySelector("input[name='remember me']");
    const showPasswordBtn = document.createElement("button");
    showPasswordBtn.textContent = "Show";
    showPasswordBtn.type = "button";
    passwordInput.parentNode.appendChild(showPasswordBtn);

    // Mostrar/Ocultar senha
    showPasswordBtn.addEventListener("click", function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPasswordBtn.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            showPasswordBtn.textContent = "Show";
        }
    });

    // Validação de formulário
    form.addEventListener("submit", function(event) {
        if (emailInput.value === "" || passwordInput.value === "") {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        }
    });

    // Armazenamento local para "Lembrar-me"
    if (localStorage.getItem("rememberMe") === "true") {
        emailInput.value = localStorage.getItem("email");
        rememberMeCheckbox.checked = true;
    }

    rememberMeCheckbox.addEventListener("change", function() {
        if (this.checked) {
            localStorage.setItem("rememberMe", "true");
            localStorage.setItem("email", emailInput.value);
        } else {
            localStorage.removeItem("rememberMe");
            localStorage.removeItem("email");
        }
    });
});
