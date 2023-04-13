const toggleNav = () => {
  console.log("clicked");
  const headerBox = document.querySelector(".headerBox");
  let headerStyle = window.getComputedStyle(headerBox).display;
  console.log(headerStyle);
  if (headerStyle === "none") {
    headerBox.className = "headerBox HBdisplayBlock";
  } else {
    headerBox.className = "headerBox HBdisplayNone";
  }
};
const headerBox = document.querySelector(".headerBox");
//Nav buttons - switch page
const switchPage = (e) => {
  const clickedBtn = e.getAttribute("data");
  const sections = document.querySelectorAll("section");
  for (let sec of sections) {
    const targetSec = sec.getAttribute("id");
    const tSecClass = sec.classList.contains("displayNone");

    if (
      (clickedBtn === targetSec && tSecClass === false) ||
      (clickedBtn !== targetSec && tSecClass === true)
    ) {
      continue;
    }
    sec.classList.toggle("displayNone");
  }
};
// home-slideWall

const wallLinks = document.querySelector(".wallLinks");
const wallbtns = document.querySelectorAll(".wallbtn");

const transformSlide = (index) => {
  wallLinks.style.transform = `translateX(-${index * 100}%)`;
};
const moveSlide = (slide) => {
  const slideIndex = Number(slide.getAttribute("wBtnIndex"));
  transformSlide(slideIndex);
};

//A1-1

const calcBmi = (e) => {
  e.preventDefault();
  let weight = parseInt(document.querySelector("#weight").value);
  let height = parseInt(document.querySelector("#height").value);
  let bmiInfo = document.querySelector("#bmiInfo");
  let showBmi = document.querySelector("#bmi");
  let bmiMsg = document.querySelector("#bmiMsg");
  let bmiResult = weight / ((height / 100) * (height / 100));

  showBmi.innerHTML = bmiResult.toFixed(2);

  if (bmiResult < 18.5) {
    bmiMsg.innerHTML = "過輕";
  } else if (bmiResult >= 18.5 && bmiResult < 24) {
    bmiMsg.innerHTML = "正常";
  } else if (bmiResult >= 24 && bmiResult < 27) {
    bmiMsg.innerHTML = "過重";
  } else if (bmiResult >= 27 && bmiResult < 30) {
    bmiMsg.innerHTML = "輕度肥胖";
  } else if (bmiResult >= 30 && bmiResult < 35) {
    bmiMsg.innerHTML = "中度肥胖";
  } else {
    bmiMsg.innerHTML = "重度肥胖";
  }

  bmiInfo.classList.add("displayBlock");
};
//A1-2
const makeTree = (e) => {
  e.preventDefault();
  let treeSize = parseInt(document.getElementById("treeSize").value);
  let mid = (treeSize + 1) / 2;
  let start = mid;
  let end = mid;
  printTree.innerHTML = "";

  for (let h = 1; h <= mid; h++) {
    let result = "";
    for (let w = 1; w <= treeSize; w++) {
      if (w >= start && w <= end) {
        result += "^";
      } else {
        result += "&nbsp&nbsp";
      }
    }
    start -= 1;
    end += 1;
    printTree.innerHTML += `<div class="pTree pTreeTop">${result}</div>`;
  }
  for (let h = 1; h <= 2; h++) {
    let bresult = "";
    for (let w = 1; w <= treeSize; w++) {
      if (w === mid) {
        bresult += "^";
      } else {
        bresult += "&nbsp&nbsp";
      }
    }
    printTree.innerHTML += `<div class="pTree pTreeBtm">${bresult}</div>`;
  }
};
//A1-3

let gameOver = true;
let targetNum;
let playGame = document.querySelector(".playGame");
let gameMsg = document.querySelector("#gameMsg");
let numStart = document.querySelector(".numStart");
let startMsg = document.querySelector(".startMsg");
let startBtn = document.querySelector(".startBtn");

const createNum = () => {
  return Math.floor(Math.random() * 100);
};

const startNumGame = () => {
  gameOver = false;
  playGame.classList.remove("invisable");
  numStart.classList.add("invisable");
  //創造新猜測目標
  targetNum = createNum();
  console.log(targetNum);
};

const goNumGame = (e) => {
  if (e.type == "keyup") {
    if (e.keyCode === 13) {
      playNumGame();
    }
  } else if (e.type == "click") {
    e.preventDefault();
    playNumGame();
  }
};

