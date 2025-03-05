import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import { useDispatch, useCart, useDispatchCart } from './ContextReducer';

const Card = (props) => {

    let dispatch = useDispatchCart()
    let data = useCart()
    const priceRef = useRef(0)
    let options = props.options;
    let foodItems = props.fooditem;
    let amtOptions = Object.keys(options);  //amount of each option


    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")

    const handleAddToCart = async () => {
        console.log()
        await dispatch({ type: "Add", id: foodItems._id, name: foodItems.name, price: finalPrice, qty: qty, size: size })
        console.log(data)
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value);
    }, [])


    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                <Link to='/' title={foodItems.description} style={{ alignSelf: "center" }}>
                    <img className="card-img-top" src={foodItems.img} alt="Cardcap" style={{ height: "12rem", width: "17rem", paddingTop: "0.5rem" }} />
                </Link>
                <div className='mt-3 mx-3'>
                    <h5 className="card-title">{foodItems.name}</h5>

                    <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <select className=' text-success' onChange={(e) => setQty(e.target.value)} style={{ backgroundColor: '#ececec', fontWeight: 'bold' }}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className='mx-4 text-success' ref={priceRef} onChange={(e) => setSize(e.target.value)} style={{ backgroundColor: '#ececec', fontWeight: 'bold' }}>
                            {amtOptions.map(data => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>

                        <input type="checkbox" checked="true" disabled style={{
                            appearance: 'none',  // Remove default styling of the checkbox
                            marginLeft: '50px',
                            marginRight: '4px',
                            backgroundColor: foodItems.preference === 'Veg' ? '#05aa33' : '#aa0505',
                            borderRadius: '4px',  // Optional: to make it look more like a custom box
                            borderColor: 'white',
                            borderWidth: '2px',  // Set the border width (you can adjust this as needed)
                            borderStyle: 'solid',
                            width: '20px',
                            height: '20px',
                            position: 'relative'
                        }} />
                    </div>

                </div>
                <hr />
                <div style={{ marginBottom: '10px' }}>
                    <div className='container w-100 d-flex' style={{ justifyContent: 'space-between' }}>
                        <div className='d-inline h-100 fs-5' style={{ marginLeft: '15px' }}>
                            Rs. {finalPrice}/-
                        </div>
                        <div style={{ marginRight: '15px' }}>
                            <button className="btn text-white" onClick={handleAddToCart} style={{ backgroundColor: '#41B06E', fontWeight: 'bold' }}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card