import { useState } from 'react';
import './logForm.css';
import { useCreateProductionEntryMutation } from '../../../../Api/ProductionApi';
import { useSelector } from 'react-redux';
import { userId } from '../../../auth/model/AuthSlice';
import { useFetchAllProductsQuery } from '../../../../entities/Product/api/ProductApi';

const LogForm = () => {
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedMeasure, setSelectedMeasure] = useState();
    const [size, setSize] = useState(0);
    const [createProductionEntry] = useCreateProductionEntryMutation();
    const producerId = useSelector(userId);
    const { data: products} = useFetchAllProductsQuery();
 
    const handleSelectProductChange = (event) => {
        setSelectedProduct(Number(event.target.value));
        //console.log(Number(event.target.value));
      };

      const handleSelectMeasureChange = (event) => {
        setSelectedMeasure(event.target.value);  // Обновляем состояние при выборе
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createProductionEntry({
            productId: selectedProduct, 
            producerId: producerId,  
            quantity: size
        });
        console.log(result);
    };

    return (
        <form  className="logForm" onSubmit={handleSubmit}>
            <label htmlFor="dropdown">Продукт</label>
            <select 
                 id="product-select"
                 value={selectedProduct}
                 onChange={handleSelectProductChange}
                 style={{ padding: '8px', marginLeft: '10px' }}
            >
               <option value="" disabled>Выберите продукт</option> {/* Плейсхолдер */}
                {products?.map((product) => (
                    <option key={product.id} value={product.id}>
                        {product.name}
                    </option>
                ))}
             </select>
             <label htmlFor="dropdown">Мера измерения</label>
            <select 
                 id="measure-select"
                 value={selectedMeasure}
                 onChange={handleSelectMeasureChange}
                 style={{ padding: '8px', marginLeft: '10px' }}
            >
               <option value="" disabled>Выберите меру измерения</option> {/* Плейсхолдер */}
                {products?.map((product) => (
                    <option key={product.id} value={product.unit.id}>
                        {product.unit.name}
                    </option>
                ))}
             </select>

             <input
                className='input'
                placeholder='Кол-во'
                type='number'
                value={size}
                onChange={(e) => setSize(e.target.value)}
             >
             </input>

             <button className="button" type='submit'>Добавить в журнал</button>

        </form >
    )
}

export default LogForm;