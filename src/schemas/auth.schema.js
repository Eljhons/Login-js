import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'username is required',
}),
email: z
.string({
    required_error: 'email is required',
})
.email({
    message: 'invalid email',
}),
password: z
.string({
    required_error: 'password is required',
})
.min(6,{
    message:'Password should be at least 6 characters',
}),
});
//////////////////////////////////////////////////////////////
export const loginSchema = z.object ({
    email: z.string({
        required_error: "Email is required",
    }).email({
        message: "invalid email",
    }),
    password: z.string({
        required_error:"Password is required", 
    }).min(6,{
        message: "The password must contain at least 6 characters.",
    }),

});