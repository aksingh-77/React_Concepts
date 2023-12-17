const Form = (props) => {
    const handleInput = e=>{
        props.onChangeInput(e)
    }

    const handleSumit = e => {
        props.onFormSubmission(e)
    }

    // Here we have got the reference to the function using props methods
    //Now, whenever their is some change on input the method referenced to onChnageInput is called
    //onChangeEvent will the the paramaeter as event to the method defination at Products.js page which a parent of the Form.js
    return (
        <div>
            <form onSubmit={handleSumit}>
            <h2>Item Card Details</h2>
            <div>
                <label htmlFor="title" > Title </label>
                <input
                    name = "title" 
                    type="text" 
                    placeholder="Enter Title" 
                    onChange={handleInput}
                    value={props.item.title}
                    required
                ></input>
            </div>
            <div>
                <label htmlFor="discountedPrice" > Discounted Price </label>
                <input 
                    name="discountedPrice"
                    type="number" 
                    // placeholder="Enter Discounted Price" 
                    onChange={handleInput}
                    value={props.item.discountedPrice}
                    required
                ></input>
            </div>
            <div>
                <label htmlFor="price" > Price </label>
                <input 
                    name="price"
                    type="number" 
                    // placeholder="Enter Price" 
                    onChange={handleInput}
                    value={props.item.price}
                    required
                ></input>
            </div>
            <div>
                <label htmlFor="thumbnail" > Thumbnail </label>
                <input 
                    name="thumbnail"
                    type="text" 
                    placeholder="Enter Thumbnail" 
                    onChange={handleInput}
                    value={props.item.thumbnail}
                    required
                ></input>
            </div>
            <button className={"submit-wrap"}>Update</button>
        </form>
    </div>

    )
}
export default Form;