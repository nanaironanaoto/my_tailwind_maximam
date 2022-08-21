# my_tailwind_maximam

■必要な階層関係
/asset/
└my_tailwind.css (出力先)
└my_tailwind_maximam.css (ローカル読み込み用)
/tailwind-theme/(tailwindのカスタム設定)
padckage.json(設定ファイル、コマンドのnpm run buildの定義)
tailwind.config.js(設定ファイル、purge有無をここで設定)

■生成
npm run build

tailwind build tailwind.config.js -i assets/my_tailwind_maximam.css -o assets/my_tailwind.css

purgecss
■実行コマンド例
purgecss --css assets/my_tailwind_maximam.css --content index.html --output assets/my_tailwind.css

npx tailwindcss -i assets/my_tailwind.css -o assets/my_tailwind.css --watch

■カスタマイズ済tailwindcss
https://cinec-stg.work/test/tailwind.css
