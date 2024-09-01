import React, { useState, useEffect } from 'react';
import styles from '../styles/MainSection.module.css';

const MainSection = () => {
  const [rows, setRows] = useState([{ name: '', tel: '', address: '' }]);

  useEffect(() => {
    // Retrieve saved data from local storage
    const savedData = localStorage.getItem('formData');
    try {
      const parsedData = JSON.parse(savedData);
      // Ensure the parsed data is an array
      if (Array.isArray(parsedData)) {
        setRows(parsedData);
      }
    } catch (error) {
      console.error("Failed to parse data from localStorage", error);
    }
  }, []);

  const handleChange = (rowIndex, field, value) => {
    const newRows = rows.map((row, index) =>
      index === rowIndex ? { ...row, [field]: value } : row
    );
    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, { name: '', tel: '', address: '' }]);
  };

  const deleteRow = (rowIndex) => {
    const newRows = rows.filter((_, index) => index !== rowIndex);
    setRows(newRows);
  };

  const updateLocalStorage = () => {
    localStorage.setItem('formData', JSON.stringify(rows));
    alert('Data updated successfully!');
  };

  return (
    <main className={styles.main}>
      {rows.map((row, index) => (
        <div key={index} className={styles.formRow}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Name"
            value={row.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          />

          <input
            type="tel"
            className={styles.inputField}
            placeholder="Phone No"
            value={row.tel}
            onChange={(e) => handleChange(index, 'tel', e.target.value)}
          />

          <textarea
            className={styles.textAreaField}
            placeholder="Address"
            value={row.address}
            onChange={(e) => handleChange(index, 'address', e.target.value)}
          ></textarea>

          {/* Add, Update, Delete Buttons in one row */}
          <div className={styles.buttonsContainer}>
            <button className={styles.actionButton} onClick={addRow}>Add Row</button>
            <button className={styles.actionButton} onClick={updateLocalStorage}>Update</button>
            <button className={styles.deleteButton} onClick={() => deleteRow(index)}>Delete Row</button>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MainSection;
