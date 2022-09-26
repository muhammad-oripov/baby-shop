import { Box, Rating, Typography } from '@mui/material';
import React from 'react'
import ItemComponent from '../../Components/ItemComponent';
import SVGIcons from '../../Components/SVGIcons';

const ProductBlock = ({ products, onPixel }) => {
    const [val, setVal] = React.useState(4);

    if(products < 5){
        onPixel('1000px')
    }

    return (
        <>
            {
                products.map((item) =>
                   <ItemComponent item={item} />
                )
            }
        </>
    )
}

export default ProductBlock
