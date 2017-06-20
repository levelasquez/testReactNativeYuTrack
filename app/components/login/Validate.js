export default values => {
  const errors = {}
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  errors.email = !values.email
    ? 'Debe ingresar un correo'
    : !emailRegex.test(values.email)
      ? 'Ingrese un correo electrónico válido'
      : undefined

  errors.password = !values.password
    ? 'Debe ingresar una contraseña'
    : values.password.length < 8
      ? 'La contraseña debe ser mínimo de 8 carácteres'
      : undefined

  return errors
}
