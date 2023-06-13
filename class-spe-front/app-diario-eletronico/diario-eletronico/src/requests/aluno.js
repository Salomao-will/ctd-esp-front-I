import api from "../services/api";
import Swal from "sweetalert2";

/**
 * Função para buscar todos os alunos (GET)
 */
export default async function buscarAlunos() {
  return (await api.get("/aluno")).data;
}

/**
 * Função para adicionar um novo aluno (POST)
 */
export async function salvarAluno(body) {
  return await api.post("/aluno", body);
}

/**
 * Função para editar uma tarefa (PUT)
 */
export async function editarAluno(body) {
  return await api.put(`/aluno/${body.id}`, body);
}

/**
 * Função para remover um aluno (DELETE)
 */

/* export async function removerAluno(id) {
  return await api.delete(`/aluno/${id}`);
} */

export async function removerAluno(id) {
  Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  Swal.fire({
    title: "Você tem certeza que deseja deletar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sim, pode apagar!",
    cancelButtonText: "Não, cancele!",
    reverseButtons: true,
  }).then(async (result) => {
    if (result.isConfirmed) {
      Swal.fire("Dados deletados com sucesso! :)");
      return await api.delete(`/aluno/${id}`);
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Cancelado! :)");
    }
  });
}
