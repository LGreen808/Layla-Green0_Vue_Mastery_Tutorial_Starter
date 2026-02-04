const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'These socks are made of 100% cotton, in the United States, and come in two different colors blue and green!',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.amazon.com/',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue'},
            ],
            sizes: [
                'Small', 'Medium', 'Large'
            ]
        }
    }
})