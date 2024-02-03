import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddProduct = () => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const navigate = useNavigate();

    const AddProductInfo = async()=>{
        let formFeild = new FormData()
        formFeild.append('name',name)
        formFeild.append('price',price)
        formFeild.append('description',description)
        formFeild.append('category',category)
        if(image !== null){
            formFeild.append('image',image)
        }
        await axios({
           method :'post',
           url : 'http://127.0.0.1:8000/api/',
           data: formFeild
        }).then((response)=>{
            console.log(response.data)
            navigate('/');
        })
    }
    return (
        <div>
            <h1>Add Product</h1>
            <div className="container">
                <div className="form-group my-3">
                    <input type="text" className="form-control form-control-lg"
                        placeholder="Enter product Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                </div>
                <div className="form-group my-3">
                    <input type="text" className="form-control form-control-lg"
                        placeholder="Enter product price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}>
                    </input>
                </div>
                <div className="form-group my-3">
                    <input type="text" className="form-control form-control-lg"
                        placeholder="Enter product Category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                    </input>
                </div>
                <div className="form-group my-3">
                    <textarea type="text" className="form-control form-control-lg"
                        placeholder="Enter product Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <div className="form-group my-3">
                    <input type="file" className="form-control form-control-lg"
                        placeholder="Enter product Category"
                        name="image"
                        onChange={(e) => setImage(e.target.files[0])}>
                    </input>
                </div>
                <button className="btn btn-success" onClick={AddProductInfo}>Add Product</button>
            </div>
        </div>
    );
};
export default AddProduct;