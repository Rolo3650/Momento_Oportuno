import React, { useState, ChangeEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import { TextFieldOne } from '../../inputs/text/TextFieldOne';

const CardLogRes = () => {
    const theme = useTheme();
    const [lookingFor, setLookingFor] = useState('');
    const onChangeLookingFor = (e: ChangeEvent<HTMLInputElement>) => {
        setLookingFor(e.target.value);
    };
    return (
        <div className='card-login card-login-logres'>
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
        </div>
    );
};

export { CardLogRes };