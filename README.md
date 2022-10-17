tailwindcss

tailwind_only_font_display_grid_flex.css
https://nanaironanaoto.github.io/my_tailwind_maximam/assets/tailwind_only_font_display_grid_flex.css

my_tailwind_maximam.css
https://nanaironanaoto.github.io/my_tailwind_maximam/assets/my_tailwind_maximam.css

※Github上のファイルを変更したあと、Sttings>Pages内で
Unpublish→Publishにしないと、更新がされないので注意！

【仕様】
メディアクエリはmdのみ
md	/* Medium (md) */
@media (min-width: 768px) { /* ... */ }

.text-10px	font-size: 10px;
~100pxまで

テキストの横方向の位置
.text-left	text-align: left;
.text-center	text-align: center;
.text-right	text-align: right;
.text-justify	text-align: justify;

フォントの太さ (Adobe XD上の表記)
.font-hairline	font-weight: 100; (Hairline)
.font-thin	font-weight: 200; (Ultra Light)
.font-light	font-weight: 300;
.font-normal	font-weight: 400; (Regular)
.font-medium	font-weight: 500;
.font-semibold	font-weight: 600;
.font-bold	font-weight: 700;
.font-extrabold	font-weight: 800; (Ultra Bold)
.font-black	font-weight: 900;

フォント
.font-sans (ゴシック)
.font-serif (明朝)
.font-mono

display, grid, flexに対応
追加）2022.10.17 
.flex-flow-col
.flex-flow-row
.flex-flow-col-reverse
.flex-flow-row-reverse
を追加



■生成
npm run build

tailwind build tailwind.config.js -i assets/my_tailwind_maximam.css -o assets/my_tailwind.css

purgecss
■実行コマンド例
purgecss --css assets/my_tailwind_maximam.css --content index.html --output assets/my_tailwind.css

npx tailwindcss -i assets/my_tailwind.css -o assets/my_tailwind.css --watch

■カスタマイズ済tailwindcss
https://cinec-stg.work/test/tailwind.css

■必要な階層関係
/asset/
└my_tailwind.css (出力先)
└my_tailwind_maximam.css (ローカル読み込み用)
/tailwind-theme/(tailwindのカスタム設定)
padckage.json(設定ファイル、コマンドのnpm run buildの定義)
tailwind.config.js(設定ファイル、purge有無をここで設定)

■フォントでremのサイズを把握しやすくするための下地
html,body{
font-size:62.5%;
}
特に親の要素でfont-sizeの設定がない場合、1rem=16pxなので
1.0rem が 10pxになる。
24pxにしたい場合は2.4remと指定。
↓
フォントサイズ
.text-xs		font-size: 0.75rem; 
.text-sm	font-size: 0.875rem;
.text-base	font-size: 1rem;		10px
.text-lg		font-size: 1.125rem;	11.25px
.text-xl		font-size: 1.25rem;	12.5px
.text-2xl	font-size: 1.5rem;	15px
.text-3xl	font-size: 1.875rem;	18.75px
.text-4xl	font-size: 2.25rem;	22.5px
.text-5xl	font-size: 3rem;		30px
.text-6xl	font-size: 4rem;		40px

.text-10px	font-size: 10px;
~100pxまで


【my_tailwind_maximam.css】
メディアクエリ
sm	/* Small (sm) */
@media (min-width: 640px) { /* ... */ }

md	/* Medium (md) */
@media (min-width: 768px) { /* ... */ }

lg	/* Large (lg) */
@media (min-width: 1024px) { /* ... */ }

:xl	/* Extra Large (xl) */
@media (min-width: 1280px) { /* ... */ }

テキストの横方向の位置
.text-left	text-align: left;
.text-center	text-align: center;
.text-right	text-align: right;
.text-justify	text-align: justify;

フォントの太さ (Adobe XD上の表記)
.font-hairline	font-weight: 100; (Hairline)
.font-thin	font-weight: 200; (Ultra Light)
.font-light	font-weight: 300;
.font-normal	font-weight: 400; (Regular)
.font-medium	font-weight: 500;
.font-semibold	font-weight: 600;
.font-bold	font-weight: 700;
.font-extrabold	font-weight: 800; (Ultra Bold)
.font-black	font-weight: 900;

フォント
.font-sans (ゴシック)
.font-serif (明朝)
.font-mono

行間
.leading-8	line-height: 2rem;


girdの指定例(html)
<div class="grid grid-cols-2">
や
<div class="grid gap-10px grid-cols-3 justify-items-center">

girdやflexボックスのオプション
justify-items-center

margin
.ml-0		margin: 0;
.m-1px		margin: 1px;
.my-1px	margin-top: 1px; margin-bottom: 1px;
.my-1px	margin-left: 1px; margin-right: 1px;
.mt-1px		margin-top: 1px;
~各100pxまで

padding
.p-0
.p-1px		padding: 1px;
.py-1px	padding-top: 1px; padding-bottom: 1px;
.py-1px	padding-left: 1px; padding-right: 1px;
.pt-1px		padding-top: 1px
~各100pxまで

border
.border-1px	border-width: 1px;
.border-2px	border-width: 2px;
.border-t-1px	border-top-width: 1px;
.border-r-2px	border-right-width: 2px;
~5pxまで
