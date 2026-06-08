export function checkAdminLogin(email, password) {
    try {
        const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
        const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

        return email === adminEmail && password === adminPassword;
    } catch(error) {
        console.error("Failed to check admin login:", error);
        return false;
    }
}
