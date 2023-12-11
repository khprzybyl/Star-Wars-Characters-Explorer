import { createContext, useState } from 'react'

const initialState = {
  page: 1,
  search: '',
  sortColumnName: null, // values: name, height, mass, created, edited, planetName
  sortDirection: null, // values: asc, desc
}

export const ApplicationContext = createContext(initialState)

export const useAppContextUtils = () => {
  const [queryParams, setQueryParams] = useState({
    page: initialState.page,
    search: initialState.search,
  })

  const [orderingParams, setOrderingParams] = useState({
    sortColumnName: initialState.sortColumnName,
    sortDirection: initialState.sortDirection,
  })

  const handleOrdering = (newSortColumnName, newSortDirection) => {
    const newSortColumnLowerCase = newSortColumnName.toLowerCase()
    const isDoubleClicked =
      newSortColumnLowerCase === orderingParams.sortColumnName

    setOrderingParams({
      ...orderingParams,
      sortColumnName: isDoubleClicked ? null : newSortColumnLowerCase,
      sortDirection: isDoubleClicked ? null : newSortDirection,
    })
  }

  const handleSearch = (newSearch) => {
    setQueryParams({
      ...queryParams,
      search: newSearch,
      page: 1,
    })
  }

  const handlePageChange = (page) => {
    setQueryParams({
      ...queryParams,
      page,
    })
  }

  const handlePageCountSet = (pageCount) => {
    setQueryParams({
      ...queryParams,
      pageCount,
    })
  }

  return {
    queryParams,
    orderingParams,
    handleOrdering,
    handleSearch,
    handlePageChange,
    handlePageCountSet,
  }
}
