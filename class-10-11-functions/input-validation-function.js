function validateUser(user) {
  const errors = [];

  if (!user.name || typeof user.name !== "string") {
    errors.push("Name is required");
  }

  if (typeof user.age !== "number" || user.age < 18 || user.age > 99) {
    errors.push("Age must be between 18 and 99");
  }

  if (!user.email || !user.email.includes("@")) {
    errors.push("Invalid email");
  }

  if (user.preferences && typeof user.preferences !== "object") {
    errors.push("Preferences must be an object");
  }

  const theme = user.preferences?.theme ?? "light";

  return {
    valid: errors.length === 0,
    errors,
    theme,
  };
}
