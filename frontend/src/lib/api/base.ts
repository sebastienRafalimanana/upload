import { fetchBaseQuery, retry } from '@reduxjs/toolkit/dist/query'
import { RootState } from '@/lib'

export const baseQuery = (baseUrl: string) =>
    fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token

            if (token) {
                headers.set('authentication', `Bearer ${token}`)
            }
            return headers
        },
    })

export const baseQueryWithRetry = (baseUrl: string) =>
    retry(baseQuery(baseUrl), { maxRetries: 6 })
