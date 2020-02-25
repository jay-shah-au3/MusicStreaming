import React from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import {NavbarContainer , ImageContainer} from './header.styles.js';
import brand_icon from '../../assets/headphones.png';
const Header = ({history}) => {
    let path = history.location.pathname;
    return(
        <NavbarContainer className="navbar navbar-expand-lg navbar-default">
            <Link className="navbar-brand" to="/">
                <ImageContainer src={brand_icon}/>
                GLIDE
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className={`nav-link ${path==='/tracks' ? 'active':''}`} to="/tracks">Tracks<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${path==='/artists' ? 'active':''}`} to="/artists">Artists</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${path==='/tags' ? 'active':''}`} to="/tags">Tags</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${path==='/search' ? 'active':''}`} to="/search">Search</NavLink>
                    </li>
                </ul>
            </div>
        </NavbarContainer>
    )
}

export default withRouter(Header);