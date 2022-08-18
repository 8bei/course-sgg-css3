## 轮廓和圆角

### `outline` 

用来设置元素的轮廓线，用法和 `border` 一样。

和边框不同点：轮廓不会影响到可见框的大小

> 通常用于 `:hover`

### `box-shadow`

用来设置阴影，不会影响页面的布局。

- 用法：`box-shadow: 水平方向偏移 垂直方向偏移 [模糊半径] 颜色;`

### `border-radius`

用来设置圆角

- 用法：`border-radius: 圆角半径`
- 用法：`border-radius: 横向圆角半径/纵向圆角半径`
- 用法：`border-radius: 左上与右下 右上与左下`
- 用法：`border-radius: 左上 右上 右下 左下`
- 用法：`border-radius: 左上 右上与左下 右下`
- 用法：`border-<top|bottom>-<left|right>-radius: 圆角半径`
- 用法：`border-<top|bottom>-<left|right>-radius: 横向圆角半径 纵向圆角半径`

> 圆形：`border-radius:50%;`