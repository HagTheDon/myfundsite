import { birdflapApi } from './birdflapApi'

const staticDataApi = birdflapApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => 'categories',
      transformResponse: (response, meta, arg) => {
        return response.data;
      }
    }),
  }),
  overrideExisting: false,
})

export const { useGetCategoriesQuery } = staticDataApi