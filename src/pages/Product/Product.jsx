import React, { useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom';
import { IconButton, FormControl, Box, MenuItem, Select } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarIcon from '@mui/icons-material/Star'
import CheckIcon from '@mui/icons-material/Check'
import InstagramIcon from '@mui/icons-material/Instagram'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Button, Stack, Typography } from '@mui/material';
function Product () {
     const [size, setSize] = React.useState('');

     const handleChange = (event) => {
          setSize(event.target.value);
     };

     const [isHover, setIsHover] = useState(false);

     const handleMouseEnter = () => {
          setIsHover(true);
     };
     const handleMouseLeave = () => {
          setIsHover(false);
     };
     const hoverStyle = {
          color: isHover ? '#090F24;' : '#686877',
     };
return (
       
     <>
            <Box className="container" width="calc(100% - 164px);" margin='0 auto'>
               <Box display='flex'
                    alignItems='center' width="100%" height="50px" margin="7px 0 3px" bgcolor="">
                    <IconButton
                         style={{ padding: '3px 0 0' }}
                         color="primary" aria-label="upload picture" component="label">
                         <Link
                              className='pathBtn'
                              style={hoverStyle}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              to="/"><HouseIcon /></Link>
                    </IconButton>
                    <NavigateNextIcon
                         style={{ fontSize: '22px', textAlign: 'center', height: '100%', paddingTop: '2px', fontWeight: '300', color: '#686877' }}
                    />
                    <h3>
                         
                         <Link
                              className='pathBtn'
                              style={hoverStyle}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              to="/catalog">Каталог</Link>
                    </h3>
                    <NavigateNextIcon
                         style={{ fontSize: '22px', textAlign: 'center', height: '100%', paddingTop: '2px', fontWeight: '300', color: '#686877' }}
                    />
                    <h3>
                         
                         <Link
                              className='pathBtn'
                              style={hoverStyle}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              to="/">Детские коляски</Link>
                    </h3>
                    <NavigateNextIcon
                         style={{ fontSize: '22px', textAlign: 'center', height: '100%', paddingTop: '2px', fontWeight: '300', color: '#686877' }}
                    />
                    <h3>
                         <Link
                              className='pathBtn'
                              style={hoverStyle}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              to="/">Коляски-трости</Link>
                      </h3>
                      
                    
               </Box>   
               <Stack direction="column"  padding='2px'>
                    <Box>
                         <Typography className='header_product '>Bugaboo Butterfly sporta rati, Black/Midnight Black-Midnight Black</Typography>
                    </Box>
                    <Stack direction="row" alignItems='center' justifyContent='space-between' spacing={2}>
                         <Box className='ImageSide' p='5px'>
                              <Stack direction='column' alignItems='center'>
                                   <Stack className='product_slider' gap='5px' direction='column'>
                                        <Box className='product_slider_mainImg'>
                                             <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="/img/image0.png" alt="Main Img" />
                                        </Box>
                                        <Stack direction='row' gap='10px' width='100%' justifyContent='space-evenly' >
                                             <Box className='product_slider_itemImg itemImg_act' >
                                                  <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="/img/image2.png" alt="Product" />
                                             </Box>
                                             <Box className='product_slider_itemImg' >
                                                  <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="/img/image2.png" alt="Product" />
                                             </Box>
                                             <Box className='product_slider_itemImg' >
                                                  <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="/img/image2.png" alt="Product" />
                                             </Box>
                                             <Box className='product_slider_itemImg' >
                                                  <img style={{ width: '100%', height: '100%', objectFit: 'cover' }}  src="/img/image2.png" alt="Product" />
                                             </Box>
                                             <Box className='product_slider_itemImg' >
                                                  <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="/img/image2.png" alt="Product" />
                                             </Box>
                                             <Box className='product_slider_itemImg row center' bgcolor='#F4F5F9' borderRadius='8px' >
                                                       <Typography fontSize='22px' fontWeight='500' lineHeight='30px' >+3</Typography>
                                             </Box>
                                        </Stack>
                                   </Stack>
                                   <Stack direction='row' gap='10px' p='20px'>
                                        <Box className='video_item' >
                                             <video src='https://youtu.be/hGnMSib9Fuw' width="100%" height="100%" controls="controls" />
                                        </Box>
                                        <Box className='video_item'>
                                             <video src='https://youtu.be/c-keaqyidxU' width="100%" height="100%" controls="controls" />
                                        </Box>
                                        <Box className='video_item'>
                                             <video src='https://youtu.be/c-keaqyidxU' width="100%" height="100%" controls="controls" />
                                        </Box>
                                   </Stack>
                              </Stack>
                         </Box>
                         <Box className='OrderSide'>
                              <Box>
                                   <Box className='card_side'>
                                        <Box display='flex' width='100%' alignItems='center' justifyContent='flex-start' color='#686877'>
                                             <IconButton>
                                                  <LocalShippingTwoToneIcon fontSize='15px' fontWeight='400'/>
                                             </IconButton>
                                             <Typography marginLeft='10px' fontSize='15px' fontStyle='normal' fontWeight='400'>Доставка: 1-2 дня</Typography>
                                             <Stack direction='row' gap='10px' marginLeft='30px' fontSize='15px' lineHeight='20px' fontStyle='normal'>
                                                  <span style={{ fontWeight:'700' }}>Код товара:</span>
                                                  <p>000433</p>
                                             </Stack>
                                        </Box>
                                        <Box display='flex' width='100%' alignItems='center' justifyContent='space-between'>
                                             <Box style={{ display: 'flex', alignItems: 'center',  width: '100%', textAlign:'center', lineHeight: '20px', fontSize: '14px', fontWeight: '400', color: '#69CB87' }}>
                                                  <IconButton>
                                                       <CheckIcon style={{ color: '#69CB87', fontSize: '18px', fontWeight: '900' }}/>
                                                  </IconButton>
                                                  <span>Есть в наличии</span>
                                             </Box>
                                             <Box width='100px' height='30px'>
                                                  <img src="/img/HIPP-Logo.png" alt="Logo" />
                                             </Box>
                                        </Box>
                                        <Box display='flex' gap='7px' width='100%' alignItems='center' justifyContent='flex-start' style={{ lineHeight: '20px', fontSize: '14px', fontWeight: '400', color: '#B7B8C5' }} >
                                             <StarIcon style={{color: '#FFC186', width: '20px', height: '20px' }} />
                                             <StarIcon style={{color: '#FFC186', width: '20px', height: '20px' }} />
                                             <StarIcon style={{color: '#FFC186', width: '20px', height: '20px' }} />
                                             <StarIcon style={{color: '#FFC186', width: '20px', height: '20px' }} />
                                             <StarIcon />
                                             <span>3 отзыва</span>
                                        </Box>
                                   </Box>
                              </Box>
                              <Box className='card_side'>
                                   <Box flexDirection='row' display='flex' alignItems='center'>
                                        <Box marginRight='13px'>
                                             <Typography fontSize='22px' fontStyle='normal' fontWeight='500' lineHeight='30px'>Размер:</Typography>
                                        </Box>
                                        <Box width='100%' height='50px'>
                                             <FormControl className='select'>
                                                  <Select
                                                       value={size}
                                                       onChange={handleChange}
                                                       className="select_input"
                                                  >
                                                       <MenuItem value="107см x 234см">
                                                            <em>107см x 234см</em>
                                                       </MenuItem>
                                                       <MenuItem value={10}>107см x 234см</MenuItem>
                                                       <MenuItem value={20}>107см x 234см</MenuItem>
                                                       <MenuItem value={30}>107см x 234см</MenuItem>
                                                  </Select>
                                             </FormControl>
                                        </Box>
                                        <Box display='flex' >
                                             <span style={{ position: 'relative', top: '15px', left: '45px' }}>50%</span>
                                             <Box width='52px' height='52px'>
                                                  <img src="/img/star.png" alt="Start" />
                                             </Box>
                                        </Box>
                                   </Box>
                                   <Box display='flex' gap='50px' alignItems='center' margin='20px 0'>
                                        <Box display='flex' alignItems='center' gap='10px' justifyContent='space-between' >
                                             <Typography className='current_price'>1000 $</Typography>
                                             <Typography className='old_price'>2500 $</Typography>
                                        </Box>
                                        <Box display='flex' gap='5px'>
                                             <Box display='flex' alignItems='center' justifyContent='center' width='40px' height='40px' borderRadius='4px' bgcolor='#F4F5F9' fontSize='15px' fontWeight='400' >+</Box>
                                             <Box display='flex' alignItems='center' justifyContent='center' width='50px' height='40px' border='1px solid #E4E7EE' borderRadius='4px'  fontSize='15px' fontWeight='600' >1</Box>
                                             <Box display='flex' alignItems='center' justifyContent='center' width='40px' height='40px' borderRadius='4px' bgcolor='#F4F5F9' fontSize='15px' fontWeight='400' >-</Box>
                                        </Box>
                                   </Box>
                                   <Box>
                                        <Box className='offer_side row' gap='20px'>
                                             <Box>
                                                  <Button className='buy_btn' variant="contained" component="label">
                                                       <ShoppingCartIcon />
                                                       Купить
                                                  </Button>
                                             </Box>
                                             <Box className='like_box'>
                                                  <IconButton className='like_btn' color="primary" aria-label="upload picture" component="label">
                                                       <FavoriteBorderIcon />
                                                  </IconButton>
                                                  Нравится
                                             </Box>
                                             <Box className='like_box'>
                                                  <IconButton className='like_btn' color="primary" aria-label="upload picture" component="label">
                                                       <FavoriteBorderIcon />
                                                  </IconButton>
                                                  Добавить к сравению
                                             </Box>
                                        </Box>
                                   </Box>
                              </Box>
                              <Box padding='20px'>
                                   <Box className='row' alignItems='center' gap='10px'>
                                        <Typography className='variant_models'>Варианты моделей:</Typography>
                                        <Typography className='name_modles'>Название выбранного варианта</Typography>
                                   </Box>
                                   <Box>
                                        <Stack className='models_img row' spacing={2}>
                                             <Box className='models_img_item models_img_item_act'>
                                                       <img src="/img/image1.png" alt="" />
                                             </Box>
                                             <Box className='models_img_item '>
                                                       <img src="/img/image2.png" alt="" />
                                             </Box>
                                             <Box className='models_img_item '>
                                                       <img src="/img/image3.png" alt="" />
                                             </Box>
                                             <Box className='models_img_item '>
                                                       <img src="/img/image4.png" alt="" />
                                             </Box>
                                             <Box className='models_img_item  row center'>
                                                       <Typography fontSize='22px' fontWeight='500' lineHeight='30px' >+3</Typography>
                                             </Box>
                                        </Stack>
                                   </Box>
                                   <Box>
                                        <Stack className='row shere_box'>
                                             <Typography className='shere_text' >Поделится в соцсетях:</Typography>
                                             <Stack direction='row' gap='15px'> 
                                                  <IconButton className='shere_icon' style={{ background: 'linear-gradient(49.12deg, #FFDD55 6.62%, #FF543E 50.06%, #C837AB 93.5%)', borderRadius: '8px'}} variant="rounded">
                                                       <InstagramIcon sx={{ color: '#FFF'}} />
                                                  </IconButton>
                                                  <IconButton className='shere_icon' style={{ background: '#28A9E0', borderRadius: '8px' }} variant="rounded">
                                                       <TwitterIcon sx={{ color: '#FFF' }} />
                                                  </IconButton>
                                                  <IconButton className='shere_icon' style={{ padding: '0', background: '#FFF', borderRadius: '8px' }} variant="rounded">
                                                       <FacebookIcon sx={{ color: '#4867AA', fontSize: '39px' }} />
                                                  </IconButton>
                                             </Stack>
                                        </Stack>
                                   </Box>
                              </Box>
                         </Box>
                    </Stack>
               </Stack>
          </Box>           
    </>
  )
}

export default Product