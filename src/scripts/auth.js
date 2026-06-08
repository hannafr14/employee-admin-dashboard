export async function checkAdminLogin(email, password) {
    try {
        const response = await fetch("../../db/credentials.json");
        const data = await response.json();

        return email === data.admin.login && password === data.admin.password;
    } catch(error) {
        console.error("Failed to check admin login:", error);
        return false;
    }
}
