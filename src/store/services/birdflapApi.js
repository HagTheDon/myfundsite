// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const birdflapApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/v1/' }),
  tagTypes: ['Categories'],
  endpoints: () => ({}),
})