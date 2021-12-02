import React from 'react';
import Head from 'next/head';
import { AppBar, Avatar, Container, Toolbar, Typography, Link } from '@material-ui/core';
import useStyles from '../utils/styles';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title> demo</title>
            </Head>
            <NavBar />
            {/* <Container className={classes.main}>
                {children}
            </Container> */}
            <div className={classes.main}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
