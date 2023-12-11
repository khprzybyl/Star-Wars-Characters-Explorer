import React from 'react'
import { UserList } from './components/UserList.js'
import { Search } from './components/Search.js'
import { Footer } from './components/Footer.js'
import { Pagination } from './components/Pagination.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserListContent } from './components/UserListContent.js'
import {
  useAppContextUtils,
  ApplicationContext,
} from './hooks/useAppContextUtils.js'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const App = () => {
  const { queryParams, orderingParams, ...methods } = useAppContextUtils()

  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationContext.Provider
        value={{ ...queryParams, ...orderingParams, ...methods }}
      >
        <div className="app">
          <Search />
          <UserList>
            <UserListContent />
          </UserList>
          <Pagination />
          <Footer />
        </div>
      </ApplicationContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
