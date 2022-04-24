'use strict';

import {
  fromSvg,
  toSvg,
  deposite,
  withdraw,
  bank,
  account1,
  account2,
  account3,
  account4,
  accounts,
} from './data.js';

//👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 Elements 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
// Header
const hambergur = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const mainNav = document.querySelector('.main-nav-list2');
//  modal
const btnSignIn = document.querySelector('#btn-sign-in');
const text = document.querySelector('#text');
const password = document.querySelector('#password');
const logInBtn = document.querySelectorAll('.btn');
const modalWindow = document.querySelector('.pop-up');
const modalCrossBtn = document.querySelector('.modal-icon');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const inputfirstName = document.querySelector('#f-name');
const inputlastName = document.querySelector('#l-name');
const inputEmail = document.querySelector('#c-email');
const inputPassword = document.querySelector('#c-password');
const btnCreateAcc = document.querySelector('#create-account');
///// Header :
const header = document.querySelector('.header');
const containerEl = document.querySelector('.container');
// hero
const hero = document.querySelector('.hero');
// // Main :
const main = document.querySelector('main');
// section parralax
const sectionParralax = document.querySelector('.parralax-section');
const parralaxTextBox = document.querySelector('.parralax-text-box');
const parralaxImageBox = document.querySelector('.parralax-img-box');
const parralaxImage1 = document.querySelector('.img1');
const parralaxImage2 = document.querySelector('.img2');

// section Slider
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const sliderTab = document.querySelector('.slider-tab');
const btnSlider = document.querySelectorAll('.slider-btn');
const sectionSlider = document.querySelector('.section-slider');
// section Card
const sectionCard = document.querySelector('.section-card');
const cards = document.querySelector('.cards').querySelector('.grid');
const card = document.querySelectorAll('.card');

//// DashBoard :
const dashboard = document.querySelector('.dashboard');
const dashMainHeader = document
  .querySelector('.user-header')
  .querySelector('h1');
const userName = document.querySelector('.name');
const userEmail = document.querySelector('.email');
const userImage = document.querySelector('.user-img');
const allAmount = document.querySelector('#total-amount');
const inputLoan = document.querySelector('.input-loan');
const inputLoanBtn = document.querySelector('.input-btn');
const inputId = document.querySelector('.transfer-id');
const inputTransferAmount = document.querySelector('.transfer-amount');
const btnTransfer = document.querySelector('.btn-transfer');
// withdraw btn:
const ovarlayWithdraw = document.querySelector('.ovarlay-withdraw');
const btnWithdraw = document.querySelector('#btn-withdraw');
const btnWithdrawCross = document.querySelectorAll('.w-cross');
const btnWithdrawCrossParent = document.querySelector('.relative');
const withdrawMethod = document.querySelector('.payment-method');
let options = document.querySelectorAll('.option');
let mark = document.querySelectorAll('.mark');
const next = document.querySelector('.next');
const withdrawWindow = document
  .querySelector('#withdraw')
  .querySelector('.center');
const dateTime = document.querySelector('#date').querySelector('span');
const labelTimer = document.querySelector('.time');

//transaction
const transactioncontent = document.querySelector('.transaction-content');

// header
// open nav
hambergur.addEventListener('click', function (e) {
  mainNav.classList.add('nav-open');
  hambergur.style.display = 'none';
  close.style.display = 'inline-block';
  // if nav open then the page cann't scroll vertically
  document.querySelector('html').style.overflowY = 'hidden';
});
// close nav
close.addEventListener('click', function () {
  mainNav.classList.remove('nav-open');
  hambergur.style.display = 'inline-block';
  close.style.display = 'none';
  // back to scroll
  document.querySelector('html').style.overflowY = 'visible';
});
//  sticky header
const sectionHero = document.querySelector('.section-hero');

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add('sticky-nav');
  else header.classList.remove('sticky-nav');
};
const heroSectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroSectionObserver.observe(sectionHero);

// 👉👉👉👉👉 calculate Hero section left margin
function reportWindowSize() {
  hero.style.marginLeft = getComputedStyle(containerEl)['margin-left'];
}
reportWindowSize();
window.addEventListener('resize', reportWindowSize);

// ///// 👉👉👉👉👉 Open modal functionality

