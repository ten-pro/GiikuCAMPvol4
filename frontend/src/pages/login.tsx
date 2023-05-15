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
    <div>
      <img src="/login/title.svg" alt="login" className={styles.loginImage} /> 
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
          />
        </div>
        {formState.errorMessage && (
          <div style={{ color: 'red' }}>{formState.errorMessage}</div>
        )}
        <button type="submit"  className={styles.loginButton}>ログイン</button>
      </form>
    </div>
  );
};

export default login
