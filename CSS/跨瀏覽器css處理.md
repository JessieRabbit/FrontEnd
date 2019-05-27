# 跨瀏覽器css處理解決方法
### Q:前端在刻畫面 會遇到自己想像的css在不同瀏覽器呈現出來不一樣 那想請問假使在google 、 safari css看的是正常，但在firefox呈現有點出來不一樣 這時你會一直修到把所有的瀏覽器都測過畫面弄到好嗎？
##### ●kaiji<br />
> 1.一般來說前端在刻畫面的時候最優先的原則是css要用每一家幾乎都可以支援的(像現在就是html5)，但是這個不可能全部都記在腦袋裡面，所以原則上是用通用或常見的css去刻<br />
如果有遵照這個原則走，基本上應該只有搞怪的ie會出問題，如果不管ie就沒問題了<br />
但是可能有少數css或js在safari和edge行為不一樣，這個時候就得上css hack，白話就是寫新的css去修正不一樣的瀏覽器<br />
> 2.如果是我的話我會嫌查can i use太麻煩，一般如果是在查自己不熟的css的話，別人的教學應該多少會提到哪些瀏覽器不支援的問題<br />
但是如果是google下去有一堆的應該就可以安心用，就算不幸遇到不能所有瀏覽器全吃應該解法也很好找<br />
> 3.現在最常見的問題應該都是js或LocalStorage會在跨瀏覽器出狀況，不過其實也是很少數<br />
edge我覺得也不用特地測，edge正在換chrome的核心，應該以後也不會有問題<br />
> 4.如果是我在測跨瀏覽器，我只會把chrome, fx, safari這三個測完，頂多再另外測個手機版<br />
剩下的我會選擇全部放生，反正用的人本來就少<br />
> 5.不過我剛剛說的css hack應該也很少有機會用到，除非是像表格匡線或scroll bar樣式這種很細的東西才比較有機會用，<br />
像是拉table或側邊的捲軸，有時候會需要長得一樣就需要用css hack去做<br />
一般都是很細部的東西<br />
> 6.平常的狀況就算會有差，應該配色和寬度比例等等的都不會有影響才對<br />
不過寬度有例外的狀況是寬度全部都用px當單位算的狀況，如果沒設計好可能就會看到部分瀏覽器會缺一小塊之類的，這個就得看是用css hack修還是要重新設計樣式了<br />
> 7.先回到一開始的問題好了，跨瀏覽器的樣式問題處理上，我現在會先都以chrome為主，做完再測firefox和safari，因為safari最常出問題所以我會擺在最後面<br />
而且safari的問題通常其他人都會遇到，所以google下去應該很好找解法<br />
> 8.但是如果chrome和firefox不一樣就得注意了，可能是css的部分用到了不屬於html5的命令，或者是更特例的狀況<br />
> 9.像是一樣的js在兩邊執行做的結果要一樣，但是因為過程不一樣所以看到的東西不如預期，這種要抓就不大好抓<br />
還有一種最慘的狀況，可能當時電腦的chrome或firefox版本是有bug的，就變成其實程式是對的，但是不管怎麼修結果都會錯<br />
> 10.這只能等google和mozilla去修了，而且在發生問題的當下沒辦法判斷到這點<br />
> 11.這些經驗我覺得可能只適用在這兩三年內吧，萬一瀏覽器市場生態又大洗盤的話這個流程就得再修正了<br />
不然最早以前safari測完其實是得再去測ie的，雖然我當時對ie的態度是功能沒問題就好，畫面就放著給它醜XD<br />

> 12.剛好講到跨瀏覽器的問題，不知道你有沒有看過這個  https://shopdd.jp/blog-entry-932.html<br />
css3剛出來的時候很紅  不同瀏覽器的多拉Ａ夢<br />

●can i use css <br />
https://caniuse.com/#search=font<br />

●修瀏覽器css遇到問題 <br />
Css linear-gradient<br />
https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient<br />

更改mat select label<br />
https://stackoverflow.com/questions/53435524/how-to-change-mat-select-placeholder-color<br />
