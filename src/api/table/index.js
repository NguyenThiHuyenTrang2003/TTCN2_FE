export const createTable = async (tableData) => {
  const response = await fetch('/api/v1/tables', {
    method: 'POST',
    body: JSON.stringify(tableData),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

export const fetchTableById = async (tableId) => {
  const response = await fetch(`/api/tables/getById/${tableId}`);
  const data = await response.json();
  return data;
};

export const updateFoodTable = async (tableData) => {
  const response = await fetch(`/api/v1/tables/${tableData.id}`, {
    method: 'PATCH',
    body: JSON.stringify(tableData),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

export const getListTables = () => {
  return fetch('/api/tables')
    .then(response => response.json())
    .catch(error => console.error('Error fetching tables:', error));
};

export const fetchAllTables = async () => {
  const response = await fetch('/api/v1/tables');
  return response.json();
};
