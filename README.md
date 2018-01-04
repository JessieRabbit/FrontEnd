# FrontEnd 基本
前端工程師基本概念筆記 EX:html、JS...等<br />
## ●一些前端的codeStyle<br />
參考出處: http://pixnet.github.io/frontend-guideline/<br />
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
## ●其他延伸學習<br />
SEO與meta tag的效益<br />
https://molecular-service-science.com/2015/06/13/seo-meta-tag-introduction-and-best-practice/

## ●常用工具教學<br />
★Chrome Dev Tools<br />
https://developers.google.com/web/tools/chrome-devtools/<br />
https://www.codeschool.com/courses/discover-devtools<br />

★Markdown<br />
http://markdown.tw/<br />