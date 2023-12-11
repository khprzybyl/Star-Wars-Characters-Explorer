export const prevPage = (page) => {
  if (page > 1) {
    const result = page - 1
    return result
  } else {
    return null
  }
}

export const nextPage = (page, totalPageCount) => {
  if (page < totalPageCount) {
    const result = page + 1
    return result
  } else {
    return null
  }
}
