"use strict";

let easy_ans = [
  ["n", 78, "u", 85, "l", 76, "l", 76],
  ["v", 86, "a", 65, "r", 82],
  ["l", 76, "e", 69, "t", 84],
  ["c", 67, "o", 79, "n", 78, "s", 83, "t", 84],
  ["i", 73, "f", 70],
  ["f", 70, "o", 79, "r", 82],
  ["w", 87, "h", 72, "i", 73, "l", 76, "e", 69],
  ["s", 83, "w", 87, "i", 73, "t", 84, "c", 67, "h", 72],
  ["M", 1077, "a", 65, "t", 84, "h", 72, ".", 190, "m", 77, "a", 65, "x", 88],
  ["r", 82, "e", 69, "t", 84, "u", 85, "r", 82, "n", 78],
];

let arr_prob = [
  ["j", 74, "a", 65, "v", 86, "a", 65, "s", 83, "c", 67, "r", 82, "i", 73, "p", 80, "t", 84],
  ["d", 68, "o", 79, "c", 67, "u", 85, "m", 77, "e", 69, "n", 78, "t", 84, ".", 190, "w", 87, "r", 82, "i", 73, "t", 84, "e", 69],
  ["d", 68, "o", 79, "c", 67, "u", 85, "m", 77, "e", 69, "n", 78, "t", 84, ".", 190, "g", 71, "e", 69, "t", 84, "E", 1069, "l", 76, "e", 69, "m", 77, "e", 69, "n", 78, "t", 84, "B", 1066, "y", 89, "I", 1073, "d", 68],
  ["s", 83, "e", 69, "t", 84, "I", 1073, "n", 78, "t", 84, "e", 69, "r", 82, "v", 86, "a", 65, "l", 76],
  ["s", 83, "e", 69, "t", 84, "T", 1084, "i", 73, "m", 77, "e", 69, "o", 79, "u", 85, "t", 84],
  ["f", 70, "u", 85, "n", 78, "c", 67, "t", 84, "i", 73, "o", 79, "n", 78],
  ["c", 67, "o", 79, "n", 78, "s", 83, "o", 79, "l", 76, "e", 69, ".", 190, "l", 76, "o", 79, "g", 71],
  ["d", 68, "o", 79, "c", 67, "u", 85, "m", 77, "e", 69, "n", 78, "t", 84, ".", 190, "c", 67, "r", 82, "e", 69, "a", 65, "t", 84, "e", 69, "E", 1069, "l", 76, "e", 69, "m", 77, "e", 69, "n", 78, "t", 84],
  ["d", 68, "o", 79, "c", 67, "u", 85, "m", 77, "e", 69, "n", 78, "t", 84, ".", 190, "b", 66, "o", 79, "d", 68, "y", 89, ".", 190, "a", 65, "p", 80, "p", 80, "e", 69, "n", 78, "d", 68, "C", 1067, "h", 72, "i", 73, "l", 76, "d", 68],
  ["d", 68, "o", 79, "c", 67, "u", 85, "m", 77, "e", 69, "n", 78, "t", 84, ".", 190, "g", 71, "e", 69, "t", 84, "E", 1069, "l", 76, "e", 69, "m", 77, "e", 69, "n", 78, "t", 84, "s", 83, "B", 1066, "y", 89, "T", 1084, "a", 65, "g", 71, "N",
    1078, "a", 65, "m", 77, "e", 69
  ],
  ["t", 84, "e", 69, "x", 88, "t", 84, "C", 1067, "o", 79, "n", 78, "t", 84, "e", 69, "n", 78, "t", 84],
  ["u", 85, "n", 78, "d", 68, "e", 69, "f", 70, "i", 73, "n", 78, "e", 69, "d", 68],
  ["w", 87, "i", 73, "n", 78, "d", 68, "o", 79, "w", 87, ".", 190, "o", 79, "n", 78, "l", 76, "o", 79, "a", 65, "d", 68],
  ["A", 1065, "r", 82, "r", 82, "a", 65, "y", 89, ".", 190, "l", 76, "e", 69, "n", 78, "g", 71, "t", 84, "h", 72],
  ["p", 80, "r", 82, "o", 79, "t", 84, "o", 79, "t", 84, "y", 89, "p", 80, "e", 69],
  ["t", 84, "o", 79, "S", 1083, "t", 84, "r", 82, "i", 73, "n", 78, "g", 71],
  ["p", 80, "a", 65, "r", 82, "s", 83, "e", 69, "I", 1073, "n", 78, "t", 84],
  ["M", 1077, "a", 65, "t", 84, "h", 72, ".", 190, "m", 77, "i", 73, "n", 78],
  ["M", 1077, "a", 65, "t", 84, "h", 72, ".", 190, "f", 70, "l", 76, "o", 79, "o", 79, "r", 82],
  ["w", 87, "i", 73, "n", 78, "d", 68, "o", 79, "w", 87, ".", 190, "a", 65, "l", 76, "e", 69, "r", 82, "t", 84],
  ["d", 68, "o", 79, "c", 67, "u", 85, "m", 77, "e", 69, "n", 78, "t", 84, ".", 190, "q", 81, "u", 85, "e", 69, "r", 82, "y", 89, "S", 1083, "e", 69, "l", 76, "e", 69, "c", 67, "t", 84, "o", 79, "r", 82],
  ["a", 65, "d", 68, "d", 68, "E", 1069, "v", 86, "e", 69, "n", 78, "t", 84, "L", 1076, "i", 73, "s", 83, "t", 84, "e", 69, "n", 78, "e", 69, "r", 82],
  ["S", 1083, "t", 84, "r", 82, "i", 73, "n", 78, "g", 71, ".", 190, "c", 67, "h", 72, "a", 65, "r", 82, "A", 1065, "t", 84],
  ["D", 1068, "a", 65, "t", 84, "e", 69, ".", 190, "n", 78, "o", 79, "w", 87],
  ["A", 1065, "r", 82, "r", 82, "a", 65, "y", 89, ".", 190, "p", 80, "u", 85, "s", 83, "h", 72],
  ["A", 1065, "r", 82, "r", 82, "a", 65, "y", 89, ".", 190, "p", 80, "r", 82, "o", 79, "t", 84, "o", 79, "t", 84, "y", 89, "p", 80, "e", 69, ".", 190, "s", 83, "o", 79, "r", 82, "t", 84],
  ["D", 1068, "a", 65, "t", 84, "e", 69, ".", 190, "p", 80, "r", 82, "o", 79, "t", 84, "o", 79, "t", 84, "y", 89, "p", 80, "e", 69, ".", 190, "g", 71, "e", 69, "t", 84, "D", 1068, "a", 65, "t", 84, "e", 69],
  ["S", 1083, "t", 84, "r", 82, "i", 73, "n", 78, "g", 71, ".", 190, "p", 80, "r", 82, "o", 79, "t", 84, "o", 79, "t", 84, "y", 89, "p", 80, "e", 69, ".", 190, "i", 73, "n", 78, "d", 68, "e", 69, "x", 88, "O", 1079, "f", 70],
];

