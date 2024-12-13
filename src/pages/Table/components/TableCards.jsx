import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TableCards.module.scss';

const TableCards = ({ tables, onEdit }) => {
  const navigate = useNavigate();

  const handleOrderClick = (tableId) => {
    navigate(`/order/${tableId}`);
  };

  return (
    <div className={styles.tableCardsWrapper}>
      {tables.map((table) => (
        <div
          key={table.id}
          className={`${styles.tableCard} ${table.status === 'Available' ? styles.available : styles.occupied}`}
        >
          <h3 className={styles.tableName}>{table.name}</h3>
          <p className={styles.tableCapacity}>{`Seats: ${table.capacity}`}</p>
          <div className={styles.actions}>
            <button className={styles.orderButton} onClick={() => handleOrderClick(table.id)}>
              Order
            </button>
            <button className={styles.editButton} onClick={() => onEdit(table.id)}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableCards;
