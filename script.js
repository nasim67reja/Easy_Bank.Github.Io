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

//transaction
const transactioncontent = document.querySelector(".transaction-content");

//  SVG

let fromSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="140" r="40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M196,116a59.8,59.8,0,0,1,48,24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M12,140a59.8,59.8,0,0,1,48-24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M70.4,216a64.1,64.1,0,0,1,115.2,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M60,116A32,32,0,1,1,91.4,78" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M164.6,78A32,32,0,1,1,196,116" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`;
let toSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
    `;

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
  email: "steventhomas62@gmail.com",
  pin: 3333,
  image: "../images/steven.png",
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
  email: "sarahsmith66@gmail.com",
  pin: 4444,
  image: "../images/sarah.png",
};

const accounts = [account1, account2, account3, account4];

// create username,amounts

accounts.forEach((el) => {
  el.username = el.owner
    .split(" ")
    .map((el) => el[0])
    .join("")
    .toLowerCase();
  // create amounts
  el.amounts = [];
  console.log(el.movements);
  for (const [key, value] of Object.entries(el.movements)) {
    // if (el.movements[key].from) el.amounts.push(el.movements[key].amount);
    // else el.amounts.push(-el.movements[key].amount);
    el.amounts.push(el.movements[key].amount);
  }
});
console.log(accounts);

// ///////////////////////////////////////////////////////////////////
// create transaction
// ///////////////////////////////////////////////////////////////////
const createTransaction = function (acc) {
  transactioncontent.innerHTML = "";
  acc.amounts.forEach((el, i) => {
    let updateEl = acc.movements[i].from ? el : -el;
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
    if (svg == fromSvg)
      document.querySelector(".logo").style.backgroundColor = "#31d35cce";
  });
};
// ///////////////////////////////////////////////////////////////////
// create total balance
// ///////////////////////////////////////////////////////////////////
// Matching userName or Implement log in
// ///////////////////////////////////////////////////////////////////
let currentAcc = "";
modalBtn.addEventListener("click", function (e) {
  e.preventDefault();
  accounts.forEach((el) => {
    if (el.username === text.value && el.pin === Number(password.value)) {
      dashboard.classList.add("open");
      currentAcc = el;
      // hidden all element except dashboard
      modalWindow.style.display = `none`;
      main.style.display = `none`;
      header.style.display = `none`;
    }
  });
  text.value = "";
  password.value = "";
  createTransaction(currentAcc);

  // change text
  dashMainHeader.textContent = `Hi, ${currentAcc.owner}`;
  userName.textContent = `${currentAcc.owner}`;
  userEmail.textContent = `${currentAcc.email}`;
  // change img
  userImage.setAttribute("src", currentAcc.image);
});
// demo
createTransaction(account1);

dashMainHeader.textContent = `Hi, ${account1.owner}`;
userName.textContent = `${account2.owner}`;
userEmail.textContent = `${account3.email}`;
userImage.setAttribute("src", account3.image);

// ///////////////////////////////////////////////////////////////////

modalWindow.style.display = `none`;
main.style.display = `none`;
header.style.display = `none`;
dashboard.classList.add("open");
