import { Header } from './components/Header';
import { Content } from './components/Content';
import { ToolsProvider } from './hooks/useTools';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewToolModal } from './components/NewToolModal';


function App() {
  const [isNewToolModalOpen, setIsNewToolModalOpen] = useState(false);

  function handleOpenNewToolModal() {
    setIsNewToolModalOpen(true);
  }

  function handleCloseNewToolModal() {
    setIsNewToolModalOpen(false);
  }

  return (
    <ToolsProvider>
      <Header onOpenNewToolModal={handleOpenNewToolModal} />
      <Content />
      <NewToolModal  isOpen={isNewToolModalOpen} onRequestClose={handleCloseNewToolModal}/>
      <GlobalStyle />
    </ToolsProvider>
  );
}

export default App;
