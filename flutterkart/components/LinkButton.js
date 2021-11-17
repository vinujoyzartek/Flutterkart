import React from 'react';
import NextLink from 'next/link';
import { AppBar, Avatar, Container, Toolbar, Typography, Link } from '@material-ui/core';

export default function LinkButton(props) {
    const { link, linkText } = props;
    return (
        <>
            <NextLink href={`${link}`} passHref className="no-underline">
                <a className="border p-3 rounded-lg hover:bg-yellow-300 no-underline border-yellow-300">
                    <span className="text-black">{linkText}</span>
                </a>
            </NextLink>
        </>
    );
}

