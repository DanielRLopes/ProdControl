import { OrdemProducao } from "../model/OrdemProducao.js";
import {
  cadastrarOrdemProducao as salvarOrdemProducao,
  listarOrdensProducao as obterOrdensProducao,
  buscarOrdemProducaoPorIndice as obterOrdemProducaoPorIndice,
  atualizarOrdemProducao as substituirOrdemProducao,
  excluirOrdemProducao as removerOrdemProducao
} from "../repository/ordemProducaoRepository.js";

export function cadastrarOrdemProducao(numero, produto, quantidade, prazo) {
  const ordemProducao = new OrdemProducao(numero, produto, quantidade, prazo);
  salvarOrdemProducao(ordemProducao);
  console.log("Ordem de produção cadastrada.");
}

export function listarOrdensProducao() {
  const ordensProducao = obterOrdensProducao();

  console.log("\nOrdens de produção:");
  for (let indice = 0; indice < ordensProducao.length; indice++) {
    const ordemProducao = ordensProducao[indice];
    console.log(
      `Índice: ${indice} | Número: ${ordemProducao.numero} | Produto: ${ordemProducao.produto} | Quantidade: ${ordemProducao.quantidade} | Prazo: ${ordemProducao.prazo} | Status: ${ordemProducao.status}`
    );
  }
}

export function buscarOrdemProducaoPorIndice(indice) {
  const ordemProducao = obterOrdemProducaoPorIndice(indice);

  if (ordemProducao === undefined) {
    console.log(`Não existe ordem de produção no índice ${indice}.`);
    return;
  }

  console.log(
    `Ordem encontrada | Número: ${ordemProducao.numero} | Produto: ${ordemProducao.produto} | Quantidade: ${ordemProducao.quantidade} | Prazo: ${ordemProducao.prazo} | Status: ${ordemProducao.status}`
  );
  return ordemProducao;
}

export function atualizarOrdemProducao(indice, numero, produto, quantidade, prazo) {
  const ordemExistente = obterOrdemProducaoPorIndice(indice);

  if (ordemExistente === undefined) {
    console.log(`Não existe ordem de produção no índice ${indice}.`);
    return;
  }

  const ordemProducao = new OrdemProducao(numero, produto, quantidade, prazo);
  substituirOrdemProducao(indice, ordemProducao);
  console.log(`Ordem de produção no índice ${indice} atualizada.`);
}

export function excluirOrdemProducao(indice) {
  const ordemProducao = obterOrdemProducaoPorIndice(indice);

  if (ordemProducao === undefined) {
    console.log(`Não existe ordem de produção no índice ${indice}.`);
    return;
  }

  removerOrdemProducao(indice);
  console.log(`Ordem de produção no índice ${indice} excluída.`);
}

export function iniciarOrdemProducao(indice) {
  const ordemProducao = obterOrdemProducaoPorIndice(indice);

  if (ordemProducao === undefined) {
    console.log(`Não existe ordem de produção no índice ${indice}.`);
    return;
  }

  ordemProducao.iniciar();
  console.log(`Ordem de produção no índice ${indice} iniciada.`);
}

export function concluirOrdemProducao(indice) {
  const ordemProducao = obterOrdemProducaoPorIndice(indice);

  if (ordemProducao === undefined) {
    console.log(`Não existe ordem de produção no índice ${indice}.`);
    return;
  }

  ordemProducao.concluir();
  console.log(`Ordem de produção no índice ${indice} concluída.`);
}
