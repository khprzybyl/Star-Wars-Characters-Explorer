export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.toLocaleDateString('en-EN', { day: '2-digit' })
  const month = date.toLocaleDateString('en-EN', { month: 'short' })
  const year = date.toLocaleDateString('en-EN', { year: 'numeric' })

  return `${day} ${month} ${year}`
}