const playNumGame = () => {
  //提取輸入框內資料
  let getNum = document.querySelector("#getNum");
  let myNum = parseInt(getNum.value);
  console.log(myNum);

  if (myNum === 0) {
    gameOver = true;
    startMsg.innerHTML = "遊戲結束!";
    startBtn.innerHTML = "再玩一次？";
    playGame.classList.add("invisable");
    numStart.classList.remove("invisable");
    getNum.value = "";
  } else if (myNum === targetNum) {
    gameOver = true;
    startMsg.innerHTML = "猜對啦！你真厲害!";
    startBtn.innerHTML = "再玩一次？";
    playGame.classList.add("invisable");
    numStart.classList.remove("invisable");
    getNum.value = "";
  } else if (myNum < 1 || myNum > 100) {
    gameMsg.innerHTML = "猜測範圍是1~100";
    getNum.value = "";
  } else if (myNum === NaN) {
    gameMsg.innerHTML = '請輸入"數字", 範圍是 1~100';
    getNum.value = "";
  } else if (myNum > targetNum) {
    gameMsg.innerHTML = "數字太大";
    getNum.value = "";
  } else if (myNum < targetNum) {
    gameMsg.innerHTML = "數字太小";
    getNum.value = "";
  }
};

//A1-4
const yearCheckPress = (e) => {
  console.log(e.type);
  if (e.type == "keyup") {
    if (e.keyCode === 13) {
      yearHandler();
    }
  } else if (e.type == "click") {
    e.preventDefault();
    yearHandler();
  }
};

function yearHandler() {
  let getYear = document.querySelector("#getYear");
  let showYear = document.querySelector("#showYear");
  let showYearResult = document.querySelector("#showYearResult");
  let year = parseInt(getYear.value);
  showYear.innerHTML = `您輸入${year}年`;
  if (isLeapYear(year)) {
    showYearResult.innerHTML = "閏年";
  } else {
    showYearResult.innerHTML = "平年";
  }
  getYear.value = "";
}

function isLeapYear(year) {
  if (
    Number(year) % 400 === 0 ||
    (Number(year) % 4 === 0 && Number(year) % 100 !== 0)
  ) {
    return true;
  } else {
    return false;
  }
}

//A1-5
(function () {
  let timeRow = document.getElementById("timeRow");

  for (let row = 2; row <= 9; row++) {
    let result = "";
    for (let col = 1; col <= 9; col++) {
      result = result + `${row}x${col}=${row * col}<br>`;
    }
    timeRow.innerHTML += `<td>${result}</td>`;
  }
})();

//A1-6
const nameChange = () => {
  let nameInput = document.getElementById("name").value.trim();
  console.log(nameInput);
  let nameCheckMsg = document.getElementById("nameCheckMsg");
  const reg = /^[\u4e00-\u9fa5]{2,}$/;
  console.log(reg.test(nameInput));
  if (nameInput === "") {
    nameCheckMsg.innerHTML = "此欄位不可空白";
    return;
  }
  if (reg.test(nameInput) !== true) {
    nameCheckMsg.innerHTML = "請輸入中文";
    return;
  }
  if (nameInput.length < 3) {
    nameCheckMsg.innerHTML = "請輸入至少兩個字以上";
  } else {
    nameCheckMsg.innerHTML = "格式正確👍";
  }
};

const pwdChange = () => {
  let pwdInput = document.getElementById("password").value.trim();

  let pwdCheckMsg = document.getElementById("pwdCheckMsg");

  const reg = /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#$%^&*])[\w,!@#$%^&*]{6,}$/;

  if (pwdInput === "") {
    pwdCheckMsg.innerHTML = "此欄位不可空白";
    return;
  }
  if (pwdInput.length < 6) {
    pwdCheckMsg.innerHTML = "密碼太短";
    return;
  }
  if (reg.test(pwdInput) !== true) {
    pwdCheckMsg.innerHTML = "必須包含英數字、特殊字元[!@#$%^&*]";
  } else {
    pwdCheckMsg.innerHTML = "格式正確👍";
  }
};

const dateChange = () => {
  const formDate = document.querySelector("#formDate");
  // console.log(typeof formDate.value);
  let year = formDate.value.slice(0, 4);
  // console.log(year);
  let month = formDate.value.slice(5, 7);
  // console.log(month);
  const dateCheckMsg = document.querySelector("#dateCheckMsg");
  const reg = /([12]\d{3}[/](0[1-9]|1[0-2])[/](0[1-9]|[12]\d|3[01]))/;
  const febReg = /([12]\d{3}[/](0[2])[/](0[1-9]|[1]\d)|[2][0-8])/;
  const leapFebReg = /([12]\d{3}[/](0[2])[/](0[1-9]|[1]\d)|[2][0-9])/;
  // const bigMonth = /([12]\d{3}[/](0[13578]|1[02])[/](0[1-9]|[12]\d|3[01]))/;
  // const smlMonth = /([12]\d{3}[/](0[469]|1[1])[/](0[1-9]|[12]\d|3[0]))/;
  if (isLeapYear(year)) {
    if (month === "02" && leapFebReg.test(formDate.value) === true) {
      dateCheckMsg.innerHTML = "格式正確👍 leap02 ";
    } else if (month !== "02" && reg.test(formDate.value) === true) {
      dateCheckMsg.innerHTML = "格式正確👍 其它月";
    } else {
      dateCheckMsg.innerHTML = "日期不正確";
    }
  } else {
    if (month === "02" && febReg.test(formDate.value) === true) {
      dateCheckMsg.innerHTML = "格式正確👍 02 ";
    } else if (month !== "02" && reg.test(formDate.value) === true) {
      dateCheckMsg.innerHTML = "格式正確👍 其它月";
    } else {
      dateCheckMsg.innerHTML = "日期不正確";
    }
  }
};
//A1-7

