import { useQuery } from '@tanstack/react-query'
import { ApplicationContext } from './useAppContextUtils'
import { useContext } from 'react'
import { fetchPeople } from '../services/api'

export const usePeopleQuery = () => {
  const { page, search } = useContext(ApplicationContext)

  return useQuery({
    queryKey: ['people', page, search],
    queryFn: async () => await fetchPeople({ page, search }),
    select: ({ results, count }) => {
      return {
        count,
        people: results,
        planetApiUrls: results.map(({ homeworld }) => homeworld),
      }
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    keepPreviousData: true,
  })
}
