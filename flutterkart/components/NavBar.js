import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { AppBar, Avatar, Container, Toolbar, Typography, Link } from '@material-ui/core';
import useStyles from '../utils/styles';
import logo from '../public/logo.png';
import LinkButton from './LinkButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export default function NavBar(props) {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href='/' passHref>
                        <Link>
                            <Image
                                alt="FlutterKart"
                                src={logo}
                                width={120}
                                height={70} />
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href={`/sell`} passHref className="no-underline">
                            <a className="p-3 rounded-lg  no-underline ">
                                <span className="text-indigo-700"><SearchOutlinedIcon /></span>
                            </a>
                        </NextLink>
                        <NextLink href={`/sell`} passHref className="no-underline">
                            <a className="p-3 rounded-lg  no-underline ">
                                <span className="text-indigo-700"> <FilterAltOutlinedIcon /></span>
                            </a>
                        </NextLink>
                        <NextLink href={`/sell`} passHref className="no-underline">
                            <a className="p-3 rounded-lg  no-underline ">
                                <span className="text-indigo-700">Sell</span>
                            </a>
                        </NextLink>
                        <LinkButton link='/signup' linkText='Sign Up' />
                        <LinkButton link='/signin' linkText='Sign In' />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

