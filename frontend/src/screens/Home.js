import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import { FaSearch } from 'react-icons/fa';

const Home = () => {

    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectPreference, setselectPreference] = useState('');

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/auth/foodData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})  // Sending an empty JSON object
            });

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            // Parse the response as JSON
            let data = await response.json();
            // response[0]= global.foodList
            // response[1]= global.foodCategory
            // becuase in fooddata api (DisplayData.js) we have res.send([global.foodList, global.foodCategory])
            // console.log(response[0])
            // console.log(response[1])

            // Assuming the response has [foodList, foodCategory]
            setFoodCategory(data[1]);
            setFoodItem(data[0]);

        } catch (error) {
            console.error("Error loading data:", error);
        }
    };

    useEffect(() => {
        loadData()
    }, [])   //[] loads the data only once when we start the app

    // Handle search input change
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value.toLowerCase()); // update the search term
    };



    // Prevent form submission on Enter key press
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on Enter key press
    };

    const handleRadioClick = (e) => {
        const newPreference = e.target.value;
        if (selectPreference === newPreference) {
            setselectPreference('');
            document.getElementById(e.target.id).checked = false;
        }
        else { setselectPreference(e.target.value) }

    }


    // Filter food items based on the search term
    const filteredItems = foodItem.filter(item =>
        // Filter by CategoryName (case-insensitive search)
        item.CategoryName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        // Further filter based on selectPreference
        (selectPreference === '' || item.preference.includes(selectPreference))
    );



    return (
        <>
            <div><Navbar></Navbar></div>
            <div className='mt-3'><Carousal></Carousal></div>

            {/* --- Search Functionality --- */}
            <div className="mt-3 input-group" style={{ display: 'flex', alignItems: 'center' }}>
                <form onSubmit={handleFormSubmit} className="d-flex" style={{ width: '50%', marginLeft: '32%' }}>
                    <div style={{ position: 'relative', width: '75%' }}>
                        <input value={searchTerm} onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search here" aria-label="Search" />
                        <FaSearch style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)', // Center the icon vertically
                            color: '#aaa', // Icon color
                            marginLeft: searchTerm.length > 0 ? '515px' : '535px'
                        }} />
                    </div>
                </form>
            </div>


            <div className="d-flex d-inline justify-content-center mt-3" style={{ display: 'inline-block' }}>
                <section id="first" className="section">
                    <div className="radio-container">
                        <input type="radio" name="group1" id="radio-1" value="Veg" onClick={handleRadioClick} />
                        <label htmlFor="radio-1"><span className="radio">Veg</span></label>
                    </div>
                    <div className="radio-container">
                        <input type="radio" name="group1" id="radio-2" value="Non" onClick={handleRadioClick} />
                        <label htmlFor="radio-2"><span className="radio">Non-Veg</span></label>
                    </div>
                </section>
            </div>


            {/* --- Display Cards/ Food Items --- */}
            <div className='container'>
                {
                    <div className="row mb-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5rem' }}>
                        {filteredItems.map((item, index) => (
                            <div key={item._id} className="col-12 col-md-6 col-lg-4">
                                <Card fooditem={item}
                                    options={item.options[0]}
                                />
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div ><Footer></Footer></div>
        </>
    )
}

export default Home