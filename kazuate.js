// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
//hantei();
//hantei();
//hantei();
//hantei();
let pr = document.querySelector('p#result');
p = document.createElement('p');
pr.insertAdjacentElement('beforebegin', p);

let b = document.querySelector('button#kotae');
b.addEventListener('click',hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let i = document.querySelector('input[name=kaitou]');
           // 第5回課題:テキストボックスの数値をここに代入
    let yoso = Number.parseInt(i.value,10);
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること

    
    p.textContent = kaisu + "回目の予想: " + yoso;

    if (kaisu >= 4) pr.textContent = "答えは " + kotae + " でした。すでにゲームは終わっています";
    else {
        if (yoso === kotae) {
            pr.textContent = "正解です。おめでとう！";
            kaisu = 4;
        }
        else {
            if (yoso > kotae) pr.textContent = "まちがい。答えはもっと小さいですよ";
            else if (yoso < kotae) pr.textContent = "まちがい。答えはもっと大きいですよ";
            
        }
    }
    kaisu = kaisu + 1;
}
