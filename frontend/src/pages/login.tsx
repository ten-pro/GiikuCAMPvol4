import React, { useState } from 'react';
import styles from '@/styles/login.module.css';

const login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email && !password) {
      setErrorMessage('＊メールアドレスとパスワードが入力されていません');
    } else if (!email) {
      setErrorMessage('＊メールアドレスが入力されていません');
    } else if (!password) {
      setErrorMessage('＊パスワードが入力されていません');
    } else {
      setErrorMessage('');

    // フォームの送信処理

    // フォームの入力値を初期化
    setEmail('');
    setPassword('');
    }
  };

  return (
    <div className={styles.container}>
      <img src="/login/title.svg" alt="login" className={styles.loginImage} />
      <div className={styles.wrapper}>
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputFieldWithIconMail}>
              <img src='/login/icon-mail.svg' className={styles.img}></img>
              <input
                type="email"
                id="email"
                name="email"
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
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="パスワード"
                className={styles.inputField}
                maxLength={50}
              />
            </div>
          </div>
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
          <button type="submit" className={styles.loginButton}>
            ログイン
          </button>
          <div className={styles.registerLink}>
            <a href="/shinki" className={styles.registerText}>
              新規登録
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
