const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'These socks are made of 100% cotton, in the United States, and come in two different colors blue and green!',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.amazon.com/'
        }
    }
})