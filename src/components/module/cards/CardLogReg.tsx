import React, { useState, ChangeEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import { TextFieldOne } from '../../inputs/text/TextFieldOne';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const CardLogRes = () => {
    const theme = useTheme();
    const [lookingFor, setLookingFor] = useState('');
    const onChangeLookingFor = (e: ChangeEvent<HTMLInputElement>) => {
        setLookingFor(e.target.value);
    };
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <><div className='card-login card-login-logres'>
            <Box sx={{ width: '100%'}}>
                <Box>
                    <div className='card-login card-login-tabs'>
                    <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example">
                        <Tab sx={{minWidth: '250px'}} className='card-login card-login-btns' label="Iniciar Sesión" {...a11yProps(0)} />
                        <Tab sx={{minWidth: '250px'}} className='card-login card-login-btns' label="Regístrate" {...a11yProps(1)} />
                    </Tabs>
                    </div>
                </Box>
                <CustomTabPanel value={value} index={0}>
                <div className='card-login card-login-cont'>
                    <div className='card-login card-login-lrcont'>
                        <TextFieldOne
                            color={{
                                variant: 'secondary',
                                text: '#464748',
                                field: theme.palette.secondary.main,
                                backgroundColor: '#fff',
                            }}
                            text="Email o Nombre de usuario"
                            icon={{ url: '/svg/icons/arr_frm.svg' }}
                            value={lookingFor}
                            onChange={onChangeLookingFor}
                        ></TextFieldOne>
                        <div className="mt-3">
                            <TextFieldOne
                                color={{
                                    variant: 'secondary',
                                    text: '#464748',
                                    field: theme.palette.secondary.main,
                                    backgroundColor: '#fff',
                                }}
                                text="Contraseña"
                                icon={{ url: '/svg/icons/psw_frm.svg' }}
                                value={lookingFor}
                                onChange={onChangeLookingFor}
                            ></TextFieldOne>
                        </div>
                    </div>
                </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                <div className='card-login card-login-cont'>
                    <div className='card-login card-login-lrcont'>
                        <TextFieldOne
                            color={{
                                variant: 'secondary',
                                text: '#464748',
                                field: theme.palette.secondary.main,
                                backgroundColor: '#fff',
                            }}
                            text="Nombre de usuario*"
                            icon={{ url: '/svg/icons/usr_frm.svg' }}
                            value={lookingFor}
                            onChange={onChangeLookingFor}
                        ></TextFieldOne>
                        <div className="mt-3">
                            <TextFieldOne
                                color={{
                                    variant: 'secondary',
                                    text: '#464748',
                                    field: theme.palette.secondary.main,
                                    backgroundColor: '#fff',
                                }}
                                text="Email*"
                                icon={{ url: '/svg/icons/arr_frm.svg' }}
                                value={lookingFor}
                                onChange={onChangeLookingFor}
                            ></TextFieldOne>
                        </div>
                        <div className="mt-3">
                            <TextFieldOne
                                color={{
                                    variant: 'secondary',
                                    text: '#464748',
                                    field: theme.palette.secondary.main,
                                    backgroundColor: '#fff',
                                }}
                                text="Teléfono"
                                icon={{ url: '/svg/icons/phone_frm.svg' }}
                                value={lookingFor}
                                onChange={onChangeLookingFor}
                            ></TextFieldOne>
                        </div>
                        <div className="mt-3">
                            <TextFieldOne
                                color={{
                                    variant: 'secondary',
                                    text: '#464748',
                                    field: theme.palette.secondary.main,
                                    backgroundColor: '#fff',
                                }}
                                text="Contraseña*"
                                icon={{ url: '/svg/icons/psw_frm.svg' }}
                                value={lookingFor}
                                onChange={onChangeLookingFor}
                            ></TextFieldOne>
                        </div>
                        <div className="mt-3">
                            <TextFieldOne
                                color={{
                                    variant: 'secondary',
                                    text: '#464748',
                                    field: theme.palette.secondary.main,
                                    backgroundColor: '#fff',
                                }}
                                text="Nombre Completo*"
                                icon={{ url: '/svg/icons/usr_frm.svg' }}
                                value={lookingFor}
                                onChange={onChangeLookingFor}
                            ></TextFieldOne>
                        </div>
                        <div className="mt-3">
                            <TextFieldOne
                                color={{
                                    variant: 'secondary',
                                    text: '#464748',
                                    field: theme.palette.secondary.main,
                                    backgroundColor: '#fff',
                                }}
                                text="Apellido*"
                                icon={{ url: '/svg/icons/usr_frm.svg' }}
                                value={lookingFor}
                                onChange={onChangeLookingFor}
                            ></TextFieldOne>
                        </div>
                    </div>
                </div>
                </CustomTabPanel>
            </Box>
        </div></>
    );
};

export { CardLogRes };