import React, { useState, useEffect } from 'react';

import './css/navbar.css';
import './css/menu.css';

import axios from 'axios';

const url = "https://viveksem3apiv4.azurewebsites.net/api/menu";

const menu = [
    {
        type: 'Lunch',
        item: 'Paneer',
        date: '26/11/2022',
        ingredients: 'Mushroom / Garlic / Veggies'
    },
    {
        type: 'Dinner',
        item: 'Chole',
        date: '21/11/2022',
        ingredients: 'Mushroom / Garlic / Veggies'
    },
    {
        type: 'Breakfast',
        item: 'Bread-Butter',
        date: '22/11/2022',
        ingredients: 'Mushroom / Garlic / Veggies'
    },

];

const MenuPrint = () => {
    // e.preventDefault();
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setFood(response.data[0])
                console.log(food)
                setFoodDate(response.data[0][0].Date.slice(0,10))
                setFoodIng(response.data[0][0].Ingredients)
                setFoodItem(response.data[0][0].ItemName)
                setFoodType(response.data[0][0].MealType)
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    const [fooddate, setFoodDate] = useState('');
    const [foodtype, setFoodType] = useState('');
    const [fooditem, setFoodItem] = useState('');
    const [fooding, setFoodIng] = useState('');
    const [food, setFood] = useState('');

    return (
        // food.length.map((food) => (
            <div class="col-3-mon-1">
                <div class="menu-list-1">
                    <div class="dish-name">
                        <p>{fooddate}</p>
                        <p>{foodtype}</p>
                        <h2>{fooditem}</h2>
                        <p className='ingredients'>{fooding}</p>
                    </div>
                </div>
            </div>
        // ))
    )
}

const Menu = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-md-12">
                    <div class="header">
                        <h1 class="heading-1">OUR MENU</h1>
                    </div>
                </div>
            </div>
            <div class="clear-food">
                <div class="menu-food">
                    <ul class="menu-food-pennal" style={{ height: 43 + 'px' }}></ul>
                    <div class="food-list">
                        <div class="list-1">
                            <MenuPrint />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <nav class="nav">
                <div class="nav-main">
                    <div class="logo">Hostel<span>Mess</span></div>
                    <ul class="nav-links">
                        <li class="nav-link dropdown"><a href="" class="dropdown">Specials <i
                            class="bi bi-chevron-compact-down"></i></a>
                            <ul class="dropdown-list">
                                <li class="nav-link"><a href="">Basundi</a>
                                    <li class="nav-link">
                                        <a href="">Brownie</a>
                                    </li>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-link"><a href="/guest">Add Guest</a></li>
                        <li class="nav-link"><a href="/leave">Apply Leave</a></li>
                        <li class="nav-link"><a href="/profile">Profile</a></li>
                    </ul>
                </div>
            </nav>
            <Menu />
        </div>
    );
};

export default Home;