## 垂直外边距的折叠

**相邻**的**垂直**方向的外边距会发生折叠现象。

### 兄弟元素

比如以下 HTML：

```html
<div class="box1">1</div>
<div class="box2">2</div>
```

对应CSS：

```css
.box1 {
    background: aqua;
    margin-bottom: 100px;
}
.box2 {
    background: firebrick;
    margin-top: 100px;
}
```

兄弟元素之间的折叠：

- 如果两者都是正值，会取两者之间的较大值。

- 如果两者一正一负，则取两者的和。

- 如果两者都是负值，则取两者中绝对值较大的值。

兄弟元素的折叠有得于开发，所以不需要进行处理。

### 父子元素

- 【上外边距】子元素会传递给父元素。

- 父子外边距的折叠会影响到页面的布局，必须要进行处理

例如：

```html
<div className="outer">
    <div className="inner"></div>
</div>
```

对应CSS

```css
.outer{
    width: 200px;
    height: 200px;
    background: deeppink;
}

.inner{
    width: 100px;
    height: 100px;
    background: skyblue;
    margin-top: 100px;
}
```