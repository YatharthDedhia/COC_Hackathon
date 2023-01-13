import React, { useState, useEffect } from 'react';

import './css/navbar.css';
import './css/menu.css';

const Menu = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-md-12">
                    <div class="header">

                        <h1 class="heading-1">OUR MENU</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div class="clear-food">
                <div class="menu-food">
                    <ul class="menu-food-pennal"></ul>
                    <div class="food-list">
                        <div class="list-1">
                            <div class="col-3-mon-1">
                                <div class="menu-list-1">
                                    <div class="pull-left food-img-1">
                                        <img class="hinh-1" src="https://www.multipurposethemes.com/html-templates/morsel/images/menu-dish/dish-1.png" alt="" />
                                    </div>
                                    <div class="dish-name">
                                        <h4> ITALIAN SOURCE MUSHROOM</h4>
                                        <p>Mushroom / Garlic / Veggies</p>
                                        <div class="dishs-price"><span>$12</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3-mon-1">
                                <div class="menu-list-1">
                                    <div class="pull-left food-img-1">
                                        <img class="hinh-1" src="https://www.multipurposethemes.com/html-templates/morsel/images/menu-dish/dish-2.png" alt="" />
                                    </div>
                                    <div class="dish-name">
                                        <h4> ITALIAN SOURCE MUSHROOM</h4>
                                        <p>Mushroom / Garlic / Veggies</p>
                                        <div class="dishs-price"><span>$12</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3-mon-1">
                                <div class="menu-list-1">
                                    <div class="pull-left food-img-1">
                                        <img class="hinh-1" src="https://www.multipurposethemes.com/html-templates/morsel/images/menu-dish/dish-3.png" alt="" />
                                    </div>
                                    <div class="dish-name">
                                        <h4> ITALIAN SOURCE MUSHROOM</h4>
                                        <p>Mushroom / Garlic / Veggies</p>
                                        <div class="dishs-price"><span>$12</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3-mon-1">
                                <div class="menu-list-1">
                                    <div class="pull-left food-img-1">
                                        <img class="hinh-1" src="https://www.multipurposethemes.com/html-templates/morsel/images/menu-dish/dish-4.png" alt="" />
                                    </div>
                                    <div class="dish-name">
                                        <h4> ITALIAN SOURCE MUSHROOM</h4>
                                        <p>Mushroom / Garlic / Veggies</p>
                                        <div class="dishs-price"><span>$12</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3-mon-1">
                                <div class="menu-list-1">
                                    <div class="pull-left food-img-1">
                                        <img class="hinh-1" src="https://www.multipurposethemes.com/html-templates/morsel/images/menu-dish/dish-5.png" alt="" />
                                    </div>
                                    <div class="dish-name">
                                        <h4> ITALIAN SOURCE MUSHROOM</h4>
                                        <p>Mushroom / Garlic / Veggies</p>
                                        <div class="dishs-price"><span>$12</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3-mon-1">
                                <div class="menu-list-1">
                                    <div class="pull-left food-img-1">
                                        <img class="hinh-1" src="https://www.multipurposethemes.com/html-templates/morsel/images/menu-dish/dish-6.png" alt="" />
                                    </div>
                                    <div class="dish-name">
                                        <h4> ITALIAN SOURCE MUSHROOM</h4>
                                        <p>Mushroom / Garlic / Veggies</p>
                                        <div class="dishs-price"><span>$12</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3-mon-1">
                                <div class="menu-list-1">
                                    <div class="pull-left food-img-1">
                                        <img class="hinh-1" src="https://www.multipurposethemes.com/html-templates/morsel/images/menu-dish/dish-7.png" alt="" />
                                    </div>
                                    <div class="dish-name">
                                        <h4> ITALIAN SOURCE MUSHROOM</h4>
                                        <p>Mushroom / Garlic / Veggies</p>
                                        <div class="dishs-price"><span>$12</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3-mon-1">
                                <div class="menu-list-1">
                                    <div class="pull-left food-img-1">
                                        <img class="hinh-1" src="https://www.multipurposethemes.com/html-templates/morsel/images/menu-dish/dish-8.png" alt="" />
                                    </div>
                                    <div class="dish-name">
                                        <h4> ITALIAN SOURCE MUSHROOM</h4>
                                        <p>Mushroom / Garlic / Veggies</p>
                                        <div class="dishs-price"><span>$12</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3-mon-1">
                                <div class="menu-list-1">
                                    <div class="pull-left food-img-1">
                                        <img class="hinh-1" src="https://www.multipurposethemes.com/html-templates/morsel/images/menu-dish/dish-9.png" alt="" />
                                    </div>
                                    <div class="dish-name">
                                        <h4> ITALIAN SOURCE MUSHROOM</h4>
                                        <p>Mushroom / Garlic / Veggies</p>
                                        <div class="dishs-price"><span>$12</span></div>
                                    </div>
                                </div>
                            </div>
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