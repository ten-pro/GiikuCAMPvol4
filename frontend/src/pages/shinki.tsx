import React, { useState } from 'react';
import styles from '@/styles/shinki.module.css';
interface RegistrationFormProps {
  onRegister: (email: string, password: string) => void;
}

const shinki: React.FC<RegistrationFormProps> = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      setErrorMessage('');
      // 登録の処理を行う関数
      onRegister(email, password);
      // ログイン画面に遷移する
    }
  };

  return (
    <div className={styles.container}>
    <img src="/shinki/title.svg" alt="shinki" className={styles.shinkiImage} /> 
    <div className={styles.wrapper}>
    <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="メールアドレス"
          className={`${styles.inputField} ${styles.centerPlaceholder} ${styles.inputFieldWithIconMail}`}
          maxLength={50}
          />
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="パスワード"
          className={`${styles.inputField} ${styles.centerPlaceholder} ${styles.inputFieldWithIconKey}`}
          maxLength={50}
          />
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="パスワード再確認"
          className={`${styles.inputField} ${styles.centerPlaceholder} ${styles.inputFieldWithIconKey}`}
          maxLength={50}
          />
      </div>
      <button type="submit" className={styles.shinkiButton}>登録</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div className={styles.registerLink}>
        <a href="/login" className={styles.registerText}>アカウントをすでに登録済みの方</a>
      </div>
    </form>
    </div>
    </div>
  );
};

export default shinki;
