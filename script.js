"use strict";

//👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 Elements 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
///// Header :
const header = document.querySelector(".header");
const containerEl = document.querySelector(".container");
// hero
const hero = document.querySelector(".hero");
// // Main :
const main = document.querySelector("main");
//  modal
const btnSignIn = document.querySelector("#btn-sign-in");
const text = document.querySelector("#text");
const password = document.querySelector("#password");
const logInBtn = document.querySelectorAll(".btn");
const modalWindow = document.querySelector(".pop-up");
const modalCrossBtn = document.querySelector(".modal-icon");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const inputfirstName = document.querySelector("#f-name");
const inputlastName = document.querySelector("#l-name");
const inputEmail = document.querySelector("#c-email");
const inputPassword = document.querySelector("#c-password");
const btnCreateAcc = document.querySelector("#create-account");

//// DashBoard :
const dashboard = document.querySelector(".dashboard");
const dashMainHeader = document
  .querySelector(".user-header")
  .querySelector("h1");
const userName = document.querySelector(".name");
const userEmail = document.querySelector(".email");
const userImage = document.querySelector(".user-img");
const allAmount = document.querySelector("#total-amount");
const inputLoan = document.querySelector(".input-loan");
const inputLoanBtn = document.querySelector(".input-btn");
const inputId = document.querySelector(".transfer-id");
const inputTransferAmount = document.querySelector(".transfer-amount");
const btnTransfer = document.querySelector(".btn-transfer");
// withdraw btn:
const ovarlayWithdraw = document.querySelector(".ovarlay-withdraw");
const btnWithdraw = document.querySelector("#btn-withdraw");
const btnWithdrawCross = document.querySelectorAll(".w-cross");
const btnWithdrawCrossParent = document.querySelector(".relative");
const withdrawMethod = document.querySelector(".payment-method");
let options = document.querySelectorAll(".option");
let mark = document.querySelectorAll(".mark");
const next = document.querySelector(".next");
const withdrawWindow = document
  .querySelector("#withdraw")
  .querySelector(".center");

//transaction
const transactioncontent = document.querySelector(".transaction-content");

//  SVG

let fromSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="192"   height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256"   height="256" fill="none"></rect><circle cx="128" cy="140" r="40"   fill="none" stroke="#000000" stroke-linecap="round"   stroke-linejoin="round" stroke-width="16"></circle><path d="M196,  116a59.8,59.8,0,0,1,48,24" fill="none" stroke="#000000"   stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></  path><path d="M12,140a59.8,59.8,0,0,1,48-24" fill="none"   stroke="#000000" stroke-linecap="round" stroke-linejoin="round"   stroke-width="16"></path><path d="M70.4,216a64.1,64.1,0,0,1,115.2,0"   fill="none" stroke="#000000" stroke-linecap="round"   stroke-linejoin="round" stroke-width="16"></path><path d="M60,116A32,  32,0,1,1,91.4,78" fill="none" stroke="#000000" stroke-linecap="round"   stroke-linejoin="round" stroke-width="16"></path><path d="M164.6,78A32,  32,0,1,1,196,116" fill="none" stroke="#000000" stroke-linecap="round"   stroke-linejoin="round" stroke-width="16"></path></svg>`;
let toSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
    `;
let deposite = `<ion-icon name="arrow-down"></ion-icon>`;
let withdraw = `<ion-icon name="arrow-up"></ion-icon>`;

let bank = `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="24 96 232 96 128 32 24 96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon><line x1="56" y1="96" x2="56" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="104" y1="96" x2="104" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="152" y1="96" x2="152" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="96" x2="200" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="32" y1="176" x2="224" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="16" y1="208" x2="240" y2="208" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`;

// /////////////////////////////////////////////////////////////

// header
//  sticky header
const sectionHero = document.querySelector(".section-hero");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky-nav");
  else header.classList.remove("sticky-nav");
};
const heroSectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroSectionObserver.observe(sectionHero);

// 👉👉👉👉👉 calculate Hero section left margin
function reportWindowSize() {
  hero.style.marginLeft = getComputedStyle(containerEl)["margin-left"];
}
reportWindowSize();
window.addEventListener("resize", reportWindowSize);

// ///// 👉👉👉👉👉 Open modal functionality

