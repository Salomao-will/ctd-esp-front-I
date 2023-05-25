import App from "../App";
import { UserConfig } from "vite";
export const AlunoDeleteModal = ({ aluno, show, handleClose, onSuccess }) => {
    const mutation = useMutation(async () => {
      const response = await api.delete(`/aluno/${aluno._id}`);
      return response.data;
    }, {
      onSuccess: () => {
        onSuccess();
        handleClose();
      },
    });
  
    const handleDelete = () => {
      mutation.mutate();
    };
  
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deletar Aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tem certeza de que deseja deletar o aluno {aluno.nome}?</p>
          <Button variant="danger" onClick={handleDelete}>Deletar</Button>
        </Modal.Body>
      </Modal>
    );
  };