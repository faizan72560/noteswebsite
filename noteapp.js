console.log("this is note app");
shownotes();
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click',function(){

    let addtext=document.getElementById('addtext');
    let notes=localStorage.getItem('notes');
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addtxt.value="";
    console.log(notesObj);
    shownotes();

})

function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
      notesObj=[];
    }
    else{
      notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
      html+=`
      <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
              <hr>
              <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                
                <p class="card-text"> ${element}</p>
                <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
                
              </div>
            </div>
      
         `
  
      
});

let noteselm=document.getElementById('notes');
  if(notesObj.length!=0){
    noteselm.innerHTML=html;
  }
  else{
    noteselm.innerHTML=`Nothing to show please add a note to view `;


  }
}

function deletenote(index)
{
    console.log("i am deleting",index);
    let notes=localStorage.getItem("notes");
    notesObj=JSON.parse(notes);
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    shownotes();

}
let search=document.getElementById("searchtext");
search.addEventListener('input',function(){
    console.log('searching');
    let inputval=search.value;
  console.log("input event fired",inputval);

    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
       let cardTxt=document.getElementsByTagName("p")[0].innerText;
       console.log(cardTxt);
       if(cardTxt.includes(inputval))
       {
           element.style.display='block';
       }
       else
       {
           element.style.display='none';

       }
    })

})


