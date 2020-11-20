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
      burgerOrderArray.push(boxList[j].value);
    };
    return burgerOrderArray;
};