"use strict";

// header
const header = document.querySelector(".container");
// modal
const logInBtn = document.querySelectorAll(".btn");
const modalWindow = document.querySelector(".modal-window");
const modalCrossBtn = document.querySelector(".modal-icon");
// hero
const hero = document.querySelector(".hero");

// 👉👉👉👉👉 calculate Hero section left margin
function reportWindowSize() {
  hero.style.marginLeft = getComputedStyle(header)["margin-left"];
}
reportWindowSize();
window.addEventListener("resize", reportWindowSize);

// ///// 👉👉👉👉👉 Open modal functionality

logInBtn.forEach((el) => {
  el.addEventListener("click", function (e) {
    modalWindow.classList.add("open-modal");
    document.querySelector("main").style.filter = `blur(3px)`;
    document.querySelector("header").style.filter = `blur(3px)`;
  });
});

modalCrossBtn.addEventListener("click", function (e) {
  modalWindow.classList.remove("open-modal");
  document.querySelector("main").style.filter = `blur(0px)`;
  document.querySelector("header").style.filter = `blur(0px)`;
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
  },
  interestRate: 1.2, // %
  pin: 1111,
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
      to: "Need",
      date: "Sep 19,2021 at 12.10",
      amount: 75,
    },
  },
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
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
  },
  interestRate: 0.7,
  pin: 3333,
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
      to: "Metro store",
      date: "Sep 17,2021 at 22.10",
      amount: 220,
    },
    2: {
      from: "Steven Thomas Williams",
      date: "Sep 18,2021 at 22.10",
      amount: 720,
    },
    3: {
      to: "E-bay",
      date: "Sep 19,2021 at 12.10",
      amount: 2100,
    },
  },
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 Elements 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇

//transaction
const transactioncontent = document.querySelector(".transaction-content");

//  SVG

let fromSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="140" r="40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M196,116a59.8,59.8,0,0,1,48,24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M12,140a59.8,59.8,0,0,1,48-24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M70.4,216a64.1,64.1,0,0,1,115.2,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M60,116A32,32,0,1,1,91.4,78" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M164.6,78A32,32,0,1,1,196,116" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`;
let toSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
         viewBox="0 0 24 24" stroke="#343" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2 707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z " />
          </svg>
    `;
// /////////////////////////////////////////////////////////////

// create username

accounts.forEach((el) => {
  el.username = el.owner
    .split(" ")
    .map((el) => el[0])
    .join("")
    .toLowerCase();
  // create amounts
  el.amounts = [];
  for (const [key, value] of Object.entries(el.movements)) {
    el.amounts.push(el.movements[key].amount);
  }
});

// ///////////////////////////////////////////////////////////////////
// create transaction
// ///////////////////////////////////////////////////////////////////

const createTransaction = function (acc) {
  transactioncontent.innerHTML = "";
  acc.amounts.forEach((el, i) => {
    let updateEl = acc.movements[i].from ? el : -el;
    console.log(updateEl);
    let h4, svg;
    if (updateEl > 0) {
      h4 = "from";
      svg = fromSvg;
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
        <div class="transactions-amount">${updateEl} $</div>
    </div>
 `;
    transactioncontent.insertAdjacentHTML("afterbegin", html);
    if (svg == toSvg)
      document.querySelector(".logo").style.backgroundColor = "#31d35cce";
  });
};
createTransaction(account4);
