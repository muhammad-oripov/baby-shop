import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SVGIcons from '../../Components/SVGIcons'
import Accardeon from './Accardeon'

const SearchPage = () => {

    return (
        <Stack sx={{ width: '94%', margin: '0 auto', paddingTop: '40px', paddingBottom: '40px', flexDirection: 'row' }}>
            <Box sx={{ width: '21%', display: 'flex', flexDirection: 'column', gap: '30px'}}>
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
                        <Typography sx={{ fontSize: '20px', color: 'white' }} variant='span'>Каталог товаров</Typography>
                    </Box>
                    <Accardeon type={'filter'} />
                </Stack>
            </Box>
        </Stack>
    )
}

export default SearchPage
