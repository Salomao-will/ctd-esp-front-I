import api from "../services/api";

/**
 * Função para buscar todos os cursos (GET)
 */
export default async function buscarCursos() {
  return (await api.get("/cursos")).data;
}
