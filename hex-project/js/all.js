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

// 0514 加減乘除
var aPrice = 50;
var myMoney = 10;
var total = aPrice - myMoney;

document.getElementById('aPriceID').textContent = aPrice;
document.getElementById('myPriceID').textContent = myMoney;
document.getElementById('totalID').textContent = total;

// 0514 function
function greet() {
    var greetNote = '歡迎光臨，這邊是麥當當';
    document.getElementById('greetID').textContent = greetNote;
    console.log(greetNote);
}
greet();

function order(hamNum, cokeNum) {
    var total = (hamNum * 50) + (cokeNum * 20);
    document.getElementById('orderTotal').textContent = total;
    console.log(total);
}

function order2(hamNum, cokeNum) {
    var total = (hamNum * 50) + (cokeNum * 20);
    document.getElementById('orderTotal').textContent = total;
    console.log(total);
}
order(8, 1);
order(1, 1);

// 0515 全域變數、區域變數
var totalCount; // 全域

function count(min, max) {
    // var totalCount = min * max;  //區域
    Countresult = min * max; // 沒有寫var ，會變數提升變成全域變數
    // totalCount = min * max;
    console.log('總計：' + Countresult);
}

count(1, 8);
console.log(Countresult);
console.log(totalCount);

// 0516 計算機
document.getElementById('countID').onclick = function () {
    var hamPrice = 50;
    var eggPrice = 30;
    var hamNum = parseInt(document.getElementById('hamNumID').value);
    var eggNum = parseInt(document.getElementById('eggNumID').value);
    var totalResult = (hamNum * hamPrice) + (eggNum * eggPrice);
    document.getElementById('totalNumID').textContent = totalResult;
};

function getHamPrice(num) {
    var hamPrice = 50;
    var total = hamPrice * num;
    return total;
}

var tom = getHamPrice(20);
console.log('tom', tom);

// 陣列與物件
var cornField = [];
cornField.push(2);
cornField.push('jessie');
console.log(`%c總共幾個玉米:`, `background: red; color: #bada55`, cornField.length);
console.log(cornField);

// API、後端資料庫、JSON
var farm = {
    farmer: 'jessie',
    chick: 15,
    duck: 3,
    dog: ['wayne', 'mini'],
    goDinner: function () {
        console.log(farm.farmer + '該回家吃飯了');
    },
    poultryTotal: function () {
        var num = farm.chick + farm.duck;
        console.log(num);
    }
};
farm.dog[0] = 'pick';
console.log(farm.dog[0]);
farm.goDinner();
farm.poultryTotal();

var forms = [{
        farmer: 'jessie',
    },
    {
        farmer: 'wayne'
    }
];

console.log(forms[1].farmer);

// if...else
var myMonth = 5;
var thisMonth = 12;
var birthdayCheck = myMonth == thisMonth;
document.getElementById('birthdayId').textContent = birthdayCheck;

var nowPeople = 1;
var totalProple = 2;
var allpeopleCheck = totalProple !== nowPeople;
document.getElementById('peopleId').textContent = allpeopleCheck;

// 0517 邏輯運算子
var vip = true;
var account = 500;
var matchGift = (vip === true && account >= 1000);
var onceMatchGift = (vip === true || account >= 1000);
document.getElementById('andID').textContent = matchGift;
document.getElementById('orID').textContent = onceMatchGift;

// if...else
var hungry = '全飽';
if (hungry === '飢餓') {
    console.log('餓了');
} else if (hungry === '半飽') {
    console.log('考慮...');
} else {
    console.log('%c走吧，飽了', 'background: green; color: #bada55');
}

// switch...case
switch (hungry) {
    case '飢餓':
        resultState('餓了');
        break;
    case '半飽':
        resultState('考慮...');
        break;
    default:
        resultState('走吧，飽了');
        break;
}

function resultState(status) {
    console.log(status);
}

// for迴圈
for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        console.log(i + '*' + j + '=' + i * j);
    }
}

