import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import buscarCursos from "../../requests/cursos";
import { editarAluno, salvarAluno } from "../../requests/aluno";

import { toast } from "react-toastify";


export default function Form(props) {
  const queryClient = useQueryClient();

  const { formData, setFormData, clearState } = props;

  const { data, isFetching } = useQuery(["@cursos"], buscarCursos, {
    refetchOnWindowFocus: false,
  });

  const { mutate, error } = useMutation(salvarAluno, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@alunos"]);
      toast.success("Aluno(a) salvo(a) com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao salvar os dados.");
    },
  });

  const { mutate: editMutate } = useMutation(editarAluno, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@alunos"]);
      toast.success("Dados editados com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao salvar os dados editados.");
    },
  });

  function edit() {
    editMutate({
      id: formData.id,
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  function save() {
    mutate({
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  if (error) {
    return <h3>Erro ao salvar aluno...</h3>;
  }

  if (isFetching) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div className="flex justify-between gap-8 my-8 mx-8">
      <input
        className="h-8 w-full px-4 rounded-md text-lg"
        placeholder="Digite o seu nome"
        value={formData.nome}
        onChange={(event) =>
          setFormData({ ...formData, nome: event.target.value })
        }
      />
      <input
        className="h-8 w-full px-4 rounded-md text-lg"
        placeholder="Digite o número de matrícula"
        value={formData.matricula}
        onChange={(event) =>
          setFormData({ ...formData, matricula: event.target.value })
        }
      />

      <select
        className="h-8 w-full px-4 rounded-md text-lg"
        value={formData.curso}
        defaultValue={formData.curso}
        onChange={(event) =>
          setFormData({ ...formData, curso: event.target.value })
        }
      >
        <option hidden>Selecione um curso</option>
        {data.cursos.map((curso, idx) => (
          <option key={idx}>{curso.name}</option>
        ))}
      </select>
      <input
        className="h-8 w-full px-4 rounded-md text-lg"
        placeholder="Digite o bimestre"
        value={formData.bimestre}
        onChange={(event) =>
          setFormData({ ...formData, bimestre: event.target.value })
        }
      />
      <button
        className="h-8 rounded-md bg-blue-600 px-8 text-white hover:bg-blue-500"
        onClick={formData.id ? edit : save}
      >
        Salvar
      </button>
    </div>
  );
}
