import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Sidebar() {
    return (

       <>

        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Button variant="dark" className="navbar-toggler bg-dark position-absolute d-md-none collapsed mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>
        </header>

        <nav id="sidebarMenu" className="col-md-2 col-lg-2 d-md-block sidebar collapse ">
                <div className="position-sticky pt-3">
                    <h4 className="fw-bold text-center text-light">  APRODITE</h4>
                    <ul className="nav flex-column mt-5 navs">
                        <li>
                            <NavLink activeClassName="" className="nav-link text-white fs-5 " to="/overview">
                                <i class=' me-3 bx bxs-pie-chart-alt-2'></i>
                                 Overview
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink exact activeClassName="" className="nav-link text-white fs-5 " to="/ideas">
                                <i class="me-3 bi bi-lightbulb-fill"></i> 
                                 Ideas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="" className="nav-link text-white fs-5" to="/agents"> 
                                <i class='me-3 bx bxs-user'></i>
                                Agents
                             </NavLink>
                        </li> */}
                    </ul>
                </div>
        </nav>
       </>

    );
}


export default Sidebar;