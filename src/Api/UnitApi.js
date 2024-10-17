import { baseApi } from "../baseApi/baseAPi";

const UnitApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchAllUnits: build.query({
            query: () => ({
                url: '/products/units'
            })
        }) ,
        createUnit: build.mutation({
            query: (unitName) => ({
                url: '/products/units',
                method: "POST",
                body: {unitName}
            })
        }),
        updateUnitById: build.mutation({
            query: (id, unitName) => ({
                url: `/products/units/${id}`,
                method: "PUT",
                body: {unitName}
            })
        }),
        deleteUnit: build.mutation({
            query: (id) => ({
                url: `/products/units/${id}`,
                method: "DELETE"
            })
        })
    })
})


export const {useCreateUnitMutation, useFetchAllUnitsQuery, useDeleteUnitMutation, useUpdateUnitByIdMutation} = UnitApi;