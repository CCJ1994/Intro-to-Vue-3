const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
			updateCart(id){
				this.cart.push(id)
			},
			removeItem(id){
				if(this.cart.length > 0){
					this.cart.pop(id)
				}
			}
		}
})
