function validateEmail(email) {
  const valid = email.includes("@");

  return {
    valid,
    error: valid ? null : "Invalid email",
  };
}

function validatePhone(phone) {
  const valid = /^+?\d{10,15}$/.test(phone);

  return {
    valid,
    error: valid ? null : "Invalid phone number",
  };
}

function validatePassword(password) {
  const valid = password.length >= 8 && /\d/.test(password);

  return {
    valid,
    error: valid
      ? null
      : "Password must be at least 8 characters and contain a number",
  };
}

function validateURL(url) {
  const valid = url.startsWith("http://") || url.startsWith("https://");

  return {
    valid,
    error: valid ? null : "Invalid URL",
  };
}

function validateDate(date) {
  const valid = /^\d{4}-\d{2}-\d{2}$/.test(date);

  return {
    valid,
    error: valid ? null : "Date must be YYYY-MM-DD",
  };
}
