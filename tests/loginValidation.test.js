import { describe, expect, test } from "vitest";
import { loginSchema } from "../src/scripts/validation.js";

describe("login validation", function() {
    test("valid login data passes validation", async function () {
        const loginData = {
            email: "admin@gmail.com",
            password: "admin12345"
        };

        await expect(loginSchema.validate(loginData)).resolves.toEqual(loginData);
        
    });

    test("password without number fails validation", async function(){
        const loginData = {
        email: "admin@gmail.com",
        password: "adminpassword"  
        };

        await expect(loginSchema.validate(loginData)).rejects.toThrow();
    })
});