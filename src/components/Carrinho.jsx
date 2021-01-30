import React from 'react';
import { connect } from 'react-redux';
import { removerItemDoCarrinho } from '../store/actions/cartItems';

import './Carrinho.css';

const Carrinho = (props) => {
  return (
    <div className="carrinho-container">
      <table className="carrinho-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            props.cartItems.map( cartItem => 
              <tr key={cartItem.id}>
                <th>{cartItem.nome}</th>
                <th>{(cartItem.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</th>
                <th>
                  <button onClick={e => props.removerItemDoCarrinho(cartItem)}>
                    Remover
                  </button>
                </th>
              </tr>
            )
          }
        </tbody>
      </table>
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
    removerItemDoCarrinho(item) {
      dispatch(removerItemDoCarrinho(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);