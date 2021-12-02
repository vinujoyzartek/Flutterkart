import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppBar, Avatar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';
import logo from '../public/img/logo.svg';
import LinkButton from './LinkButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export default function NavBar(props) {
    const classes = useStyles();
    var [toggleNav, setToggleNav] = useState(false)
    return (
        <>
            <div id="main-nav" className="shadow-sm menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <Image
                                        alt="FlutterKart"
                                        className="img-fluid"
                                        src={logo}
                                    />
                                </a>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={() => setToggleNav(toggleNav => !toggleNav)} data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={(toggleNav ? 'show' : '') + ' collapse navbar-collapse'} id="main_nav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item ">
                                        <Link href="/">
                                            <a className="nav-link"> <SearchOutlinedIcon /></a>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link href="/">
                                            <a className="nav-link" > <FilterAltOutlinedIcon /> </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link href="/sell">
                                            <a className="nav-link" > Sell & Earn </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <LinkButton link='/login' linkText='Sign Up' buttonColor='btn-warning' buttonName='signin' />
                                    </li>
                                    <li className="nav-item ">
                                        <LinkButton link='/login' linkText='Sign Up' buttonColor='btn-outline-warning' buttonName='signup' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

