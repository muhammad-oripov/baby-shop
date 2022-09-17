import { Box, Button, Pagination, Rating, Stack, SvgIcon, Typography, Zoom } from '@mui/material'
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import SVGIcons from '../../Components/SVGIcons'
import Accardeon from './Accardeon'
import ProductBlock from './ProductBlock'
import SelectSmall from './SelectSmall'

const SearchPage = () => {
    const [products, setProdusts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(8)
    const [brands, setBrands] = useState([])
    const [colors, setColors] = useState([])

    useEffect(() => {
        setProdusts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
    }, [])


    const lastPageIndex = currentPage * productsPerPage
    const firstPageIndex = lastPageIndex - productsPerPage
    const currentProduct = products.slice(firstPageIndex, lastPageIndex)
    // active dsdsd
    let act
    useEffect(() => {
        act = document.querySelectorAll('#act')

        act.forEach(elem => {
            elem.onclick = () => {
                act.forEach(element => {
                    element.classList.remove('active')
                })
                elem.classList.add('active')
            }
        })
    })

    const pageCount = []

    for (let i = 0; i < Math.ceil(products.length / productsPerPage); i++) {
        pageCount.push(i)
    }

    const prevpage = (e) => {
        if (currentPage === (pageCount.at(0) + 1)) {
        } else {
            setCurrentPage(prev => prev - 1)
            act = document.querySelectorAll('#act')

            act.forEach((elem, index) => {
                elem.classList.remove('active')
                let a = currentPage - 2
                act[a].classList.add('active')
            })
        }
    }
    const nextpage = () => {
        if (currentPage === (pageCount.at(-1) + 1)) {
        } else {
            setCurrentPage(prev => prev + 1)
            act = document.querySelectorAll('#act')

            act.forEach((elem, index) => {
                elem.classList.remove('active')
                let a = currentPage
                act[a].classList.add('active')
            })
        }
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
                        <Accardeon onBrand={setBrands} onColor={setColors} color={colors} brand={brands} type={'filter'} />
                    </Stack>
                </Box>
                <Box sx={{ width: '79%', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
                    <Box sx={{ background: '#F4F5F9', width: '100%', borderRadius: '14px', overflow: 'hidden', minHeight: '100px' }}>
                        <Box style={{ width: '100%', borderBottom: '1px solid grey', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant='h5' > Активные Товары </Typography>
                            <Button startIcon={<SVGIcons icon="cancel" />} sx={{ color: '#B7B8C5 !important  ' }}> Очистить все</Button>
                        </Box>
                        <Box sx={{ padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}  >
                            <Box sx={{ dispaly: 'flex', alignItems: 'center' }}>
                                <b>Бренд: </b>
                                {
                                    brands.map((i, index) => <Button key={index} sx={{ background: '#FFFFFF', borderRadius: '50px', paddingLeft: '20px', paddingRight: '20px', dispaly: 'flex', alignItems: 'center', gap: '10px' }}>{i} <SVGIcons icon="cancel" /></Button>
                                    )
                                }
                            </Box>
                            <Box sx={{ dispaly: 'flex', alignItems: 'center' }}>
                                <b>По цветам: </b>
                                {
                                    colors.map((i, index) => <Button key={index} sx={{ background: '#FFFFFF', borderRadius: '50px', paddingLeft: '20px', paddingRight: '20px', dispaly: 'flex', alignItems: 'center', gap: '10px' }}>{i} <SVGIcons icon="cancel" /></Button>
                                    )
                                }
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#686877', fontSize: '20px' }} variant='span'>Найдено {products.length} товаров </Typography>
                        <SelectSmall />
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        {
                            <ProductBlock products={currentProduct} />
                        }
                    </Box>
                    <Box sx={{ position: 'absolute', gap: '10px', top: '1330px', left: '0', width: '100%', marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                        <button className='btn_paginate' style={{ transition: '.2s ease', padding: '10px', cursor: 'pointer', background: '#F4F5F9', border: 'none', borderRadius: '1000px', width: pageCount.length > 10 ? '50px' : '70px', height: '70px', fontSize: '20px' }} onClick={prevpage}>{'<'}</button>
                        {
                            pageCount.map((num, index) =>
                                <>
                                    <button key={index} id="act" className={`pagination_numbers`} style={{ transition: '.2s ease', padding: '10px', borderRadius: '1000px', width: pageCount.length > 10 ? '50px' : '70px', height: '70px', fontSize: '20px', border: '1px solid #E4E7EE', background: '#FFFFFF', cursor: 'pointer' }} onClick={() => setCurrentPage(num + 1)}>{num + 1}</button>
                                </>
                            )
                        }
                        <button className='btn_paginate' style={{ transition: '.2s ease', padding: '10px', background: '#F4F5F9', cursor: 'pointer', border: 'none', borderRadius: '1000px', width: pageCount.length > 10 ? '50px' : '70px', height: '70px', fontSize: '20px' }} onClick={nextpage}>{'>'}</button>
                    </Box>
                </Box>
            </Stack>
        </>
    )
}

export default SearchPage
