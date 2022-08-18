import React from 'react'
import './index.css';
import Item from './Item';

export default function Demo() {
  return (
    <ul className='pl'>
        <Item key="p1" src="https://images.unsplash.com/photo-1620553967899-7b24032a3b6f" alt="p1" />
        <Item key="p2" src="https://images.unsplash.com/photo-1605050825473-dddb75d9e703" alt="p2" />
        <Item key="p3" src="https://images.unsplash.com/photo-1631635781693-556ef157b1c7" alt="p3" />
    </ul>
  )
}