logInBtn.forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    modalWindow.classList.add('open-modal');
    main.style.filter = `blur(3px)`;
    header.style.filter = `blur(3px)`;
    // if nav open then the page cann't scroll vertically
    // document.querySelector('html').style.overflowY = 'hidden';
  });
});
// cross btn
function defaultActive() {
  //  default active class
  tabs.forEach(t => t.classList.remove('operations__tab-active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  document
    .querySelector('.operations__tab--2')
    .classList.add('operations__tab-active');
  document
    .querySelector(`.operations__content--2`)
    .classList.add('operations__content--active');
}
modalCrossBtn.addEventListener('click', function () {
  modalWindow.classList.remove('open-modal');
  main.style.filter = `blur(0px)`;
  header.style.filter = `blur(0px)`;
  // back to scroll
  // document.querySelector('html').style.overflowY = 'visible';
  //
  defaultActive();
});

// sign up tab
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // Guard clause
  if (!clicked) return;
  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab-active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // // Activate tab
  clicked.classList.add('operations__tab-active');

  // // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ///////////////////////////////////////////////////////////////////////////////////
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 DashBoard 🔥🔥🔥🔥🔥🔥🔥🔥🔥
// ///////////////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////////
//🔥🔥🔥🔥👉👉👉👉👉 create New account
// ///////////////////////////////////////////////////////////////////
let currentAcc = '';
btnCreateAcc.addEventListener('click', function (e) {
  e.preventDefault();
  let [fName, lName, email, password] = [
    inputfirstName.value,
    inputlastName.value,
    inputEmail.value,
    inputPassword.value,
  ];
  let totalName = `${fName} ${lName}`;
  let username = `${fName[0].toLowerCase()}${lName[0].toLowerCase()}`;

  if (fName && lName && email && password) {
    // dynamic variable:
    let pageNumber = accounts.length + 1;
    window['account' + pageNumber] = {
      owner: totalName,
      amounts: [1000],
      movements: {
        0: {
          from: 'Deposite',
          date: 'Sep 19,2021 at 12.10',
          amount: 1000,
        },
      },
      email: email,
      pin: Number(password),
      image: 'images/avatar-male.png',
      username: username,
    };
    currentAcc = window['account' + pageNumber];
    accounts.push(currentAcc);
    activeDashboard();
    updateUI();
    // clear inputfield
    inputfirstName.value = '';
    inputlastName.value = '';
    inputEmail.value = '';
    inputPassword.value = '';
    //
    defaultActive();
  }
});

// 👉👉👉👉👉 create username,amounts :

accounts.forEach(el => {
  el.username = el.owner
    .split(' ')
    .map(el => el[0])
    .join('')
    .toLowerCase();
  // create amounts
  el.amounts = [];
  for (const [key, value] of Object.entries(el.movements)) {
    if (el.movements[key].from) el.amounts.push(el.movements[key].amount);
    else el.amounts.push(-el.movements[key].amount);
  }
});

// ///////////////////////////////////////////////////////////////////
//🔥🔥🔥🔥👉👉👉👉👉 create transaction
// ///////////////////////////////////////////////////////////////////
function createTransaction(acc) {
  transactioncontent.innerHTML = '';
  acc.amounts.forEach((el, i) => {
    let h4, svg;
    if (acc.movements[i].from == 'Loan') {
      svg = bank;
      h4 = 'from';
    } else if (el > 0 && acc.movements[i].from === 'Deposite') {
      svg = deposite;
      h4 = 'from';
    } else if (el > 0) {
      h4 = 'from';
      svg = fromSvg;
    } else if (el < 0 && acc.movements[i].to == 'Withdraw') {
      svg = withdraw;
      h4 = 'to';
    } else {
      h4 = 'to';
      svg = toSvg;
    }

    const html = `
   <div class="row">
    <div class="product-info">
      <div class="logo">
        ${svg}
      </div>
      <div class="info">
         <h4>${acc.movements[i][h4]}</h4>
         <span class="date">${acc.movements[i].date}</span>
     </div>
     </div>
        <div class="transactions-amount">${el} $</div>
    </div>
 `;
    transactioncontent.insertAdjacentHTML('afterbegin', html);
    if (svg == fromSvg || svg == deposite)
      document.querySelector('.logo').style.backgroundColor = '#31d35cce';
  });
}

// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  create total balance
// ///////////////////////////////////////////////////////////////////
let total;
function totalBalence(acc) {
  total = acc.reduce((acc, cur) => acc + cur);
  let totalL = String(total);
  if (totalL.length > 3) {
    let newarr = totalL.split('');
    return `${newarr[0]},${newarr.slice(1).join('')}`;
  } else return totalL;
}
////////////////////////////////////
function updateUI() {
  createTransaction(currentAcc);
  allAmount.textContent = `$ ${totalBalence(currentAcc.amounts)}`;

  dashMainHeader.textContent = `Hi, ${currentAcc.owner}`;
  userName.textContent = `${currentAcc.owner}`;
  userEmail.textContent = `${currentAcc.email}`;
  // change img
  userImage.setAttribute('src', currentAcc.image);
  // for chart
  createChart();
  chartAmountData = [];
  chartLabels = [];
  barBgColor1 = [];

  // date
  // document.querySelector('#date').textContent = new Date();
}
function activeDashboard() {
  dashboard.classList.add('open');
  //       // hidden all element except dashboard
  modalWindow.classList.remove('open-modal');
  main.style.display = `none`;
  header.style.display = `none`;
}
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Matching userName or Implement log in
// ///////////////////////////////////////////////////////////////////
let timer;
btnSignIn.addEventListener('click', function (e) {
  e.preventDefault();
  accounts.forEach(el => {
    if (el.username === text.value && el.pin === Number(password.value)) {
      currentAcc = el;
      activeDashboard();
    }
  });
  text.value = '';
  password.value = '';
  // calling all function

  updateUI();

  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
  // startLogOutTimer();
});
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Withdraw/////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

btnWithdraw.addEventListener('click', function (e) {
  ovarlayWithdraw.classList.add('open-withdraw');
});

const likeBefore = function () {
  // make the withdraw screen as before
  withdrawWindow.innerHTML = '';
  const html2 = `
 <span>
                                <ion-icon class="w-cross" name="close"></ion-icon>
                            </span>
                            <div class="payment-method ">
                                Select a Withdraw method &rarr;
                            </div>
                            <div class="payment-method option bikas">
                                Bikas <span class="mark">✔</span>
                            </div>
                            <div class="payment-method option nagad">
                                Nagad <span class="mark">✔</span>
                            </div>
`;
  withdrawWindow.insertAdjacentHTML('afterbegin', html2);
  document.querySelector('#next').textContent = 'Next';
  next.style.backgroundColor = '#42465f';
  next.style.color = '#9698a6';
  mark = document.querySelectorAll('.mark');
};

let inputNumAm;
// next btn:
next.addEventListener('click', function () {
  if (mark) {
    if (
      mark[0].classList.contains('mark-open') ||
      mark[1].classList.contains('mark-open')
    ) {
      mark = null;
      withdrawWindow.innerHTML = '';
      const html = `
    <span>
                                <ion-icon class="w-cross" name="close"></ion-icon>
                            </span>
  <div class="withdraw-info">
                                <div class="withdraw-number phone-number">
                                    <div class="label">Phone Number</div>
                                    <input class="i-with" type="number">
                                </div>
                                <div class="withdraw-number withdraw-amount">
                                    <div class="label">Amount</div>
                                    <input class="i-with" type="number">
                                    <div id="available"> <span>${allAmount.textContent}</span> avl</div>
                                </div>
                            </div> 
    `;
      withdrawWindow.insertAdjacentHTML('afterbegin', html);
      document.querySelector('#next').textContent = 'Withdraw';
      next.style.backgroundColor = 'hsl(12, 88%, 59%)';
      next.style.color = 'white';
      inputNumAm = document.querySelectorAll('.i-with');
    }
  }
  // create withdraw transaction & calculate total balance
  if (
    inputNumAm[0].value.length === 11 &&
    Number(inputNumAm[1].value) > 0 &&
    Number(inputNumAm[1].value) < total
  ) {
    ovarlayWithdraw.classList.remove('open-withdraw');
    let key = Object.keys(currentAcc.movements).length;
    currentAcc.movements[key] = {
      to: 'Withdraw',
      date: testDate,
      amount: Number(inputNumAm[1].value),
    };
    currentAcc.amounts.push(-currentAcc.movements[key].amount);
    setTimeout(() => {
      myChart.destroy();
      updateUI();
    }, 2000);
    likeBefore();
  }
});

// event delegation  📝 very helpful:

btnWithdrawCrossParent.addEventListener('click', function (e) {
  if (e.target.classList.contains('option')) {
    mark[0].classList.remove('mark-open');
    mark[1].classList.remove('mark-open');
    if (e.target.classList.contains('bikas')) {
      mark[0].classList.add('mark-open');
    } else if (e.target.classList.contains('nagad')) {
      mark[1].classList.add('mark-open');
    }
  }
  if (e.target.classList.contains('w-cross')) {
    ovarlayWithdraw.classList.remove('open-withdraw');
    likeBefore();
  }
});
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  // Create current date and ///////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

const now = new Date();
const options1 = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
const locale = navigator.language;

const testDate = new Intl.DateTimeFormat(locale, options1).format(now);

// 👇👇👇👇create time for header

setInterval(function () {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',

    day: 'numeric',
    month: 'numeric', // 2-digit,long exist
    year: 'numeric', // 2-digit exist
    // weekday: 'short', // long & narrow exist
  };
  const local = navigator.language;
  const now = new Date();
  const formatDate = new Intl.DateTimeFormat(local, options).format(now);
  // console.log(formatDate);
  dateTime.textContent = formatDate;
  // clock.textContent = formatDate;
}, 1000);

// 👇👇👇👇 Create startLogoutTimer funcionality
function startLogOutTimer() {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      logOut();
      clearInterval(timer);
    }
    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 120;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
}
// startLogOutTimer();
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  loan/////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

