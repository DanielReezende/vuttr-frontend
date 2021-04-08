import { useTools } from "../../hooks/useTools";

import { Container } from "./styles";
import { Card } from "../Card";

export function Content(){
  const { tools } = useTools();

  return(
    <Container>
      <section>  
          {tools.map(tool => (
            <Card 
              key={tool.id}
              id={tool.id} 
              link={tool.link} 
              title={tool.title} 
              description={tool.description} 
              tags={tool.tags}
            />
          ))}
      </section>
    </Container>
  )
}