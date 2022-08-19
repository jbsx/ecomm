import {useState, useEffect} from'react';
import '../css/products.css';
const axios = require('axios').default;

function Products() {
    const[products, setProducts] = useState([
        {
            //https://dev.mysql.com/blog-archive/storing-uuid-values-in-mysql-tables/
            productID: "",
            name:"",
            price: 0,
            description: "",
            img: "",
        }
    ]);
    useEffect(()=>{
        axios.get('http://localhost:3300/get')
        .then(function (response) {
            // handle success
            setProducts(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, []);
    useEffect(()=>console.log(products), [products]);

    //insert into products (product_id, name, price, description, image) values(unhex(replace(uuid(),'-','')), 'test', 69, 'test desc hello', LOAD_FILE('/home/jaish/Pictures/182zcwiq52n31.png'));

    return (
        <div className="Products">
            {
                products.map((obj) => {

                    return <div className="Product">
                        <img className='pimg' src={obj.img}/>
                        <span className='productName'>{obj.name}</span>
                        <span className='productPrice'>${obj.price}</span>
                        </div>
                })
            }
        </div>
    );
}

export default Products;
