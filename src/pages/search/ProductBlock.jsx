import React from 'react'
import { Link } from 'react-router-dom';
import ItemComponent from '../../Components/ItemComponent';


const ProductBlock = ({ onPixel, products }) => {

    if (products < 5) {
        onPixel('1000px')
    }

    return (
        <>
            {
                products.map((item) =>
                    <Link to={`/product?id=${item._id}`} >
                        <ItemComponent item={item} />
                    </Link>
                )
            }
        </>
    )
}

export default ProductBlock