inputLoanBtn.addEventListener('click', function () {
  if (Number(inputLoan.value) > 0) {
    let key = Object.keys(currentAcc.movements).length;
    currentAcc.movements[key] = {
      from: 'Loan',
      date: testDate,
      amount: Number(inputLoan.value),
    };
    currentAcc.amounts.push(currentAcc.movements[key].amount);
    // myChart.destroy();
    setTimeout(() => {
      myChart.destroy();
      updateUI();
    }, 2000);
  }
  inputLoan.value = '';
  // Reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Transfer Amount//////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
btnTransfer.addEventListener('click', function (e) {
  accounts.forEach(el => {
    if (
      el.username === inputId.value &&
      Number(inputTransferAmount.value) > 0
    ) {
      let tokey = Object.keys(el.movements).length;
      let fromKey = Object.keys(currentAcc.movements).length;
      // create recieve account transaction
      el.movements[tokey] = {
        from: currentAcc.owner,
        date: testDate,
        amount:
          Number(inputTransferAmount.value) -
          (1.85 / 100) * Number(inputTransferAmount.value),
      };
      el.amounts.push(el.movements[tokey].amount);
      // create send account transaction
      currentAcc.movements[fromKey] = {
        to: el.owner,
        date: testDate,
        amount: Number(inputTransferAmount.value),
      };
      currentAcc.amounts.push(-currentAcc.movements[fromKey].amount);

      setTimeout(() => {
        myChart.destroy();
        updateUI();
      }, 2000);
    }
  });
  inputId.value = '';
  inputTransferAmount.value = '';
  // Reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Log Out//////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
function logOut() {
  dashboard.classList.remove('open');
  // hidden all element except dashboard

  main.style.display = `block`;
  header.style.display = `block`;
  main.style.filter = `blur(0px)`;
  header.style.filter = `blur(0px)`;
  reportWindowSize();
}
document.querySelector('.notification').addEventListener('click', function () {
  // Reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
  myChart.destroy();

  //
  logOut();
});
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  row:2 => Bar chart//////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
let chartAmountData = [];
let chartLabels = [];
let barBgColor1 = [];
let myChart;
//
function createArr() {
  for (const [key, item] of Object.entries(currentAcc.movements)) {
    if (item.to) {
      chartLabels.push(item.to);
      if (item.to == 'Withdraw') barBgColor1.push('hsl(136, 65%, 51%)');
      else barBgColor1.push('hsl(192, 70%, 51%)');
    }
    if (item.from) {
      chartLabels.push(item.from);
      if (item.from == 'Loan') barBgColor1.push('hsl(12, 88%, 59%)');
      else barBgColor1.push(' blueviolet');
    }
  }
  chartAmountData = currentAcc.amounts.map(el => Math.abs(el));
}
//
function createChart() {
  createArr();
  // // // 1.data:
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Amount',
        data: chartAmountData,
        backgroundColor: barBgColor1,
        barPercentage: 0.6,
      },
    ],
  };
  Chart.defaults.font.size = 16;
  Chart.defaults.font.lineHeight = 1.4;

  const config = {
    type: 'bar',
    data: data,
    options: {
      maintainAspectRatio: false, // for applying the height propertry it is important
      plugins: {
        legend: {
          display: false,
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 24,
            },
          },
        },
      },
    },
  };

  myChart = new Chart(document.getElementById('myChart'), config);
  // myChart.update();
}
// pie Chart
const labelspie = ['Total in', 'Total out', 'Empty'];

