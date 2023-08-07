import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithRetry } from './base'

export const vaccineContentManagerApi= createApi({
    reducerPath: 'vaccineContentManagerApi',
    baseQuery: baseQueryWithRetry(import.meta.env.VITE_API_URL_VACCINE_CONTENT_MANAGER),
    endpoints: () => ({}),
})
