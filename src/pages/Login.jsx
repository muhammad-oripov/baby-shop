import React from 'react';

import SVGIcons from '../Components/SVGIcons';
import { Typography, Stack, Box } from '@mui/material';

const Login = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='Login'>
            <Typography fontSize='35px' fontWeight='600' mb='14px'>Регистрация аккаунта</Typography>
            <Typography fontSize='20px' fontWeight='400' color='#686877'>С помощью регистраци Вы сможете покупать у нас в 3 раза быстрее</Typography>
            <Stack direction="row" spacing={4} height='900px' width='100%' p='25px 110px'>
                <Stack spacing={0} height='100%' width='70%' bgcolor='#F4F5F9' borderRadius='15px '></Stack>
                <Stack alignItems='center' spacing={2} height='100%' width='30%' border='1px solid #E4E7EE' borderRadius='15px' padding='40px 0'>
                    <Typography fontWeight='500' fontSize='26px'>Преимущества регистрации</Typography>
                    <SVGIcons icon="coupon" />
                    <Typography fontWeight='500' fontSize='24px' width='400px' textAlign='center'>Купон бесплатной доставки каждый месяц</Typography>
                </Stack>
            </Stack>
        </div>
    );
}

export default Login;
