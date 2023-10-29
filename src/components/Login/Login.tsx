import { useState } from 'react';


import LogoHeader from '../common/LogoHeader/LogoHeader'
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes/routes';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isClicked,setIsClicked] = useState(false)

    const handleChangeEmail = (event: any) => {
        if (event) {
            setEmail(event.target.value);
        }
    };

    const handleChangePassword = (event: any) => {
        if (event) {
            setPassword(event.target.value);
        }
    };

    const handleClickLogin = () => {
        console.log("email => ", email, " password => ", password);
        setIsClicked(true)
    }

    return (
        <div className={styles.container} >
            <LogoHeader />
            <div className={styles.loginContainer}>
                <div className={styles.loginForm}>
                    <h3 className={styles.loginTitle}>Login</h3>

                    <div className={styles.inputContainer}>
                        <Input placeholder={'Email address'} value={email} onChange={handleChangeEmail} suffix={isClicked && email==="" ? "Can't be empty" : null} />
                        <Input placeholder={'Password'} value={password} onChange={handleChangePassword} suffix={isClicked && password==="" ? "Can't be empty" : null}/>
                    </div>

                    <Button buttonText={'Login to your account'} onClick={handleClickLogin} />

                    <p className={styles.loginText}>
                        Don't have an account? <span className={styles.signUpText} onClick={()=>navigate(Routes.SIGNUP, { replace: true })}>Sign Up</span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Login