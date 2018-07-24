# FrontEnd 基本
前端工程師基本概念筆記 EX:html、JS...等<br />
## ●一些前端的codeStyle<br />
參考出處: http://pixnet.github.io/frontend-guideline/<br />
參考出處: https://github.com/rwaldron/idiomatic.js/blob/master/translations/zh_TW/readme.md<br />
> 1.有開始標籤<body>，就一定要有結束標籤</body><br />
> 2.每行須縮排(4個空格)，在任何環境render結果一致<br />
> 3.屬性不要用單引號，使用雙引號<br />
> 4.HTML5 doctype頁面開頭，啟用標準模式，讓遊覽器render結果一致<br />
> 5.語言屬性EX:<html lang="zh-Hant-TW">寫出來，有助於語言合成工具判定要使用的發音以及翻譯工具判斷使用規則(以下網址深入lang屬性)<br />
http://w3c.github.io/html/semantics.html#the-html-element<br />
> 6.字元編碼必要，快速確保內容render正確 EX:<meta charset="UTF-8"><br />
> 7.引用css、js無須指定type，因預設便是text/css 和 text/javascript<br />
> 8.屬性順序，讓程式碼有易讀性<br />
    * class => 重用元素而生<br />
	* id、name  =>id是唯一產生，但盡量避免少用(可用於頁內書籤)<br />
	* data-*<br />
	* src, for, type, href, value<br />
	* itle, alt<br />
	* aria-*, role<br />
> 9.簡化Markup避免多餘父元素，讓HTML寫的少且不需要反覆重寫與重構<br />
```
<!-- Not so great -->
<div class="nogood">
    <img src="...">
</div>

<!-- Better -->
<img class="nogood" src="...">
```
> 10.避免再JavaScript寫Markup，讓性能更差、難找更難編輯<br />
## ●ngrx 相關學習<br />
http://oomusou.io/angular/ngrx/<br />
https://github.com/fezaoduke/TranslationInstitute/blob/master/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E7%94%A8ngrx%E7%AE%A1%E7%90%86Angular%E7%8A%B6%E6%80%81.md<br />
https://blog.kevinyang.net/2017/02/05/angular-ngrx-store/<br />
https://juejin.im/post/58ed71f5a0bb9f006a4aeb9b<br />
https://dotblogs.com.tw/kinanson/2017/03/30/114819<br />
https://ithelp.ithome.com.tw/articles/10196784?sc=iThelpR<br />

## ●其他延伸學習<br />
SEO與meta tag的效益<br />
https://molecular-service-science.com/2015/06/13/seo-meta-tag-introduction-and-best-practice/<br />

程序員的後花園<br />
https://com-it.tech/archives/category/前端開發<br />

相對路徑 和 絕對路徑<br />
https://dotblogs.com.tw/im_sqz777/2017/07/26/220713<br />
https://www.jianshu.com/p/cf740c7960c3<br />

ECMAScript 6 入门<br />
阮一峰.  相關基本語法介紹 與set map....等介紹<br />
http://es6.ruanyifeng.com/#docs/set-map<br />

loadsh<br />
http://lodash.think2011.net/uniqBy<br />

angular5 update angular6<br />
https://www.udemy.com/angular-zero/learn/v4/announcements?ids=1633416<br />

## ●常用工具教學<br />
★Chrome Dev Tools<br />
https://developers.google.com/web/tools/chrome-devtools/<br />
https://www.codeschool.com/courses/discover-devtools<br />
https://developers.google.com/web/tools/chrome-devtools/network-performance/resource-loading?hl=zh-tw<br />



★Markdown<br />
http://markdown.tw/<br />

## ●30天學習網站<br />
*rxjs<br />
https://ithelp.ithome.com.tw/users/20103367/ironman/1199<br />
*ngrx<br />
https://ithelp.ithome.com.tw/users/20103574/ironman/1519<br />
*angular material<br />
https://ithelp.ithome.com.tw/users/20020617/ironman/1263<br />
*angular2<br />
https://ithelp.ithome.com.tw/users/20103745/ironman/1160?page=1<br />

## ●網頁素材<br />
https://www.pexels.com/

## ●色碼表<br />
https://www.toodoo.com/db/color.html<br />
https://www.ifreesite.com/color/<br />

## ●github learn<br />
https://gitbook.tw/chapters/github/push-to-github.html<br />

## ●vscode 推薦extension<br />
https://zhuanlan.zhihu.com/p/36020180

## ●vscode 快捷鍵<br />
Command + p 查找此專案的檔案<br />

---------------------------------------------------------------------------------------------------------------------
# CSS 基本
●使用CSS3 :nth-child(n) 選取器教學<br />
http://csscoke.com/2013/09/21/%E4%BD%BF%E7%94%A8css3-nth-childn-%E9%81%B8%E5%8F%96%E5%99%A8%E8%A9%B3%E8%A7%A3/<br />

●Css遊戲學習<br />
http://flexboxfroggy.com/<br />
http://cssgridgarden.com/<br />
https://flukeout.github.io/<br />

●Css專用學習網（Ｗ3School太舊，不要看！）<br />
https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance<br />
＊小觀念<br />
Test.test1  .會全部跑<br />
Test>test1 確保要再下一層 （>比.還快）<br />
Test* *全部<br />

●Button click 效果<br />
https://stackoverflow.com/questions/44263892/how-to-style-a-clicked-button-in-css<br />
