function isValidEmail(email) {
    if (typeof email !== "string" || email.trim() === "") {
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

module.exports = isValidEmail;