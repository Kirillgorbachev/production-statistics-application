import { baseApi } from "../baseApi/baseAPi";

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
    logout: build.mutation({
      query: () =>({
        url: '/auth',
        method: 'DELETE'
      })
    })
  }),
});

export const { useLoginMutation } = AuthApi;