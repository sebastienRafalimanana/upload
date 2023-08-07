import { localisationApi } from "@/lib/localisationApi"
import { Province } from "./types/types"

export const authApi = localisationApi.injectEndpoints({
    endpoints: (build) => ({
        provinces: build.query<Province[], void>({
            query: () => ({
                url: '/provinces',
            })
        }),
    }),
})

export const { useProvincesQuery } = authApi
