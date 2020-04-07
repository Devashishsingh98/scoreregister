window.setTimeout(function() {
    // put all of your JS code from the lecture here
    var list=[];
    var input=prompt("what do you want todo? ") ;

    while(input!="quit"){
        if(input==="new"){
            addtodo();
        }
        else if(input==="delete"){
            deletetodo();
        }
        else if(input==="list"){
            console.log("********************");
            listtodo();
            console.log("********************");
        }
        var input=prompt("what do you want todo? ");
    }
    console.log("You have Quit the Application!!!")

    // defining functions
    //list_todo
    function listtodo(){
        list.forEach(function(todo,i){
            console.log(i+": "+todo);
        });
    }
    //addition
    function addtodo(){
        var newtodo=prompt("What you wants to add");
        list.push(newtodo);
        console.log("added todo");
    }
    //deletion
    function deletetodo(){
        var remo= prompt("please enter number you want to delete ");
        list.splice(remo,1);
    }


  }, 500);