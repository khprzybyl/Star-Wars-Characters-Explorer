export const getPlanetDetails = (dataPlanets, userPlanetUrl) => {
  if (!dataPlanets) return 'Scanning...'

  const planetDetails = dataPlanets.find(
    (planet) => planet.url === userPlanetUrl
  )

  return planetDetails ? planetDetails : 'Bzzzt! Planet not found'
}
