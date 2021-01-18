import React from 'react';

class CartItem extends React.Component {
  render() {
    const { price, title, qty } = this.props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct,
    } = this.props;
    return (
      <div className='cart-item'>
        <div className='left-block'>
          <img alt='' style={styles.image} />
        </div>
        <div className='right-block'>
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: '#777' }}>Rs {price}</div>
          <div style={{ color: '#777' }}>Qty: {qty}</div>
          <div className='cart-item-actions'>
            {/* Buttons */}
            <img
              alt='increase'
              className='action-icons'
              src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1610979948~hmac=9508b152fa240d016018ad2ba7705fa8'
              //   onClick={this.increaseQuantity.bind(this)}
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt='decrease'
              className='action-icons'
              src='https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1610980048~hmac=76cb05eebc27057c23f21a4e7df14e8a '
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt='delete'
              className='action-icons'
              src='https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1610980084~hmac=1ed4eabb31d41b6f988c65cc8b24b176'
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
};

export default CartItem;
