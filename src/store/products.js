export default {
    namespaced: true,
    state() {
        return {
            headphones: [
                {
                    id: 1,
                    new: true,
                    title: "XX99 Mark II Headphones",
                    img: "headphone-product-1",
                    description:
                        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
                    priceInDollars: 2999,
                    gallery: ['headphone-product-1-picture-1', "headphone-product-1-picture-2", "headphone-product-1-picture-3"],
                    mayLike: [
                        {
                            id: 1,
                            realLink: '/headphones/1',
                            img: 'headphone-product-1',
                            title: 'XX99 Mark II'
                        },
                        {
                            id: 2,
                            realLink: '/headphones/3',
                            img: 'headphone-product-3',
                            title: 'XX59'
                        },
                        {
                            id: 3,
                            realLink: '/speakers/1',
                            img: 'speaker-product-1',
                            title: 'ZX9 speaker'
                        },
                    ],
                    inTheBox: [
                        {
                            id: 1,
                            quantity: 1,
                            name: 'Headphone Unit',
                        },
                        {
                            id: 2,
                            quantity: 2,
                            name: 'Replacement Earcups',
                        },
                        {
                            id: 3,
                            quantity: 1,
                            name: 'User Manual',
                        },
                        {
                            id: 4,
                            quantity: 1,
                            name: '3.5mm 5m Audio Cable',
                        },
                        {
                            id: 5,
                            quantity: 1,
                            name: 'Travel Bag',
                        },

                    ]
                },
                {
                    id: 2,
                    new: false,
                    title: "XX99 Mark I Headphones",
                    img: "headphone-product-2",
                    description:
                        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
                    priceInDollars: 1750,
                    gallery: ['headphone-product-2-picture-1', "headphone-product-2-picture-2", "headphone-product-2-picture-3"],
                    mayLike: [
                        {
                            id: 1,
                            realLink: '/headphones/1',
                            img: 'headphone-product-1',
                            title: 'XX99 Mark II'
                        },
                        {
                            id: 2,
                            realLink: '/headphones/3',
                            img: 'headphone-product-3',
                            title: 'XX59'
                        },
                        {
                            id: 3,
                            realLink: '/speakers/1',
                            img: 'speaker-product-1',
                            title: 'ZX9 speaker'
                        },
                    ],
                    inTheBox: [
                        {
                            id: 1,
                            quantity: 1,
                            name: 'Headphone Unit',
                        },
                        {
                            id: 2,
                            quantity: 2,
                            name: 'Replacement Earcups',
                        },
                        {
                            id: 3,
                            quantity: 1,
                            name: 'User Manual',
                        },
                        {
                            id: 4,
                            quantity: 1,
                            name: '3.5mm 5m Audio Cable',
                        },

                    ]
                },
                {
                    id: 3,
                    new: false,
                    title: "XX59 Headphones",
                    img: "headphone-product-3",
                    description:
                        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
                    priceInDollars: 899,
                    gallery: ['headphone-product-2-picture-1', "headphone-product-2-picture-2", "headphone-product-2-picture-3"],
                    mayLike: [
                        {
                            id: 1,
                            realLink: '/headphones/1',
                            img: 'headphone-product-1',
                            title: 'XX99 Mark II'
                        },
                        {
                            id: 2,
                            realLink: '/headphones/3',
                            img: 'headphone-product-3',
                            title: 'XX59'
                        },
                        {
                            id: 3,
                            realLink: '/speakers/1',
                            img: 'speaker-product-1',
                            title: 'ZX9 speaker'
                        },
                    ],
                    inTheBox: [
                        {
                            id: 1,
                            quantity: 1,
                            name: 'Headphone Unit',
                        },
                        {
                            id: 2,
                            quantity: 2,
                            name: 'Replacement Earcups',
                        },
                        {
                            id: 3,
                            quantity: 1,
                            name: 'User Manual',
                        },
                        {
                            id: 4,
                            quantity: 1,
                            name: '3.5mm 5m Audio Cable',
                        },

                    ]
                },
            ],
            speakers: [
                {
                    id: 1,
                    new: true,
                    title: "ZX9 SPEAKER",
                    img: "speaker-product-1",
                    description:
                        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
                    priceInDollars: 4500,
                    gallery: ['speaker-product-1-picture-1', "speaker-product-1-picture-2", "speaker-product-1-picture-3"],
                    mayLike: [
                        {
                            id: 1,
                            realLink: '/headphones/1',
                            img: 'headphone-product-1',
                            title: 'XX99 Mark II'
                        },
                        {
                            id: 2,
                            realLink: '/headphones/3',
                            img: 'headphone-product-3',
                            title: 'XX59'
                        },
                        {
                            id: 3,
                            realLink: '/speakers/1',
                            img: 'speaker-product-1',
                            title: 'ZX9 speaker'
                        },
                    ],
                    inTheBox: [
                        {
                            id: 1,
                            quantity: 2,
                            name: 'Speaker Unit',
                        },
                        {
                            id: 2,
                            quantity: 2,
                            name: 'Speaker Cloth Panel',
                        },
                        {
                            id: 3,
                            quantity: 1,
                            name: 'User Manual',
                        },
                        {
                            id: 4,
                            quantity: 1,
                            name: '3.5mm 10m Audio Cable',
                        },
                        {
                            id: 5,
                            quantity: 1,
                            name: '10m Optical Cable',
                        },
                    ]
                },
                {
                    id: 1,
                    new: false,
                    title: "ZX7 SPEAKER",
                    img: "speaker-product-2",
                    description:
                        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
                    priceInDollars: 3500,
                    gallery: ['speaker-product-2-picture-1', "speaker-product-2-picture-2", "speaker-product-2-picture-3"],
                    mayLike: [
                        {
                            id: 1,
                            realLink: '/headphones/1',
                            img: 'headphone-product-1',
                            title: 'XX99 Mark II'
                        },
                        {
                            id: 2,
                            realLink: '/headphones/3',
                            img: 'headphone-product-3',
                            title: 'XX59'
                        },
                        {
                            id: 3,
                            realLink: '/speakers/1',
                            img: 'speaker-product-1',
                            title: 'ZX9 speaker'
                        },
                    ],
                    inTheBox: [
                        {
                            id: 1,
                            quantity: 2,
                            name: 'Speaker Unit',
                        },
                        {
                            id: 2,
                            quantity: 2,
                            name: 'Speaker Cloth Panel',
                        },
                        {
                            id: 3,
                            quantity: 1,
                            name: 'User Manual',
                        },
                        {
                            id: 4,
                            quantity: 1,
                            name: '3.5mm 7.5m Audio Cable',
                        },
                        {
                            id: 5,
                            quantity: 1,
                            name: '7.5m Optical Cable',
                        },
                    ]
                },

            ],
            earphones: [
                {
                    id: 1,
                    new: true,
                    title: "YX1 wireless earphones",
                    img: "earphone-product-1",
                    description:
                        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
                    priceInDollars: 599,
                    gallery: ['earphone-product-1-picture-1', "earphone-product-1-picture-2", "earphone-product-1-picture-3"],
                    mayLike: [
                        {
                            id: 1,
                            realLink: '/headphones/1',
                            img: 'headphone-product-1',
                            title: 'XX99 Mark II'
                        },
                        {
                            id: 2,
                            realLink: '/headphones/3',
                            img: 'headphone-product-3',
                            title: 'XX59'
                        },
                        {
                            id: 3,
                            realLink: '/speakers/1',
                            img: 'speaker-product-1',
                            title: 'ZX9 speaker'
                        },
                    ],
                    inTheBox: [
                        {
                            id: 1,
                            quantity: 2,
                            name: 'Earphone Unit',
                        },
                        {
                            id: 2,
                            quantity: 6,
                            name: 'Multi-size Earplugs',
                        },
                        {
                            id: 3,
                            quantity: 1,
                            name: 'User Manual',
                        },
                        {
                            id: 4,
                            quantity: 1,
                            name: 'USB-C Charging Cable',
                        },
                        {
                            id: 5,
                            quantity: 1,
                            name: 'Travel Pouch',
                        },
                    ]
                },
            ]
        }
    },
    getters: {
        headphones(state) {
            return state.headphones
        },
        speakers(state) {
            return state.speakers
        },
        earphones(state) {
            return state.earphones
        },
    }
}