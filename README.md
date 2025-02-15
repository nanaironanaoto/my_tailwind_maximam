# ■スタイルのクラスを作るだけでchevronを前でも後ろでも表示させられ、かつこのコードだけで色もサイズも調整可能！

# ■tw_tailwind_static
https://nanaironanaoto.github.io/tailwind_mini/assets/tw-tailwind-static.css

.linkclass:after { /*.linkclassはchevronの矢印をつけたいクラスを記載*/
 /*疑似要素:beforeなら手前に矢印がつく*/
  content: "";
  background-color: #1D559F; /*任意のカラーを指定可能*/
  display: inline-block;
  position: relative;
  bottom: 2px; /*任意の縦方向位置を指定可能*/
  height: 10px; /*任意の高さを指定可能*/
  width: 10px; /*任意の幅を指定可能*/
  -webkit-mask: url(https://nanaironanaoto.github.io/tailwind_mini/assets/chevron-right.svg);
  mask: url(https://nanaironanaoto.github.io/tailwind_mini/assets/chevron-right.svg);
  -webkit-mask-size: cover;
  mask-size: cover;
  vertical-align: middle;
}

## chevron-right
https://nanaironanaoto.github.io/tailwind_mini/assets/chevron-right.svg

## chevron-right-bold
https://nanaironanaoto.github.io/tailwind_mini/assets/chevron-right-bold.svg

※いろいろなサイトがあるがお金を要求してくるので以下のbootstrapが提供しているところが良
https://icons.getbootstrap.com/icons/chevron-right/

■svgコード埋め込み時のコード
細　右　8px四方
<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

細　右　16px四方
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg

 
# ■my_tailwind_mini
 
## my_tailwind_mini.css
https://nanaironanaoto.github.io/tailwind_mini/assets/my_tailwind_mini.css

## my_tailwind_mini_minified.css
https://nanaironanaoto.github.io/tailwind_mini/assets/my_tailwind_mini_minified.css

## tailwind_only_font_display_grid_flex.css
https://nanaironanaoto.github.io/tailwind_mini/assets/tailwind_only_font_display_grid_flex.css

## tailwind_only_font_display_grid_flex_minified.css
https://nanaironanaoto.github.io/tailwind_mini/assets/tailwind_only_font_display_grid_flex_minified.css

## my_tailwind_maximam.css
https://nanaironanaoto.github.io/my_tailwind_maximam/assets/my_tailwind_maximam.css

※Github上のファイルを変更したあと、Settings>Pages内で
Unpublish→Publishにしないと、更新がされないので注意！

chevron_right_white_12px.png

chevron_right_white_6px.png

【仕様】
-----------------
## メディアクエリはmdのみで、PCファーストの仕様に変更しているので、
既存のtailwindと併用しないこと！
 md	/* Medium (md) */
@media (ma-width: 768px) { /* ... */ }

## font-size  追加）2022.11.28 
.text-8px~30pxまで

## display, grid, flexに対応 追加）2022.10.17 
.flex-flow-col
.flex-flow-row
.flex-flow-col-reverse
.flex-flow-row-reverse

## padding
.p-0
.p-1px		padding: 1px;
.py-1px	padding-top: 1px; padding-bottom: 1px;
.py-1px	padding-left: 1px; padding-right: 1px;
.pt-1px		padding-top: 1px
~各200pxまで

## margin
.ml-0		margin: 0;
.m-1px		margin: 1px;
.my-1px	margin-top: 1px; margin-bottom: 1px;
.my-1px	margin-left: 1px; margin-right: 1px;
.mt-1px		margin-top: 1px;
~各200pxまで

## テキストの横方向の位置
.text-left	text-align: left;
.text-center	text-align: center;
.text-right	text-align: right;
.text-justify	text-align: justify;

## フォントの太さ (Adobe XD上の表記)
.font-hairline	font-weight: 100; (Hairline)
.font-thin	font-weight: 200; (Ultra Light)
.font-light	font-weight: 300;
.font-normal	font-weight: 400; (Regular)
.font-medium	font-weight: 500;
.font-semibold	font-weight: 600;
.font-bold	font-weight: 700;
.font-extrabold	font-weight: 800; (Ultra Bold)
.font-black	font-weight: 900;

## フォント
.font-sans (ゴシック)
.font-serif (明朝)
.font-mono

## display, grid, flexに対応
追加）2022.10.17 
.flex-flow-col
.flex-flow-row
.flex-flow-col-reverse
.flex-flow-row-reverse
を追加

## girdやflexボックスのオプション

/*align-items*/
.items-center

/*justify-content*/
.justify-start
.justify-end
.justify-center
.justify-between
.justify-around
.justify-evenly

/*justify-items*/
.justify-items-start
.justify-items-end
.justify-items-center

.order-1
~各order-10まで

## width
.width-full
.width-auto

