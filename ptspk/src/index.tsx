import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

import 'semantic-ui-css/semantic.min.css'
//https://semantic-ui.com/introduction/integrations.html
//https://react.semantic-ui.com/
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    
        <Provider store={store}>            
           <App />
        </Provider>
  );


  reportWebVitals();