var hexForms = [{
        farms: 'jessie',
        filed: '2',
        chick: 10,
        banana: 100
    },
    {
        farms: 'wayne',
        filed: '6',
        chick: 20,
        banana: 500
    }
];
var bananaCount = 0;

for (var i = 0; i < hexForms.length; i++) {
    var element = hexForms[i];
    bananaCount += hexForms[i].banana;
    console.log('第' + (i + 1) + '個農場主人' + element.farms);
    if (hexForms[i].chick > 9) {
        console.log(hexForms[i].farms);
        break;
    }
}
console.log('總共幾個香蕉' + bananaCount);

var data = {
    "result": {
        "limit": 100,
        "offset": 0,
        "count": 1,
        "sort": "",
        "results": [{
            "id": "3a45616d-c4b3-4676-b28c-24e5c9c90bd0",
            "title": "臺北市政府燃氣熱水器承裝業名冊",
            "type": "原始資料",
            "category": "生活安全及品質",
            "metadata_modified": "2019-05-18 19:28:02",
            "accrualPeriodicity": "每月",
            "contactEmail": "y3ful6@tfd.gov.tw",
            "contactName": "陳子喬",
            "contactPhone": "02-27297668-6121",
            "cost": "免費",
            "costLaw": "無",
            "costURL": "無",
            "description": "提供本市燃氣熱水器承裝業名冊查詢",
            "fieldDescription": "serial_number(序號)、name(承裝業名稱)、register_number(營業之登記字號(北市消承字號))、company_tax_ID(統一編號)、register_address(公司或商業登記地址)、business_address (營業場所地址)、telephone (連絡電話)、the_name_of_responsiable_person(負責人姓名)、release_date_of_license(發證日期)等",
            "issued": "2013-06-11",
            "language": "中文",
            "numberOfData": "218",
            "orgId": "379570000A",
            "orgName": "臺北市政府消防局",
            "organizationContactEmail": "",
            "organizationContactName": "",
            "organizationContactPhone": "",
            "organizationName": "臺北市政府消防局",
            "relatedUrl": "http:\/\/data.ntpc.gov.tw\/NTPC\/od\/data\/api\/meta\/?$format=json&$filter=oid%20eq%20CB173183-3353-48DD-B605-4D1AD84E10F4",
            "spatial": "",
            "subOrgId": "",
            "subOrgName": "",
            "temporalCoverageFrom": "2006-02-01",
            "temporalCoverageTo": "2015-10-31",
            "tag": "承裝業名稱,營業場所地址,登記字號,連絡電話",
            "resources": [{
                "resourceId": "f6bb8bb9-c5b6-4851-a837-695d202d4ccb",
                "resourceName": "boiler.json",
                "resourceDescription": "",
                "resourceUpdate": "2019-05-18 19:28:02",
                "resourceEncoding": "UTF-8",
                "format": "JSON"
            }]
        }]
    }
};

console.log(data.result.results[0].type);

// var el = document.getElementById('selectorID');
var el = document.querySelector('.selectClass em');
el.textContent = '123';

// 0520 選取多個元素
var elAll = document.querySelectorAll('.selectClass em');
console.log(elAll);
for (var i = 0; i < elAll.length; i++) {
    var element = elAll[i];
    element.textContent = i + '123';
}

// setAttribute
var el1 = document.querySelector('.h1Class a');
// (更改屬性,更改屬性的值)
el1.setAttribute('href', 'https://www.google.com.tw/');

// 動態增加id
var el2 = document.querySelector('.str');
el2.setAttribute('id', 'strId');

// getAttribute
var el3 = document.querySelector('.h1Class').innerHTML;
// el3.getAttribute('href');
// el3.textContent;
console.log(el3);

// innerHTML
var el4 = document.querySelector('#main');
var str = '<h1 class="mainId">1234</h1>'
el4.innerHTML = str + str;

var el5 = document.querySelector('.list');
var link = 'http://www.yahoo.com.tw/';
var name = '520';
el5.innerHTML = '<li><a href="' + link + '">' + name + '</a></li>';

