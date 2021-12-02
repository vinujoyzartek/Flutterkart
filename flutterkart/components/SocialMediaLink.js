import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebookF, faInstagram, faReddit, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaLink(props) {
    return (
        <>
            <ul className="list-inline mt-5 social-media ">
                <li className="list-inline-item"><a href="#"> <FontAwesomeIcon icon={faFacebookF} /></a> </li>
                <li className="list-inline-item"><a href="#"> <FontAwesomeIcon icon={faInstagram} /></a> </li>
                <li className="list-inline-item"><a href="#"> <FontAwesomeIcon icon={faReddit} /></a> </li>
                <li className="list-inline-item"><a href="#"> <FontAwesomeIcon icon={faTwitter} /></a> </li>
                <li className="list-inline-item"><a href="#"> <FontAwesomeIcon icon={faPinterest} /></a> </li>
            </ul>
        </>
    );
}

