import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';


const ProductList = [{
  name:'Mac Book',
  price:124499,
  imgSrc:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1654122880566',
  id:'qwerty'
},
{
  name:'Black Canvas Shoes',
  price:656,
  imgSrc:'https://m.media-amazon.com/images/I/61DSEfdR2NL._UL1043_.jpg',
  id:'asdfg'
},
{
  name:'Black Anime T-Shirt',
  price:356,
  imgSrc:'https://m.media-amazon.com/images/I/415eo9qRoJL.jpg',
  id:'qqwe1'
},
{
  name:'Logitech G502 Hero',
  price:4550,
  imgSrc:'https://cdn.mos.cms.futurecdn.net/HWBU79D4ueo8csjaDfZcnh-1200-80.png.webp',
  id:'usdff2'
},
{
  name:'LG Ultragear32 Inch',
  price:24498,
  imgSrc:'https://www.sgltechno.com/wp-content/uploads/2022/11/32gn650-b-image-03-600x600-1.webp',
  id:'lser3'
},
{
  name:'Wiro Bound Sketch Book',
  price:1000,
  imgSrc:'https://m.media-amazon.com/images/I/415VqUhACeL.jpg',
  id:'fsesdsr4'
},
{
  name:'MSI GeForce RTX 4090',
  price:201276,
  imgSrc:'https://m.media-amazon.com/images/I/71hdRXexOeL._SL1500_.jpg',
  id:'lbsdsr5'
},
{
  name:'Apple iPhone 14 Pro Max',
  price:201276,
  imgSrc:'https://m.media-amazon.com/images/I/610pghkO81L._SL1500_.jpg',
  id:'jkfjll6'
},


];


const Home = () => {

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    
    dispatch({type:"addToCart", payload:options})
      toast.success('Added to cart')
      dispatch({type:'calculatePrice'});
  }



  return (
    <div className='home'>
      {
        ProductList.map((i)=>(
          <ProductCard key={i.id} name={i.name} price={i.price} imgSrc={i.imgSrc} id={i.id} handler={addToCartHandler}/>
        ))
      }
    </div>
  )
}

const ProductCard = (({name, id, price, handler, imgSrc}) => (
  <div className='productCard'>
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={()=> handler({name,price,quantity:1,imgSrc,id})}>Add to cart</button>
  </div>
))

export default Home
