import AddToCartIcon from "../assets/icons/add_cart.svg"
import { useState } from "react"

const ListItem = ({ data }) => {

    const [message, setMessage] = useState("Not added to the cart yet")
    const [counter , setCounter] = useState(0);

    // let message = "Not added to the cart yet"
    const handleClick = () => {
        // message = "Added to the cart!"
        setMessage("Added to the Cart!")
        console.log("Clicked, ", message)
    }

    const increasedCountByOne = (event) =>{
        setCounter(counter+1);
    }

    const decreasedCountByOne = (event) =>{
        if(counter === 0){
            return;
        }
        setCounter(counter -1);

    }

    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    <small>
                        <strike>₹{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            <small className={"cart-message"}>{message}</small>
            {/* <button className={"cart-add"} onClick={handleClick}>
                <span>Add to Cart</span>
                <img src={AddToCartIcon} alt="Cart Icon"/>
            </button> */}
            <div className={"cart-addon"}>
                <button onClick={decreasedCountByOne}><span>-</span></button>
                <span className={"counter"}>{counter}</span>
                <button onClick={increasedCountByOne}><span>+</span></button>
            </div>
        </div>
    )
}

export default ListItem