// innerHTML、for
var el6 = document.querySelector('.farmerList');
var str = '';
for (var i = 0; i < hexForms.length; i++) {
    var element = hexForms[i];
    var content = '<li>' + element.farms + '</li>';
    str += content;
}
el6.innerHTML = str;

// creatElement
var str = document.createElement('em');
str.textContent = '1234';
str.setAttribute('id', 'strId');
// 增加子節點
document.querySelector('.createClass').appendChild(str);

// creatElement、for
var el7 = document.querySelector('.farmerList2');
for (var i = 0; i < hexForms.length; i++) {
    var element = hexForms[i];
    var str = document.createElement('li');
    str.textContent = element.farms;
    el7.appendChild(str);
}

// event
var el8 = document.querySelector('.inputClass');
el8.onclick = function (event) {
    console.log(event.clientX);
}

// 0521 event
var btn = document.querySelector('.btn');
// btn.onclick = function () {
//     alert('hello!');
// }

// function clickBtn() {
//     alert('hello2!');
// }
// 監聽 addEventListener(選擇事件,代入匿名function,false)
btn.addEventListener('click', function () {
    alert('hello3!');
}, false);

// onXX和監聽差異
var elOn = document.querySelector('.btnOn');
elOn.onclick = function () {
    alert('on-1');
};

elOn.onclick = function () {
    alert('on-2');
};

var elAdd = document.querySelector('.btnAdd');
elAdd.addEventListener('click', function () {
    alert('add-1');
}, false);

elAdd.addEventListener('click', function () {
    alert('add-2');
}, false);

// event bubbling 、 event capturing 
var elbox = document.querySelector('.box');
elbox.addEventListener('click', function (e) {
    e.stopPropagation();
    // alert('box');
}, false);

var elbody = document.querySelector('.checkbody');
elbody.addEventListener('click', function () {
    // alert('body');
}, false);

// preventDefault
var ahref = document.querySelector('.link');
ahref.addEventListener('click', function (e) {
    // 取消元素的默認行為
    e.preventDefault();
    // 原本點連接會跳轉到指定頁面
    console.log('test');
});

// target
var headerTarget = document.querySelector('.header');
headerTarget.addEventListener('click', function (e) {
    console.log(e.target.nodeName);
});

// change
var area = document.getElementById('areaId');
var listClass = document.querySelector('.listClass');

var country = [{
        farmer: 'jessie',
        area: '台北區'
    },
    {
        farmer: 'wayne',
        area: '台北區'
    },
    {
        farmer: 'coco',
        area: '桃園區'
    }
];

function updateData(e) {
    var select = e.target.value;
    var str = '';
    // console.log(select);
    for (var i = 0; i < country.length; i++) {
        var element = country[i];
        if (element.area === select) {
            str += '<li>' + element.farmer + '</li>';
            // console.log(str);
        }
    }
    listClass.innerHTML = str;
}

area.addEventListener('change', updateData, false);

// keycode
var body = document.body;

function goTest(e) {
    switch (e.keyCode) {
        case 49:
            document.querySelector('.div1').textContent = '1';
            break;
        case 50:
            document.querySelector('.div2').textContent = '2';
            break;
        default:
            document.querySelector('.div3').textContent = '3';
            break;
    }
}

body.addEventListener('keydown', goTest, false);

// mouse
var mouseBox = document.querySelector('.boxMouse');

function mouseFunc() {
    alert('滑入了');
}
mouseBox.addEventListener('mousemove', mouseFunc, false);

// mouse搭配座標與css
var mouseImg = document.querySelector('.mouseImg');
var rabbit = document.body;

function getPosition(e) {
    mouseImg.style.left = e.clientX + 'px';
    mouseImg.style.top = e.clientY + 'px';
}
rabbit.addEventListener('mousemove', getPosition, false);

// 監聽優化
var listUL = document.querySelector('.listUL');

function checkName(e) {
    // console.log(e.target);
    if (e.target.nodeName !== 'LI') {
        return;
    }
    console.log(e.target.textContent);
}
listUL.addEventListener('click', checkName, false);

