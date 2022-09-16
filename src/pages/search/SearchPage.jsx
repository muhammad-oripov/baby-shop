import { Box, Button, Rating, Stack, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import SVGIcons from '../../Components/SVGIcons'
import Accardeon from './Accardeon'
import SelectSmall from './SelectSmall'

const SearchPage = () => {
    const [val, setVal] = React.useState(4);
    return (
        <>
            <span style={{ display: 'flex', width: '94%', margin: '0px auto', marginTop: '20px', marginBottom: '-24px', alignItems: 'center', gap: '10px', color: '#686877', fontSize: '24px' }}>Результаты поиска: <h4 style={{ color: 'black' }}>Детская коляска</h4></span>
            <Stack sx={{ width: '94%', gap: '20px', margin: '0 auto', paddingTop: '40px', paddingBottom: '40px', flexDirection: 'row' }}>
                <Box sx={{ width: '21%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <Stack sx={{ width: '100%', border: '2px solid #74CCD8', borderRadius: '20px', overflow: 'hidden' }} className="nav">
                        <Box sx={{ padding: '25px', background: '#74CCD8', paddingBottom: '15px', paddingTop: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <SVGIcons icon={"menu"} color={'white'} />
                            <Typography sx={{ fontSize: '20px', color: 'white' }} variant='span'>Каталог товаров</Typography>
                        </Box>
                        <Accardeon type={'default'} />
                    </Stack>
                    <Stack sx={{ width: '100%', border: '2px solid #74CCD8', borderRadius: '20px', overflow: 'hidden' }} className="nav">
                        <Box sx={{ padding: '25px', background: '#74CCD8', paddingBottom: '15px', paddingTop: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <SVGIcons icon={"menu"} color={'white'} />
                            <Typography sx={{ fontSize: '20px', color: 'white' }} variant='span'>Фильтры</Typography>
                        </Box>
                        <Accardeon type={'filter'} />
                    </Stack>
                </Box>
                <Box sx={{ width: '79%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Box sx={{ background: '#F4F5F9', width: '100%', borderRadius: '14px', overflow: 'hidden', minHeight: '100px' }}>
                        <Box style={{ width: '100%', borderBottom: '1px solid grey', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant='h5' > Активные Товары </Typography>
                            <Button startIcon={<SVGIcons icon="cancel" />} sx={{ color: '#B7B8C5 !important  ' }}> Очистить все</Button>
                        </Box>
                        <Box>

                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#686877', fontSize: '20px' }} variant='span'>Найдено count товаров </Typography>
                        <SelectSmall />
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', height: '1400px' }}>
                        <Box sx={{ width: '27%', borderRadius: '10px', border: '1px solid #E4E7EE', height: '40%', padding: '10px' }}>
                            <img style={{ width: '100%', borderRadius: '10px' }} src="/swiper/bed.png" alt="" />
                            <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Typography sx={{ display: 'flex', gap: '15px', fontWeight: '600', fontSize: '18px' }} vatiant="h4">100 € <span style={{ color: '#c4c4c4' }}>250 €</span> </Typography>
                                <p style={{ color: '#090F24', fontSize: '22px' }}>Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка</p>
                                <Box sx={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                                    <SVGIcons icon="pink" />
                                    <SVGIcons icon="black" />
                                    <SVGIcons icon="lightgreen" />
                                    <SVGIcons icon="lightbrown" />
                                    <SVGIcons icon="lightblue" />
                                </Box>
                                <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#686877' }}><SVGIcons icon="deliver" /> Доствка за 1-2 дня</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Rating
                                        name="simple-controlled"
                                        value={val}
                                        onChange={(event, newValue) => {
                                            setVal(newValue);
                                        }}
                                    />
                                    <span style={{ color: '#B7B8C5' }}>Count отзывов</span>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </>
    )
}

export default SearchPage
