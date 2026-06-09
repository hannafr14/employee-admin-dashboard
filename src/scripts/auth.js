import credentials from "../../db/credentials.json";

export function checkAdminLogin(email, password) {
    try {
        const adminEmail = credentials.admin.login;
        const adminPassword = credentials.admin.password;

        return email === adminEmail && password === adminPassword;
    } catch(error) {
        console.error("Failed to check admin login:", error);
        return false;
    }
}
