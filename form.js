function myfun(){
   // let b =/^[A-Za-z]+$/;
   let a=document.getElementById('username').value;
   let lal=document.getElementById('fname').value;
   let mammi=document.getElementById('mname').value;
   let adh=document.getElementById('adhar').value;
   let vsh=document.getElementById('vname').value;
   let rll=document.getElementById('hroll').value;
   let hcr=document.getElementById('hcer').value;
   let n=document.getElementById('mnum').value;
   let i=document.getElementById('mailg').value;

    if(a==""){
        document.getElementById('n').innerHTML="*Please enter student name";
        return false;
    }
    if(a.length<4){
        document.getElementById('n').innerHTML="*Student must be 4 character";
        return false;

    }

    if(a.length>10){
        document.getElementById('n').innerHTML="*Student must less than 10 character";
        return false;

    }
//father coding
    if(lal==""){
        document.getElementById('fn').innerHTML="*Please enter  father name";
        return false;
    }
    if(lal.length<4){
        document.getElementById('fn').innerHTML="*Father must be 4 character";
        return false;

    }

    if(lal.length>10){
        document.getElementById('fn').innerHTML="*Father name must less than 10 character";
        return false;

    }
    //if(a.match(b))//
        //true;
       // else{
           // document.getElementById('n').innerHTML="*only alphabetic character";
       // return false;
       // }

       //mummy coding

       if(mammi==""){
        document.getElementById('mn').innerHTML="*Please enter mother name";
        return false;
    }
    if(mammi.length<4){
        document.getElementById('mn').innerHTML="*Mother name must be 4 character";
        return false;

    }

    if(mammi.length>10){
        document.getElementById('mn').innerHTML="*Mother name must less than 10 character";
        return false;

    }
    //adhar coding

    if(adh==""){
        document.getElementById('an').innerHTML="*Please enter adhar no,";
        return false;
    }
    if(adh.length<12){
       document.getElementById('an').innerHTML="*Adhar no. must be  12 digits";
        return false;

    }

    if(adh.length>12){
        document.getElementById('an').innerHTML="*Adhar no. less than 13 digits";
        return false;

    }
    //virtual id 
    if(vsh==""){
        document.getElementById('vs').innerHTML="*Please enter virtual id";
        return false;
    }
    if(vsh.length<14){
        document.getElementById('vs').innerHTML="*Virtual id must be 14 digits";
        return false;

   }

    if(vsh.length>14){
        document.getElementById('vs').innerHTML="*Virtual id less than  15 digts";
        return false;
    }
    //high school roll no

    if(rll==""){
        document.getElementById('hn').innerHTML="*Please enter roll no.";
        return false;
    }
    if(rll.length<6){
        document.getElementById('hn').innerHTML="*Roll no. must be 6 digits";
        return false;

    }

    if(rll.length>6){
        document.getElementById('hn').innerHTML="*Roll no. less than 7 digits";
        return false;
    }
 //high certificate coding
    
    if(hcr==""){
        document.getElementById('hsc').innerHTML="*Please enter certificate no.";
        return false;
    }
    if(hcr.length<8){
        document.getElementById('hsc').innerHTML="*Enter 8 digits certificate no.";
        return false;

    }

    if(hcr.length>8){
        document.getElementById('hsc').innerHTML="*Enter 9 digits less than certificate no.";
       return false;

    }

    //mobile no coding

     
    if(n==""){
        document.getElementById('mob').innerHTML="*Please enter mobile no.";
        return false;
    }
    if(n.length<10){
        document.getElementById('mob').innerHTML="*Enter mobile no must be 10 digits.";
        return false;

    }

    if(n.length>10){
        document.getElementById('mob').innerHTML="*Mobile no less than 11 digits";
        return false;

    }

    //mail id

    if(i==""){
        document.getElementById('mid').innerHTML="*Please enter a valid e-mail id";
        return false;
    }
    //if(i.length<50){
      //  document.getElementById('mid').innerHTML="*E-mail id num,special,caps,low";
       // return false;

   // }

    //if(i.length>4){
        //document.getElementById('mid').innerHTML="*Mail id less than 21 digits";
        //return false;

   // }
    alert('Are you submit form')
}


