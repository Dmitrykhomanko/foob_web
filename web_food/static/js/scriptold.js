let ingridient = document.querySelectorAll(".ingridient");
let kostpila = document.querySelector('#koctpyla');
let koctpylaList = document.querySelector('#koctpyla-list');

let rerfeshButton = document.querySelector('.button_restart');
let finishButton = document.querySelector('.button_finish');
let newElement = document.createElement('li');
    newElement.classList.add('extraElement')

for (let i = 0; i < ingridient.length; i++) { /* с помощью цыкла фор прошли по кнопкам  i++ каждый раз брал новую кнопку */ 
    ingridient[i].addEventListener("click", function(){ /* [i] все елементы масива  массив сабрался сам из одитноковых class ingridients */ 
        let ingridientName = this.textContent; 
        let newElement = document.createElement('li');
        newElement.classList.add('extraElement')

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete_button');
        
        let item = document.createElement('span')
        item.classList.add('delete_span')
        item.appendChild(newElement)
        item.appendChild(deleteButton)

        deleteButton.addEventListener('click', function(){
            item.remove();
        })
 
        newElement.textContent = ingridientName;
        // koctpylaList.appendChild(newElement);/* аппенд чаелд присваевает значение он добавляет в родительский элемент */ 
        koctpylaList.appendChild(item);
        console.log("Нажал")
    })
}


 /*******   кнопка Pop Up Window  Заказать  ******/

let checklist = document.querySelector('#check_list');
let exrtaLi = document.querySelectorAll('.extraElement');

// finishButton.addEventListener('click',function(){
//     exrtaLi.forEach(function(i){
//         console.log(i)
//         console.log('!!!!')
//     })
// })

finishButton.addEventListener('click', function() {
    let extraLi = document.querySelectorAll('.extraElement');
    checklist.textContent = '';
    extraLi.forEach(function(item) {
        // console.log(item.textContent);
        // checklist.textContent += item.textContent
        let listItem = document.createElement('li');
        listItem.classList.add('newLi')
        listItem.textContent = item.textContent;
        checklist.appendChild(listItem);
    });
});

console.log(checklist)


// finishButton.addEventListener('click',function(){
// for (let i = 0; i < exrtaLi.length; i++ ){
//     console.log(exrtaLi[i])
//     console.log('dgsdgdgd')
// }
// })


// finishButton.addEventListener('click',function(){
//     checklistInewLi.forEach(function() {
//         let oredrLi = document.createElement('li');
//         let info = this.textContent;
//         oredrLi.textContent = info   
//         checklist.appendChild(oredrLi)
//     }) 
// });

/**********    кнопка Обновление страницы   ***********/
rerfeshButton.addEventListener('click', function(){
    window.location.reload();
})



// // /*******   кнопка Готовить  consol.log  ВСЕХ Ингридиентов   ******/
//  finishButton.addEventListener('click',function(){
//     let items = koctpylaList.querySelectorAll('li');
//     items.forEach(function(item) {
//          console.log(item.textContent)
//         //  checklist.appendChild(item)
//      });
// })



















// /*******   кнопка Pop Up Window  Заказать  ******/


// let orderList = document.querySelector('#order_list');
// let newLi = document.createElement("li");

//  finishButton.addEventListener('click',function(){
//     let fullList = koctpylaList.querySelectorAll('li');
//     fullList.forEach(function(item) {
//         orderList.appendChild(newLi)
  
//      });
//  })

       











/*************   Таблица    **************/
let tabsHeader = document.querySelector(".tab_header");
let brothButton = document.querySelector(".tab1__broth");
let brothPage = document.querySelector(".page__active__broth");

document.querySelector('.table__top__all__tabs').addEventListener('click', fclicked);
function fclicked(a){
    console.log(a);
    if (a.target.className == 'tab_header'){
        console.log(a.target.getAttribute('data-tab'))
         let atributTab = a.target.getAttribute('data-tab');
         //отклюбчаю класс у нажатыхт закладок
        let clickedTabs = document.getElementsByClassName('tab_header')
        for (let i = 0; i < clickedTabs.length; i++){
            clickedTabs[i].classList.remove('tab_cliked');
        }
         a.target.classList.add('tab_cliked');
            // все страницы с ингридиентами
         let allPages = document.getElementsByClassName('page');
        console.log(allPages.length)
        for (let i = 0; i < allPages.length; i++){
            if (atributTab == i){
                allPages[i].style.display = 'block'
               
            }
            else{
                allPages[i].style.display = 'none'
            }
        }
    
    }
   

}

/***********   Pop  Up Window  **********/
let toCooking = document.querySelector(".button_finish");
let popWindow = document.querySelector(".pop_up_wrapper");
let popClose = document.querySelector(".button_close");

toCooking.addEventListener('click',function(){
    popWindow.classList.add('activ_pop')
})

popClose.addEventListener("click", function(){
    popWindow.classList.remove('activ_pop')
})





// console.log(items)

// let showList = document.querySelector('.button_items')
// showList.addEventListener('click',function(){
//     console.log(items)
// })


// ingridient.addEventListener("click",function(){
//     let newI = document.createElement('li')
//     let ingridientName = this.textContent
//     newI.textContent = ingridientName
//     console.log("dgedgdg")

// })







// for(let y = 0; y < tabsHeader.length; y++ ){
//     tabsHeader[y].addEventListener('click',function(){
//         console.log('Tab was clicked !');
//         tabsHeader.classList.add('active')

//     }) 
// }

// let buttonNewCardOpen = document.querySelector(".main__user__add_new_user_button");
// let popUpNewCard = document.querySelector(".pop_up_new_card");
// let buttonNewCardClose = document.querySelector(".pop_up_new_card_close");

// buttonNewCardOpen.addEventListener('click',function(){
//     popUpNewCard.classList.add('active')   
// })
// buttonNewCardClose.addEventListener('click',function(){
//     popUpNewCard.classList.remove('active')
// })













// openButtonEditor.addEventListener('click', function(){
//     popUpUser.classList.add("active");
//     console.log('кнопка работает!')

// })

