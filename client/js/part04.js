



const contents = getNode('.contents');
const textField = getNode('#comment37');


// 누른 대상을 찾기
// 누른 대상의 data-name 값 찾기


function createComment(user,value){
  const template = /* html */ `
    <div class="id" data-comment-id="${Date.now()}">
        <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">${user}</a></div>
                <div class="text_field"> ${value} </div>
            </div>
        </div>
    </div>
  `
  return template;
}





const handleArticle = (e) =>{
  

  let target = e.target;
  let name = target.dataset.name
  

  while(!name){
    target = target.parentElement;
    name = target.dataset.name
    if(target.nodeName === 'BODY'){
      target = null;
      return;
    }
  }
  

  if(name === 'like'){
    toggleClass(target,'active');
  };


  if(name === 'more') toggleClass(target,'active');


  if(name === 'comment'){
    textField.focus();
  }

  if(name === 'send'){

    e.preventDefault();

    let value = textField.value;

    if(value === '') return;



    insertLast('.comment_container',createComment('심선범',value));

    
    textField.value = '';

  }


  // active




}




contents.addEventListener('click',handleArticle)




//made by kindtiger










