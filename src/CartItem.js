import React from 'react';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: '',
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  increaseQuantity = () => {
    // 2 ways to call setState
    // 1st way
    // this.setState({
    //   qty: this.state.qty + 1, // shallow merging
    // });

    // 2nd way -> if prev state req then use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1, // shallow merging
      };
    });
  };
  decreaseQuantity = () => {};
  deleteItem = () => {};
  render() {
    const { price, title, qty } = this.state;
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
              src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1610810817~hmac=964b7109d2e4aefaf8d33852bd12ac75'
              //   onClick={this.increaseQuantity.bind(this)}
              onClick={this.increaseQuantity}
            />
            <img
              alt='decrease'
              className='action-icons'
              src='https://www.flaticon.com/svg/vstatic/svg/659/659892.svg?token=exp=1610810732~hmac=3c391567451c4e6e8a38bf8d7da979e4'
              onClick={this.decreaseQuantity}
            />
            <img
              alt='delete'
              className='action-icons'
              src='https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1610810890~hmac=63e4c061f5fc869165560cd181beb953'
              onClick={this.deleteItem}
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
