import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'white',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid #74CCD8',
}));

const arr = [
    'Коляски', 'Автокресла', 'Детская комната', 'Стульчики для кормления', 'Транспорт и спорт', 'Игрушки и игры', 'Одежда и обувь', 'Товары для мамочек', 'Гигиена и уход', 'Кормление', 'Детксие подарки', 'Елки и игрушки', 'Подарочные карты'
]

export default function Accardeon() {
    const [expanded, setExpanded] = React.useState('panel1');
    const [backColor, setBackColor] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        setBackColor(true)
    };
    return (
        <div>
            {
                arr.map((i, index) => <Accordion sx={{ borderTop: '1px solid #74CCD8' }} expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>{i}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                        <a href="">sdfsdfsdf</a>
                        <a href="">sdfsdfsdf</a>
                        <a href="">sdfsdfsdf</a>
                        <a href="">sdfsdfsdf</a>
                        <a href="">sdfsdfsdf</a>
                        <a href="">sdfsdfsdf</a>
                    </AccordionDetails>
                </Accordion>)
            }
        </div>
    );
}