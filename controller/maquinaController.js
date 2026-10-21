import { Maquina } from "../model/Maquina.js";
import {
  cadastrarMaquina as salvarMaquina,
  listarMaquinas as obterMaquinas,
  buscarMaquinaPorIndice as obterMaquinaPorIndice,
  atualizarMaquina as substituirMaquina,
  excluirMaquina as removerMaquina
} from "../repository/maquinaRepository.js";

export function cadastrarMaquina(codigo, nome, setor) {
  const maquina = new Maquina(codigo, nome, setor);
  salvarMaquina(maquina);
  console.log("Máquina cadastrada.");
}

export function listarMaquinas() {
  const maquinas = obterMaquinas();

  console.log("\nMáquinas:");
  for (let indice = 0; indice < maquinas.length; indice++) {
    const maquina = maquinas[indice];
    console.log(
      `Índice: ${indice} | Código: ${maquina.codigo} | Nome: ${maquina.nome} | Setor: ${maquina.setor} | Status: ${maquina.status}`
    );
  }
}

export function buscarMaquinaPorIndice(indice) {
  const maquina = obterMaquinaPorIndice(indice);

  if (maquina === undefined) {
    console.log(`Não existe máquina no índice ${indice}.`);
    return;
  }

  console.log(
    `Máquina encontrada | Código: ${maquina.codigo} | Nome: ${maquina.nome} | Setor: ${maquina.setor} | Status: ${maquina.status}`
  );
  return maquina;
}

export function atualizarMaquina(indice, codigo, nome, setor) {
  const maquinaExistente = obterMaquinaPorIndice(indice);

  if (maquinaExistente === undefined) {
    console.log(`Não existe máquina no índice ${indice}.`);
    return;
  }

  const maquina = new Maquina(codigo, nome, setor);
  substituirMaquina(indice, maquina);
  console.log(`Máquina no índice ${indice} atualizada.`);
}

export function excluirMaquina(indice) {
  const maquina = obterMaquinaPorIndice(indice);

  if (maquina === undefined) {
    console.log(`Não existe máquina no índice ${indice}.`);
    return;
  }

  removerMaquina(indice);
  console.log(`Máquina no índice ${indice} excluída.`);
}

export function ligarMaquina(indice) {
  const maquina = obterMaquinaPorIndice(indice);

  if (maquina === undefined) {
    console.log(`Não existe máquina no índice ${indice}.`);
    return;
  }

  maquina.ligar();
  console.log(`Máquina no índice ${indice} ligada.`);
}

export function desligarMaquina(indice) {
  const maquina = obterMaquinaPorIndice(indice);

  if (maquina === undefined) {
    console.log(`Não existe máquina no índice ${indice}.`);
    return;
  }

  maquina.desligar();
  console.log(`Máquina no índice ${indice} desligada.`);
}
