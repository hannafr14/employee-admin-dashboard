import { checkAdminLogin } from "./auth.js";
import { loginSchema } from "./validation.js";

export function initializeApp() {

    const loginForm = document.querySelector(".login-form");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const errorMessage = document.querySelector(".error-message");
    const errorList = document.querySelector(".error-message ul");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        try {
            await loginSchema.validate(
                { email, password },
                { abortEarly: false }
            );

            const isValidAdmin = await checkAdminLogin(email, password);

            if (isValidAdmin) {
                localStorage.setItem("isLoggedIn", "true");
                errorMessage.classList.remove("is-visible");
                window.location.href = "./dashboard.html";
            } else {
                errorList.innerHTML = "<li>Invalid email or password</li>";
                errorMessage.classList.add("is-visible");
            }
        } catch (error) {
            errorList.innerHTML = "";

            error.errors.forEach(function (message) {
                const errorItem = document.createElement("li");
                errorItem.textContent = message;
                errorList.append(errorItem);
            });

            errorMessage.classList.add("is-visible");
        }
    });
}
