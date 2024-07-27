import React, { useState } from 'react';
import styles from './UsernameInput.module.scss';

interface UsernameInputProps {
  onSetUsername: (username: string) => void;
}

const UsernameInput: React.FC<UsernameInputProps> = ({ onSetUsername }) => {
  const [username, setUsername] = useState('');

  const handleSetUsername = () => {
    if (username.trim().length > 0) {
      onSetUsername(username);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        name="username"
        value={username}
        className={styles.input}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button className={styles.button} onClick={handleSetUsername}>
        Set Username
      </button>
    </div>
  );
};

export default UsernameInput;
