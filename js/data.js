//  SVG

export let fromSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="192"   height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256"   height="256" fill="none"></rect><circle cx="128" cy="140" r="40"   fill="none" stroke="#000000" stroke-linecap="round"   stroke-linejoin="round" stroke-width="16"></circle><path d="M196,  116a59.8,59.8,0,0,1,48,24" fill="none" stroke="#000000"   stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></  path><path d="M12,140a59.8,59.8,0,0,1,48-24" fill="none"   stroke="#000000" stroke-linecap="round" stroke-linejoin="round"   stroke-width="16"></path><path d="M70.4,216a64.1,64.1,0,0,1,115.2,0"   fill="none" stroke="#000000" stroke-linecap="round"   stroke-linejoin="round" stroke-width="16"></path><path d="M60,116A32,  32,0,1,1,91.4,78" fill="none" stroke="#000000" stroke-linecap="round"   stroke-linejoin="round" stroke-width="16"></path><path d="M164.6,78A32,  32,0,1,1,196,116" fill="none" stroke="#000000" stroke-linecap="round"   stroke-linejoin="round" stroke-width="16"></path></svg>`;
export let toSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
    `;
export let deposite = `<ion-icon name="arrow-down"></ion-icon>`;
export let withdraw = `<ion-icon name="arrow-up"></ion-icon>`;

export let bank = `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="24 96 232 96 128 32 24 96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon><line x1="56" y1="96" x2="56" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="104" y1="96" x2="104" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="152" y1="96" x2="152" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="96" x2="200" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="32" y1="176" x2="224" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="16" y1="208" x2="240" y2="208" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`;

/////////////////////////////////////////////////
// Data   // note : basically the data remains in the database
export const account1 = {
  owner: 'Nasim Reja',
  movements: {
    0: {
      to: 'Metro ',
      date: 'Sep 16,2021 at 22.10',
      amount: 240,
    },
    1: {
      // to: 'Metro store',
      // date: 'Sep 17,2021 at 22.10',
      // amount: 220,
      from: 'Loan',
      date: 'Sep 19,2021 at 12.10',
      amount: 350,
    },
    2: {
      from: 'Sarah Smith',
      date: 'Sep 18,2021 at 22.10',
      amount: 210,
    },
    3: {
      to: 'Amazon',
      date: 'Sep 19,2021 at 12.10',
      amount: 300,
    },
    4: {
      from: 'Deposite',
      date: 'Sep 19,2021 at 12.10',
      amount: 400,
    },
    5: {
      to: 'Withdraw',
      date: 'Sep 19,2021 at 12.10',
      amount: 300,
    },
    6: {
      from: 'Loan',
      date: 'Sep 19,2021 at 12.10',
      amount: 350,
    },
  },
  interestRate: 1.2, // %
  email: 'nasimreja67@gmail.com',
  pin: 1111,
  image: 'images/nasim.png',
};

export const account2 = {
  owner: 'Jessica Davis',
  movements: {
    0: {
      to: 'Uber',
      date: 'Sep 16,2021 at 22.10',
      amount: 350,
    },
    1: {
      to: 'street store',
      date: 'Sep 17,2021 at 22.10',
      amount: 20,
    },
    2: {
      from: 'Nasim Reja',
      date: 'Sep 18,2021 at 22.10',
      amount: 1500,
    },
    3: {
      from: 'Deposite',
      date: 'Sep 19,2021 at 12.10',
      amount: 1775,
    },
    4: {
      to: 'Need',
      date: 'Sep 19,2021 at 12.10',
      amount: 75,
    },
  },
  interestRate: 1.5,
  email: 'jessicadevis21@gmail.com',
  pin: 2222,
  image: 'images/jessica.png',
};

export const account3 = {
  owner: 'Samiul Haque',
  movements: {
    0: {
      from: 'Nasim Reja',
      date: 'Sep 16,2021 at 22.10',
      amount: 370,
    },
    1: {
      to: 'Metro store',
      date: 'Sep 17,2021 at 22.10',
      amount: 220,
    },
    2: {
      from: 'Jessica Davis',
      date: 'Sep 18,2021 at 22.10',
      amount: 210,
    },
    3: {
      to: 'Amazon',
      date: 'Sep 19,2021 at 12.10',
      amount: 300,
    },
    4: {
      to: 'Withdraw',
      date: 'Sep 18,2021 at 22.10',
      amount: 210,
    },
    5: {
      from: 'Deposite',
      date: 'Sep 19,2021 at 12.10',
      amount: 300,
    },
    6: {
      from: 'Deposite',
      date: 'Sep 19,2021 at 12.10',
      amount: 775,
    },
    7: {
      to: 'Amazon',
      date: 'Sep 19,2021 at 12.10',
      amount: 300,
    },
  },
  interestRate: 0.7,
  email: 'samiulhaque62@gmail.com',
  pin: 3333,
  image: 'images/samiul.png',
};

export const account4 = {
  owner: 'Sarah Smith',
  movements: {
    0: {
      to: 'Ali - baba ',
      date: 'Sep 16,2021 at 22.10',
      amount: 240,
    },
    1: {
      to: 'Withdraw',
      date: 'Sep 17,2021 at 22.10',
      amount: 220,
    },
    2: {
      from: 'Steven Thomas Williams',
      date: 'Sep 18,2021 at 22.10',
      amount: 720,
    },
    3: {
      from: 'Deposite',
      date: 'Sep 19,2021 at 12.10',
      amount: 500,
    },
    4: {
      to: 'Metro store',
      date: 'Sep 17,2021 at 22.10',
      amount: 220,
    },
    5: {
      to: 'E-bay',
      date: 'Sep 19,2021 at 12.10',
      amount: 100,
    },
  },
  interestRate: 1,
  email: 'sarahsmith66@gmail.com',
  pin: 4444,
  image: 'images/sarah.png',
};

export const accounts = [account1, account2, account3, account4];
