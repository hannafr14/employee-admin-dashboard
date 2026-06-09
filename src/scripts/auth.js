export async function checkAdminLogin(email, password) {
    try {
        const response = await fetch("./db/credentials.json");
        const credentials = await response.json();

        const adminEmail = credentials.admin.login;
        const adminPassword = credentials.admin.password;

        return email === adminEmail && password === adminPassword;
    } catch(error) {
        console.error("Failed to check admin login:", error);
        return false;
    }
}
