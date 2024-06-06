//----------------------------------------------------------------------------//
//// Dark Mod by bootStrap<
document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');
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
//// Dark Mod by bootStrap>
//----------------------------------------------------------------------------//
//// Make all Input User<
const groupcards = document.querySelector("div.groupcard");
const actionBtn = document.querySelector("button.creat-btn");
const userTodotitle = document.querySelector(
    'div.todocreation input[name="todo-title"]');
const userTododesc = document.querySelector(
    'div.todocreation textarea[name="todo-desk"]');
const selectbtnpriority= document.querySelector("button.select-btn-priority");
const selectbtnprioritysvg= document.querySelector("button.select-btn-priority svg");
const btnNewTask = document.querySelector("button.btnNewTask");
const listNewTask = document.querySelector("div.listNewTask");
const allpriority= document.querySelector("div.all-priority");
//// Make all Input User>
//----------------------------------------------------------------------------//
//// function Svg Animated 180deg Or -180deg<
selectbtnpriority.addEventListener("click", () => {
    if (selectbtnprioritysvg.classList.contains("rotate-180")) {
        selectbtnprioritysvg.classList.remove("rotate-180");
        allpriority.style.display ="none";
        resetpriority();
    }else{
        selectbtnprioritysvg.classList.add("rotate-180");
        allpriority.style.display ="flex";
    }});
//// selectors<
//----------------------------------------------------------------------------//
//// new Task<
// function dispaly selector before click none Or flex<
btnNewTask.addEventListener("click", () => {
    if (listNewTask.classList.contains("d-none")) {
        listNewTask.classList.remove("d-none");
        listNewTask.classList.add("d-flex");
        resetpriority();
    }else{
        listNewTask.classList.add("d-none");
    }
});
// function dispaly selector before click none Or flex>
//----------------------------------------------------------------------------//
// get value radio selectors<
function resetpriority (){
        for(let i =0 ; i<userTodopriority.length;i++){
            if (userTodopriority[i].checked){
                userTodopriority[i].checked = false;
                alert("الویت شما حذف شما لطفا مجدد انتخاب کنید.")
            };
        };
    };
