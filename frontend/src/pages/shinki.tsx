import React, { useState } from 'react';
import styles from '@/styles/shinki.module.css';
import axios from 'axios';
// import { useRouter } from 'next/router';
// interface RegistrationFormProps {
//   onRegister: (email: string, password: string) => void;
// }

const shinki: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const router = useRouter();


  const handleshinki= async () => {
    try {
      if (!email && !password && !confirmPassword) {
        setErrorMessage('＊メールアドレスとパスワードが入力されていません');
      } else if (!email) {
        setErrorMessage('＊メールアドレスが入力されていません');
      } else if (!password) {
        setErrorMessage('＊パスワードが入力されていません');
      } else if (!confirmPassword) {
        setErrorMessage('＊パスワード再確認が入力されていません');
      } else if (password !== confirmPassword) {
        setErrorMessage('＊パスワードが一致しません');
      } else {
        const response = await axios.post(
          'https://mp-class.chips.jp/debate/Main.php',
          {
            create_user: '',
            mail: email,
            pass: password,
            confirmPassword: confirmPassword
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          }
        );
        console.log(response);
        if(response.data.create_acount){
          localStorage.setItem('isLoggedIn', 'true');
          window.location.href="/home"
          // router.push('/home');
        }else{
          setErrorMessage(response.data.result);
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          //エラーの処理
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
    <img src="/shinki/title.svg" alt="shinki" className={styles.shinkiImage} /> 
    <div className={styles.wrapper}>
    <div className={styles.form}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputFieldWithIconMail}>
          <img src='/login/icon-mail.svg' className={styles.img}></img>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="メールアドレス"
          className={styles.inputField}
          maxLength={50}
          />
          </div>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.inputFieldWithIconKey}>
        <img src='/login/icon-key.svg' className={styles.img}></img>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="パスワード"
          className={styles.inputField}
          maxLength={50}
          />
          </div>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.inputFieldWithIconKey}>
        <img src='/login/icon-key.svg' className={styles.img}></img>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="パスワード再確認"
          className={styles.inputField}
          maxLength={50}
          />
          </div>
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <button className={styles.shinkiButton} onClick={handleshinki}>登録</button>
      <div className={styles.registerLink}>
        <a href="/login" className={styles.registerText}>アカウントをすでに登録済みの方</a>
      </div>
    </div>
    </div>
    </div>
  );
};

export default shinki;
