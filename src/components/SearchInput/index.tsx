import { Container } from './styles';
import { FiSearch } from 'react-icons/fi';
import { useTools } from '../../hooks/useTools';


export function SearchInput() {
  const {researchTool, searchInTags,  handleResearchTool, handleKeyDown} = useTools(); 
  
  return (
    <Container>
      <FiSearch />
      <input 
        type="text" 
        placeholder={searchInTags ? 'Search in Tags Only' : 'Search'}
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => handleResearchTool(e.target.value)}
        value={researchTool}  
      />
    </Container>
  )
}