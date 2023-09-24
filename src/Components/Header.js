import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getItemSelector } from '../redux/slices/cartSlice';

const Header = () => {
    const items = useSelector(getItemSelector);
    return (
        <div className='header-conatiner'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to='/'>
                    <img src='./images/Flipkart_Logo.png' className='logo' />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/'>Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/sells'>Sells</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to='/cart'>
                                <button type="button" className="btn btn-primary position-relative">
                                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                       {items.length}
                                    </span>
                                </button>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to='/login'>
                                <button className='btn btn-primary' >Login <i class="fas fa-sign-in-alt"></i></button>
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Header;