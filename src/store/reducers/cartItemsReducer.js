import { 
  ADICIONAR_NOVO_ITEM_AO_CARRINHO, 
  REMOVER_ITEM_DO_CARRINHO 
} from '../actions/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADICIONAR_NOVO_ITEM_AO_CARRINHO:
      return [
        ...state,
        action.payload
      ]
    
    case REMOVER_ITEM_DO_CARRINHO:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state;
  }
}