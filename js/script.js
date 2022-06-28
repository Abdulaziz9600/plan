let elFormUserPound = $(".js-user-form-pound");
let elFormUser = $(".js-user-form");
let elFormInputCost = $(".js-input-user-cost");
let elFormInputName = $(".js-input-user-cost-name");
let elFormInputSpend = $(".js-input-user-cost-spend");

// //////////BUTTONS
let elBtnCalcut = $(".js-calculate-btn");
let elBtnAdd = $(".js-add-btn");

//////////////// OUT LISTS

let elBudgetList = $(".js-budget-list");
let elExpensesList = $(".js-expenses-list");
let elExpensItim = $(".expense-item");
let elBalance = $(".js-balance-list");


//////////////// INPUT VAULES

let getmoney = () => {
  
  let inputCost = elFormInputCost.value.trim();
  $(".text-cost", elBudgetList).textContent = inputCost+("$");
  
  a = inputCost;
}

let count = () =>{
  
  let inputCost = elFormInputCost.value.trim();
  let inputSpendValue = elFormInputSpend.value.trim();
  
  let answer = inputCost - inputSpendValue;
  
  
  $(".text-balance", elBalance).textContent = answer+("$");
  $(".text-expens",elExpensesList).textContent = inputSpendValue+("$");
}


let orderList = () =>{

  
  let inputNameVaule = elFormInputName.value.trim();
  let elBtnDelet = createElement("button","",elExpensItim)
  elBtnDelet.dataset.BtnDelet = inputNameVaule.id
  elBtnDelet.textContent = "fiolskfs"
  
  
  $(".expense-text",elExpensItim).textContent = inputNameVaule
  elExpensItim.append(elBtnDelet)
  
  // elExpensItim.innerHTML = "";
}

elFormUserPound.addEventListener("submit", function (e) {
  e.preventDefault();
  
  getmoney();
  
})


elFormUser.addEventListener("submit", function (e) {
  e.preventDefault();
  
  count()
  orderList()
})