// alert('Hello Word~~');
// document.getElementById('title1').textContent = '1222';

//建立自定義物件
//方法1
/*var person = new Object();
person.name = 'jessie';
person.job = 'front-end';
person.sayName = function () {
    alert(this.name);
}

//方法2
var person = {
    name: 'jessie',
    job: 'front-end',
    sayName: function () {
        alert(this.name);
    }
};

person.name;
person.sayName();

// 陣列
//方法1
var a = new Array();
a[0] = "apple";
a[1] = "banana";
a[2] = "orange";
a.length;

//方法2
var a = [];
a[0] = "apple";
a[1] = "banana";
a[2] = "orange";

a.length;

//方法3
var a = ['apple', 'banana', 'orange'];
a.length;*/

// 0510變數number
var cookiePrice = 10;
cookiePrice = 20;
// alert(price);
document.getElementById('price').textContent = cookiePrice;

// string
var showContent1 = 'jessie'
var showContent2 = '加油';
var result = showContent1 + ' ' + showContent2;
document.getElementById('content').textContent = result;