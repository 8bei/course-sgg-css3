import React from 'react'
export default function Item({src, alt}) {
    return (
        <li>
            <a href="/">
                <img src={src} alt={alt} />
            </a>
        </li>
    )
}
