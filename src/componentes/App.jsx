import React from 'react';
import '../styles/styles.scss';
import AppRoutes from './AppRoute';
import { Provider } from "react-redux"
import store from "../redux/store"




const App = () => (

    <Provider store={store}>
      <AppRoutes />
    </Provider>
  
)

export default App;