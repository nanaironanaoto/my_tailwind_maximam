# tailwind_mini.css
https://nanaironanaoto.github.io/tailwind_mini/assets/tailwind_mini.css

# tailwind_mini_minified.css
https://nanaironanaoto.github.io/tailwind_mini/assets/tailwind_mini_minified.css

# tailwind_only_font_display_grid_flex.css
https://nanaironanaoto.github.io/tailwind_mini/assets/tailwind_only_font_display_grid_flex.css

# tailwind_only_font_display_grid_flex_minified.css
https://nanaironanaoto.github.io/tailwind_mini/assets/tailwind_only_font_display_grid_flex_minified.css

# my_tailwind_maximam.css
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

