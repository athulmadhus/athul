var itemListU1=document.getElementById('list');
// console.log(itemListU1);
var count=itemListU1.childElementCount;
console.log(count);
var inputBox=document.getElementById('inputBox');
console.log(inputBox);
inputBox.addEventListener("keydown",keyDown);


    function keyDown() {
        if(event.keyCode===13)
        {
        if(inputBox.value.length<1){ 
        alert('Enter proper input');
        }
        else{
            insertNewToolList(inputBox.value);
        }
    }
}
        function insertNewToolList(toDoItem){
            count=itemListU1.childElementCount;
           console.log(toDoItem);
           var inputBox=document.getElementById('inputBox');
           inputBox.value=null;
           itemListU1=document.getElementById("list");

           var newList=document.createElement('LI');
           var newCheckBox=document.createElement('INPUT');
        //    console.log(newList);
           
           newCheckBox.type='checkbox';
           newCheckBox.id='checkbox'+count;
           
           console.log(newCheckBox);
           var newLabel=document.createElement('LABEL');
           newLabel.appendChild(document.createTextNode(toDoItem));
           console.log(newLabel);
           var newAnchor=document.createElement('A');
           newAnchor.href='#';
           newAnchor.innerHTML="Delete"
           newAnchor.className='delete';
           newAnchor.id='delete'+count;
           console.log(newAnchor);
           newList.appendChild(newCheckBox);
           newList.appendChild(newLabel);
           newList.appendChild(newAnchor);
        //    newList.appendChild(newDelete);
        itemListU1.appendChild(newList);
        }
        itemListU1.addEventListener("click",assignListener);
        function assignListener(){
            if(event.target.type==='checkbox'){
                checkboxFunc(event.target.id)
            }
            else if(event.target.classList.contains('delete')){
            deleteButtonFUnc(event.target.id);
            }
        }

function checkboxFunc(id){
var checkboxVar=document.getElementById(id);
if(checkboxVar.checked){
    var label=checkboxVar.nextSibling;
    label.classList.add('labelStyle')

   
}else{
    var label=checkboxVar.nextSibling;
    label.classList.remove('labelStyle')

}
}
function deleteButtonFUnc(id){
var deleteButton=document.getElementById(id);
    // alert('delete button of id:'+id);
    console.log(deleteButton);
}

           
        
