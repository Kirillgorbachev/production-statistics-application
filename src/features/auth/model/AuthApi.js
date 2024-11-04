import { baseApi } from "./baseAPi";

export const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ email, password }) => ({
        url: "/auth",
        method: "POST",
        body: { email,password }
      }),
    }),
    // register: build.mutation({
    //   query: (user) =>({
    //     url: '/users',
    //     method: 'POST',
    //     body: {...user}
    //   })
    // }),
    logoutApi: build.mutation({
      query: () =>({
        url: '/auth',
        method: 'DELETE'
      })
    })
  }),
});

export const { useLoginMutation,useLogoutApiMutation } = AuthApi;