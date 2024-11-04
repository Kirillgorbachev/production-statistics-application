import { useGetProductionEntriesStatisticsQuery } from '../../Api/ProductionApi';
import './statisticsPage.css';
import ProductItem from '../../entities/Product/ui/ProductItem';

const StatisticsPage = () => {
   const {data: statistics, isLoading} = useGetProductionEntriesStatisticsQuery();

   if (isLoading) {
    return <h1>Загрузка...</h1>
   }

    return (
        <div className="mainPage">
            {statistics?.map( stat => {
                return <ProductItem key={stat.product.id} item={stat}/>
            }) }
        </div>
    )
}

export default StatisticsPage;