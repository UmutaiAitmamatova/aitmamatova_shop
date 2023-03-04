export const FormConfigs = () => {
    const registerOptions = {
        username: {
            required: "username is required",
            minLength: {
                value: 2,
                message: 'must be more than 2 characters'
            },
        },

        email: { 
            required: "Email is required",
            pattern: {
                value: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
                message: 'Please enter a valid email address'
            }
        },

        avatarka: {
            required: "Image is required",
            pattern: {
                value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                message: 'Invalid Url student'
            }
        },

        phone_number: {
            required: "Phone number is required",
        },

        birth_date: {
            required: "Birth_date is required",
        },

        about: {
            required: "About is required",
            minLength: {
                value: 2,
                message: 'must be more than 2 characters'
            },
        },
        
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "password is not correct"
            }
        }

    };

    return{
        registerOptions
    }
}