let buttons = document.querySelectorAll('button');
let button = document.getElementsByTagName('button');
let result = document.querySelector('.resultScreen');
let concatNumber = "";
let isCalc = false;

// 最後の文字を削除する処理
function deleteLastStr(str) {
  return str = str.slice(0,-1);
}

// 最後の文字が演算子ならtrueを返す処理
function isLastStrOpe(str) {
  let lastStr = str.toString().substr(-1);
  console.log(lastStr);
  if (lastStr === "+" || lastStr === "-" || lastStr ==="*" || lastStr === "/") {
    return true;
  }
}

//ボタンを押した時の処理
function buttonPressed(event) {
  
  let number = event.target.textContent;
  
    if (concatNumber.length === 12 && number !== "AC" && number !== "=") return;

  if(number === "=") {
    
    if (concatNumber.includes('/0')) {
      result.textContent = "Error";
      return;
    }
    
    // 最後の演算子を削除する処理
    if (isLastStrOpe(concatNumber)) {
      concatNumber = deleteLastStr(concatNumber);
    }
    
    concatNumber = eval(concatNumber);
    isCalc = true;

  } else if (number === "AC") {
    
    concatNumber = "";    
    
  } else if (number === "0" && concatNumber === "0") {
    
    concatNumber = "0";
    
  } else if (number === ".") {
    
    if (concatNumber === "") {
      concatNumber = "";
      return;
    }
    
    if (concatNumber.includes('.')) {
      return;
    }
    
    if (isLastStrOpe(concatNumber)) {
      concatNumber = deleteLastStr(concatNumber);
    }
    
    concatNumber += number;
    isCalc = false;
  
  } else if (number === "÷") {
    
    if (concatNumber === "") return;
    
    if (isLastStrOpe(concatNumber)) {
      concatNumber = deleteLastStr(concatNumber);
    }
    
    concatNumber += "/";
    isCalc = false;
    
  } else if (number === "×") {
    
    if (concatNumber === "") return;
    
    if (isLastStrOpe(concatNumber)) {
       concatNumber = deleteLastStr(concatNumber);
    }
    
    concatNumber += "*";
    isCalc = false;
    
  } else if (number === "+" || number === "-") {
    
    if(concatNumber === "") return;
    
    if (number === "+") {
      if (isLastStrOpe(concatNumber)) {
        concatNumber = deleteLastStr(concatNumber);
      }
    }
    
    if (number === "-") {
      if (isLastStrOpe(concatNumber)) {
        concatNumber = deleteLastStr(concatNumber);
      }
    }
    
    isCalc = false;
    concatNumber += number;
    
  } else {
    
    if (concatNumber === "0") {
      concatNumber = "";
    }
    
    if (isCalc === true) {
      concatNumber = number;
    } else {
      concatNumber += number;
    }
    
    isCalc = false;
    
  }
  
  result.textContent = concatNumber;
  
}

buttons.forEach(button => button.addEventListener('click', buttonPressed));