const dataPie = {
  labels: labelspie,
  datasets: [
    {
      label: 'My First dataset',
      // backgroundColor: ['hsl(220, 14%, 96%)', 'blueviolet', 'orange'],
      backgroundColor: ['orange', 'hsl(233, 26%, 24%)', 'hsl(220, 14%, 96%)'],
      data: [30, 45, 25],
    },
  ],
};

const config = {
  type: 'pie',
  data: dataPie,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};
const myChartPie = new Chart(document.getElementById('pieChart'), config);

//////////////////////////////////////
// demo;
//////////////////////////////////////
createTransaction(account1);

dashMainHeader.textContent = `Hi, ${account1.owner}`;
userName.textContent = `${account1.owner}`;
userEmail.textContent = `${account1.email}`;
userImage.setAttribute('src', account1.image);
allAmount.textContent = `$ ${totalBalence(account1.amounts)}`;

modalWindow.style.display = `none`;
main.style.display = `none`;
header.style.display = `none`;
dashboard.classList.add('open');
// ///////////////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Section Parralax//////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

const removeClass = function () {
  parralaxImage1.classList.remove('i1');
  parralaxImage1.classList.remove('i10-9');
  parralaxImage1.classList.remove('i10-8');
  //
  parralaxImage2.classList.remove('i2');
  parralaxImage2.classList.remove('i20-9');
  parralaxImage2.classList.remove('i20-8');
};
const parralaxCallback = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    parralaxTextBox.classList.add('in-viewport');
    parralaxImageBox.classList.add('in-viewport');
  } else {
    parralaxTextBox.classList.remove('in-viewport');
    parralaxImageBox.classList.remove('in-viewport');
  }
  entries.forEach(el => {
    if (el.intersectionRatio < 0.7) {
      removeClass();
    } else if (el.intersectionRatio < 0.85) {
      removeClass();
      parralaxImage1.classList.add('i10-8');
      parralaxImage2.classList.add('i20-8');
    } else if (el.intersectionRatio < 0.92) {
      removeClass();
      parralaxImage1.classList.add('i10-9');
      parralaxImage2.classList.add('i20-9');
    } else if (el.intersectionRatio <= 1) {
      removeClass();
      parralaxImage1.classList.add('i1');
      parralaxImage2.classList.add('i2');
    }
  });
};
const parralaxObserver = new IntersectionObserver(parralaxCallback, {
  root: null,
  threshold: [0.4, 0.8, 0.9, 1],
});

