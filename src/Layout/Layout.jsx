import { Stack, Link, Button, Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import AccountMenu from '../Components/AccountMenu'
import SVGIcons from '../Components/SVGIcons'

const Layout = ({children}) => {
    const style = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }

  return (
    <>
        <header style={{maxWidth: "1920px", margin: "0 auto",  padding: "10px 50px"}} >
            <Stack sx={{...style, justifyContent: "space-between"}} >
                <SVGIcons icon="logo" />
                <Stack sx={{...style, gap: "15px"}}>
                    <Link>О нас</Link>
                    <Link>Оплата и доставка</Link>
                    <Link>Отзывы</Link>
                    <Link>FAQ</Link>
                    <Link>Блог</Link>
                    <Link>Контакты</Link>
                </Stack>
                <Stack sx={style} >
                    <Button startIcon={<SVGIcons icon="phone" />}>+38 097 435 6743</Button>
                    <Button startIcon={<SVGIcons icon="email" />}>Kidsshop@gmail.com</Button>
                </Stack>
                <Stack sx={style} >
                    <Button>RU</Button>
                    <Button>LV</Button>
                </Stack>
            </Stack>
            <Stack sx={{...style,  justifyContent: "space-between", background: "#F4F5F9", padding: "10px 20px"}} >
                <Button startIcon={<SVGIcons icon="menu" />} >Каталог товаров</Button>
                <form style={{...style, width: "30%"}} >
                    <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', border: "1px solid #c4c4c4", borderRadius: "30px", overflow: "hidden", background: "#fff", width: "100%"}}>
                        <Box width="10%" height="100%" sx={{display: "flex", justifyContent: "center", alignItems: "center"}} >
                            <SVGIcons icon="search"/>
                        </Box>
                        <input type="text" placeholder="Введите запрос для поиска" style={{all: "unset", padding: "10px 20px", width: "100%"}}  />
                        <Button variant="contained" sx={{width: "20%", height: "100%", background: "#74CCD8"}} >Найти</Button>
                    </Box>
                </form>
                <AccountMenu/>
            </Stack>
        </header>
        <main style={{maxWidth: "1920px", margin: "0 auto"}} >
            {children}
        </main>
        <footer style={{ maxWidth: "1920px", margin: "0 auto", ...style, justifyContent: "space-between", padding: "40px 170px" }} >
            <Stack>
                <Typography variant="b" >
                    Контакты
                </Typography>
                <Button startIcon={<SVGIcons icon="phone" />}>+38 097 435 6743</Button>
                <Button startIcon={<SVGIcons icon="email" />}>Kidsshop@gmail.com</Button>
                <Button startIcon={<SVGIcons icon="email" />}>Kidsshop@gmail.com</Button>
            </Stack>
            <Stack>
                <Typography variant="b" >
                    Меню сайта
                </Typography>
                <Stack sx={{...style, alignItems: "flex-start", gap: "20px"}} >
                    <Stack>
                        <Link>О нас</Link>
                        <Link>Оплата и доставка</Link>
                        <Link>Отзывы</Link>
                        <Link>FAQ</Link>
                        <Link>Блог</Link>
                        <Link>Контакты</Link>
                    </Stack>
                    <Stack>
                        <Link>О нас</Link>
                        <Link>Оплата и доставка</Link>
                        <Link>Отзывы</Link>
                        <Link>FAQ</Link>
                    </Stack>
                </Stack>
            </Stack>
            <Stack>
                <Typography variant="b" >
                    Социальные сети
                </Typography>
                <SVGIcons icon="logo" />
            </Stack>
        </footer>
    </>
  )
}


export default Layout