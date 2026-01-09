function passwordValidator(password) {
  if (password.length < 5) return false;
  if (!/[A-Z]/.test(password))
    //Have at least one English uppercase letter (A-Z)
    return false;
  if (!/[a-z]/.test(password))
    //Have at least one English lowercase letter (a-z)
    return false;
  if (!/[0-9]/.test(password))
    // Have at least one number (0-9)
    return false;

  if (!/[!#$%.*&]/.test(password))
    //Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
    return false;

  return true;
}

module.exports = passwordValidator;
