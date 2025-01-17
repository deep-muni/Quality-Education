export default function validate(input, initial, tag) {
    let errors = {};
    if (!initial) {
        if (tag === 'login' || tag === 'register') {
            if (!input.email) {
                errors.email = 'Email address is required';
            } else if (!/\S+@\S+\.\S+/.test(input.email)) {
                errors.email = 'Email address is invalid';
            }
        }

        if (tag === 'register') {
            if (!input.firstName) {
                errors.firstName = 'First Name is required';
            } else if (input.firstName.length <= 2) {
                errors.firstName = 'First Name length 3 or greater';
            }
        }

        if (tag === 'register') {
            if (!input.gender) {
                errors.gender = 'Selection is required';
            }
        }

        if (tag === 'register') {
            if (!input.userType) {
                errors.userType = 'Selection is required';
            }
        }

        if (tag === 'register') {
            if (!input.lastName) {
                errors.lastName = 'Last Name is required';
            } else if (input.lastName.length <= 2) {
                errors.lastName = 'Last Name length 3 or greater';
            }
        }

        if (tag === 'register') {
            if (!input.dateOfBirth) {
                errors.dateOfBirth = 'Date of Birth is required';
            } else if (input.dateOfBirth < (((new Date()).getFullYear() - 100) + "-01-01") || input.dateOfBirth > (new Date().toISOString().split('T'))) {
                errors.dateOfBirth = 'Date of Birth is not valid';
            }
        }

        if (tag === 'register') {
            if (!input.password) {
                errors.password = 'Password is required';
            } else if (input.password.length < 8 || input.password.length > 20) {
                errors.password = 'Password length between 8 and 20';
            }
        }

        if (tag === 'login' || tag === "changePassword") {
            if (!input.password) {
                errors.password = 'Password is required';
            }
        }

        if (tag === 'register' || tag === "changePassword") {
            if (!input.confirmPassword) {
                errors.confirmPassword = 'Confirm Password is required';
            } else if (input.password !== input.confirmPassword) {
                errors.confirmPassword = 'Password does not match';
            }
        }

        if (tag === 'subject' || tag === 'volunteer') {
            if (!input.subject) {
                errors.subject = 'Selection is required';
            }
        }

        if (tag === 'location') {
            if (!input.location) {
                errors.location = 'Selection is required';
            }
        }

        if (tag === 'volunteer') {
            if (!input.url) {
                errors.url = 'URL cannot be empty';
            }
        }

        if (tag === 'volunteer') {
            if (!input.title) {
                errors.title = 'Title cannot be empty';
            }
        }

    }
    return errors;
};
