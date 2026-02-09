'use client'
import React from 'react'

//http://localhost:3000/select-name
const Page = () => {
    return (
        <div>
            <label htmlFor="pet-select">Choose a pet:</label>
            <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            <label htmlFor="car-select">Choose a car:</label>
            <select id="car-select">
                <option value="tesla">Tesla</option>
                <option value="ford">Ford</option>
                <option value="chevy">Chevy</option>
                <option value="mercedes">Mercedes</option>
                <option value="bmw">BMW</option>
            </select>
        </div>
    )
}

export default Page