// localStorage
var name = 'jessie';
localStorage.setItem('myName', name);
console.log(localStorage.getItem('myName'));

var btn = document.querySelector('.btnClass');
var call = document.querySelector('.btnCall');

function setName(e) {
    var str = document.querySelector('.textClass').value;
    localStorage.setItem('myName', str);
}

function getName() {
    var name = localStorage.getItem('myName');
    alert(name);
}
btn.addEventListener('click', setName);
call.addEventListener('click', getName);

// JSON.stringify、JSON.parse
var countryLocal = [{
    name: 'jessie'
}];
// 先將陣列編譯成字串
var stringify = JSON.stringify(countryLocal);
localStorage.setItem('counrtyName', stringify);

// 再將字串編譯成array，就可以讀取物件
var dataLocal = localStorage.getItem('counrtyName');
var parse = JSON.parse(dataLocal);
console.log(parse[0].name);
console.log(typeof parse);

// 0522 data-*
var getData = document.querySelector('.dataClass li');

function getDataEvent(e) {
    var cat = e.target.dataset.cat;
    var dog = e.target.dataset.dog;
    console.log('貓咪', cat);
    console.log('小狗', dog);
}
getData.addEventListener('click', getDataEvent);

// data-*結合array
var getul = document.querySelector('.listData');
var dataForm = [{
        farmer: 'coco',
    },
    {
        farmer: 'mike',
    }
];

function updateDataLi() {
    var str = '';
    for (var i = 0; i < dataForm.length; i++) {
        var element = dataForm[i];
        str += '<li data-num ="' + i + '">' + element.farmer + '</li>'
    }
    getul.innerHTML = str;
}

updateDataLi();

function checked(e) {
    if (e.target.nodeName !== 'LI') {
        return;
    }
    var str = e.target.dataset.num;
    console.log('農夫:' + dataForm[str].farmer);
    dataForm.splice(str, 1);
    updateDataLi();
}

getul.addEventListener('click', checked);

// var selectli = document.querySelector('.listData li');

// function checked() {
//     console.log('test');
// }
// selectli.addEventListener('click', checked);

// localStorage作業
var getText = document.querySelector('.textAdd');
var getBtn = document.querySelector('.addBtn');
var getUL = document.querySelector('.addList');
var dataItem = JSON.parse(localStorage.getItem('getData')) || [];

function update(items) {
    var resultLi = '';
    for (var i = 0; i < items.length; i++) {
        var element = items[i];
        resultLi += '<li><a data-num=' + i + '>刪除</a> ' + element.content + '</li>';
    }
    getUL.innerHTML = resultLi;
}

function addBtn(e) {
    e.preventDefault();
    var result = {
        content: getText.value
    };
    dataItem.push(result);
    update(dataItem);
    localStorage.setItem('getData', JSON.stringify(dataItem));
}

function deleteBtn(e) {
    e.preventDefault();
    var index = e.target.dataset.num;
    if (e.target.nodeName !== 'A') {
        return;
    }
    dataItem.splice(index, 1);
    localStorage.setItem('getData', JSON.stringify(dataItem));
    update(dataItem);
}
getBtn.addEventListener('click', addBtn);
getUL.addEventListener('click', deleteBtn);
update(dataItem);

// 透過XMLHttpRequest物件跨瀏覽器撈資料
// 產生XMLHttpRequest物件，跟伺服器要資料
var xhr = new XMLHttpRequest();
// console 面板輸入xhr，發現產生出ajax所用到的屬性

// readyState 紀錄ajax各種狀態
// 0: 你已經產生一個XMLHttpRequest，但是還沒有連接你要撈的資料
// 1: 你用了open()，但你還沒有把資料傳送過去
// 2: 偵測到用了send()
// 3: loading中，也就是pending
// 4: 你撈到資料了，數據已經完全接收到了

// 撈網址open(格式，讀取網址，同步與非同步)
// get(讀取資料)、post(傳送資料到伺服器)
xhr.open('get', 'https://hexschool.github.io/ajaxHomework/data.json', true);
// console 面板輸入xhr，readyState變化成1

