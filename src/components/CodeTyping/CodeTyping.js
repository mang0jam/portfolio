import React, { useState, useEffect } from 'react';
import styles from './CodeTyping.module.css'

const CodeTyping = ({ codeString }) => {
  const [displayCode, setDisplayCode] = useState('');

  useEffect(() => {
    let index = 0;
    const typeCode = () => {
      setDisplayCode(codeString.substring(0, index));
      index++;
      if (index <= codeString.length) {
        setTimeout(typeCode, 66);
      }
    };
    typeCode();
  }, [codeString]);

  return (
    <div className={styles.CodeTypingContainer}>
      <pre className={styles.CodeTyping}>
        <code>{displayCode}</code>
      </pre>
    </div>
  );
};

export default CodeTyping;