let arr_ans = [];

let play_num = 0; //二次元配列での問題の列のnumber
let CharCodeIndex = 1; //何文字目かのカウント
let CorrectTypeCnt = 0; //正しく入力した数
let charTypingCnt = 0; //すべての入力数
let missTypeCnt = 0;
let timerId = NaN;
let timer_ct = 60;
let lineLen = 0;
let isPushedShiftKey = false;
let isPushedKey = false;
const SHIFT_KEY_CODE = 16;
const SPACE_KEY_CODE = 32;

//二次元配列で取り出す数値が奇数か偶数かによって問題の文字列と該当するkeyCodeが取得できる

//Fisher–Yatesシャッフルアルゴリズムを使った配列シャッフル・参考書を丸パクリしました
Array.prototype.shuffle = function() {
  let w = this.length;
  while (w) {
    let j = Math.floor(Math.random() * w);
    let t = this[--w];
    this[w] = this[j];
    this[j] = t;
  }
}

let start = () => {
  easy_ans.shuffle(); //startが実行されたら配列をシャッフルー序盤は簡単な問題のみ出題
  arr_prob.shuffle(); //メインの問題がある配列もシャッフル
  arr_ans = easy_ans;

  document.onkeydown = keydown;
  function keydown(e) {
    if (e.keyCode === SPACE_KEY_CODE) {
      nodeDelete("main-center");
      startTimer();
      document.getElementById("counter").textContent = "Time: " + timer_ct + "s";
      init();
    }
  }
}

