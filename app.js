import {
  cadastrarMaquina,
  listarMaquinas,
  buscarMaquinaPorIndice,
  atualizarMaquina,
  excluirMaquina,
  ligarMaquina
} from "./controller/maquinaController.js";
import {
  cadastrarOperador,
  listarOperadores,
  buscarOperadorPorIndice,
  atualizarOperador,
  excluirOperador,
  desativarOperador
} from "./controller/operadorController.js";
import {
  cadastrarOrdemProducao,
  listarOrdensProducao,
  buscarOrdemProducaoPorIndice,
  atualizarOrdemProducao,
  excluirOrdemProducao,
  iniciarOrdemProducao,
  concluirOrdemProducao
} from "./controller/ordemProducaoController.js";

cadastrarMaquina("M001", "Torno CNC", "Usinagem");
cadastrarMaquina("M002", "Prensa hidráulica", "Estamparia");

cadastrarOperador("OP001", "Ana Souza", "Operadora de máquina", "Manhã");
cadastrarOperador("OP002", "Bruno Lima", "Técnico", "Tarde");

cadastrarOrdemProducao(1001, "Eixo metálico", 120, "30/11/2026");
cadastrarOrdemProducao(1002, "Engrenagem", 80, "05/12/2026");

listarMaquinas();
listarOperadores();
listarOrdensProducao();

buscarMaquinaPorIndice(0);
buscarOperadorPorIndice(0);
buscarOrdemProducaoPorIndice(0);

ligarMaquina(0);
desativarOperador(0);
iniciarOrdemProducao(0);
concluirOrdemProducao(1);

atualizarMaquina(1, "M002", "Prensa automatizada", "Estamparia");
atualizarOperador(1, "OP002", "Bruno Lima", "Supervisor", "Noite");
atualizarOrdemProducao(1, 1002, "Engrenagem reforçada", 90, "10/12/2026");

excluirMaquina(0);
excluirOperador(0);
excluirOrdemProducao(0);

listarMaquinas();
listarOperadores();
listarOrdensProducao();
