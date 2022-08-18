## 元素的水平布局

元素在其父元素中，水平方向的位置由以下几个属性共同决定：

- `margin-left` (允许`auto`)

- `border-left`

- `padding-left`

- `width`  (允许`auto`，默认值也是`auto`)

- `padding-right` 

- `border-right`

- `margin-right`  (允许`auto`)

**以上值相加的结果必须等于其父元素内容区的宽度**。如果不相等，称之为过渡约束。

## 自动调整

如果出现过渡约束，浏览器会自动进行调整。

- 如果以上七个值中，没有 `auto`，则浏览器会自动调整 `margin-right` 值，以使等式成立。

- 如果某个值为 `auto`，则会自动调整该值，以使等式成立

- 如果 `width: auto`，则宽度调整为最大，相应的`mx-auto`自动调整为`0`

- 如果宽度为固定值，`mx-auto`，则会将两侧的外边距设置为相同的值——水平居中