import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebookF, faInstagram, faReddit, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaLink(props) {    
    return (
        <>
            <a key={'facebook'} href={'#'} className="text-indigo-800 hover:text-gray-500">
                <span className="sr-only">{'ins'}</span>
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a key={'instagram'} href={'#'} className="text-indigo-800 hover:text-gray-500">
                <span className="sr-only">{'ins'}</span>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a key={'reddit'} href={'#'} className="text-indigo-800 hover:text-gray-500">
                <span className="sr-only">{'ins'}</span>
                <FontAwesomeIcon icon={faReddit} />
            </a>
            <a key={'twitter'} href={'#'} className="text-indigo-800 hover:text-gray-500">
                <span className="sr-only">{'ins'}</span>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a key={'pininterest'} href={'#'} className="text-indigo-800 hover:text-gray-500">
                <span className="sr-only">{'ins'}</span>
                <FontAwesomeIcon icon={faPinterest} />
            </a>
        </>
    );
}

