import React from 'react'
import { Box } from '@mui/system'
import SVGIcons from '../SVGIcons'
import Button from '@mui/material/Button';


const Swiper_shop = ({item}) => {
    console.log(item);
    return (
        <Box display='flex' flexDirection='column' p='10px' width='261px' height='410px' borderRadius='15px' border='1px solid #E4E7EE' bgcolor='white'>
            <Box width='240px' height='240px' position='relative' display='flex' flexDirection='column'>
                <img style={{ position: 'absolute', zIndex: '10' }} src={item.bg} alt="" />
                <Box position='relative' zIndex='20' display='flex' justifyContent='space-between' paddingLeft='5px' paddingRight='5px' paddingTop='5px'>
                    <Button sx={{width: '52px', height: '56px', borderRadius: '100%'}}>
                        <SVGIcons icon={item.leftIcon} />
                    </Button>
                    <Button sx={{width: '52px', height: '56px', borderRadius: '100%'}}>
                        <SVGIcons icon="Liked" />
                    </Button>
                </Box>
            </Box>
            <Box display='flex' flexDirection='column' gap='8px' marginTop='20px' padding='10px' >
                <Box textAlign='start' fontSize='22px' display='flex' gap='10px'>
                    <span style={{ color: 'black', fontWeight: '700' }}>{item.mony}</span>
                    <span style={{ color: '#B7B8C5', fontWeight: '700' }}>250 €</span>
                </Box>
                <span style={{ color: 'black', textAlign: 'start' }}>{item.title}</span>
            </Box>
        </Box>
    )
}

export default Swiper_shop