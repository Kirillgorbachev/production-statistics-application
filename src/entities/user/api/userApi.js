import { baseApi } from "../../../features/auth/model/baseAPi";

export const UserApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchUsers: build.query({
      query: () => "/users",
    }),
    fetchUserById: build.query({
      query: (id) => `/users/${id}`
    }),
    createUser: build.mutation({
      query: (user) => ({
        url: '/users',
        method: "POST",
        body: {...user}
      })
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE'
      })
    }),
    updateEnabled: build.mutation({
      query: ({ id, enabled }) => ({
        url: `/users/${id}?enabled=${enabled}`,
        method: 'PUT',
      }),
    }),
    
    // Мутация для изменения статуса accountNonLocked
    updateAccountNonLocked: build.mutation({
      query: ({ id, accountNonLocked }) => ({
        url: `/users/${id}?accountNonLocked=${accountNonLocked}`,
        method: 'PUT',
      }),
    }),

    // Мутация для изменения статуса credentialsNonExpired
    updateCredentialsNonExpired: build.mutation({
      query: ({ id, credentialsNonExpired }) => ({
        url: `/users/${id}?credentialsNonExpired=${credentialsNonExpired}`,
        method: 'PUT',
      }),
    }),

    // Мутация для изменения статуса accountNonExpired
    updateAccountNonExpired: build.mutation({
      query: ({ id, accountNonExpired }) => ({
        url: `/users/${id}?accountNonExpired=${accountNonExpired}`,
        method: 'PUT',
      }),
    }),

    // Мутация для обновления информации пользователя
    updateUserInfo: build.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`, // предполагается, что email будет в теле запроса
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const { useFetchUsersQuery, 
  useCreateUserMutation, useDeleteUserMutation, useFetchUserByIdQuery,
   useUpdateAccountNonExpiredMutation, useUpdateEnabledMutation, 
   useUpdateAccountNonLockedMutation, useUpdateCredentialsNonExpiredMutation, useUpdateUserInfoMutation  } = UserApi;