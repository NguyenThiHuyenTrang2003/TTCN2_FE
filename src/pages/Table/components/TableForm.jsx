import React, { useState, useEffect } from 'react';
import { fetchTableById } from '../../../api/table';
import styles from "./TableForm.module.scss";

const TableForm = ({ tableId, onClose, onSave }) => {
  const [tableData, setTableData] = useState({ name: '', capacity: 0, status: 'Available' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tableId) {
      fetchTableById(tableId)
        .then(data => setTableData(data))
        .catch(err => console.error('Failed to fetch table data:', err));
    }
  }, [tableId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(tableData);
    } catch (error) {
      console.error("Error saving table:", error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.modal}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tableData.name}
          onChange={(e) => setTableData({ ...tableData, name: e.target.value })}
          placeholder="Table Name"
        />
        <input
          type="number"
          value={tableData.capacity}
          onChange={(e) => setTableData({ ...tableData, capacity: e.target.value })}
          placeholder="Table Capacity"
        />
        <select
          value={tableData.status}
          onChange={(e) => setTableData({ ...tableData, status: e.target.value })}
        >
          <option value="Available">Available</option>
          <option value="Occupied">Occupied</option>
          <option value="Reserved">Reserved</option>
        </select>
        <button type="submit" disabled={loading}>
          {tableId ? 'Update Table' : 'Create Table'}
        </button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default TableForm;
