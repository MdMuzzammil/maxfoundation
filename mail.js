const firebaseConfig = {
    apiKey: "AIzaSyDLkgaj98pMxFZzqQ2is2s6J6s_dDIzBNA",
    authDomain: "max-foundation-ranchi.firebaseapp.com",
    databaseURL: "https://max-foundation-ranchi-default-rtdb.firebaseio.com",
    projectId: "max-foundation-ranchi",
    storageBucket: "max-foundation-ranchi.appspot.com",
    messagingSenderId: "459914794262",
    appId: "1:459914794262:web:1b23d444e5c252ab1d2c37",
    measurementId: "G-4745MQ51V0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let enquiryFormDB = firebase.database().ref("enquiryForm");
  
  document.getElementById("enquiry-form").addEventListener('submit', submitForm);
    
  function submitForm(e){
    console.log('submitted')
    e.preventDefault();

    let FullName= getElementVal("name");
    let Contact= getElementVal("contactNumber");
    let College= getElementVal("college");
    let Stream= getElementVal("stream");
    let CurrentClass = getElementVal("class");
    let Email = getElementVal("email");

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
    // document.querySelector('.alert').style.display='block';
    alert("Your Form Has Been Submitted")
    // setTimeout(()=>{
    //     // document.querySelector('.alert').style.display='none';
    // }, 5000)
    ;
}
const getElementVal = (id) => {
  return document.getElementById(id).value;
}

  function saveData(FullName, Contact, College, Email, Stream, CurrentClass){
    let newEnquiryData = enquiryFormDB.push();
    newEnquiryData.set({
        FullName: FullName,
        Contact: Contact,
        College: College,
        Email: Email,
        Stream: Stream,
        CurrentClass: CurrentClass
    })
  }
  