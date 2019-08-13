# RWD注意事項

## 確認media query 設定
pad系列768px<br/>
i5系列直式320px 橫式569px<br/
寬度用%數和max-width<br/

若是針對比較冷門解析度調整可以這樣寫，用and去處理<br/
```
@media(max-width: 767px) and (min-width:569px){}
```
先針對熱門再針對冷門處理，不是每個載具都要寫斷點

## media query 是全部寫一起還是隔離
老師建議class命名的當一組去排版，可讀性高<br/
所以不是整個寫在後面ex:<br/
```
@media(max-width: 767px){
.header{}
.content{}
}
```

應該要以header當一組寫在後面ex:
```
.header{}
@media(max-width: 767px){
  .header{}
}

.content{}
@media(max-width: 767px){
  .content{}
}
```

## 不要寫死高度
可以在斷點加上height: auto 自適應延伸
