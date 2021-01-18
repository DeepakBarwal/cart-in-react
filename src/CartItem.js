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
    // this.testing();
  }

  // testing() {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   });

  //   promise.then(() => {
  //     // setState acts like a synchronous call
  //     // no batching is performed here
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });
  //     console.log(this.state);
  //   });
  // }

  increaseQuantity = () => {
    // 2 ways to call setState (asynchronous)
    // 1st way -> in case of multiple setState calls, only last one works
    // this.setState({
    //   qty: this.state.qty + 1, // shallow merging
    // });

    // 2nd way -> if prev state req then use this. in case of multiple setState calls, all are queued and executed in order, to keep prevState up-to-date
    this.setState(
      (prevState) => {
        return {
          qty: prevState.qty + 1, // shallow merging
        };
      }
      // () => {
      //   console.log(this.state); // this callback is executed after setState changes state
      // }
    );
  };
  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
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
              src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1610979948~hmac=9508b152fa240d016018ad2ba7705fa8'
              //   onClick={this.increaseQuantity.bind(this)}
              onClick={this.increaseQuantity}
            />
            <img
              alt='decrease'
              className='action-icons'
              src='https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1610980048~hmac=76cb05eebc27057c23f21a4e7df14e8a '
              onClick={this.decreaseQuantity}
            />
            <img
              alt='delete'
              className='action-icons'
              src='https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1610980084~hmac=1ed4eabb31d41b6f988c65cc8b24b176'
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
