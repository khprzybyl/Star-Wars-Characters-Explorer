import { useQuery } from '@tanstack/react-query'
import { fetchPlanets } from '../services/api'
import { useContext } from 'react'
import { ApplicationContext } from './useAppContextUtils'

export const usePlanetsQuery = (planetApiUrls) => {
  const { page } = useContext(ApplicationContext)

  return useQuery({
    queryKey: ['planets', planetApiUrls, page],
    queryFn: async () => await fetchPlanets(planetApiUrls),
    enabled: !!planetApiUrls,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    keepPreviousData: true,
  })
}
