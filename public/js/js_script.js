/*var buttonClicked = function() {

  radios = document.getElementsByName('gender');
  console.log(radios)
  for (i=0; i<radios.length; i++)
  if (radios[i].checked) {
    gender=radios[i].id;
  };

  let burgerOrder=[];
  let boxList = document.getElementsByName('burgerCheckbox');
  for (j=0; j<boxList.length; j++) 
    if (boxList[j].checked) {
      burgerOrder+=boxList[j].value;
    };

    console.log(burgerOrder);
    let summaryText = "Order confirmation";
    let customerText = "Customer details";
    let orderText = "Order summary";

    let fullnameOrder = (document.getElementById('fullname').value);
    let emailOrder = (document.getElementById('email').value);
    let recipientOrder = (document.getElementById('recipient').value)

    clicked = true;


    /*array=[console.log(document.getElementById('fullname').value), console.log(document.getElementById('email').value), console.log(document.getElementById('street').value), console.log(document.getElementById('house').value), console.log(document.getElementById('recipient').value), console.log(gender)];*/
    /*infoAboutOrder=[fullnameOrder, emailOrder, recipientOrder, gender, burgerOrder];
    infoAboutOrder=[fullnameOrder, emailOrder, recipientOrder, gender, burgerOrder];
    console.log(infoAboutOrder);
  
  return infoAboutOrder;*/
    

  /*var orderInformation = [{
    "fullname": "document.getElementById('fullname').value",
    "email": "document.getElementById('email').value",
    "delivery adress": "array[3] + array[4]",
    "payment": ,
    "orderBurgers": */
  /*};*/

var personalInfo = function() {

  radios = document.getElementsByName('gender');
  for (i=0; i<radios.length; i++)
  if (radios[i].checked) {
    gender=radios[i].id;
  };

    let fullnameOrder = (document.getElementById('fullname').value);
    let emailOrder = (document.getElementById('email').value);
    let recipientOrder = (document.getElementById('recipient').value)

    personalInfoArray=[fullnameOrder, emailOrder, recipientOrder, gender];
  
  return personalInfoArray; };

var orderTable = function() {
  var burgerOrderArray=[];
  let boxList = document.getElementsByName('burgerCheckbox');
  for (j=0; j<boxList.length; j++) 
    if (boxList[j].checked) {
      /*burgerOrderArray+=boxList[j].value;*/
      burgerOrderArray.push(boxList[j].value);
    };
    return burgerOrderArray;
};

  /*var orderInformation = function() {
    radios = document.getElementsByName('gender')
    console.log(radios)
  for (i=0; i<radios.length; i++)
  if (radios[i].checked) {
    gender=radios[i].id;
  };
};

/*var getInfo = function() {
  console.log(document.getElementById('fullname').value);
  console.log(document.getElementById('email').value); 
  console.log(document.getElementById('street').value); 
  console.log(document.getElementById('house').value); 
  console.log(document.getElementById('recipient').value); 
  console.log(customerInfo);
  radios = document.getElementsByName('gender');
  for (i=0; i<radios.length; i++)
  if (radios[i].checked) {
    gender=radios[i].id;
  }
}*/