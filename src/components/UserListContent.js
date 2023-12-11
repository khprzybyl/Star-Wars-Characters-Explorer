import { useDataWithOrdering } from '../hooks/useDataWithOrdering'
import { usePeopleQuery } from '../hooks/usePeopleQuery'
import { usePlanetsQuery } from '../hooks/usePlanetsQuery'
import { getPlanetDetails } from '../utils/getPlanetDetails'
import { UserListItem } from './UserListItem'
import { UserSkeletonLoader } from './UserSkeletonLoader'
import { Error } from './Error'
import { ApplicationContext } from '../hooks/useAppContextUtils'
import { useContext } from 'react'
import {
  ERROR_USER_NOT_FOUND,
  ERROR_INVALID_CREDENTIALS,
} from './ErrorMessages.js'

export const UserListContent = () => {
  const { sortColumnName } = useContext(ApplicationContext)
  const {
    data: peopleData,
    isError: isPeopleError,
    isLoading: isPeopleLoading,
  } = usePeopleQuery()
  const { data: planetsData } = usePlanetsQuery(peopleData?.planetApiUrls)
  const { data: orderedData } = useDataWithOrdering()

  if (isPeopleError) {
    return <Error text={ERROR_INVALID_CREDENTIALS} />
  }

  if (isPeopleLoading || (sortColumnName && !orderedData && peopleData)) {
    return <UserSkeletonLoader />
  }

  if (peopleData?.noDataFound) {
    return <Error text={ERROR_USER_NOT_FOUND} />
  }

  if (orderedData?.length > 0) {
    return orderedData?.map(({ planetData, ...user }, index) => (
      <UserListItem key={index} user={user} planetData={planetData} />
    ))
  }

  return peopleData?.people.map((user, index) => (
    <UserListItem
      key={index}
      user={user}
      planetData={getPlanetDetails(planetsData, user.homeworld)}
    />
  ))
}
