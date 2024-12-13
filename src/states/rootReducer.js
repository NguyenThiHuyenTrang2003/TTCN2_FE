import appReducer from './modules/app';
import authReducer from './modules/auth';
import profileReducer from './modules/profile';
import homeReducer from './modules/home';
import aboutReducer from './modules/about';
import employeeReducer from './modules/employee';
import unitReducer from './modules/unit';
import categoryReducer from './modules/category';
import tableReducer from './modules/table';  
import OrderReducer from './modules/order';

const rootReducer = {
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  home: homeReducer,
  about: aboutReducer,
  employee: employeeReducer,
  unit: unitReducer,
  category: categoryReducer,
  table: tableReducer,  
  order: OrderReducer
};

export default rootReducer;
