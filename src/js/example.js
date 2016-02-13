var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"submit.php");

var i = document.createElement("input"); //input element, text
i.setAttribute('type',"text");
i.setAttribute('name',"username");

var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");

f.appendChild(i);
f.appendChild(s);

//and some more input elements here
////and dont forget to add a submit button
//
document.getElementsByTagName('body')[0].appendChild(f);








http://www.trans4mind.com/personal_development/JavaScript2/createSelectDynamicallyCODe.htm

<script type="text/javascript">
<!--//

function makeForm() {
  mypara=document.getElementById("paraID");

  //this is an element already on the page
  //its purpose is to provide a place to put the form
  //if the form were merely added to the document, it would appear at the end
  //now I create some elements

  myform=document.createElement("form");
  myselect = document.createElement("select");

  //one way to write a function... you have to write it yourself!

  myOnChange = new Function("e", "location.href=myselect.options[myselect.selectedIndex].value");

  //first option
  //create an option

  theOption=document.createElement("OPTION");

  //make some text

  theText=document.createTextNode("Select A Page To Go");

  //add the text to the option

  theOption.appendChild(theText);

  //add the option to the select

  myselect.appendChild(theOption);

  //second option
  theOption=document.createElement("OPTION");
  theText=document.createTextNode("JavaScript Tutorial II");
  theOption.appendChild(theText);

  //this option has a value, an URL, so we set the value

  theOption.setAttribute("value","index.html");
  myselect.appendChild(theOption);

  //third option

  theOption=document.createElement("OPTION");
  theText=document.createTextNode("getElementById");
  theOption.appendChild(theText);
  theOption.setAttribute("value","getElementByID.htm");
  myselect.appendChild(theOption);

  //fourth option
  //this has some variations to show alternative ways of
  //adding values and text

  theOption=document.createElement("OPTION");

  //new ways to set the values and the text

  theOption.value="modifyingExistingText.htm";

  //set the text using the innerHTML property instead of adding text node

  theOption.innerHTML="Modifying Existing Text";
  myselect.appendChild(theOption);

  //end of options
  //now the select has the options added with their text, values and onChange event

  myform.appendChild(myselect);
  mypara.appendChild(myform);

  // the myOnChange(e) function, created earlier, is used to set
  //the "onchange" event (Yes, onchange, not onChange!)

  myselect.onchange=myOnChange;

  //here I put the button below the select (not essential), just to demonstrate
  //the following

  mybreak=document.createElement("p");
  myform.appendChild(mybreak);

  //now I create a button

  mybutton=document.createElement("BUTTON");

  //the function here for the button is different from before, to illustrate another
  //way to create a function

  function myOnClick(e) {
    alert('Hello');
  }

  //once again, "onclick" not "onClick"

  mybutton.onclick=myOnClick;

  //setting the height and width isn't essential for IE, but is essential for Netscape

  mybutton.style.height=20;
  mybutton.style.width=75;

  //assign the value of the button

  theText=document.createTextNode("Click Me");
  mybutton.appendChild(theText);

  //the code commented out below works fine for IE, but the above code is needed for
  //some other browsers and IE likes it too!
  //mybutton.value="Click Me";
  //now add the button to the form

  myform.appendChild(mybutton);
  myselect.setAttribute("bgColor","red");
  myselect.style.color="green";
  myselect.setAttribute("border","10px");
  myselect.style.fontWeight="bold";

  //I need to set the IDs because I want to
  // to reference then so I can delete the form later

  myselect.setAttribute("id","selectID");
  myform.setAttribute("id","formID");

  //alert(myselect.id);
  //enable delete button

  btnDelete=document.getElementById("deleteID");
  btnDelete.disabled=false;

  //disable create button

  btnCreate=document.getElementById("createID");
  btnCreate.disabled=true;

}

function deleteForm() {

  //here I use the IDs set in the create to get a handle on the elements

  myPara=document.getElementById("paraID");
  myform=document.getElementById("formID");

  //so I can remove them:-)

  myPara.removeChild(myform);

  //and now I set the fixed buttons on the page
  //disable delete button

  btnDelete=document.getElementById("deleteID");
  btnDelete.disabled=true;

  //enable create button

  btnCreate=document.getElementById("createID");
  btnCreate.disabled=false;

}//end of deleteForm()


//-->
</script>

<body>
  <form id="form1" name="form1" method="post" action enctype="text/plain" alt="">
    <p>
    <input type="button" id="createID" value="Create Form" onclick="makeForm()" />
    <br />
    </p>
  </form>
  <hr>
  <!-- Just below is the key code in the body for positioning the form-->

  <p id="paraID">
  &nbsp;
  </p>
  <hr>

  <form id="form2" name="form2" method="post" action enctype="text/plain" alt="">
    <p>
    <input type="button" id="deleteID" value="Delete Form" disabled="true" onclick="deleteForm()" />
    </p>
  </form>
</body>
</html>




READING FILES
http://www.htmlgoodies.com/beyond/javascript/read-text-files-using-the-javascript-filereader.html


// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  //do your stuff!
} else {
  alert('The File APIs are not fully supported by your browser.');
}


<input type="file" id="fileinput" />
<script type="text/javascript">
  function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
        var contents = e.target.result;
        alert( "Got the file.n" +"name: " + f.name + "n" +"type: " + f.type + "n" +"size: " + f.size + " bytesn" + "starts with: " + contents.substr(1, contents.indexOf("n")));  
      }
    r.readAsText(f);
    } else { 
      alert("Failed to load file"); 
    }
  }
  document.getElementById('fileinput').addEventListener('change', readSingleFile, false); 
</script>