// get value radio selectors>
//----------------------------------------------------------------------------//
// if not checked radio selector take alert! else push to variable<
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
// if not checked radio selector take alert! else push to variable>
//// selectors<
//----------------------------------------------------------------------------//
//// if value Todo Title null?<
    function inputUserTodoTitel(){
            if (userTodotitle.value){   
            return userTodotitle.value;            
    };
    alert("عنوان تسک انتخاب نشده است!");
    return "";
};
//// if value Todo Title null?>
//----------------------------------------------------------------------------//
//// main Button and functions for push user value to Array< 
actionBtn.addEventListener("click",creattodo);
// function for make Html && Css<
function generatTodoprogress(ToDo){
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
           <div class="pointMore btn">
            <svg class="w-50 h-50">
                <use class="svgButtom" href="#iconmore">

               </use>
               </svg>
        </div>
       <div class="buttomMore d-none"  >
                            
                         <div class="btnMore  btn-group bg-body-secondary">
                                <button class="btnremove btn-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 20" fill="none">
                                    <path d="M1 5H17M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5M7 10L11 14M11 10L7 14" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <hr class=" border h-75 border-black m-0" style="width: 1px;">
                                    <button class="btnrename btn-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                            </div>
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
       <div class="pointMore btn">
            <svg class="w-50 h-50">
                <use class="svgButtom" href="#iconmore">

               </use>
               </svg>
        </div>
       <div class="buttomMore d-none"  >
                            
                         <div class="btnMore  btn-group bg-body-secondary">
                                <button class="btnremove btn-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 20" fill="none">
                                    <path d="M1 5H17M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5M7 10L11 14M11 10L7 14" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <hr class=" border h-75 border-black m-0" style="width: 1px;">
                                    <button class="btnrename btn-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                            </div>
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
      <div class="pointMore btn">
            <svg class="w-50 h-50">
                <use class="svgButtom" href="#iconmore">

               </use>
               </svg>
        </div>
       <div class="buttomMore d-none">
                            
                         <div class="btnMore  btn-group bg-body-secondary">
                                <button class="btnremove btn-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 20" fill="none">
                                    <path d="M1 5H17M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5M7 10L11 14M11 10L7 14" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <hr class=" border h-75 border-black m-0" style="width: 1px;">
                                    <button class="btnrename btn-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                            </div>
                        </div>

</div>
   
   
   `;
   
   return groupcards.appendChild(todowrapper);


       };
    };
// function for make Html && Css<
//// main Button for push user value to Array< 
//----------------------------------------------------------------------------//
//// Today Array <
const inprogrestodos=[];
// function make Today Array<    
function creattodo(){   
    const numbertodos=(inprogrestodos.length);//// take Error ****
    if (userTodotitle.value === ''){
        alert("خطا! هیچ عنوان تسکی انتخاب نشده است.")
}else{
    const inprogrestodo = {
        title:inputUserTodoTitel(),
        desc:userTododesc.value,
        priority:selectpriority(),
        lengths:numbertodos,
    };
 if (localStorage.getItem("inprogrestodos") === null){
    inprogrestodos.unshift(inprogrestodo);
    localStorage.setItem("inprogrestodos", JSON.stringify(inprogrestodos));
    generatTodoprogress(inprogrestodo);
}else{
    const previousInproggresToDo =JSON.parse(localStorage.getItem("inprogrestodos"));
    previousInproggresToDo.unshift(inprogrestodo);
    localStorage.setItem("inprogrestodos",JSON.stringify(previousInproggresToDo));
    generatTodoprogress(inprogrestodo);
};
}};
// function make Today Array>   
//// Today Array >
//----------------------------------------------------------------------------//
//// My prioritys<
const farsiHighpriority="بالا"
const farsiMidpriority="متوسط"
const farsiLowpriority="پایین"
//// My prioritys>
//----------------------------------------------------------------------------//
//// Dom , get localStorage 
document.addEventListener("DOMContentLoaded",()=>{
    const inprogrestodoinlocalstorag =JSON.parse(localStorage.getItem("inprogrestodos"));
    inprogrestodoinlocalstorag.forEach((ToDos)=> {  
    generatTodoprogress(ToDos);
    });
});
//// Dom , get localStorage 
//----------------------------------------------------------------------------//
//// todo list befor click Check Box Remove and text decoration line <
function myFunctionhigh() {
    var element = document.getElementById("textMoreHigh");
    element.classList.toggle("text-decoration-line-through");
//     function myFunction(){
//     var removeelement = document.getElementById("cardHigh");
//     removeelement.classList.add("d-none");
// }
return myFunctionhigh;
  };
function myFunctionmidel() {
    var element = document.getElementById("textMoreMidel");
    element.classList.toggle("text-decoration-line-through");
    // function myFunction(){
    //     var removeelement = document.getElementById("cardMidel");
    //     removeelement.classList.add("d-none");}
  };
function myFunctionlower() {
    var element = document.getElementById("textMoreLower");
    element.classList.toggle("text-decoration-line-through");
    // function myFunction(){
    //     var removeelement = document.getElementById("cardLower");
    //     removeelement.classList.add("d-none");
    // }
        return myFunctionlower;
  };
//// todo list befor click Check Box Remove and text decoration line <
//----------------------------------------------------------------------------//








/////////////////////////////////    Test    /////////////////////////////////
  
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
//----------------------------------------------------------------------------//
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
//----------------------------------------------------------------------------//
// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.innerHTML === "Hello") {
//       x.innerHTML = "Swapped text!";
//     } else {
//       x.innerHTML = "Hello";
//     }
//   } 
//----------------------------------------------------------------------------//
//////     ریست کردن کامل تگ ها 
// const refreshButton = document.querySelector('.refresh-button');
// function resetAll(){
//     for(let i =0 ; i<userTodopriority.length;i++){
//             userTodopriority[i].checked = false;
//         };
//         alert('تمام ورودی های کاربر حذف شدن')
//         selectbtnprioritysvg.classList.remove("rotate-180");
//         allpriority.style.display ="none";
//         userTododesc.value='';
//         userTodotitle.value='';
//         }
//----------------------------------------------------------------------------//
///////    گزینه بیشتر برای تسک هایی که هستن 
// const selectmore = document.querySelector("div.pointMore")
// console.log(selectmore)
// const btnMore = document.querySelector("div.buttomMore");
// console.log(btnMore)
//  const selectMoreClick =selectmore.addEventListener();
//  console.log(selectMoreClick)
//  {
//     if (btnMore.classList.contains("d-none")) {
//         btnMore.classList.remove("d-none");
//         btnMore.classList.add("d-flex");
//     }else{
//         btnMore.classList.add("d-none");
//     }
// });
//----------------------------------------------------------------------------//
/////////////////////////////////    Test    /////////////////////////////////

