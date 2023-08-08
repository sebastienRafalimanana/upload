import { fetchBaseQuery, retry } from '@reduxjs/toolkit/dist/query'
import { RootState } from '@/lib'

export const baseQuery = (baseUrl: string) =>
    fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            /**configuration x-secure-app   */
            headers.set('x-secure-app', `${import.meta.env.VITE_SERVER_SECURE_KEY}`)
            return headers
        },
    })

export const baseQueryWithRetry = (baseUrl: string) =>
    retry(baseQuery(baseUrl), { maxRetries: 1 })
