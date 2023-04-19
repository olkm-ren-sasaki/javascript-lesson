// let hello = "Hello World"

// // 整数を代入する
// let int1 = 1;

// // 負数を代入する
// let int2 = -10;

// // 小数点を代入する
// let float1 = 3.14;

// // 文字列を代入する
// let str1 = 'JavaScriptを覚えよう';

// alert(hello);

// // 足し算
// alert(4 + 3);

// // 引き算
// alert(8 - 5);

// // 掛け算
// alert(2 * 6);

// // 割り算
// alert(10 / 2);

// alert('Hello' + 'World');

// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);


// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// 2章確認問題

// let a = 5
// let b = 8

// alert(a + b)
// alert(a - b)
// alert(a * b)
// alert(a / b)

// // メイン部分
// let alertString;

// // 作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamp");

// //変数の中身をアラートで表示する
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// alert('あなたの選んだ手は' + user_hand + 'です。');

// function getJShand(){
//     let js_hand_num = Math.floor( Math.random() * 3 );
  
//     if(js_hand_num == 0){
//       js_hand = "グー";
//     } else if(js_hand_num == 1){
//       js_hand = "チョキ";
//     } else if(js_hand_num == 2){
//       js_hand = "パー";
//     }
  
//     return js_hand;
//   }

// 3章確認問題
// じゃんけんの手を入力してもらうプロンプト欄を生成
while(true) {
    let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
    if(user_hand == null ) {
        alert("またチャレンジしてね")
        break
    } else if (!(user_hand === "グー" || user_hand === "チョキ" || user_hand === "パー")){
        alert("グー・チョキ・パーのいずれかを入力してください")
        continue
    }
    // じゃんけんの手をランダムに作成する関数を呼び出す
    let js_hand = getJShand();

    // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
    let judge = winLose(user_hand, js_hand);

    // 結果を表示する
    alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

}


// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}