import { useState } from 'react';

import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard/index'

import { NewTransactionModal } from './components/NewTransactionModal'

import { Header } from './components/Header/index'

import { GlobalStyle } from './styles/global'

import { TransactionsContext, TransactionsProvider } from './TransactionsContext'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  };

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal} 
      />

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />

    </TransactionsProvider>
  );
}