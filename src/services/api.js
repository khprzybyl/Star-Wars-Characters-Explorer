import qs from 'qs'

export const fetchPeople = async (queryParams) => {
  const queryString = qs.stringify(queryParams, { skipNulls: true })

  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/people?${queryString}`
    )
    return response.json()
  } catch (error) {
    console.error('Error fetching data: ', error)
    throw error
  }
}

export const fetchPlanets = async (planetApiUrls) => {
  try {
    return Promise.all(
      planetApiUrls.map(async (url) => {
        const response = await fetch(url)
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
      })
    )
  } catch (error) {
    console.error('Error fetching data: ', error)
    throw error
  }
}
