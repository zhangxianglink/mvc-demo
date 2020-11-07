## Version-1 四个简单的小模块实现

### 加减乘除实现思路

``` javascript
加减乘除由四个按钮控制，输出的结果保存在localStorage中，初始值为100。
每个按钮点击后，获取页面的结果数字，执行逻辑运算，保存到结果到localStorage并输出页面。
当刷新界面后，获取localStorage中结果，否则获得初始值。
```

### Tap分页切换操作

``` javascript
分页切换由一组<ol/>中的两个<li/>标签进行控制，结果展示的是另一组<ol/>中两个<li/>标签的内容。
通过监听除非点击元素的<li/>，删除其同级元素的class, 实现选中效果，
#app2 .tar-bar li.pink{
    background-color: pink;
    color: red;
}
同时为index一致的内容元素添加calss,展示对应的数据
#app2 .tar-content li.active{
    display: block;
}
```

### 图形移动，图形变色

``` javascript
移动/变色功能都是由Css去实现，js不直接操作，而是通过监听点击/鼠标选中的事件添加class实现效果
```

### 注意事项

```javascript
index.html页面只引入main.js，
main.js引入公共的Css文件以及个页面的js,
各个页面的js，自行引入需要的js,css，展现出清晰的调用结构。
```

