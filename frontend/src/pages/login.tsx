import React, { useState } from 'react';
import styles from '@/styles/login.module.css';

interface LoginFormState {
  email: string;
  password: string;
  errorMessage: string | null;
}

const login: React.FC = () => {
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
    errorMessage: null,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      // Redirect to dashboard or other authenticated page
    } else {
      const { error } = await response.json();
      setFormState({ ...formState, errorMessage: error });
    }
  };

  return (
    <div className={styles.container}>
      <img src="/login/title.svg" alt="login" className={styles.loginImage} /> 
      <div className={styles.wrapper}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            placeholder="メールアドレス"
            className={`${styles.inputField} ${styles.centerPlaceholder} ${styles.inputFieldWithIconMail}`}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            placeholder="パスワード"
            className={`${styles.inputField} ${styles.centerPlaceholder} ${styles.inputFieldWithIconKey}`}
          />
        </div>
        {formState.errorMessage && (
          <div style={{ color: 'red' }}>{formState.errorMessage}</div>
        )}
        <button type="submit"  className={styles.loginButton}>ログイン</button>
        <div className={styles.registerLink}>
        <a href="/login" className={styles.registerText}>新規登録</a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default login
