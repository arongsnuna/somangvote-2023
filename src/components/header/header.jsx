/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logos/logo_small.png';

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const scrollToTopAndCloseMenu = () => {
        navigate('/');
        window.scrollTo(0, 0);
        setIsOpen(false); // 메뉴 닫기
    };
    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand href="/"><img src={logo} alt="wrapkit" /></NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 justify-content-end" id="h6-info">
                            <Nav navbar className="ms-auto">
                                <NavItem>
                                    <Link className="nav-link" to={"/"} onClick={scrollToTopAndCloseMenu}>
                                        HOME
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/#ABOUT"} onClick={toggle}>
                                        ABOUT
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/#CANDIDATES"} onClick={toggle}>
                                        CANDIDATES
                                    </Link>
                                </NavItem>
                            </Nav>
                            <div className="act-buttons">
                                <Link to="/#coming" className="btn-get-started2 btn btn-success-gradiant font-14 "  onClick={toggle}>연설 영상 보러가기</Link>
                            </div>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );

}
export default Header;
