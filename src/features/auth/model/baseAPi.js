import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setToken, logout } from './AuthSlice';



const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    credentials: 'include'
})

const baseQueryWithAccess = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, {getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
            console.log("Token "+token+" is attached to request")
        }
        return headers
    }
})

const baseQueryWithRefresh = async (args, api, extraOptions) => {
    // console.log("baseQueryWithRefresh is called");

    let result;
    try{
        result = await baseQueryWithAccess(args, api, extraOptions)
        console.log("Result from baseQueryWithAccess:", result);
    }
    catch(error){
        console.error("Error in baseQueryWithAccess:", error);
        if(!error.response){
            console.log("baseApi: No server response")
        }
    }

    if (result?.error?.status === 403) {
        console.log("baseApi: sending refresh token")
        const refreshResult = await baseQuery('/auth', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data?.token) {
            api.dispatch(setToken(refreshResult.data.token));
            result = await baseQueryWithAccess(args, api, extraOptions)
        } else {
            api.dispatch(logout())
        }
    }

    return result
}

export const baseApi = createApi({
    reducerPath: "baseApiWithAuth",
    baseQuery: baseQueryWithRefresh,
    endpoints: builder => ({})
})