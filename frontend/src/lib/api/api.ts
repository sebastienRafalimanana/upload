import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithRetry } from './base'

export const api= createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry(import.meta.env.VITE_API_URL_RESULT_BACC),
    endpoints: () => ({}),
})
