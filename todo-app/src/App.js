import './App.css';
import React from 'react';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';
 import AppContent from './components/AppContent';
import { Toaster } from 'react-hot-toast'; 

function App() {
  return (
    <>
    <div className='container'>
      <PageTitle className={styles.title}>TODO LIST</PageTitle>
      <div className={styles.app__wrapper}>
      <AppHeader />
       <AppContent></AppContent> 
      </div>
    </div>
    <Toaster
    position = "buttom-right"
    ToastOptions = {{
      style: {
        fontSize: '1.4rem',
      }
      
    }}
    />
    </>
  );
}

export default App;
