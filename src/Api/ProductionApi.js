
import { baseApi } from "../features/auth/model/baseAPi";

const ProductionApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getProductionEntriesStatistics: build.query({
            query: () => ({
                url: 'production/entries/statistics'
            })
        }) ,
        findProductionEntriesBy: build.query({
            query: ({ from, to, productId, producerId }) => {
                const params = new URLSearchParams();
        
                // Добавляем параметры, если они переданы
                if (from) params.append('from', from);
                if (to) params.append('to', to);
                if (productId) params.append('productId', productId);
                if (producerId) params.append('producerId', producerId);
        
                return {
                  url: `/production-entries?${params.toString()}`,  // Генерируем строку параметров
                  method: 'GET',
                };
              },
        }),
        createProductionEntry: build.mutation({
            query: ({productId, producerId, quantity}) => ({
                url: `production/entries`,
                method: "POST",
                body: {productId, producerId, quantity}
            })
        }),
        deleteProductionEntryById: build.mutation({ // какой здесь id пока непонятно - пользователя, меры измерения или самого продукта
            query: (id) => ({
                url: `production/entries/${id}`,
                method: "DELETE"
            })
        })
    })
})


export const {useFindProductionEntriesByQuery, useGetProductionEntriesStatisticsQuery, useDeleteProductionEntryByIdMutation, useCreateProductionEntryMutation} = ProductionApi;