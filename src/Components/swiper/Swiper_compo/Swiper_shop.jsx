import React, { useState } from 'react'
import { Box } from '@mui/system'
import SVGIcons from '../../SVGIcons'
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { likeproduct } from '../../../store/features/products/productSlice';



const Swiper_shop = ({ item, level }) => {
    const [value, setValue] = useState(2);
    const [like, setLike] = useState(false)
    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(likeproduct(item))
        setLike(!like)
    }

    return (
        <>
            {
                level ? (
                    <Box display='flex' flexDirection='column' p='10px' width='261px' height='410px' borderRadius='15px' border='1px solid #E4E7EE' bgcolor='white'>
                        <Box width='240px' height='240px' position='relative' display='flex' flexDirection='column'>
                            <img style={{ position: 'absolute', zIndex: '10' }} src={item.bg} alt="" />
                            <Box position='relative' zIndex='20' display='flex' justifyContent='space-between' paddingLeft='5px' paddingRight='5px' paddingTop='5px'>
                                <Button sx={{ width: '52px', height: '56px', borderRadius: '100%' }}>
                                    <SVGIcons icon={item.leftIcon} />
                                </Button>
                                <Button 
                                    onClick={handleLike}
                                    sx={{ width: '52px', height: '56px', borderRadius: '100%' }}
                                >
                                    <SVGIcons icon="Liked" checked={like}  />
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
                ) : (
                    <Box display='flex' flexDirection='column' p='10px' width='261px' height='1800px' borderRadius='15px' border='1px solid #E4E7EE' bgcolor='white'>
                        <Box width='240px' height='240px' position='relative' display='flex' flexDirection='column'>
                            <img style={{ position: 'absolute', zIndex: '10' }} src={item.bg} alt="" />
                            <Box position='relative' zIndex='20' display='flex' justifyContent='space-between' paddingLeft='5px' paddingRight='5px' paddingTop='5px'>
                                <Button sx={{ width: '52px', height: '56px', borderRadius: '100%' }}>
                                    <SVGIcons icon={item.leftIcon} />
                                </Button>
                                <Button 
                                    onClick={handleLike}
                                    sx={{ 
                                        width: '52px', 
                                        height: '56px',
                                        borderRadius: '100%' 
                                    }}
                                >
                                    <SVGIcons icon="Liked" checked={like}  />
                                </Button>
                            </Box>
                        </Box>
                        <Box display='flex' flexDirection='column' gap='8px' marginTop='20px' padding='10px' width='100%' height='100%' >
                            <Box textAlign='start' fontSize='22px' display='flex' gap='10px'>
                                <span style={{ color: 'black', fontWeight: '700' }}>{item.mony}</span>
                                <span style={{ color: '#B7B8C5', fontWeight: '700' }}>250 €</span>
                            </Box>
                            <span style={{ color: 'black', textAlign: 'start' }}>{item.title}</span>
                            <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', mt: '8px' }}>
                                <Fab sx={{ width: '35px', height: '30px', borderRadius: '100%', bgcolor: '#F39999' }} color="primary" aria-label="add">
                                </Fab>
                                <Fab sx={{ width: '35px', height: '30px', borderRadius: '100%', bgcolor: '#090F24' }} color="primary" aria-label="add">
                                </Fab>
                                <Fab sx={{ width: '35px', height: '30px', borderRadius: '100%', bgcolor: '#90D0B1' }} color="primary" aria-label="add">
                                </Fab>
                                <Fab sx={{ width: '35px', height: '30px', borderRadius: '100%', bgcolor: '#9C7C75' }} color="primary" aria-label="add">
                                </Fab>
                                <Fab sx={{ width: '35px', height: '30px', borderRadius: '100%', bgcolor: '#A2D0DA' }} color="primary" aria-label="add">
                                </Fab>
                                <Fab sx={{ width: '35px', height: '30px', borderRadius: '100%', bgcolor: 'white' }} color="primary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Box>
                            <Box mt='10px' display='flex' gap='10px'>
                                <SVGIcons icon='delivery' />
                                <span>Доставка: 1-2 дня</span>
                            </Box>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 }, display: 'flex', gap: '5px',
                                }}
                            >
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <span style={{marginBottom: '10px'}}>15 отзывов</span>
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </>
    )
}

export default Swiper_shop