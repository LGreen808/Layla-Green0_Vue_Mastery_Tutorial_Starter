const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'These socks are made of 100% cotton, in the United States, and come in two different colors blue and green!',
            selectedVariant: 0,
            url: 'https://www.amazon.com/',
         
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            sizes: [
                'Small', 'Medium', 'Large'
            ]
        }
    }, 
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
            
        }, 
        removeFromCart() {
            this.cart -= 1
        }

    },
    computed: {
         title() {
            return this.brand + ' ' + this.product
         },
         image() {
            return this.variants[this.selectedVariant].image
         },
        inStock() {
            return this.variants[this.selectedVariant].quantity
         }
    }
})