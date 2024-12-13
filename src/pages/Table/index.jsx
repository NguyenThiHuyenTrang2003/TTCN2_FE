import React, { useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles.module.scss';
import TableCards from './components/TableCards'; 
import TableForm from './components/TableForm';
import { fetchAllTables, createTable, updateFoodTable } from '../../api/table';

const TablePage = () => {
  const [tables, setTables] = useState([]);
  const [filteredTables, setFilteredTables] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedTableId, setSelectedTableId] = useState(null);

  useEffect(() => {
    const fetchTables = async () => {
      const sampleData = [
        { id: 1, name: 'Table 1', capacity: 4, status: 'Available' },
        { id: 2, name: 'Table 2', capacity: 2, status: 'Occupied' },
        { id: 3, name: 'Table 3', capacity: 6, status: 'Available' },
        { id: 4, name: 'Table 4', capacity: 8, status: 'Occupied' },
        { id: 5, name: 'Table 5', capacity: 3, status: 'Available' },
        { id: 6, name: 'Table 6', capacity: 5, status: 'Occupied' },
      ];
      setTables(sampleData);
      setFilteredTables(sampleData);
    };
    fetchTables();
  }, []);

  useEffect(() => {
    const fetchTables = async () => {
      const data = await fetchAllTables();
      setTables(data);
      setFilteredTables(data);
    };
    fetchTables();
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterTables(query);
  };

  const filterTables = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = tables.filter(table =>
      table.name.toLowerCase().includes(lowercasedQuery) ||
      table.capacity.toString().includes(lowercasedQuery) ||
      table.status.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredTables(filtered);
  };

  const handleAddTable = () => {
    setSelectedTableId(null);
    setShowForm(true);
  };

  const handleEditTable = (tableId) => {
    setSelectedTableId(tableId);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSaveTable = async (tableData) => {
    try {
      if (tableData.id) {
        await updateFoodTable(tableData);
      } else {
        await createTable(tableData);
      }
      const updatedTables = await fetchAllTables();
      setTables(updatedTables);
      setFilteredTables(updatedTables);
    } catch (error) {
      console.error("Error saving table:", error);
    }
    setShowForm(false);
  };

  return (
    <MainLayout>
      <div className={styles.tableManagementWrap}>
        <div className={styles.mainWrap}>
          <div className={styles.headerMainWrap}>
            <span className={styles.title}>Table Management</span>
            <div className={styles.actionsWrap}>
              <div className={styles.totalRecords}>
                Total records ({filteredTables.length})
              </div>
              <button className={styles.addTableButton} onClick={handleAddTable}>
                Add New Table
              </button>
            </div>
          </div>

          <div className={styles.searchWrap}>
            <input
              type="text"
              placeholder="Search by name, capacity, or status..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
          </div>

          {showForm && (
            <TableForm
              tableId={selectedTableId}
              onClose={handleCloseForm}
              onSave={handleSaveTable}
            />
          )}

          <div className={styles.tableCardsWrap}>
            <TableCards tables={filteredTables} onEdit={handleEditTable} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TablePage;
