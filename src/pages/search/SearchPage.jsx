import { Box, Button, Pagination, Rating, Stack, SvgIcon, Typography, Zoom } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SVGIcons from '../../Components/SVGIcons'
import Accardeon from './Accardeon'
import ProductBlock from './ProductBlock'
import SelectSmall from './SelectSmall'

const SearchPage = () => {
    const [products, setProdusts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(8)

    useEffect(() => {
        setProdusts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
    }, [])


    const lastPageIndex = currentPage * productsPerPage
    const firstPageIndex = lastPageIndex - productsPerPage
    const currentProduct = products.slice(firstPageIndex, lastPageIndex)


    const pageCount = []

    for (let i = 0; i < Math.ceil(products.length / productsPerPage); i++) {
        pageCount.push(i)
    }
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
                <Box sx={{ width: '79%', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
                    <Box sx={{ background: '#F4F5F9', width: '100%', borderRadius: '14px', overflow: 'hidden', minHeight: '100px' }}>
                        <Box style={{ width: '100%', borderBottom: '1px solid grey', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant='h5' > Активные Товары </Typography>
                            <Button startIcon={<SVGIcons icon="cancel" />} sx={{ color: '#B7B8C5 !important  ' }}> Очистить все</Button>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#686877', fontSize: '20px' }} variant='span'>Найдено count товаров </Typography>
                        <SelectSmall />
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <ProductBlock products={currentProduct} />
                    </Box>
                    <Box sx={{ position: 'absolute', top: '90%', left: '0', width: '100%', marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                        {
                            pageCount.map((num, idx) =>
                                <button key={idx} style={{ padding: '10px', borderRadius: '1000px', width: '70px', height: '70px', fontSize: '20px' }} onClick={() => setCurrentPage(num + 1)}>{num + 1}</button>
                            )
                        }
                    </Box>
                </Box>
            </Stack>
        </>
    )
}

export default SearchPage
