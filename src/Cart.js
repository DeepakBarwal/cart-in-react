import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          price: 999,
          title: 'Watch',
          qty: 1,
          img: '',
        },
        {
          id: 2,
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
        },
        {
          id: 3,
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
        },
      ],
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  render() {
    const { products } = this.state;
    return (
      <div className='cart'>
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
    );
  }
}

export default Cart;
