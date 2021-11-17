import React from 'react';
import useStyles from '../utils/styles';
import { navigation } from '../constants/constants';
import logo from '../public/logo.png';
import Image from 'next/image';
import NextLink from 'next/link';
import { AppBar, Avatar, Container, Toolbar, Typography, Link } from '@material-ui/core';
import SocialMediaLink from './SocialMediaLink';

export default function Footer(props) {
    const classes = useStyles();
    return (
        <>
            <footer className={`${classes.footer} bg-gray-300 `}>
                {/* <div className=" max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 "> */}
                <div className=" max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 ">
                    <div className=" xl:grid xl:grid-cols-12 xl:gap-8">
                        <div className="grid grid-cols-12 gap-4 xl:col-span-8 py-12 lg:py-16 ">
                            {/* <div className="md:grid md:grid-cols-12 md:gap-8"> */}
                            {navigation.main.map((item) => (
                                <div key={item.name} className="col-span-3">
                                    <li className="list-none text-left ">
                                        <a href={item.href} className="text-base text-indigo-800 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                </div>
                            ))}
                            {/* </div> */}
                        </div>
                        <div className="col-span-4 border-l-4 py-12 lg:py-16 ">
                            <div className="col-span-2 md:col-span-2 lg:col-span-1  md:mt-0 lg:mx-auto ">
                                <h3 className="text-sm font-semibold text-green-700  tracking-wider uppercase pt-3 ">
                                    <NextLink href='/' passHref>
                                        <Link>
                                            <Image
                                                alt="FlutterKart"
                                                src={logo}
                                                width={130}
                                                height={60} />
                                        </Link>
                                    </NextLink>
                                </h3>
                                <div className="mt-8 flex  space-x-3 justify-center">
                                    <SocialMediaLink  />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

