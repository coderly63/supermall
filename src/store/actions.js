export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      console.log("加入了购物车");
      const old = context.state.cartList.find(item => item.iid === payload.iid)
      if (old) {
        context.commit('addCounter', old)
        resolve("商品数量加一")
      }
      else {
        payload.count = 1
        payload.check = true
        context.commit('addToCart', payload)
        resolve("加入新的商品")
      }
    })
  },
}