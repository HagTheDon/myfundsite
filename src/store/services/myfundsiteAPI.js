// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// initialize an empty api service that we'll inject endpoints into later as needed
export const myfundsiteAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [
    'Categories',
    'Cities',
    'States',
    'Users',
    'Fundraisers',
    'Donations',
  ],
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => 'categories',
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
    }),
    getCities: build.query({
      query: (args) => {
        const { state_id } = args;
        return {
          url: 'cities/',
          params: { state_id },
        };
      },
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
    }),
    getStates: build.query({
      query: (args) => {
        const { country_id } = args;
        return {
          url: 'states/',
          params: { country_id },
        };
      },
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
    }),
    getCountries: build.query({
      query: () => 'countries',
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
    }),
    //Register
    registerUser: build.mutation({
      query(body) {
        return {
          url: `users/register`,
          method: 'POST',
          body,
        };
      },
    }),
    //Verify
    verifyUser: build.mutation({
      query(data) {
        const { ...body } = data;
        return {
          url: `users/verify`,
          method: 'PUT',
          body,
        };
      },
    }),
    //Login
    loginUser: build.mutation({
      query: (body) => ({
        url: `users/login`,
        method: 'POST',
        body,
      }),
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
    }),
    //Forgot Password
    forgotPasswordUser: build.mutation({
      query(body) {
        return {
          url: `users/forgot-password`,
          method: 'PUT',
          body,
        };
      },
    }),
    //Reset Password
    resetPasswordUser: build.mutation({
      query(body) {
        return {
          url: `users/reset-password`,
          method: 'PUT',
          body,
        };
      },
    }),

    //Update Password
    updatePasswordUser: build.mutation({
      query(body) {
        return {
          url: `users/update-password`,
          method: 'PUT',
          body,
        };
      },
    }),

    //Update Profile
    updateProfileUser: build.mutation({
      query(body) {
        return {
          url: `users/update-profile`,
          method: 'PUT',
          body,
        };
      },
    }),

    //Get user Profile
    getProfileUser: build.query({
      query: () => 'users',
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
    }),

    //Logout
    logoutUser: build.query({
      query: () => 'users/logout',
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
    }),

    //Get Fundraisers
    getFundraisers: build.query({
      query: (arg) => {
        const { category, city, search, top } = arg;
        return {
          url: 'fundraisers/',
          params: { category, city, search, top },
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ['Fundraisers'],
    }),

    //Get single fundraiser - all access
    getFundraiser: build.query({
      query: (id) => `fundraisers/${id}`,
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ['Fundraisers'],
    }),

    //Get donations for a fundraiser
    getDonations: build.query({
      query: (arg) => {
        const { page, id } = arg;
        return {
          url: `donations/${id}`,
          params: { page },
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ['Donations'],
    }),

    //Get a user's donations
    getUserDonations: build.query({
      query: (arg) => {
        const { page } = arg;
        return {
          url: `donations/`,
          params: { page },
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ['Donations'],
    }),

    //Make donation
    makeDonation: build.mutation({
      query(data) {
        const { body } = data;
        return {
          url: `donations/`,
          method: 'POST',
          body,
          headers: {
            'content-type': 'application/json',
          },
        };
      },
      transformResponse: (response, meta, arg) => response.message,
      invalidatesTags: ['Donations', 'Fundraisers'],
    }),

    //Get Instructor's courses
    getUserFundraisers: build.query({
      query: () => {
        return {
          url: 'fundraisers/user',
          headers: {
            'content-type': 'application/json',
          },
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ['Fundraisers'],
    }),

    //Get single Fundraiser for user
    getUserFundraiserSingle: build.query({
      query: (data) => {
        const { id } = data;
        return {
          url: `fundraisers/user/${id}`,
          headers: {
            'content-type': 'application/json',
          },
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ['Fundraisers'],
    }),

    //Add a fundraiser
    addFundraiser: build.mutation({
      query(body) {
        return {
          url: `fundraisers/`,
          method: 'POST',
          body,
          headers: {
            'content-type': 'application/json',
          },
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: ['Fundraisers'],
    }),

    //Edit fundraiser
    editFundraiser: build.mutation({
      query(data) {
        const { id, body } = data;
        return {
          url: `fundraisers/${id}`,
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body,
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: ['Fundraisers'],
    }),
    //delete fundraiser
    deleteFundraiser: build.mutation({
      query(data) {
        const { id } = data;
        return {
          url: `fundraisers/${id}`,
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
          },
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: ['Fundraisers'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCitiesQuery,
  useGetStatesQuery,
  useGetCountriesQuery,
  useLogoutUserQuery,
  useGetProfileUserQuery,
  useUpdateProfileUserMutation,
  useUpdatePasswordUserMutation,
  useResetPasswordUserMutation,
  useForgotPasswordUserMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifyUserMutation,
  useGetFundraisersQuery,
  useGetFundraiserQuery,
  useGetDonationsQuery,
  useGetUserDonationsQuery,
  useMakeDonationMutation,
  useGetUserFundraisersQuery,
  useGetUserFundraiserSingleQuery,
  useAddFundraiserMutation,
  useEditFundraiserMutation,
  useDeleteFundraiserMutation,
} = myfundsiteAPI;
