import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import LogoHeader from '../common/LogoHeader/LogoHeader'
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import styles from './SignUp.module.css'
import { Routes } from '../../routes/routes';

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
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

    const handleChangeRepeatPassword = (event: any) => {
        if (event) {
            setRepeatPassword(event.target.value);
        }
    };

    const handleClickLogin = () => {
        console.log("email => ", email, " password => ", password, "repeatPassword => ",repeatPassword);
        setIsClicked(true)
    }



    return (
        <div className={styles.container} >
            <LogoHeader />
            <div className={styles.signUpContainer}>
                <div className={styles.signUpForm}>
                    <h3 className={styles.signUpTitle}>Sign Up</h3>

                    <div className={styles.inputContainer}>
                        <Input placeholder={'Email address'} value={email} onChange={handleChangeEmail} suffix={isClicked && email==="" ? "Can't be empty" : null}/>
                        <Input placeholder={'Password'} value={password} onChange={handleChangePassword} suffix={isClicked && password==="" ? "Can't be empty" : null}/>
                        <Input placeholder={'Repeat password'} value={repeatPassword} onChange={handleChangeRepeatPassword} />
                    </div>

                    <Button buttonText={'Create an account'} onClick={handleClickLogin} />

                    <p className={styles.signUpText}>
                        Already have an account? <span className={styles.loginText} onClick={() => navigate(Routes.LOGIN, { replace: true })}>Login</span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default SignUp