parralaxObserver.observe(sectionParralax);

//// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Section Slider//////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

let curSlide = 0;
const maxslide = slides.length;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const activeBtn = function () {
  btnSlider.forEach(el => el.classList.remove('slider-btn-active'));
  btnSlider[curSlide].classList.add('slider-btn-active');
};

goToSlide(0);
activeBtn();

const nextSlide = function (slide) {
  if (curSlide === maxslide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activeBtn();
};

const prevSlide = function (slide) {
  if (curSlide === 0) {
    curSlide = maxslide - 1;
  } else curSlide--;
  goToSlide(curSlide);
  activeBtn();
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
  else if (e.key === 'ArrowLeft') prevSlide();
});

sliderTab.addEventListener('click', function (e) {
  btnSlider.forEach((el, i) => {
    if (e.target == el) curSlide = i;
    goToSlide(curSlide);
    activeBtn();
  });
});
// observer
const sliderCallback = function (entries) {
  const [entry] = entries;
  if (entry.intersectionRatio < 0.2 && entry.boundingClientRect.top > 0)
    sectionSlider.classList.remove('in-viewport');
  else sectionSlider.classList.add('in-viewport');
};
const sliderObserver = new IntersectionObserver(sliderCallback, {
  root: null,
  threshold: 0.2,
});

sliderObserver.observe(sectionSlider);

//// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Section Card//////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
const cardCallback = function (entries) {
  const [entry] = entries;
  if (window.innerWidth > 600) {
    if (entry.intersectionRatio >= 1 && entry.boundingClientRect.top > 0) {
      cards.classList.add('tx28');
    } else cards.classList.remove('tx28');

    if (entry.intersectionRatio < 0.4 && entry.boundingClientRect.top > 0)
      card.forEach(el => el.classList.remove('in-viewport'));
    else card.forEach(el => el.classList.add('in-viewport'));
  } else card.forEach(el => el.classList.add('in-viewport'));
};

const cardObserver = new IntersectionObserver(cardCallback, {
  root: null,
  threshold: [0.4, 1],
});
cardObserver.observe(sectionCard);

///////////////////// section 4
const sectionPhone = document.querySelector('#section-4');
const phoneImgBox = document.querySelector('.phn-img-box');
const phoneTextBox = document.querySelector('.phn-text-box');
const phoneCallback = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    phoneImgBox.classList.add('in-viewport');
    phoneTextBox.classList.add('in-viewport');
  } else {
    phoneImgBox.classList.remove('in-viewport');
    phoneTextBox.classList.remove('in-viewport');
  }
};
const phoneObserver = new IntersectionObserver(phoneCallback, {
  root: null,
  threshold: 0.3,
});
phoneObserver.observe(sectionPhone);
