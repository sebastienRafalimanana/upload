import {api} from "@/lib/api"
import {IResult} from "./types"

const resultApi = api.injectEndpoints({
    endpoints:(build)=>({
        search:build.query<IResult,any>({
            query:(payload)=>({
                url:"result",
                method:"POST",
                body:{payload}
            })
        })
    })
})


export const {useSearchQuery} = resultApi