const rateReset = () => {
  reset();
  document.querySelector("#rateMsg").innerHTML = `評分為⋯⋯`;
};
const reset = () => {
  for (let i = 1; i <= 5; i++) {
    let star = document.querySelector(`#rateStars>i:nth-child(${i})`);
    let resetStar = star.classList.contains("fa-solid");
    if (resetStar) {
      star.classList.remove("fa-solid");
      star.classList.add("fa-regular");
    }
  }
};
const rate = (el) => {
  reset();
  let myRate = Number(el.getAttribute("star"));
  // console.log(myRate);
  for (let i = 1; i <= myRate; i++) {
    let star = document.querySelector(`#rateStars>i:nth-child(${i})`);
    star.classList.remove("fa-regular");
    star.classList.add("fa-solid");
  }
  document.querySelector("#rateMsg").innerHTML = `您給${myRate}顆星`;
};
//A1-8

const todayToStr = () => {
  let today = new Date();
  let year = today.getFullYear();
  let getMonth = today.getMonth() + 1;
  let month;
  if (getMonth < 10) {
    month = "0" + getMonth;
  } else {
    month = getMonth;
  }
  let getDate = today.getDate();
  console.log(getDate);
  let date;
  if (getDate < 10) {
    date = "0" + getDate;
  } else {
    date = getDate;
  }
  let result = "" + year + month + date;
  return result; // 'yyyymmdd'
};

const getBd = (e) => {
  if (e.type === "click") {
    const bd = document.querySelector("#getbd");
    //birthDay
    let inputBd = bd.value.replaceAll("-", "");
    let birthYear = parseInt(inputBd.substring(0, 4)); //num yyyy
    let birthMD = parseInt(inputBd.substring(4)); //num mmdd
    //today's year
    let today = todayToStr();
    console.log(today);
    let thisYear = parseInt(today.substring(0, 4)); //num yyyy
    let thisMD = parseInt(today.substring(4)); //num mmdd
    let showAge = document.querySelector("#showAge");
    let age = thisYear - birthYear;
    // 出生年份 > 現在年份

    if (birthYear > thisYear) {
      showAge.innerHTML = "尚未出生";

      return;
    }
    // 出生年份 等於 今年 且 出生日大於今天
    if (birthYear == thisYear && birthMD > thisMD) {
      showAge.innerHTML = "尚未出生";
      console.log(`birthMD: ${birthMD}, thisMD: ${thisMD}`);
      console.log("unborn");
      return;
    }
    // 出生日大於今天，未到生日需-1歲
    if (birthMD > thisMD) {
      showAge.innerHTML = `您今年${age - 1}歲`;
      return;
    }
    // 今天已超越或等於生日，維持原計算年齡
    showAge.innerHTML = `您今年${age}歲`;
  }
};

//A1-9

const calcCtoF = (e) => {
  if (e.keyCode === 13 || e.type == "click") {
    const cTemp = document.getElementById("cTemp");
    const cToFResult = document.querySelector("#cToFResult");
    cToFResult.innerHTML = `攝氏${cTemp.value
      }度(℃)<br>是華氏<span class="boldResult">${cToF(cTemp.value)}度(°F)</span>`;
    cTemp.value = "";
  }
};
const calcFtoC = (e) => {
  if (e.keyCode === 13 || e.type == "click") {
    const fTemp = document.getElementById("fTemp");
    const fToCResult = document.querySelector("#fToCResult");
    fToCResult.innerHTML = `${fToC(fTemp.value)}℃`;
    fToCResult.innerHTML = `華氏${fTemp.value
      }度(°F)<br>是攝氏<span class="boldResult">${fToC(fTemp.value)}度(℃)</span>`;
    fTemp.value = "";
  }
};

