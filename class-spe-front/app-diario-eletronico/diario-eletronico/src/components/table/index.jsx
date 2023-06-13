import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import buscarAlunos from "../../requests/aluno";
import { removerAluno } from "../../requests/aluno";

import { toast } from "react-toastify";
import { FiTrash2, FiEdit } from "react-icons/fi";

export default function Table(props) {
  const queryClient = useQueryClient();
  const { formData, setFormData } = props;

  const { data, isFetching } = useQuery(["@alunos"], buscarAlunos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(removerAluno, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@alunos"]);
      // toast.success("Aluno(a) apagado(a) com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao apagar o(a) aluno(a).");
    },
  });

  if (isFetching) {
    return <h3>Buscando alunos e alunas...</h3>;
  }

  function apagarAluno(id) {
    mutate(id);
  }

  function preencherCampos(aluno) {
    setFormData({ ...aluno, id: aluno._id });
  }

  return (
    <div className="font-poppins">
      <h1 className="my-5 mx-8 text-black text-2xl">Alunos cadastrados: </h1>
      <table className="min-w-full my-2">
        <thead>
          <tr>
            <th className="py-2 text-center font-semibold">Ordem</th>
            <th className="py-2 text-center font-semibold">Nome</th>
            <th className="py-2 text-center font-semibold">Matrícula</th>
            <th className="py-2 text-center font-semibold">Curso</th>
            <th className="py-2 text-center font-semibold">Bimestre</th>
            <th className="py-2 text-center font-semibold">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((aluno, index) => (
            <tr key={aluno._id}>
              <td className="text-center font-light">{index + 1}</td>
              <td className="text-left font-light">{aluno.nome}</td>
              <td className="text-center font-light">{aluno.matricula}</td>
              <td className="text-left font-light">{aluno.curso}</td>
              <td className="text-center font-light">{aluno.bimestre}</td>
              <td className="text-center font-light">
                <FiEdit
                  size={20}
                  color="green"
                  className="inline-block mr-2 hover:bg-green-300"
                  onClick={() => preencherCampos(aluno)}
                />
                <FiTrash2
                  size={20}
                  color="red"
                  className="inline-block hover:bg-red-300"
                  onClick={() => apagarAluno(aluno._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
