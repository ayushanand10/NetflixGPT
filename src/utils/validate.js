export const validateData = (email, password,) => {

//   const isNameValid =
//     /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

  const isEmailValid =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if (!isEmailValid) return "Email is Invalid"
  if (!isPasswordValid) return "Password is Invalid"
//   if (!isNameValid) return "Name is Invalid"

  return null
}
