var list = document.getElementById('list');

function add_todo(){
    var todo_item = document.getElementById("todo-item");
    // console.log(todo_item.value)

    // CREATE LI USING TEXT NODE 

    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText)

    // create delete btn 

    var btndlt = document.createElement('button');
    btndlt.className = "del_item";
    var btnText = document.createTextNode('Delete Item');
    btndlt.setAttribute("class",'btn')
    btndlt.setAttribute("onclick",'delItem(this)')
    btndlt.appendChild(btnText);

    // create Edit btn Todo Item 

    var editBtn = document.createElement('button');
    editBtn.className = "edit_btn";
    var editText = document.createTextNode('Edit');
    editBtn.setAttribute('onclick','edit_btn(this)')
    editBtn.appendChild(editText);

    li.appendChild(editBtn)


    li.appendChild(btndlt)
    list.appendChild(li)
    // console.log(li)
    todo_item.value = "";
    
}



function delItem(e){
    e.parentNode.remove()
}
function dltall(){
    list.innerHTML="";
}

function edit_btn(a){
    var edit = prompt('enter your edit value');
    a.parentNode.firstChild.nodeValue = edit
}