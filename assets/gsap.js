//console.log('test');
document.addEventListener('DOMContentLoaded', function() {




    gsap.to('.target', { // .box => アニメーションさせる要素
        x: 400, // アニメーションの内容
        scrollTrigger: {
          trigger: '.target', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
          start: 'center center', // アニメーションの開始位置の指定
          toggleActions: 'play none none reverse', // スクロールアップでアニメーションを逆再生
        }





      });
});

