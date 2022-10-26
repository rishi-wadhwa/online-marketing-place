const products = [
    {
        id:1,
        name:"Sennheiser HD 450BT Kablosuz Bluetooth ANC Kulaklık, Siyah",
        price:"45.00",
        rating:'3.5',
        section:'headphones',
        productSrc:import('@assets/images/products/product-' + '1' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:2,
        name:"JBL Wave 100TWS, Kablosuz Kulakiçi Kulaklık, IE, Standart, Siyah",
        price:"76.50",
        rating:'1.0',
        section:'headphones',
        productSrc:import('@assets/images/products/product-' + '2' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:3,
        name:"JBL Tune 510BT: Wireless On-Ear Headphones with Purebass Sound - Blue",
        price:"79.99",
        rating:'0.5',
        section:'headphones',
        productSrc:import('@assets/images/products/product-' + '3' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:4,
        name:"Tiksounds Wireless Earbuds, Bluetooth 5.3 Headphones, Bluetooth Earbuds with LED Display, 60 Hrs of Playtime, IPX7 Waterproof, Stereo Sound, Over Ear Earphones with Mic for Sports Running Workout Gym",
        price:"45.00",
        rating:'1.5',
        section:'headphones',
        productSrc:import('@assets/images/products/product-' + '4' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:5,
        name:"Audio-Technica ATH-M50xBT2 Wireless Over-Ear Headphones",
        price:"66.00",
        rating:'4.5',
        section:'headphones',
        productSrc:import('@assets/images/products/product-' + '5' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:6,
        name:"Apple EarPods Headphones with Lightning Connector. Microphone with Built-in Remote to Control Music, Phone Calls, and Volume. Wired Earbuds for iPhone",
        price:"78.00",
        rating:'2.5',
        section:'headphones',
        productSrc:import('@assets/images/products/product-' + '6' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:7,
        name:"Yamaha YH-L700A Wireless Noise-Cancelling Headphones with 3D Sound – Over-Ear, Listening Optimizer, Advanced ANC Active Noise-Cancelling, Bluetooth 5 with aptX Adaptive, Black",
        price:"420.00",
        rating:'2.5',
        section:'headphones',
        productSrc:import('@assets/images/products/product-' + '7' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:8,
        name:"Earphones 3 Pack in-Ear Headphones with Microphone,3.5mm Wired Earbuds for iOS and Android Smartphones, Laptops, MP3, Gaming",
        price:"23.50",
        rating:'3.5',
        section:'headphones',
        productSrc:import('@assets/images/products/product-' + '8' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:9,
        name:"Sousuoty Cold Shoulder Tops for Women Casual Summer Shirts Cute Lace Blouses",
        price:"899.99",
        rating:'0.5',
        section:'women-clothes',
        productSrc:import('@assets/images/products/product-' + '9' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:10,
        name:"Mickey Balloons Shirt, Disney Leopard Shirt, Animal Kingdom Shirt, Safari Shirt Casual Short Sleeve Shirt",
        price:"45.00",
        rating:'4.5',
        section:'women-clothes',
        productSrc:import('@assets/images/products/product-' + '10' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:11,
        name:"AJAYR Women's Short Sleeve V Neck T Shirts Casual Summer Slim Fit Basic Tunic Tops Tee",
        price:"39.99",
        rating:'3.0',
        section:'women-clothes',
        productSrc:import('@assets/images/products/product-' + '11' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:12,
        name:"Yawarakai Womens Summer V Neck T Shirts Short Sleeve Fashion Tops",
        price:"99.99",
        rating:'3.5',
        section:'women-clothes',
        productSrc:import('@assets/images/products/product-' + '12' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:13,
        name:"Marcy 150-lb Multifunctional Home Gym Station for Total Body Training",
        price:"786.00",
        rating:'4.5',
        section:'spor',
        productSrc:import('@assets/images/products/product-' + '13' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:14,
        name:"Bowflex SelectTech 552 Adjustable Dumbbell",
        price:"13.00",
        rating:'1.5',
        section:'spor',
        productSrc:import('@assets/images/products/product-' + '14' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:15,
        name:"REPSTON Pilates Bar Kit with Resistance Bands - Portable Pilates Bar Kit - Work from Home Fitness - Resistance Band with Bar - Pilates Bar for Women and Men...",
        price:"345.00",
        rating:'2.5',
        section:'spor',
        productSrc:import('@assets/images/products/product-' + '15' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    },
    {
        id:16,
        name:"Resistance Band 11PC Fitness Exercise Workout from Home Set",
        price:"30.50",
        rating:'2.0',
        section:'spor',
        productSrc:import('@assets/images/products/product-' + '16' + '.png'),
        ratingSrc:function() {
            return import('@assets/icon/e-commerce-five-stars-' + this.rating + '.png')
        }
    }
    
]

export default products;