let init = () => {
  if (play_num === 4) { //playしている行数が4を超えたらarr_ansの中身を更新し、普通の問題を出す
    arr_ans = arr_prob;
  }
  createNode();
  document.onkeydown = keydown;
  document.onkeyup = releaseFunction;
}

function keydown(e) {
  let targetCharCode = arr_ans[play_num][CharCodeIndex];
  if (!isPushedShiftKey) { //shiftがfalseの時のみカウントアップ
    charTypingCnt++;
  }
  //大文字か小文字か判定
  if (targetCharCode > 1000) { //大文字の区別としてkeyCodeに+1000してあるため、そこで判定
    let n = targetCharCode - 1000;
    if(e.keyCode === SHIFT_KEY_CODE) {
      isPushedShiftKey = true;
    }
    if(e.keyCode === n) {
      isPushedKey = true;
    }
    if(!isPushedShiftKey === isPushedKey) { //先にshift以外が押された場合falseに
      isPushedKey = false;
    }
    if(isPushedKey && isPushedShiftKey) {
      ifCorrectFunc();
      meterDraw();
    }
  } else {
    //入力されたkeycodeが正しいかとshiftが押されていないかどうか比較
    if (e.keyCode === targetCharCode && !isPushedShiftKey) {
      ifCorrectFunc();
      //全て文字が入力されたら
      if (arr_ans[play_num].length < CharCodeIndex) {
        play_num++;
        CharCodeIndex = 1;
        nodeDelete("main-center");
        setTimeout(init, 500);
        //寿司打を参考にして、少し遅く出るように変更。
      }
    }
  }
  if(!isPushedShiftKey) {
    meterDraw();
  }
}


function releaseFunction(e) {
  if(e.keyCode === 16) {
    isPushedShiftKey = false;
  }
  isPushedKey = false;
}

//DOM再構成と問題文の表示
let createNode = () => {
  let main_center = document.getElementById("main-center");
  let div_out = document.createElement("div");
  div_out.className = "out";
  let div_inner = document.createElement("div");
  div_inner.className = "inner";

  //createDocumentFragmentはパフォーマンスがcreateElementより良いと聞いたので変更しました
  let df = document.createDocumentFragment();
  for (let i = 0; i < arr_ans[play_num].length; i += 2) {
    let elm = document.createElement("span");
    elm.className = "before";
    elm.appendChild(document.createTextNode(arr_ans[play_num][i]));
    df.appendChild(elm);
  }
  div_inner.appendChild(df);
  div_out.appendChild(div_inner);
  main_center.appendChild(div_out);
}

let ifCorrectFunc = () => {
  CharCodeIndex += 2;
  CorrectTypeCnt++;
  let newElm = document.querySelector(".before");
  newElm.className = "after";
}

let nodeDelete = (x) => {
  let target = document.getElementById(x);
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
}

let startTimer = () => {
  timerId = setInterval(timerCountDown, 1000);
}

let timerCountDown = () => {
  timer_ct--;
  if (timer_ct === 0) {
    clearInterval(timerId);
    showResult();
  } else {
    document.getElementById("counter").textContent = "Time: " + timer_ct + "s";
  }
}

let showResult = () => {
  nodeDelete("content");
  let missTypeResult = charTypingCnt - CorrectTypeCnt;
  document.getElementById("result").style.display = "block";
  document.getElementById("score1").textContent = "正しく入力した数：" + CorrectTypeCnt;
  document.getElementById("score2").textContent = "ミスタイプ数：" + missTypeResult;
}

let meterDraw = () => {
  if(lineLen >= 625) {
    lineLen = 0;
  }
  let meterMain = document.getElementById("meter_main");
  if(charTypingCnt - CorrectTypeCnt === missTypeCnt) {
    lineLen = lineLen + 5;
  } else {
    lineLen = 0;
    missTypeCnt = charTypingCnt - CorrectTypeCnt;
  }
  switch (lineLen) {
    case 125:
      timer_ct = timer_ct + 1;
      document.getElementById("counter").textContent = "Time: " + timer_ct + "s";
      break;
    case 250:
      timer_ct = timer_ct + 2;
      document.getElementById("counter").textContent = "Time: " + timer_ct + "s";
      break;
  }
  meterMain.style.width = lineLen + "px";
}
