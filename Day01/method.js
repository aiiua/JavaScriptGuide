// 当将函数和对象合并在一次时,函数就变成了方法(method)
// 将函数赋值给对象的属性,我们称为'方法',所有的JavaScript都含有方法
var a = [];
a.push([1, 2, 3]);
a.reverse()

// 自定义方法时,this关键字是对定义方的对象的引用
var points = [
    { x: 0, y: 0 },
    { x: 1, y: 1 }
];

points.dist = function () {             // 定义一个方法用来计算两点之间的距离
    var p1 = this[0];                   // 通过this获取对当前数据的引用
    var p2 = this[1];                   // 并取得调用的数组前两个元素
    var a = p2.x - p1.x;                // X坐标轴上的距离
    var b = p2.y - p1.y;                // Y坐标轴上的距离

    return Math.sqrt(a * a + b * b);    // 勾股定理,使用Math.sqrt()来计算平方根
}

points.dist();