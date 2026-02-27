import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: '1',
        name: 'Product1',
        desc: 'This is an amazing product',
        price: '300',
        amount: '30',
        reactions: {
            good: 0,
            soso: 0,
            bad: 0,
        },
    },
    {
        id: '2',
        name: 'Product2',
        desc: 'This is a nice product',
        price: '700',
        amount: '12',
        reactions: {
            good: 0,
            soso: 0,
            bad: 0,
        },
    },
]
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, desc, price, amount, sellerId) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        desc,
                        price,
                        amount,
                        seller: sellerId,
                        reactions: {
                            good: 0,
                            soso: 0,
                            bad: 0,
                        },
                    },
                }
            },
        },
        reactionClicked(state, action) {
            const { productId, reaction } = action.payload
            const currentProduct = state.find(product => product.id === productId)
            if (currentProduct) {
                currentProduct.reactions[reaction]++
            }
        },
    },
})
export const {
    reactionClicked,
    productAdded,
    productUpdated
} = productsSlice.actions
export default productsSlice.reducer