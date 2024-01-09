import React, { useRef } from 'react'
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
import { Header } from './components/Header.js'

const queryClient = new QueryClient()

const App = () => {
  const { queryParams, orderingParams, ...methods } = useAppContextUtils()
  const userListRef = useRef(null)

  const scrollToUserList = () => {
    userListRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationContext.Provider
        value={{ ...queryParams, ...orderingParams, ...methods }}
      >
        <div className="app">
          <Header scrollToUserList={scrollToUserList} />
          <div ref={userListRef}>
            <Search />
            <UserList>
              <UserListContent />
            </UserList>
            <Pagination />
            <Footer />
          </div>
        </div>
      </ApplicationContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
