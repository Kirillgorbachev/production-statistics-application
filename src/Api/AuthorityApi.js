
import { baseApi } from "../baseApi/baseAPi";

const AuthorityApi = baseApi.injectEndpoints({
    endpoints: build => ({
        findAllAuthorities: build.query({
            query: () => ({
                url: '/users/authorities'
            })
        }) ,
        findUsersByAuthId: build.query({
            query: (authId) => ({
                url: `/users/authorities/${authId}`,
            })
        }),
        grantAuthToUser: build.mutation({
            query: (userId, authId) => ({
                url: `/users/${userId}/authorities/${authId}`,
                method: "POST"
            })
        }),
        revokeAuthFromUser: build.mutation({
            query: (userId, authId) => ({
                url: `users/${userId}/authorities/${authId}`,
                method: "DELETE"
            })
        })
    })
})


export const {useFindUsersByAuthIdQuery, useFindAllAuthoritiesQuery, useRevokeAuthFromUserMutation, useGrantAuthToUserMutation} = AuthorityApi;