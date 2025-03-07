import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `account`,
      transformResponse: (response) =>
        response.sort((a, b) => b.amount - a.amount),
      providesTags: ["account"],
    }),
    addAccounts: builder.mutation({
      query: (amount, id) => ({
        url: "account",
        method: "POST",
        body: { amount, id },
      }),
      invalidatesTags: ["account"],
    }),
    deleteAccounts: builder.mutation({
      query: (id) => ({
        url: `account/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["account"],
    }),
    updateAccounts: builder.mutation({
      query: ({ id, amount }) => ({
        url: `account/${id}`,
        method: "PATCH",
        body: { amount },
      }),
      invalidatesTags: ["account"],
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useAddAccountsMutation,
  useDeleteAccountsMutation,
  useUpdateAccountsMutation,
} = adminApi;
