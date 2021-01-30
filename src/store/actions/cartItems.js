import { 
  ADICIONAR_NOVO_ITEM_AO_CARRINHO, 
  REMOVER_ITEM_DO_CARRINHO 
} from './actionTypes';


export const adicionarItemAoCarrinho = (item) => {
  return {
    type: ADICIONAR_NOVO_ITEM_AO_CARRINHO,
    payload: item
  }
}

export const removerItemDoCarrinho = (item) => {
  return {
    type: REMOVER_ITEM_DO_CARRINHO,
    payload: item
  }
}