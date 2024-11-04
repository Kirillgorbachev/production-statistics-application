
import { baseApi } from "../../../features/auth/model/baseAPi";

const ProductApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchAllProducts: build.query({
            query: () => ({
                url: '/products'
            })
        }) ,
        createProduct: build.mutation({
            query: ({UnitId, productName}) => ({
                url: `/products`,
                method: "POST",
                body: {UnitId, productName}
            })
        }),
        updateProductById: build.mutation({
            query: (id, {UnitId, productName}) => ({
                url: `/products/${id}`,
                method: "PUT",
                body: {UnitId, productName}
            })
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            })
        })
    })
})


export const {useCreateProductMutation, useFetchAllProductsQuery, useDeleteProductMutation, useUpdateProductByIdMutation} = ProductApi;