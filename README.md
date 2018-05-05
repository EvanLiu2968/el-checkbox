# el-checkbox
一套纯css3的单选、复选、开关UI库。
A UI library with pure CSS3 radio, check, switch.

## Description

组件引入blue、red、green、yellow四种主题色(参考了element UI的颜色)
命名空间也为el-，均以em为单位，方便对组件大小定制，定义了small(85%)、default(100%)、large(125%)三种大小，可针对不同设计自由扩展。

## Example
online example: [https://evanliu2968.github.io/el-checkbox](https://evanliu2968.github.io/el-checkbox)

more resourse: [https://www.evanliu2968.com.cn](https://www.evanliu2968.com.cn)

## Usage
- 方法一：将src里的less文件引入至项目less文件，可修改组件颜色、大小变量
- 方法二：引入dist里的checkbox.css或checkbox.min.css

```html
<!-- block，移动端适用 -->
<label class="el-checkbox">
    <!-- 此行无样式定义 -->
    <span>custom text</span>
    <input type="checkbox" name="check" value="option">
    <span class="el-checkbox-style"></label>
</label>

<label class="el-radio">
    <span>custom text</span>
    <input type="radio" name="radio" value="option">
    <span class="el-radio-style"></label>
</label>

<!-- inline，PC端适用 -->
<div class="el-checkbox">
    <span>custom text</span>
    <input type="checkbox" id="checkbox" name="check" value="option">
    <label for="checkbox" class="el-checkbox-style"></label>
</div>

<!-- 开关 -->
<label class="el-switch">
    <input type="checkbox" name="switch" checked hidden>
    <span class="el-switch-style"></span>
</label>

<!-- 不同尺寸(radio,checkbox同下) -->
<label class="el-switch el-switch-sm">
    <input type="checkbox" name="switch" checked hidden>
    <span class="el-switch-style"></span>
</label>

<label class="el-switch el-switch-lg">
    <input type="checkbox" name="switch" checked hidden>
    <span class="el-switch-style"></span>
</label>

<label class="el-switch" style="font-size:150%">
    <input type="checkbox" name="switch" checked hidden>
    <span class="el-switch-style"></span>
</label>
```

## Directory
```
├── dist                  编译后的css(build file)              
│   ├── checkbox.css      未压缩css(unminify css)          
│   └── checkbox.min.css  压缩css(minify css) 
│ 
├── src                   less文件(less file)
│   ├── checkbox.less     主要less(main less)
│   ├── color.less        颜色变量(color variables)
│   └── size.less         大小变量(size variables)
└── index.html            demo
```

## License
MIT
