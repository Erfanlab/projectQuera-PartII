////// دارک مود
/// این درسته 
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

const groupcards = document.querySelector("div.groupcard");


const actionBtn = document.querySelector("button.creat-btn");
const actionBtnclose = document.querySelector("button.close-btn");

const userTodotitle = document.querySelector(
    'div.todocreation input[name="todo-title"]');
const userTododesc = document.querySelector(
    'div.todocreation textarea[name="todo-desk"]');

const selectbtnpriority= document.querySelector("button.select-btn-priority");
const selectbtnprioritysvg= document.querySelector("button.select-btn-priority svg");

const allpriority= document.querySelector("div.all-priority");

selectbtnpriority.addEventListener("click", () => {

    if (selectbtnprioritysvg.classList.contains("rotate-180")) {
        selectbtnprioritysvg.classList.remove("rotate-180");
        allpriority.style.display ="none";
        resetpriority();
        
    }else{

        selectbtnprioritysvg.classList.add("rotate-180");
        allpriority.style.display ="flex";
    }

   
});
//////     ریست کردن کامل تگ ها 
const refreshButton = document.querySelector('.refresh-button');

function resetAll(){
    for(let i =0 ; i<userTodopriority.length;i++){
            userTodopriority[i].checked = false;
        };
        alert("fail")
        }


    /////   readio button
////  برای ریست کردن لیست تگ های انتخاب شد 
function resetpriority (){
        for(let i =0 ; i<userTodopriority.length;i++){
            if (userTodopriority[i].checked){
                userTodopriority[i].checked = false;
                alert("الویت شما حذف شما لطفا مجدد انتخاب کنید.")
            }
        }
    }
////     تابع انتخاب سه تا سلکتور ها 
const userTodopriority = document.getElementsByName('priority');
function selectpriority(){

            for (let i = 0; i < userTodopriority.length; i++) { 
                if (userTodopriority[i].checked){   
                return userTodopriority[i].value;            
            }
        };
        alert("الویتی انتخاب نکردید !");
        return "";
    };

///  دکمه انتخاب اصلی 
actionBtn.addEventListener("click",creattodo);
actionBtnclose.addEventListener("click",resetAll);
///////
const inprogrestodos=[];

function creattodo(){
    const numbertodos=toString(inprogrestodos.length);

    function checkvaluetitle(){
    if (userTodotitle.value === ''){
        alert("خطا! هیچ عنوان تسکی انتخاب نشده است.")
}
return userTodotitle.value;
}



    const inprogrestodo = {
        title:checkvaluetitle(),
        desc:userTododesc.value,
        priority:selectpriority(),
        lengths:numbertodos,
    };

    inprogrestodos.push(inprogrestodo);
    localStorage.setItem("inprogrestodos",JSON.stringify(inprogrestodos));
    ////    شمارش تعداد تسک های امروز
console.log(inprogrestodo);
};

const farsiHighpriority="بالا"
const farsiMidpriority="متوسط"
const farsiLowpriority="پایین"

document.addEventListener("DOMContentLoaded",()=>{
    const inprogrestodoinlocalstorag =JSON.parse(localStorage.getItem("inprogrestodos"));

    inprogrestodoinlocalstorag.forEach((ToDo)=> {  
        if (ToDo.priority === "high-priority"){
            const todowrapper = document.createElement("div");
       todowrapper.innerHTML =
       ////   high
       `   <div class="cardin bg-body-tertiary">
       <div class="borderhigh"></div>
       <div class="checkboxs"><input class="checkboxcard"  type="checkbox">
       </div>
       <div class="inputtextuser" >
           <div class="titleuser">${ToDo.title}
               <span class="high">${farsiHighpriority}</span>
           </div> 
           <div class="noteuser" >${ToDo.desc}</div>
       </div>
       <div class="buttomMore" >
           <svg class="svgButtoms">
               <use class="svgButtom" href="#iconmore">

               </use>
           </svg>

       </div>

   </div>`;
        return groupcards.appendChild(todowrapper);
        }else if(ToDo.priority === "mid-priority")  {
       const todowrapper = document.createElement("div");
       todowrapper.innerHTML =
       /// mid
       `<div  class="cardin bg-body-tertiary">
       <div class="bordermidel"></div>
       <div class="checkboxs">
           <input class="checkboxcard" type="checkbox"></div>
       <div class="inputtextuser" >
           <div class="titleuser">${ToDo.title}
               <span class="midel">${farsiMidpriority}</span>
           </div> 
           <div class="noteuser">${ToDo.desc}</div>
       </div>
       <div class="buttomMore">
           <svg class="svgButtoms">
               <use class="svgButtom" href="#iconmore">

               </use>
           </svg>

       </div>

   </div>
       `;
       return groupcards.appendChild(todowrapper);
    }else if (ToDo.priority === "low-priority"){
        const todowrapper = document.createElement("div");
   todowrapper.innerHTML =
   ` <div class="cardin bg-body-tertiary">
   <div class="borderlower"></div>
   <div class="checkboxs">
       <input class="checkboxcard" type="checkbox">
   </div>
   <div class="inputtextuser" >
       <div class="titleuser">${ToDo.title}
           <span class="lower">${farsiLowpriority}</span>
       </div> 
       <div class="noteuser">${ToDo.desc}</div>
   </div>
   <div class="buttomMore">
       <svg class="svgButtoms">
           <use class="svgButtom" href="#iconmore">

           </use>
       </svg>

   </div>

</div>
   
   
   `;
   
   return groupcards.appendChild(todowrapper);

       }
       
    });
    
    // console.log(JSON.parse(inprogrestodoinlocalstorag));

});


///////    گزینه بیشتر برای تسک هایی که هستن 
const selectmore= document.querySelector("div.buttomMore");
const btnMore = document.querySelector("div.btnMore");
console.log(selectmore);
console.log(btnMore);
selectmore.addEventListener("click", () => {

    if (btnMore.classList.contains("d-none")) {
        btnMore.classList.remove("d-flex");
        
    }else{
        btnMore.classList.add("d-none");
    }

   
});




/// not add 
/////1.09 


////  این درسته 

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




  ////////test


  
// function getvalueuser(){
//     const userValue = document.getElementById("recipient-name").value;
//     if (userValue === ''){
//         alert("خطا! هیچ عنوان تسکی انتخاب نشده است.")
//     }else{
//         console.log(userValue);
//             const para = document.createElement("div");
//             para.setAttribute("id","toodcard")
//             para.classList.add("card","bg-body-tertiary","w-100","d-flex","flex-row","justify-content-start","align-items-center");
//             para.style.height= "33%";
//             document.getElementById("todolistall").appendChild(para);
//             todolist();
           
        
          
//             // para.innerHTML=userValue;
            
            
//     }
// function todolist(){
//     const bordercard = document.createElement("div");
//     bordercard.classList.add("borderhigh","border","rounded-start-5","flex-row")
//     document.getElementById("toodcard").appendChild(bordercard);
//     const checkboxuser = document.createElement("div");
//     checkboxuser.setAttribute('id','checkboxuser');
//     checkboxuser.classList.add("checkboxuser");
//     document.getElementById("toodcard").append(checkboxuser);
//     return inputUserCheckbox()


// function inputUserCheckbox (){
// const inputusercheck = document.createElement("input");
// inputusercheck.classList.add("inputUser");
// inputusercheck.setAttribute("type","checkbox");
// document.getElementById("checkboxuser").appendChild(inputusercheck);

// }



// }
// };




// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.innerHTML === "Hello") {
//       x.innerHTML = "Swapped text!";
//     } else {
//       x.innerHTML = "Hello";
//     }
//   } 




