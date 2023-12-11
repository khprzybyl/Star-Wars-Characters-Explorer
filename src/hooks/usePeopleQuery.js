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
        if (!results || results.length === 0) {
          return {
            count: 0,
            people: [],
            planetApiUrls: [],
            noDataFound: true,
          }
        }
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
