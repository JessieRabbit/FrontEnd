# unitest<br/>
unitest 國外<br/>
https://medium.com/spektrakel-blog/angular-testing-snippets/home<br/>
*單元測試、整合測試、驗收測試*<br/>
ＴＤＤ 、 ＡＴＤＤ差別<br/>
### *心法：<br/>
```
1.主要先寫測試在寫程式(功能)，然後只編寫使測試通過的功能
2.所有實現都是被測試逼出來，為了讓代碼通過
3.以調用方角度來寫測試，也就是使用者使用上與看到上，變成code會無腦
4.code與測試以簡單為主
5.編寫測試僅僅關注測試，不想去如何實現
6.測試（紅燈）－> 程式(綠燈) ->  重構（絕不跳過）-> 測試（紅燈)...........
7.不建議寫了10個測試，在側，一個一個來變成綠燈，再往下寫其他功能
8.一個code，多個測試
9.出錯後放慢腳步，把它拆成更小
```
### *覆蓋率：測試code涵蓋範圍，但是千萬不要過度追求100%，重點是把覆蓋率數字當作一個健康指標，用來檢查<br/>
在it前面加入x為test	部會跑此案例，加入f為只有focus此案例<br/>
describe裡面可以再有巢狀describe以及beforeeach...等，但是在寫巢狀的時候要特別注意beforeeach...等範圍<br/>
測api 必須要依靠假資料<br/>
```
1.data是否有無正確binding ，且是否render出來
2.render出來是否預期產出資料
```
### *spyOn(obj , method ) ===>jasmine ， 把obj class實體(也就是comp)的getData替換掉
觀念ppt 詳細見簡報以及電燈訪（有詳細的圖表）<br/>
https://drive.google.com/file/d/1i383Ap2Y0D9l2hRN2fRby-v4PfRKjqd9/view?usp=sharing<br/>
https://oomusou.io/jasmine/jasmine-spyon/<br/>
https://oomusou.io/jasmine/jasmine-spy/<br/>
https://www.youtube.com/watch?v=uhrbsWFrix0<br/>
https://angular.cn/guide/testing<br/>

### *如何分辨單元測試 整合測試 驗收測試
白話點也就是說單元測試是針對一個class func ex:comp、service ...等單一結果<br/>
整合測試只要看到跨領域，ex:comp 與 html 關係...等 都算是整合測試<br/>
驗收測試就是測整個大範圍<br/>
所以在某個comp ，裡面有個get() func ，get() func 單元測試會去側有無結果，然後再來是驗證<br/>
確認comp的html是否呼叫get() func，這個就是整合測試<br/>
通常整合測試會早於單元測試，表示單元測試尚未出來，必須建立假的func，來驗證<br/>

```
// 因修改class資料，必須呼叫detectChanges反應到html上面
    fixture.detectChanges();
```

### *代碼覆蓋率報告
ng test --no-watch --code-coverage<br/>
如果你要在每次运行测试时都创建代码覆盖率报告，可以在 CLI 的配置文件 angular.json 中设置下列选项：<br/>
```
"test": {
  "options": {
    "codeCoverage": true
  }
}
```

### *Jasmine 提供api 許多Matchers
https://segmentfault.com/a/1190000009737204<br/>

Import順序調整 利用cmd+. 的方式 當有錯誤的時候可以使用<br/>
在jasmine query string 有個id 為第一次產生，後續要進行測試要把id拿掉， 然後如何看重新啟動 <br/>
看cmd 說open http://localhost:123...有出現的話，就打開<br/>
