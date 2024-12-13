import { getListTables } from "api/table";
import { fetchTables, fetchTablesSuccess, fetchTablesFail } from "states/modules/table";  // Import các action creators

export const fetchTablesAsync = () => async (dispatch) => {
  try {
    dispatch(fetchTables());  
    const tables = await getListTables();  
    dispatch(fetchTablesSuccess(tables));  
  } catch (error) {
    dispatch(fetchTablesFail(error.message));  
  }
};
