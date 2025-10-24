import React from 'react';
import useProducts from '../Hooks/useToys';

const Toys = () => {
    const {products, loading, eror} = useProducts();
    return (
        <div>
            <div>
                
                
            </div>
        </div>
    );
};

export default Toys;