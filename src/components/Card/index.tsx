import { FiX } from 'react-icons/fi';
import { Container, Content, TagsContainer } from './styles';

interface CardProps {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export function Card({ id, title, link, description, tags } : CardProps){
  return (
    <Container key={id}>
      <Content>
        <header>
          <a href={link} >{title}</a>
          <button type="button">
            <FiX size={18} />
          </button>
        </header>
        <p>{description}</p>
        <TagsContainer>
          {tags.map(tag => (
            <span key={tag}>#{tag}</span>
          ))}
        </TagsContainer>
      </Content>
    </Container>
  )
}