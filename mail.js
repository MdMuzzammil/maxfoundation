const firebaseConfig = {
   
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var enquiryFormDB = firebase.database().ref("enquiryForm");
  
  document.getElementById("enquiry-form").addEventListener('submit', submitForm);
    
  function submitForm(e){
    e.preventDefault();

    var FullName= getElementVal("name");
    var Contact= getElementVal("contactNumber");
    var College= getElementVal("college");
    var Stream= getElementVal("stream");
    var CurrentClass = getElementVal("class");
    var Email = getElementVal("email");

    if((Contact.length<10) || (Contact.length>10)){
    alert("Please Enter a Valid Contact Number")
    return;
    }
    if((Contact.charAt(0)!="9") && (Contact.charAt(0)!="8") && (Contact.charAt(0)!="7") && (Contact.charAt(0)!="6")){
      alert("Please Enter a Valid Contact Number")
      return;
    }
    if(Stream == "Select your Stream"){
    alert("Please Enter your Stream")
    return;
    }
    if(CurrentClass == "Select your Class"){
    alert("Please Enter your Class")
    return;
    }

    // console.log(FullName + " " + Contact + " " + College+ " " + Stream+ " " + CurrentClass)
    saveData(FullName, Contact, College, Email, Stream, CurrentClass);
    document.getElementById("enquiry-form").reset();
    document.querySelector('.alert').style.display='block';
    alert("Your Form Has Been Submitted")
    setTimeout(()=>{
        // document.querySelector('.alert').style.display='none';
    }, 5000);
}
const getElementVal = (id) => {
  return document.getElementById(id).value;
}

  function saveData(FullName, Contact, College, Email, Stream, CurrentClass){
    var newEnquiryData = enquiryFormDB.push();
    newEnquiryData.set({
        FullName: FullName,
        Contact: Contact,
        College: College,
        Email: Email,
        Stream: Stream,
        CurrentClass: CurrentClass
    })
  }
  