export async function getEmployees() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const employees = await response.json();

        return employees;
    } catch (error) {
        console.error("Failed to fetch employees:", error);
        return [];
    }
}