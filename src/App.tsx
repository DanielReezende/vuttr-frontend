import { Header } from './components/Header';
import { Content } from './components/Content';
import { ToolsProvider } from './hooks/useTools';
import { GlobalStyle } from './styles/global';


function App() {
  return (
    <ToolsProvider>
      <Header />
      <Content />
      <GlobalStyle />
    </ToolsProvider>
  );
}

export default App;
