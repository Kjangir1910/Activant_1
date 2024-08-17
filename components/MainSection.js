import React from 'react';
import styles from '../styles/MainSection.module.css';

const MainSection = () => {
  return (
    <main className={styles.main}>
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index}>
          <label htmlFor={`name${index}`}>Name: </label>
          <input type="text" id={`name${index}`} name={`name${index}`} />

          <label htmlFor={`tel${index}`}>Phone No: </label>
          <input type="tel" id={`tel${index}`} name={`tel${index}`} />

          <label htmlFor={`address${index}`}>Address:</label>
          <textarea id={`address${index}`} name={`address${index}`}></textarea>

          <button className={styles.actionButton}>Action</button>
        </div>
      ))}
    </main>
  );
};

export default MainSection;
