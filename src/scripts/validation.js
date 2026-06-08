export const loginSchema = {
    validate(data) {
        const errors = [];

        if (!data.email) {
            errors.push("Email is required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.push("Invalid email format");
        }

        if (!data.password) {
            errors.push("Password is required");
        } else {
            if (data.password.length < 8) {
                errors.push("Password must contain at least 8 characters");
            }

            if (!/\d/.test(data.password)) {
                errors.push("Password must contain at least one number");
            }
        }

        if (errors.length > 0) {
            const error = new Error("Validation failed");
            error.errors = errors;
            throw error;
        }

        return data;
    }
};