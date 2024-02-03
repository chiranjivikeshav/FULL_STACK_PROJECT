import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const ProductDetail = ()=>{
    const [product,setProduct] = useState("")
    const {id} = useParams();
    const navigate = useNavigate()
    
    const getSingleProduct = async() => {
      const { data } = await axios.get(`http://localhost:8000/api/${id}/`);
      setProduct(data);
    }
    useEffect(() => {
        getSingleProduct();
    }, []);
    // delete product
    const DeleteProduct = async (id) => {
      await axios.delete(`http://localhost:8000/api/${id}/`)
      navigate('/')
    }
    return (
        <div>
          <div className="single-product-info">
            <img src = {product.image} weight ="200" height ="300"></img>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <Link className="btn btn-primary mx-3" to ={`/${product.id}/update`}>Update</Link>
              <Link className="btn btn-danger mx-3" onClick={()=>DeleteProduct(product.id)}>Delete</Link>
          </div>
        </div>
    );
};
export default ProductDetail;