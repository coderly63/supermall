export default {
  cartCount(state) {
    return state.cartList.filter(item => item.check).reduce((pre, item) => {
      return pre + item.count
    }, 0)
  },
  totalPrice(state) {
    return state.cartList
      .filter(item => item.check)
      .reduce((pre, item) => pre + item.count * item.newPrice, 0)
  }
}