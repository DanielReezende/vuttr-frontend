import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { Container } from './styles';
import { Button } from '../Button';

interface NewToolModalpros {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewToolModal({ isOpen, onRequestClose } : NewToolModalpros) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <FiX />
      </button>

      <Container>
        <h2>Add new tool</h2>

        <label htmlFor="title">Tool Name</label>
        <input
          type="text"
          placeholder="Enter the name of your tool.."
          name="title"
        />

        <label htmlFor="link">Tool link</label>
        <input
          type="text"
          placeholder="Enter the link of your tool.."
          name="link"
        />

        <label htmlFor="description">Tool Description</label>
        <textarea
          placeholder="Enter the description of your tool.."
          name="description"
        ></textarea>

        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          placeholder="Enter the tags of your tool.."
          name="tags"
        />

        <Button type="submit">Add tool</Button>
      </Container>
    </Modal>
  )
}