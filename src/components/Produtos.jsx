import React from 'react';
import { connect } from 'react-redux';
import { adicionarItemAoCarrinho } from '../store/actions/cartItems';
import { produtos } from '../data/produtos';

import './Produtos.css';

const Produtos = (props) => {
  return (
    <div className="produtos-container">
      {
        produtos.map( produto => 
          <div key={produto.id} className="sessao-produto">
            <p className="nome-produto">
              {produto.nome}
            </p>
            <span className="preco-produto">
              {(produto.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}
            </span>
            <button 
              onClick={e => {
                  const itemExisteNoCarrinho = props.cartItems.filter(item => item.id === produto.id).length;

                  if (!itemExisteNoCarrinho) {
                    props.adicionarItemAoCarrinho(produto);
                  } else {
                    alert('O item já foi adicionado ao carrinho!');
                  }
                }
              }
            >
              Adicionar
            </button>
          </div>  
        )
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    adicionarItemAoCarrinho(novoItem) {
      dispatch(adicionarItemAoCarrinho(novoItem));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);