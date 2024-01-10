  
  // programa para calcular o valor de uma viagem.

  /* Você terá 5 variáveis. sendo elas:
  1 - Preço do Etanol
  2 - Preço da Gasolina 
  2 - O tipo de combustivel que está no carro
  3 - Gasto médio de combustível do carro por KM
  4 - Distância da viagem */
  
  
  const preco_etanol = 3.80;
  const preco_gasolina = 5.23;
  const consumo_do_carro = 35;
  const distancia_da_viagem = 487;
  const tipo_de_combustivel_veículo = 'gasolina';

  const litros_consumidos = distancia_da_viagem/consumo_do_carro;
  const valor_gastoG = litros_consumidos * preco_gasolina;
  const valor_gastoE = litros_consumidos * preco_etanol;

  if (tipo_de_combustivel_veículo === 'gasolina') {
    console.log(valor_gastoG.toFixed(2));
  } else {
    console.log(valor_gastoE.toFixed(2));
  }

  