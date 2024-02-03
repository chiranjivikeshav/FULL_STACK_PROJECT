import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
const UpdateProduct = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const { id } = useParams();
  const loadProducts = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/${id}/`)
    setImage(data.image)
    setName(data.name)
    setPrice(data.price)
    setCategory(data.category)
    setDescription(data.description)
  }
  useEffect(() => {
    loadProducts()
  }, [])
  const UpdateProductInfo = async()=>{
    let formFeild = new FormData()
    formFeild.append('name',name)
    formFeild.append('price',price)
    formFeild.append('description',description)
    formFeild.append('image',image)
    formFeild.append('category',category)
    await axios({
         method : 'PUT',
         url: `http://localhost:8000/api/${id}/`,
         data :formFeild
    }).then(
      navigate('/')
    )
  } 
  return (
    <div>
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
          <img src = {image} height = "300" width="200"/>
          <input type="file" className="form-control form-control-lg"
            placeholder="Enter product Category"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}>
          </input>
        </div>
        <button className="btn btn-success" onClick={UpdateProductInfo}>Upadate Product</button>
      </div>
    </div>
  );
};
export default UpdateProduct;