const cToF = (c) => {
  let result = (c * (9 / 5) + 32).toFixed(2);
  return result;
};
const fToC = (f) => {
  let result = (((f - 32) * 5) / 9).toFixed(2);
  return result;
};
//A1-10
function getcalYear() {
  const calYear = document.querySelector("#calYear");
  const start = 2024;
  let result = calYear.selectedIndex + start - 2 * (calYear.selectedIndex - 1);
  if (calYear.selectedIndex === 0) {
    return 0;
  } else {
    return result;
  }
}
function getcalMonth() {
  const calMonth = document.querySelector("#calMonth");
  if (calMonth.selectedIndex === 0) {
    return 0;
  } else {
    return calMonth.selectedIndex;
  }
}
function getcalDay() {
  const calDay = document.querySelector("#calDay");
  if (calDay.selectedIndex === 0) {
    return 0;
  } else {
    return calDay.selectedIndex;
  }
}
//判斷大小月，大月為TRUE
function isBigM(month) {
  const bigMonth = [1, 3, 5, 7, 8, 10, 12];
  if (month !== 2) {
    return bigMonth.includes(month);
  } else {
    return false;
  }
}

(function () {
  //年選項生成器
  const myCalYear = document.querySelector("#calYear");
  for (let y = 2025; y >= 2010; y--) {
    myCalYear.innerHTML += `<option>${y}</option>`;
  }
  //月選項生成器
  const myCalMonth = document.querySelector("#calMonth");
  for (let m = 1; m <= 12; m++) {
    myCalMonth.innerHTML += `<option>${m}</option>`;
  }
})();

//日期選項生成
const createDay = () => {
  let calYear = getcalYear();
  let calMonth = getcalMonth();
  let calMsg = document.querySelector("#calMsg");
  let calDay = document.querySelector("#calDay");
  calDay.innerHTML = `<option value="default">--日期</option>`;
  //未填寫年份/日期
  if (calYear === 0 || calMonth === 0) {
    calMsg.innerHTML = `請先選 年/月，再選日期`;
    return;
  } else {
    calMsg.innerHTML = `請選擇日期`;
  }
  //2月份，判斷閏年=>日期選項生成
  if (calMonth === 2) {
    if (isLeapYear(calYear) === true) {
      for (let i = 1; i <= 29; i++) {
        calDay.innerHTML += `<option value="${i}">${i}</option>`;
      }
      return;
    } else {
      for (let i = 1; i <= 28; i++) {
        calDay.innerHTML += `<option value="${i}">${i}</option>`;
      }
      return;
    }
  }
  //其它月份，判斷大小月=>日期選項生成
  if (isBigM(calMonth)) {
    for (let i = 1; i <= 31; i++) {
      calDay.innerHTML += `<option value="${i}">${i}</option>`;
    }
    return;
  } else {
    for (let i = 1; i <= 30; i++) {
      calDay.innerHTML += `<option value="${i}">${i}</option>`;
    }
    return;
  }
};
function daysOfMonth(year, month) {
  if (Number(month) === 2) {
    if (isLeapYear(Number(year)) === true) {
      return 29;
    } else {
      return 28;
    }
  }
  if (isBigM(Number(month))) {
    return 31;
  } else {
    return 30;
  }
}
const makeCal = () => {
  let calTable = document.querySelector("#calTable");
  calTable.innerHTML = `<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`;
  let calYear = getcalYear();
  let calMonth = getcalMonth();
  let calDay = getcalDay();
  let calMsg = document.querySelector("#calMsg");

  //在INFOMATION顯示選擇日期
  calMsg.innerHTML = `您選擇的日期是${calYear}年${calMonth}月${calDay}日`;
  //顯示日曆
  const theDate = new Date(`${calYear}-${calMonth}-1`); //2012/02/1
  let emptyTd = theDate.getDay(); // 第一週前面會有幾個空白（當月一號的星期幾）
  let dayTd = daysOfMonth(calYear, calMonth); //這個月有幾天
  let allTd = emptyTd + dayTd; //當月總Td數
  let count = 0; //累計當月Td數
  let resultWeekTr = ""; //存放每週結果
  let weekTrNum = Math.ceil(allTd / 7); //當月週數

  for (let week = 0; week < weekTrNum; week++) {
    for (let day = 0; day < 7; day++) {
      count++;
      //確認1號前空白td || 確認月底後的空白td
      if (count == calDay + emptyTd) {
        resultWeekTr += `<td id="chosenDate">${count - emptyTd}</td>`;
      } else if (count <= emptyTd || count > allTd) {
        resultWeekTr += `<td></td>`;
      } else {
        resultWeekTr += `<td>${count - emptyTd}</td>`;
      }
      resultWeekTr += "\t";
    }
    // console.log(resultWeekTr);
    let weektr = `<tr>${resultWeekTr}</tr>`;
    calTable.innerHTML += weektr;
    resultWeekTr = "";
  }
};
