import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';  
import createSagaMiddleware from "redux-saga";  
import rootSaga from "./sagas";  
import thunk from "redux-thunk";  

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,  
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, thunk),  
});


sagaMiddleware.run(rootSaga);

export default store;
