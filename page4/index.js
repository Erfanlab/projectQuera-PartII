        
    document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');

    // Set the default theme to dark if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';

    switchElement.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
       
        }
    });
});


////////////////ایجاد تسک جدید





function getvalueuser(){
    const userValue = document.getElementById("recipient-name").value;
    if (userValue === ''){
        alert("خطا! هیچ عنوان تسکی انتخاب نشده است.")
    }else{
        console.log(userValue);
            const para = document.createElement("div");
            para.setAttribute("id","toodcard")
            para.classList.add("card","bg-body-tertiary","w-100","d-flex","flex-row","justify-content-start","align-items-center");
            para.style.height= "33%";
            document.getElementById("todolistall").appendChild(para);
            todolist();
           
        
          
            // para.innerHTML=userValue;
            
            
    }
function todolist(){
    const bordercard = document.createElement("div");
    bordercard.classList.add("borderhigh","border","rounded-start-5","flex-row")
    document.getElementById("toodcard").appendChild(bordercard);
    const checkboxuser = document.createElement("div");
    checkboxuser.setAttribute('id','checkboxuser');
    checkboxuser.classList.add("checkboxuser");
    document.getElementById("toodcard").append(checkboxuser);
    return inputUserCheckbox()


function inputUserCheckbox (){
const inputusercheck = document.createElement("input");
inputusercheck.classList.add("inputUser");
inputusercheck.setAttribute("type","checkbox");
document.getElementById("checkboxuser").appendChild(inputusercheck);

}



}
};



// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.innerHTML === "Hello") {
//       x.innerHTML = "Swapped text!";
//     } else {
//       x.innerHTML = "Hello";
//     }
//   } 









///////   حذف کردن تسک های انجام شده 
function myFunctionhigh() {
    var element = document.getElementById("textMoreHigh");
    element.classList.toggle("text-decoration-line-through");
    setTimeout(myFunction, 3000)
function myFunction(){
    alert("درخواست حذف انجام شد")
    var removeelement = document.getElementById("cardHigh");
    removeelement.classList.add("d-none");

}
return myFunctionhigh;
  };
function myFunctionmidel() {
    var element = document.getElementById("textMoreMidel");
    element.classList.toggle("text-decoration-line-through");
    setTimeout(myFunction, 3000)
    function myFunction(){
        alert("درخواست حذف انجام شد")
        var removeelement = document.getElementById("cardMidel");
        removeelement.classList.add("d-none");}
  };
function myFunctionlower() {
    var element = document.getElementById("textMoreLower");
    element.classList.toggle("text-decoration-line-through");
    setTimeout(myFunction, 3000)
    function myFunction(){
        alert("درخواست حذف انجام شد")
        var removeelement = document.getElementById("cardLower");
        removeelement.classList.add("d-none");
    }
        return myFunctionlower;
  };


