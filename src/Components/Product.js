import ListItem from "./ListItem"

const item = {
    id: 0,
    title: "Title of this Item 1",
    price: 450,
    discountedPrice: 340,
    thumbnail: "placeholder.png"
}

const Product = () => {
    return (
        <div className={"product-wrapper"}>
            <div className={"form"}>
                {/* Form */}
            </div>
            <div>
                <div>
                    <ListItem data={item} />
                    {/* <p>Heelo World</p> */}
                </div>
            </div>
        </div>
    )
}

export default Product