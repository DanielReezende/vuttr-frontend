import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface ToolsContextData {
  tools: Tool[];
  researchTool: string;
  searchInTags: boolean;
  handleCheckbox: () => void;
  handleResearchTool: (text: string) => void;
  handleKeyDown: (e: any) => void;
}


interface ToolsProviderPros {
  children: ReactNode
}



const ToolsContext = createContext({} as ToolsContextData);

export function ToolsProvider({ children }: ToolsProviderPros){
  const [tools, setTools] = useState<Tool[]>([])
  const [researchTool, setResearchTool] = useState('');
  const [searchInTags, setSearchInTags] = useState(false);

  useEffect(() => {
    api.get<Tool[]>('/tools').then(response => {
      setTools(response.data);
    });
  }, []);

  function handleResearchTool(searchText: string) {
    setResearchTool(searchText);
  }

  function handleCheckbox() {
    setSearchInTags(!searchInTags);
  }

  function handleSearch( text : string ) {
    api.get(`/tools?${searchInTags ? 'tags_like' : 'q'}=${text}`).then(response => {
      setTools(response.data);
    });
  }

  function handleKeyDown(e: any) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      handleSearch(researchTool);
    }
  }

  return (
    <ToolsContext.Provider value={{ 
      tools, 
      researchTool, 
      searchInTags, 
      handleCheckbox, 
      handleResearchTool, 
      handleKeyDown 
    }}>
      { children }
    </ToolsContext.Provider>
  )
}

export function useTools() {
  const context = useContext(ToolsContext);

  return context;
}