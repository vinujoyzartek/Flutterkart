import React from 'react';
import useStyles from '../utils/styles';
import { navigation } from '../constants/constants';
import logo from '../public/img/logo.svg';
import Image from 'next/image';
import NextLink from 'next/link';
import { AppBar, Avatar, Container, Toolbar, Typography, Link } from '@material-ui/core';
import SocialMediaLink from './SocialMediaLink';

export default function Footer(props) {
    const classes = useStyles();
    return (
        <>
            <footer >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 footer-menu">
                            <ul className="list-inline mt-4 ">
                                {navigation.firstRow.map((item) => (
                                    <>
                                        <li className="list-inline-item"><a href={item.href}> {item.name} </a></li>
                                    </>
                                ))}
                            </ul>
                            <ul className="list-inline mt-4 ">
                                {navigation.secondRow.map((item) => (
                                    <>
                                        <li className="list-inline-item"><a href={item.href}> {item.name} </a></li>
                                    </>
                                ))}
                            </ul>
                            <ul className="list-inline mt-4 ">
                                {navigation.thirdRow.map((item) => (
                                    <>
                                        <li className="list-inline-item"><a href={item.href}> {item.name} </a></li>
                                    </>
                                ))}
                            </ul>
                        </div>

                        <div className="col-xl-3">
                            <div className="center-section mt-4">
                                <Image
                                    alt="FlutterKart"
                                    className="img-fluid"
                                    src={logo}
                                />
                                <SocialMediaLink />
                            </div>
                        </div>
                    </div>
                </div>


            </footer>



        </>
    );
}

