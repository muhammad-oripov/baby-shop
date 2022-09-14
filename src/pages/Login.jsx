import React from 'react';

import SVGIcons from '../Components/SVGIcons';
import { Typography, Stack, Box } from '@mui/material';

const Login = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='Login'>
            <Typography fontSize='37px' fontWeight='600' mb='14px'>Регистрация аккаунта</Typography>
            <Typography fontSize='24    px' fontWeight='400' color='#686877'>С помощью регистраци Вы сможете покупать у нас в 3 раза быстрее</Typography>
            <Stack direction="row" spacing={4} height='1050px' width='100%' p='25px 110px'>
                <Stack spacing={0} height='100%' width='70%' bgcolor='#F4F5F9' borderRadius='15px '></Stack>
                <Stack alignItems='center' position='relative' spacing={2} height='100%' width='30%' border='1px solid #E4E7EE' borderRadius='15px' padding='40px 0'>
                    <Typography fontWeight='500' fontSize='26px'>Преимущества регистрации</Typography>
                    <Box>
                        <SVGIcons icon="coupon" />
                    </Box>
                    <Typography position='relative' top='-17px' fontWeight='500' fontSize='24px' width='400px' textAlign='center'>Купон бесплатной доставки каждый месяц</Typography>
                    <Typography position='relative' top='-22px' fontWeight='400' fontSize='21px' width='300px' textAlign='center' color='#686877'>в пакоматы Latvijas Pasts, при покупке от 30 €.</Typography>
                    <Box position='relative' top='-10px'>
                        <SVGIcons icon="discount" />
                    </Box>
                    <Typography position='relative' top='-10px' fontWeight='500' fontSize='24px' width='400px' textAlign='center'>Акции и скидки для постоянных покупателей</Typography>
                    <Box position='relative' top='-5px'>
                        <SVGIcons icon="rocket" />
                    </Box>
                    <Typography position='relative' top='-20px' fontWeight='500' fontSize='24px' width='400px' textAlign='center'>Скорость покупки</Typography>
                    <Box position='relative' top='-5px'>
                        <SVGIcons icon="percent" />
                    </Box>
                    <Typography position='relative' top='-15px' fontWeight='500' fontSize='24px' width='400px' textAlign='center'>Бонусы с каждой покупки</Typography>
                </Stack>
            </Stack>
        </div>
    );
}

export default Login;
