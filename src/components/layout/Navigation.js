import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "../home/Home";
import {Grass} from "../grass-types/Grass";
import Contact from "../contact/Contact";
import MonsterDetail from "../data/MonsterDetail";

export function Navigation() {
    return (
        <Router>
            <div>
                <Navbar expand="lg">                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="grass-types" className="nav-link">
                                Grass Types
                            </NavLink>                            
                            <NavLink to="contact" className="nav-link">
                                Contact
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="monster/:id" element={MonsterDetail} />                    
                    <Route path="grass-types" element={<Grass />} />
                    <Route path="contact" element={<Contact />} />                    
                </Routes>
            </div>
        </Router>
    );
}
