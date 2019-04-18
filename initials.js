module.exports = (firstName, lastName = null) => {
  let names = []

  if (firstName) {
    names = typeof firstName === 'string' ? firstName.split(' ') : firstName
  }

  if (lastName) {
    names.push(lastName)
  }

  let initials = names[0].substring(0, 1)

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1)
  } else if (names[0].length > 1) {
    initials += names[0].substring(1, 2)
  }

  return initials.toUpperCase()
}
