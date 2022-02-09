// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const birdflapApi = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3004/v1/',
  }),
  tagTypes: ['Categories','Languages', 'Levels','Users', 'Courses'],
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => 'categories',
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),
    getLanguages: build.query({
      query: () => 'languages',
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),
    getLevels: build.query({
      query: () => 'levels',
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),
    //Register
    registerUser: build.mutation({
      query(body){
        return {
          url: `users/register`,
          method: 'POST',
          body,
        }
      }
    }),
    //Verify
    verifyUser: build.mutation({
      query(data) {
        const {...body} = data;
        return {
          url: `users/verify`,
          method: 'PUT',
          body,
        }
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
      }
    }),
    //Forgot Password
    forgotPasswordUser: build.mutation({
      query(body) {
        return {
          url: `users/forgot-password`,
          method: 'PUT',
          body,
        }
      },
    }),
    //Reset Password
    resetPasswordUser: build.mutation({
      query(body) {
        return {
          url: `users/reset-password`,
          method: 'PUT',
          body,
        }
      },
    }),

    //Update Password
    updatePasswordUser: build.mutation({
      query(body) {
        return {
          url: `users/update-password`,
          method: 'PUT',
          body,
        }
      },
    }),

    //Update Profile
    updateProfileUser: build.mutation({
      query(body) {
        return {
          url: `users/update-profile`,
          method: 'PUT',
          body,
        }
      },
    }),

    //Get user Profile
    getProfileUser: build.query({
      query: () => 'users',
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),

    //Logout
    logoutUser: build.query({
      query: () => 'users/logout',
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),

    //Get courses
    getCourses: build.query({
      query: (arg) => {
        const {category, level, language, search} = arg;
        console.log('arg: ', arg);
        return {
          url:'courses/',
          params:{category, level, language, search},
        }
      },
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),

    //Get single course - all access
    getCourse: build.query({
      query: (id) => `courses/${id}`,
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),
    
    //Enroll in course
    enrollInCourse: build.mutation({
      query(data){
        const {body, token} = data;
        return {
          url: `courses/enroll`,
          method: 'POST',
          body,
          headers: {
            'authorization': `Bearer ${token}`,
        },
        }
      },
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),

    //Get user's courses
    getUserCourses: build.query({
      query: (token) => {
        return {
          url:'courses/student',
          headers: {
            'authorization': `Bearer ${token}`,
        },
        }
      },
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),

     //Get single course belonging to user - restricted access
     getCourseFull: build.query({
      query: (data) => {
        const {id, token} = data;
        return {
          url:`courses/student/${id}`,
          headers: {
            'authorization': `Bearer ${token}`,
        },
        }
      },
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),

    //Get Instructor's courses
    getInstructorCourses: build.query({
      query: (token) => {
        return {
          url:'courses/instructor',
          headers: {
            'authorization': `Bearer ${token}`,
        },
        }
      },
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),

     //Get single course for Instructor
     getInstructorCourseSingle: build.query({
      query: (data) => {
        const {id, token} = data;
        return {
          url:`courses/instructor/${id}`,
          headers: {
            'authorization': `Bearer ${token}`,
        },
        }
      },
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),

     //Add a course
     addCourse: build.mutation({
      query(data){
        const {body, token} = data;
        return {
          url: `courses/`,
          method: 'POST',
          body,
          headers: {
            'authorization': `Bearer ${token}`,
        },
        }
      },
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useGetLanguagesQuery,
  useGetLevelsQuery,
  useLogoutUserQuery,
  useGetProfileUserQuery,
  useUpdateProfileUserMutation,
  useUpdatePasswordUserMutation,
  useResetPasswordUserMutation,
  useForgotPasswordUserMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifyUserMutation,
  useGetCoursesQuery,
  useGetCourseQuery,
  useEnrollInCourseMutation,
  useGetUserCoursesQuery,
  useGetCourseFullQuery,
  useGetInstructorCourseSingleQuery,
  useGetInstructorCoursesQuery,
  useAddCourseMutation
} = birdflapApi

