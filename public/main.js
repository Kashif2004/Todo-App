

  //      Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAaoro42qK8ASwshzbBvq1aaNIg2cE7Y7c",
    authDomain: "to-do-app1020.firebaseapp.com",
    databaseURL: "https://to-do-app1020-default-rtdb.firebaseio.com",
    projectId: "to-do-app1020",
    storageBucket: "to-do-app1020.appspot.com",
    messagingSenderId: "144772082534",
    appId: "1:144772082534:web:ac12c62bb43633897ef6a7",
    measurementId: "G-DTWGDK5NK8"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  
  
  
  
  
  var list = document.getElementById("list");

  firebase.database().ref('todos').on('child_added',function(data){
         // create li tag with text node
  
      var li = document.createElement('li')
  
      var liText = document.createTextNode(data.val().value)

      li.setAttribute("class","li")
  
      li.appendChild(liText)
  
  
  
//       // create delete button
  
      var delBtn = document.createElement("button")
  
      var delText = document.createTextNode("DELETE")
  
      delBtn.setAttribute("class", "delbtn")

      delBtn.setAttribute('id', data.val().key)
  
      delBtn.setAttribute("onclick", "deleteItem(this)")
  
      delBtn.appendChild(delText)

  
  
  
//       // create edit button
  
      var editBtn = document.createElement("button");
  
      var editText = document.createTextNode("EDIT")
  
      editBtn.appendChild(editText)

      editBtn.setAttribute("class", "editbtn")
      editBtn.setAttribute('id',data.val().key)
  
      editBtn.setAttribute("onclick", "editItem(this)")

              let editButton = document.createElement('button');
    editButton.innerHTML = "EDIT";
       editButton.classList.add('editButton');


  
  
  
  
  
      li.appendChild(delBtn)
  
      li.appendChild(editBtn)
  
  
  
      list.appendChild(li)
  })



  function addTodo() {
  
      var todo_item = document.getElementById("todo-item");
      var database = firebase.database().ref('todos')
      var key = database.push().key;
      var todo = {
        value: todo_item.value,
        key: key
      }
      database.child(key).set(todo);

      
    todo_item.value = ""
  
  }
  
  
  
  function deleteItem(e) {
  firebase.database().ref('todos').child(e.id).remove()
      e.parentNode.remove()
  
  }
  
  
  
  function editItem(e) {

    
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    var editTodo ={
      value : val,
      key : e.id
    }

    firebase.database().ref('todos').child(e.id).set(editTodo)
    e.parentNode.firstChild.nodeValue = val;
  
  }
  
  
  
  function deleteAll() {
     firebase.database().ref('todos').remove()
      list.innerHTML = ""
  
  }



