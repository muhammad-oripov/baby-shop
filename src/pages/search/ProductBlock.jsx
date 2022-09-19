import { Box, Button, Rating, Typography } from '@mui/material';
import React from 'react'
import SVGIcons from '../../Components/SVGIcons';

const ProductBlock = ({ products, icon, like, btn, colorMania, colorsLight }) => {
    const [val, setVal] = React.useState(4)

    return (
        <>
            {
                products.map((idx) =>
                    <Box key={idx} sx={{ position: 'relative', width: '23%', borderRadius: '10px', border: '1px solid #E4E7EE', height: btn ? '550px' : '520px' && colorMania ? '550px' : '420px', padding: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', width: '100%', left: '0', padding: '5px', paddingLeft: '15px', paddingRight: '15px' }}>
                            {
                                icon === 'none' ? null : <SVGIcons icon={icon} />
                            }
                            {
                                icon === 'none' ? <Box sx={{ position: 'absolute', right: '15px', top: '4px' }}>
                                    <SVGIcons icon={like} />
                                </Box> : <SVGIcons icon={like} />
                            }
                        </Box>
                        <img style={{ width: '100%', borderRadius: '10px' }} src="/swiper/bed.png" alt="" />
                        <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <Typography sx={{ display: 'flex', gap: '15px', fontWeight: '600', fontSize: '18px' }} vatiant="h4">100 € <span style={{ color: '#c4c4c4' }}>250 €</span> </Typography>
                            <p style={{ color: '#090F24', fontSize: '18px' }}>Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка</p>
                            {
                                colorMania ? <>
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
                                </> : null
                            }
                            {
                                btn ? <Button sx={{ background: '#69CB87', borderRadius: '25px', padding: '10px' }} startIcon={<SVGIcons icon={"korzina"} />}></Button> : null
                            }
                        </Box>
                    </Box>
                )
            }
        </>
    )
}

export default ProductBlock
