import orderBy from 'lodash/orderBy'

export const sortData = (data, sortColumn, sortDirection) => {
  let sortProperty
  switch (sortColumn) {
    case 'height':
    case 'mass':
      sortProperty = (item) => Number(item[sortColumn])
      break
    case 'created':
    case 'edited':
      sortProperty = (item) => new Date(item[sortColumn])
      break
    case 'planet name':
      sortProperty = (item) => item.planetData?.name
      break
    default:
      sortProperty = sortColumn
  }

  const sortOrder = sortDirection === 'asc' ? 'asc' : 'desc'

  const sortedData = orderBy(data, [sortProperty], [sortOrder])
  return sortedData
}
