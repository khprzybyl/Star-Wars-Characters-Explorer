export const sortAndFilterUsers = (
  users,
  sortCriterion,
  filterText,
  planetNames
) => {
  if (!users) return []

  let filteredUsers = filterText
    ? users.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      )
    : users

  if (!sortCriterion.field) return filteredUsers

  return filteredUsers.sort((a, b) => {
    let valueA = a[sortCriterion.field]
    let valueB = b[sortCriterion.field]

    if (sortCriterion.field === 'mass' || sortCriterion.field === 'height') {
      valueA = parseFloat(valueA)
      valueB = parseFloat(valueB)
    }

    if (typeof valueA === 'string') valueA = valueA.toLowerCase()
    if (typeof valueB === 'string') valueB = valueB.toLowerCase()

    if (sortCriterion.field === 'created' || sortCriterion.field === 'edited') {
      valueA = new Date(valueA)
      valueB = new Date(valueB)
    }

    if (sortCriterion.field === 'planetName') {
      valueA = planetNames[a.homeworld] || ''
      valueB = planetNames[b.homeworld] || ''
    }

    if (sortCriterion.order === 'ascending' || sortCriterion.order === 'a-z') {
      return valueA < valueB ? -1 : 1
    } else {
      return valueA > valueB ? -1 : 1
    }
  })
}
