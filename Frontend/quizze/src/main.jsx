import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PersistGate }from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer autoClose={1000} pauseOnHover={false} pauseOnFocusLoss={false} limit={1}/>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
