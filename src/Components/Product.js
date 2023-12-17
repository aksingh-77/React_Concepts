import { useState } from "react"
import ListItem from "./ListItem"
import Form from "./Form"

// const item = {
//     id: 0,
//     title: "Title of this Item 1",
//     price: 450,
//     discountedPrice: 340,
//     thumbnail: "placeholder.png"
// }

const Product = () => {

    const [item, setItem] = useState({
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        if(item.discountedPrice > item.price){
            alert("Discounted price cannot be greater than price");
            return;
        }
        console.log("item updated ")
    }

    const handleInput = (event) => {
        setItem({
            ...item,
            [event.target.name] : event.target.value
        })

    }

    return (
        <div className={"product-wrapper"}>
            <div className={"form"}>
                {/* Here we have used props methods to make communication between child form and parent products */}
               <Form item={item} onChangeInput={handleInput} onFormSubmission={handleSubmit}/>
            </div>
            <div>
                <div>
                    <ListItem data={item} />
                </div>
            </div>
        </div>
    )
}

export default Product
