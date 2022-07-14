import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from './store/configure';
import { Provider } from "react-redux"


const store =configureStore()
// console.log(store)
// console.log("state",store.getState())


store.subscribe(()=>{
    console.log("state updated",store.getState())
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

  <Provider store={store}>
        <App/>
        </Provider>
)

    


