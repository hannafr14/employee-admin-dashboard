import { getEmployees } from "./api.js";

if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "./index.html";
}

const employeesGrid = document.querySelector(".employees-grid");
const letterFilter = document.querySelector(".letter-filter");
const logoutButton = document.querySelector(".logout-button");

logoutButton.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "./index.html";
});

function renderLetterButtons(employees) {
    const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    letters.forEach(function (letter) {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = letter;

        button.addEventListener("click", function () {
            const buttons = letterFilter.querySelectorAll("button");

            buttons.forEach(function(button) {
                button.classList.remove("is-active");
            });

            button.classList.add("is-active");
            
            if (letter === "All") {
                renderEmployees(employees);
            } else {
                const filteredEmployees = employees.filter(function (employee) {
                    return employee.name.startsWith(letter);
                });

                renderEmployees(filteredEmployees);
            }
        });

        letterFilter.append(button);
    });
}

function renderEmployees(employees) {
    employeesGrid.innerHTML = "";

    employees.forEach(function (employee) {
        const employeeCard = document.createElement("article");

        employeeCard.classList.add("employee-card");
        employeeCard.innerHTML = `
            <img class="employee-avatar" src="./src/assets/avatars/avatar-${employee.id}.png" alt="${employee.name}" />  

            <h3 class="employee-name">${employee.name}</h3>

            <div class="employee-detail">
                <span>Email</span>
                <p>${employee.email}</p>
            </div>

            <div class="employee-detail">
                <span>Street</span>
                <p>${employee.address.street}</p>
            </div>

            <div class="employee-detail">
                <span>Suite</span>
                <p>${employee.address.suite}</p>
            </div>

            <div class="employee-detail">
                <span>City</span>
                <p>${employee.address.city}</p>
            </div>

            <div class="employee-detail">
                <span>Zipcode</span>
                <p>${employee.address.zipcode}</p>
            </div>
        `;

        employeesGrid.append(employeeCard);

    });
}

async function initializeDashboard() {
    const employees = await getEmployees();

    renderLetterButtons(employees);
    renderEmployees(employees);
    
}

initializeDashboard();