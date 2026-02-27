import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import  {UserReactions} from "./UserReactions";

export const ProductPage = () => {
    let params = useParams()
    const { productId } = params

    const product = useSelector((state) =>
        state.products.find((product) => product.id === productId)
    )

    if (!product) {
        return <p>No such product</p>
    }
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Description: {product.desc}</p>
            <p>Price: {product.price}</p>
            <p>Amount:{product.amount}</p>
            <UserReactions product={product} />

        </div>
    )
}