// 傳送動作，null表示並沒有打算傳送任何資料過去
xhr.send(null);
// console 面板輸入xhr，readyState變化成4且responseText有資料
// 以上network面版可以看出來遠端有回傳資料

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(xhr.responseText); // 有東西
        var getDiv = document.querySelector('.ajaxClass');
        var strAjax = '';
        var parseXhr = JSON.parse(xhr.responseText);
        console.info(parseXhr);
        for (var i = 0; i < parseXhr.length; i++) {
            const element = parseXhr[i];
            strAjax += element.name;
        }
        getDiv.textContent = strAjax;
    } else {
        console.log('錯誤！！！');
    }

}

// post
/*var postXhr = new XMLHttpRequest();
postXhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
// postXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
postXhr.setRequestHeader('Content-type', 'application/json');
// 送參數
// postXhr.send("email=hh@yahoo.com&password=123");
var getAccount = document.querySelector('.account');
var getPassword = document.querySelector('.password');
var getregister = document.querySelector('.register');
var hint = document.querySelector('.hint');

function register(e) {
    e.preventDefault();
    // console.log(getAccount.value);
    // console.log('email=' + getAccount.value + '&password=' + getPassword.value);
    // postXhr.send('email=' + getAccount.value + '&password=' + getPassword.value);
    // json格式
    var account = {
        email: getAccount.value,
        password: getPassword.value
    }
    var data = JSON.stringify(account);
    postXhr.send(data);
}
getregister.addEventListener('click', register);

postXhr.onload = function () {
    if (postXhr.status === 200) {
        // console.log(postXhr);
        var parsePostXhr = JSON.parse(postXhr.responseText);
        // console.log(parsePostXhr);
        if (!parsePostXhr.success) {
            console.log('錯誤！！！');
            hint.textContent = parsePostXhr.message;
        } else {
            hint.textContent = parsePostXhr.message;
        }
    } else {
        console.log('錯誤！！！');
    }
}*/

// 上面code優化
var getRegister = document.querySelector('.register');
var hint = document.querySelector('.hint');

function register(e) {
    e.preventDefault();
    var getAccount = document.querySelector('.account');
    var getPassword = document.querySelector('.password');
    var account = {
        email: getAccount.value,
        password: getPassword.value
    }
    var postXhr = new XMLHttpRequest();
    postXhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
    postXhr.setRequestHeader('Content-type', 'application/json');
    var data = JSON.stringify(account);
    postXhr.send(data);

    postXhr.onload = function () {
        if (postXhr.status === 200) {
            // console.log(postXhr);
            var parsePostXhr = JSON.parse(postXhr.responseText);
            // console.log(parsePostXhr);
            if (!parsePostXhr.success) {
                console.log('錯誤！！！');
                hint.textContent = parsePostXhr.message;
            } else {
                hint.textContent = parsePostXhr.message;
            }
        } else {
            console.log('錯誤！！！');
        }
    }

}

getRegister.addEventListener('click', register);

// 登入
var getLogin = document.querySelector('.login');
var hintLogin = document.querySelector('.hintLogin');

function login(e) {
    e.preventDefault();
    var getLoginAccount = document.querySelector('.accountLogin').value;
    var getLoginPwd = document.querySelector('.passwordLogin').value;
    var account = {
        email: getLoginAccount,
        password: getLoginPwd
    };

    var loginPostXhr = new XMLHttpRequest();
    loginPostXhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
    loginPostXhr.setRequestHeader('Content-type', 'application/json');
    var loginData = JSON.stringify(account);
    loginPostXhr.send(loginData);

    loginPostXhr.onload = function () {
        if (loginPostXhr.status === 200) {
            var parseLoginPostXhr = JSON.parse(loginPostXhr.responseText);
            if (!parseLoginPostXhr.success) {
                hintLogin.textContent = parseLoginPostXhr.message;
            } else {
                hintLogin.textContent = parseLoginPostXhr.message;
            }
        } else {
            console.log('錯誤！！！');
        }
    }
}
getLogin.addEventListener('click', login);