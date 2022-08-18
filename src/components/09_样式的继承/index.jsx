import React, { Fragment } from 'react';
import './index.css';

export default function Demo() {
    return <Fragment>
        <p>
            我是一个P元素
            <span>我是P元素中的span</span>
        </p>
        <span>我是P元素之外的span</span>

        <section>
            我是一个section元素
            <span>我是section元素中的span <em>我是SPAN中的EM</em></span>
        </section>
    </Fragment>
}