logInBtn.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    modalWindow.classList.add("open-modal");
    main.style.filter = `blur(3px)`;
    header.style.filter = `blur(3px)`;
  });
});
// cross btn
function defaultActive() {
  //  default active class
  tabs.forEach((t) => t.classList.remove("operations__tab-active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  document
    .querySelector(".operations__tab--2")
    .classList.add("operations__tab-active");
  document
    .querySelector(`.operations__content--2`)
    .classList.add("operations__content--active");
}
modalCrossBtn.addEventListener("click", function () {
  modalWindow.classList.remove("open-modal");
  main.style.filter = `blur(0px)`;
  header.style.filter = `blur(0px)`;
  //
  defaultActive();
});

// sign up tab
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // Guard clause
  if (!clicked) return;
  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab-active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  // // Activate tab
  clicked.classList.add("operations__tab-active");

  // // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// ///////////////////////////////////////////////////////////////////////////////////
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 DashBoard 🔥🔥🔥🔥🔥🔥🔥🔥🔥
// ///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////
// Data   // note : basically the data remains in the database
const account1 = {
  owner: "Nasim Reja",
  movements: {
    0: {
      to: "Metro ",
      date: "Sep 16,2021 at 22.10",
      amount: 240,
    },
    1: {
      to: "Metro store",
      date: "Sep 17,2021 at 22.10",
      amount: 220,
    },
    2: {
      from: "Sarah Smith",
      date: "Sep 18,2021 at 22.10",
      amount: 210,
    },
    3: {
      to: "Amazon",
      date: "Sep 19,2021 at 12.10",
      amount: 300,
    },
    4: {
      from: "Deposite",
      date: "Sep 19,2021 at 12.10",
      amount: 1300,
    },
    5: {
      to: "Withdraw",
      date: "Sep 19,2021 at 12.10",
      amount: 300,
    },
    6: {
      from: "Loan",
      date: "Sep 19,2021 at 12.10",
      amount: 300,
    },
  },
  interestRate: 1.2, // %
  email: "nasimreja67@gmail.com",
  pin: 1111,
  image: "images/nasim.png",
};

const account2 = {
  owner: "Jessica Davis",
  movements: {
    0: {
      to: "Uber",
      date: "Sep 16,2021 at 22.10",
      amount: 350,
    },
    1: {
      to: "street store",
      date: "Sep 17,2021 at 22.10",
      amount: 20,
    },
    2: {
      from: "Nasim Reja",
      date: "Sep 18,2021 at 22.10",
      amount: 1500,
    },
    3: {
      from: "Deposite",
      date: "Sep 19,2021 at 12.10",
      amount: 1775,
    },
    4: {
      to: "Need",
      date: "Sep 19,2021 at 12.10",
      amount: 75,
    },
  },
  interestRate: 1.5,
  email: "jessicadevis21@gmail.com",
  pin: 2222,
  image: "../images/jessica.png",
};

const account3 = {
  owner: "Samiul Haque",
  movements: {
    0: {
      from: "Nasim Reja",
      date: "Sep 16,2021 at 22.10",
      amount: 370,
    },
    1: {
      to: "Metro store",
      date: "Sep 17,2021 at 22.10",
      amount: 220,
    },
    2: {
      from: "Jessica Davis",
      date: "Sep 18,2021 at 22.10",
      amount: 210,
    },
    3: {
      to: "Amazon",
      date: "Sep 19,2021 at 12.10",
      amount: 300,
    },
    4: {
      to: "Withdraw",
      date: "Sep 18,2021 at 22.10",
      amount: 210,
    },
    5: {
      from: "Deposite",
      date: "Sep 19,2021 at 12.10",
      amount: 2300,
    },
    6: {
      from: "Deposite",
      date: "Sep 19,2021 at 12.10",
      amount: 775,
    },
    7: {
      to: "Amazon",
      date: "Sep 19,2021 at 12.10",
      amount: 300,
    },
  },
  interestRate: 0.7,
  email: "samiulhaque62@gmail.com",
  pin: 3333,
  image: "../images/samiul.png",
};

const account4 = {
  owner: "Sarah Smith",
  movements: {
    0: {
      to: "Ali - baba ",
      date: "Sep 16,2021 at 22.10",
      amount: 240,
    },
    1: {
      to: "Withdraw",
      date: "Sep 17,2021 at 22.10",
      amount: 220,
    },
    2: {
      from: "Steven Thomas Williams",
      date: "Sep 18,2021 at 22.10",
      amount: 720,
    },
    3: {
      from: "Deposite",
      date: "Sep 19,2021 at 12.10",
      amount: 2100,
    },
    4: {
      to: "Metro store",
      date: "Sep 17,2021 at 22.10",
      amount: 220,
    },
    5: {
      to: "E-bay",
      date: "Sep 19,2021 at 12.10",
      amount: 100,
    },
  },
  interestRate: 1,
  email: "sarahsmith66@gmail.com",
  pin: 4444,
  image: "../images/sarah.png",
};

const accounts = [account1, account2, account3, account4];

// ///////////////////////////////////////////////////////////////////
//🔥🔥🔥🔥👉👉👉👉👉 create New account
// ///////////////////////////////////////////////////////////////////
let currentAcc = "";
// ekhane kaj baki input field clear kora
btnCreateAcc.addEventListener("click", function (e) {
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
    window["account" + pageNumber] = {
      owner: totalName,
      amounts: [1000],
      movements: {
        0: {
          from: "Deposite",
          date: "Sep 19,2021 at 12.10",
          amount: 1000,
        },
      },
      email: email,
      pin: Number(password),
      image: "images/avatar-male.png",
      username: username,
    };
    currentAcc = window["account" + pageNumber];
    accounts.push(currentAcc);
    activeDashboard();
    updateUI();
    // clear inputfield
    inputfirstName.value = "";
    inputlastName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
    //
    defaultActive();
  }
});

// 👉👉👉👉👉 create username,amounts :

accounts.forEach((el) => {
  el.username = el.owner
    .split(" ")
    .map((el) => el[0])
    .join("")
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
  transactioncontent.innerHTML = "";
  acc.amounts.forEach((el, i) => {
    let h4, svg;
    if (acc.movements[i].from == "Loan") {
      svg = bank;
      h4 = "from";
    } else if (el > 0 && acc.movements[i].from === "Deposite") {
      svg = deposite;
      h4 = "from";
    } else if (el > 0) {
      h4 = "from";
      svg = fromSvg;
    } else if (el < 0 && acc.movements[i].to == "Withdraw") {
      svg = withdraw;
      h4 = "to";
    } else {
      h4 = "to";
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
    transactioncontent.insertAdjacentHTML("afterbegin", html);
    if (svg == fromSvg || svg == deposite)
      document.querySelector(".logo").style.backgroundColor = "#31d35cce";
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
    let newarr = totalL.split("");
    return `${newarr[0]},${newarr.slice(1).join("")}`;
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
  userImage.setAttribute("src", currentAcc.image);
}
function activeDashboard() {
  dashboard.classList.add("open");
  //       // hidden all element except dashboard
  modalWindow.classList.remove("open-modal");
  main.style.display = `none`;
  header.style.display = `none`;
}
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Matching userName or Implement log in
// ///////////////////////////////////////////////////////////////////
btnSignIn.addEventListener("click", function (e) {
  e.preventDefault();
  accounts.forEach((el) => {
    if (el.username === text.value && el.pin === Number(password.value)) {
      currentAcc = el;
      activeDashboard();
    }
  });
  text.value = "";
  password.value = "";
  // calling all function
  updateUI();
});
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Withdraw/////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

btnWithdraw.addEventListener("click", function (e) {
  ovarlayWithdraw.classList.add("open-withdraw");
});

const likeBefore = function () {
  // make the withdraw screen as before
  withdrawWindow.innerHTML = "";
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
  withdrawWindow.insertAdjacentHTML("afterbegin", html2);
  document.querySelector("#next").textContent = "Next";
  next.style.backgroundColor = "#42465f";
  next.style.color = "#9698a6";
  mark = document.querySelectorAll(".mark");
};

let inputNumAm;
// next btn:
next.addEventListener("click", function () {
  if (mark) {
    if (
      mark[0].classList.contains("mark-open") ||
      mark[1].classList.contains("mark-open")
    ) {
      mark = null;
      withdrawWindow.innerHTML = "";
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
      withdrawWindow.insertAdjacentHTML("afterbegin", html);
      document.querySelector("#next").textContent = "Withdraw";
      next.style.backgroundColor = "hsl(12, 88%, 59%)";
      next.style.color = "white";
      inputNumAm = document.querySelectorAll(".i-with");
    }
  }
  // create withdraw transaction & calculate total balance
  if (
    inputNumAm[0].value.length === 11 &&
    Number(inputNumAm[1].value) > 0 &&
    Number(inputNumAm[1].value) < total
  ) {
    ovarlayWithdraw.classList.remove("open-withdraw");
    let key = Object.keys(currentAcc.movements).length;
    currentAcc.movements[key] = {
      to: "Withdraw",
      date: "Sep 19,2021 at 12.10",
      amount: Number(inputNumAm[1].value),
    };
    currentAcc.amounts.push(-currentAcc.movements[key].amount);
    updateUI();
    likeBefore();
  }
});

// event delegation  📝 very helpful:

btnWithdrawCrossParent.addEventListener("click", function (e) {
  if (e.target.classList.contains("option")) {
    mark[0].classList.remove("mark-open");
    mark[1].classList.remove("mark-open");
    if (e.target.classList.contains("bikas")) {
      mark[0].classList.add("mark-open");
    } else if (e.target.classList.contains("nagad")) {
      mark[1].classList.add("mark-open");
    }
  }
  if (e.target.classList.contains("w-cross")) {
    ovarlayWithdraw.classList.remove("open-withdraw");
    likeBefore();
  }
});
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  loan/////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

inputLoanBtn.addEventListener("click", function () {
  if (Number(inputLoan.value) > 0) {
    let key = Object.keys(currentAcc.movements).length;
    currentAcc.movements[key] = {
      from: "Loan",
      date: "Sep 17,2021 at 22.10",
      amount: Number(inputLoan.value),
    };
    currentAcc.amounts.push(currentAcc.movements[key].amount);
    updateUI();
  }
  inputLoan.value = "";
});
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Transfer Amount//////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
btnTransfer.addEventListener("click", function (e) {
  accounts.forEach((el) => {
    if (
      el.username === inputId.value &&
      Number(inputTransferAmount.value) > 0
    ) {
      let tokey = Object.keys(el.movements).length;
      let fromKey = Object.keys(currentAcc.movements).length;
      // create recieve account transaction
      el.movements[tokey] = {
        from: currentAcc.owner,
        date: "Sep 17,2021 at 22.10",
        amount:
          Number(inputTransferAmount.value) -
          (1.85 / 100) * Number(inputTransferAmount.value),
      };
      el.amounts.push(el.movements[tokey].amount);
      // create send account transaction
      currentAcc.movements[fromKey] = {
        to: el.owner,
        date: "Sep 17,2021 at 22.10",
        amount: Number(inputTransferAmount.value),
      };
      currentAcc.amounts.push(-currentAcc.movements[fromKey].amount);

      updateUI();
    }
  });
  inputId.value = "";
  inputTransferAmount.value = "";
});
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Log Out//////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
document.querySelector(".notification").addEventListener("click", function (e) {
  dashboard.classList.remove("open");
  // hidden all element except dashboard

  main.style.display = `block`;
  header.style.display = `block`;
  main.style.filter = `blur(0px)`;
  header.style.filter = `blur(0px)`;
});
// ///////////////////////////////////////////////////////////////////

// demo
// createTransaction(account1);

// dashMainHeader.textContent = `Hi, ${account1.owner}`;
// userName.textContent = `${account1.owner}`;
// userEmail.textContent = `${account1.email}`;
// userImage.setAttribute("src", account1.image);
// allAmount.textContent = `$ ${totalBalence(account1.amounts)}`;

// modalWindow.style.display = `none`;
// main.style.display = `none`;
// header.style.display = `none`;
// dashboard.classList.add("open");
// ///////////////////////////////////////////////////////////////////////////////////

//  JavaScript intersection observer api
const sectionFeature = document.querySelector(".section-feature");

const featureCallback = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (entry.isIntersecting) {
    sectionFeature.classList.add("in-viewport");
  } else {
    sectionFeature.classList.remove("in-viewport");
  }
};
const featureObserver = new IntersectionObserver(featureCallback, {
  root: null,
  threshold: 0.1,
});

featureObserver.observe(sectionFeature);

// section parralax

const sectionParralax = document.querySelector(".parralax-section");
const parralaxTextBox = document.querySelector(".parralax-text-box");
const parralaxImageBox = document.querySelector(".parralax-img-box");
const parralaxImage1 = document.querySelector(".img1");
const parralaxImage2 = document.querySelector(".img2");

const parralaxCallback = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    parralaxTextBox.classList.add("in-viewport");
    parralaxImageBox.classList.add("in-viewport");
  } else {
    parralaxTextBox.classList.remove("in-viewport");
    parralaxImageBox.classList.remove("in-viewport");
  }
  entries.forEach((el) => {
    console.log(el);
    console.log(el.intersectionRatio);
    if (el.intersectionRatio >= 1) {
      parralaxImage1.classList.add("i1");
    } else if (el.intersectionRatio > 0.78) {
      parralaxImage1.classList.add("i10-8");
    }
  });
};
const parralaxObserver = new IntersectionObserver(parralaxCallback, {
  root: null,
  threshold: [0.4, 0.8, 0.9, 1],
});

parralaxObserver.observe(sectionParralax);
