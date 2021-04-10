import { useTools } from '../../hooks/useTools';
import { SearchInput } from '../SearchInput';
import { Button } from '../Button';
import { FiPlusSquare } from 'react-icons/fi';

import { 
  Container, 
  Content, 
  TitleContainer,
  ActionsContainer, 
  SearchContainer 
} from './styles';

interface HeaderPros {
  onOpenNewToolModal: () => void;
}

export function Header({ onOpenNewToolModal }: HeaderPros) {
  const { searchInTags, handleCheckbox } = useTools();
  return (
    <Container>
      <Content>
        <TitleContainer>
          <h1>VUTTR</h1>
          <p>Very Useful Tools to Remember</p>
        </TitleContainer>

        <ActionsContainer>
          <SearchContainer>
            <SearchInput />
            <input
              type="checkbox"
              name="searchInTags"
              id="searchInTags"
              checked={searchInTags}
              onChange={handleCheckbox}
            />
            <label htmlFor="searchInTags">Search in tags only</label>
          </SearchContainer>

          <Button onClick={onOpenNewToolModal}>
            <FiPlusSquare />
          Add tool
        </Button>
        </ActionsContainer>
      </Content>
    </Container>
  )
}