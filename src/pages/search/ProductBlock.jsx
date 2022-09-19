import { Box, Rating, Typography } from '@mui/material';
import React from 'react'
import SVGIcons from '../../Components/SVGIcons';

const ProductBlock = ({ products }) => {
    const [val, setVal] = React.useState(4);

    return (
        <>
            {
                products.map(() =>
                    <Box
                        onClick={() => window.location.pathname = '/product'}
                        sx={{ width: '23%', borderRadius: '10px', border: '1px solid #E4E7EE', height: '520px', padding: '10px' }}>
                        <img style={{ width: '100%', borderRadius: '10px' }} src="/swiper/bed.png" alt="" />
                        <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <Typography sx={{ display: 'flex', gap: '15px', fontWeight: '600', fontSize: '18px' }} vatiant="h4">100 € <span style={{ color: '#c4c4c4' }}>250 €</span> </Typography>
                            <p style={{ color: '#090F24', fontSize: '18px' }}>Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка</p>
                            <Box sx={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                                <SVGIcons icon="pink" />
                                <SVGIcons icon="black" />
                                <SVGIcons icon="lightgreen" />
                                <SVGIcons icon="lightbrown" />
                                <SVGIcons icon="lightblue" />
                            </Box>
                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#686877' }}><SVGIcons icon="deliver" /> Доствка за 1-2 дня</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                                <Rating
                                    name="simple-controlled"
                                    value={val}
                                    onChange={(event, newValue) => {
                                        setVal(newValue);
                                    }}
                                />
                                <span style={{ fontSize: '14px', color: '#B7B8C5' }}>14 отзывов</span>
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </>
    )
}

export default ProductBlock
