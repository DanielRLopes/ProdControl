import { Operador } from "../model/Operador.js";
import {
  cadastrarOperador as salvarOperador,
  listarOperadores as obterOperadores,
  buscarOperadorPorIndice as obterOperadorPorIndice,
  atualizarOperador as substituirOperador,
  excluirOperador as removerOperador
} from "../repository/operadorRepository.js";

export function cadastrarOperador(matricula, nome, funcao, turno) {
  const operador = new Operador(matricula, nome, funcao, turno);
  salvarOperador(operador);
  console.log("Operador cadastrado.");
}

export function listarOperadores() {
  const operadores = obterOperadores();

  console.log("\nOperadores:");
  for (let indice = 0; indice < operadores.length; indice++) {
    const operador = operadores[indice];
    console.log(
      `Índice: ${indice} | Matrícula: ${operador.matricula} | Nome: ${operador.nome} | Função: ${operador.funcao} | Turno: ${operador.turno} | Status: ${operador.status}`
    );
  }
}

export function buscarOperadorPorIndice(indice) {
  const operador = obterOperadorPorIndice(indice);

  if (operador === undefined) {
    console.log(`Não existe operador no índice ${indice}.`);
    return;
  }

  console.log(
    `Operador encontrado | Matrícula: ${operador.matricula} | Nome: ${operador.nome} | Função: ${operador.funcao} | Turno: ${operador.turno} | Status: ${operador.status}`
  );
  return operador;
}

export function atualizarOperador(indice, matricula, nome, funcao, turno) {
  const operadorExistente = obterOperadorPorIndice(indice);

  if (operadorExistente === undefined) {
    console.log(`Não existe operador no índice ${indice}.`);
    return;
  }

  const operador = new Operador(matricula, nome, funcao, turno);
  substituirOperador(indice, operador);
  console.log(`Operador no índice ${indice} atualizado.`);
}

export function excluirOperador(indice) {
  const operador = obterOperadorPorIndice(indice);

  if (operador === undefined) {
    console.log(`Não existe operador no índice ${indice}.`);
    return;
  }

  removerOperador(indice);
  console.log(`Operador no índice ${indice} excluído.`);
}

export function ativarOperador(indice) {
  const operador = obterOperadorPorIndice(indice);

  if (operador === undefined) {
    console.log(`Não existe operador no índice ${indice}.`);
    return;
  }

  operador.ativar();
  console.log(`Operador no índice ${indice} ativado.`);
}

export function desativarOperador(indice) {
  const operador = obterOperadorPorIndice(indice);

  if (operador === undefined) {
    console.log(`Não existe operador no índice ${indice}.`);
    return;
  }

  operador.desativar();
  console.log(`Operador no índice ${indice} desativado.`);
}
