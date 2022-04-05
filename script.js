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
const modalBtn = document.querySelector(".modal-btn");
const text = document.querySelector("#text");
const password = document.querySelector("#password");
const logInBtn = document.querySelectorAll(".btn");
const modalWindow = document.querySelector(".modal-window");
const modalCrossBtn = document.querySelector(".modal-icon");

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

//transaction
const transactioncontent = document.querySelector(".transaction-content");

//  SVG

let fromSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="140" r="40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M196,116a59.8,59.8,0,0,1,48,24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M12,140a59.8,59.8,0,0,1,48-24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M70.4,216a64.1,64.1,0,0,1,115.2,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M60,116A32,32,0,1,1,91.4,78" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M164.6,78A32,32,0,1,1,196,116" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`;
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

// 👉👉👉👉👉 calculate Hero section left margin
function reportWindowSize() {
  hero.style.marginLeft = getComputedStyle(containerEl)["margin-left"];
}
reportWindowSize();
window.addEventListener("resize", reportWindowSize);

// ///// 👉👉👉👉👉 Open modal functionality

logInBtn.forEach((el) => {
  el.addEventListener("click", function (e) {
    modalWindow.classList.add("open-modal");
    main.style.filter = `blur(3px)`;
    header.style.filter = `blur(3px)`;
  });
});

modalCrossBtn.addEventListener("click", function (e) {
  modalWindow.classList.remove("open-modal");
  main.style.filter = `blur(0px)`;
  header.style.filter = `blur(0px)`;
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
  image: "../images/nasim.png",
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
const createTransaction = function (acc) {
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
};

// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  create total balance
// ///////////////////////////////////////////////////////////////////
const totalBalence = function (acc) {
  let total = acc.reduce((acc, cur) => acc + cur);
  total = String(total);
  if (total.length > 3) {
    let newarr = total.split("");
    return `${newarr[0]},${newarr.slice(1).join("")}`;
  } else return total;
};

////////////////////////////////////
const updateUI = function () {
  createTransaction(currentAcc);
  allAmount.textContent = `$ ${totalBalence(currentAcc.amounts)}`;
};
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Matching userName or Implement log in
// ///////////////////////////////////////////////////////////////////
let currentAcc = "";
modalBtn.addEventListener("click", function (e) {
  e.preventDefault();
  accounts.forEach((el) => {
    if (el.username === text.value && el.pin === Number(password.value)) {
      dashboard.classList.add("open");
      currentAcc = el;
      // hidden all element except dashboard
      modalWindow.classList.remove("open-modal");
      main.style.display = `none`;
      header.style.display = `none`;
    }
  });
  text.value = "";
  password.value = "";
  // calling all function
  updateUI();
  // change text
  dashMainHeader.textContent = `Hi, ${currentAcc.owner}`;
  userName.textContent = `${currentAcc.owner}`;
  userEmail.textContent = `${currentAcc.email}`;
  // change img
  userImage.setAttribute("src", currentAcc.image);
});
// ///////////////////////////////////////////////////////////////////
//👉👉👉👉👉  Withdraw/////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
const ovarlayWithdraw = document.querySelector(".ovarlay-withdraw");
const btnWithdraw = document.querySelector("#btn-withdraw");
const btnWithdrawCross = document.querySelectorAll(".w-cross");
const btnWithdrawCrossParent = document.querySelector(".relative");

btnWithdraw.addEventListener("click", function (e) {
  ovarlayWithdraw.classList.add("open-withdraw");
});

const withdrawMethod = document.querySelector(".payment-method");
const options = document.querySelectorAll(".option");
const mark = document.querySelectorAll(".mark");
const next = document.querySelector(".next");
const withdrawWindow = document
  .querySelector("#withdraw")
  .querySelector(".center");
options.forEach((el, i) => {
  el.addEventListener("click", function () {
    mark[0].classList.remove("mark-open");
    mark[1].classList.remove("mark-open");
    mark[i].classList.add("mark-open");
  });
});
next.addEventListener("click", function () {
  if (
    mark[0].classList.contains("mark-open") ||
    mark[1].classList.contains("mark-open")
  ) {
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
  }
});

// event delegation
btnWithdrawCrossParent.addEventListener("click", function (e) {
  if (e.target.classList.contains("w-cross")) {
    ovarlayWithdraw.classList.remove("open-withdraw");
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
document.querySelector(".notification").addEventListener("click", function (e) {
  dashboard.classList.remove("open");
  // hidden all element except dashboard

  main.style.display = `block`;
  header.style.display = `block`;

  ///////////
  main.style.filter = `blur(0px)`;
  header.style.filter = `blur(0px)`;
});
// ///////////////////////////////////////////////////////////////////

// demo
createTransaction(account1);

dashMainHeader.textContent = `Hi, ${account1.owner}`;
userName.textContent = `${account1.owner}`;
userEmail.textContent = `${account1.email}`;
userImage.setAttribute("src", account1.image);
allAmount.textContent = `$ ${totalBalence(account1.amounts)}`;

modalWindow.style.display = `none`;
main.style.display = `none`;
header.style.display = `none`;
dashboard.classList.add("open");
