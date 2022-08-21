# my_tailwind_maximam<br>
<br>
■必要な階層関係<br>
/asset/<br>
└my_tailwind.css (出力先)<br>
└my_tailwind_maximam.css (ローカル読み込み用)<br>
/tailwind-theme/(tailwindのカスタム設定)<br>
padckage.json(設定ファイル、コマンドのnpm run buildの定義)<br>
tailwind.config.js(設定ファイル、purge有無をここで設定)<br>
<br>
■生成<br>
npm run build<br>
<br>
tailwind build tailwind.config.js -i assets/my_tailwind_maximam.css -o assets/my_tailwind.css<br>
<br>
purgecss<br>
■実行コマンド例<br>
purgecss --css assets/my_tailwind_maximam.css --content index.html --output assets/my_tailwind.css<br>
<br>
npx tailwindcss -i assets/my_tailwind.css -o assets/my_tailwind.css --watch
