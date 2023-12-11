import { useQuery } from '@tanstack/react-query'
import { usePeopleQuery } from './usePeopleQuery'
import { usePlanetsQuery } from './usePlanetsQuery'
import { useContext } from 'react'
import { ApplicationContext } from './useAppContextUtils'
import { sortData } from '../utils/sortData'

export const useDataWithOrdering = () => {
  const { sortColumnName, sortDirection, page } = useContext(ApplicationContext)
  const {
    data: dataPeople,
    isLoading: isLoadingPeople,
    isError: isErrorPeople,
  } = usePeopleQuery()
  const {
    data: dataPlanets,
    isLoading: isLoadingPlanets,
    isError: isErrorPlanets,
  } = usePlanetsQuery(dataPeople?.planetApiUrls)

  const isLoading = isLoadingPeople || isLoadingPlanets
  const isError = isErrorPeople || isErrorPlanets

  const orderedData = useQuery({
    queryKey: ['orderedData', { sortColumnName, sortDirection }, page],
    queryFn: () => {
      const mergedData = dataPeople.people.map((person) => {
        const planetData = dataPlanets.find(
          (planet) => planet.url === person.homeworld
        )
        return { ...person, planetData }
      })

      return sortData(mergedData, sortColumnName, sortDirection)
    },
    enabled:
      !!dataPeople && !!dataPlanets && !!sortColumnName && !!sortDirection,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    keepPreviousData: true,
  })

  return { ...orderedData, isLoading, isError }
}
