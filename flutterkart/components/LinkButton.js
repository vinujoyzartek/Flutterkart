import React from 'react';
import NextLink from 'next/link';
import { AppBar, Avatar, Container, Toolbar, Typography, Link } from '@material-ui/core';

export default function LinkButton(props) {
    const { link, linkText, buttonColor, buttonName } = props;
    return (
        <>
            <Link href={link}>
                <a className="nav-link" href={'/login'}> <button type="button" className={`btn ${buttonColor} ${buttonName}`}>{linkText}</button> </a>
            </Link>
        </>
    );
}

