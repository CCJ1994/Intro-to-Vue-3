app.component('product-details', {
  props:{
    details: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `<ul>
    <li v-for="detail in details">{{ detail }}</li>
    </ul>`,
    data() {
      return {
          product: 'Socks',
          brand: 'Vue Mastery',
          selectedVariant: 0,
          details: ['50% cotton', '30% wool', '20% polyester'],
          variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          ]
      }
  },
  methods: {
  },
  computed: {
    productDetails() {
      if(this.details){
        return this.details
      }
    },
  }
})