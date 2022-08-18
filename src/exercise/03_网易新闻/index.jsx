import React from 'react'
import './index.css';

export default function Demo() {
  return (
    <section className='news-list'>
        <h3>
            <span>体育</span>
        </h3>
        <a href="/">
        <figure>
            
            <img src="https://images.unsplash.com/photo-1512412046876-f386342eddb3" alt="体育" />
            <figcaption>费德勒首负迪米 扶额摇头不满发挥</figcaption>
        </figure>
        </a>
       
        <ul>
            <li><a href="/">乔治：我爱LA 喜欢和LBJ一起打球</a></li>
            <li><a href="/">格林：3年前降薪就在等KD 特制T恤嘲讽LBJ</a></li>
            <li><a href="/">塔克4000双鞋让保罗羡慕嫉妒 乔丹被震惊</a></li>
            <li><a href="/">CBA下季新赛制：常规赛4组循环 增到46轮</a></li>
        </ul>
    </section>
  )
}
