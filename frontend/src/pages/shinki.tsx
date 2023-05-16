import React, { useState } from 'react';
import styles from '@/styles/shinki.module.css';

interface RegistrationFormProps {
  onRegister: (email: string, password: string) => void;
}

const shinki: React.FC<RegistrationFormProps> = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    if (password === confirmPassword) {
      onRegister(email, password);
    } else {
      alert('Passwords do not match.');
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
          />
      </div>
      <button type="submit" className={styles.shinkiButton}>登録</button>
      <div className={styles.registerLink}>
        <a href="/login" className={styles.registerText}>アカウントをすでに登録済みの方</a>
      </div>
    </form>
    </div>
    </div>
  );
};

export default shinki;
