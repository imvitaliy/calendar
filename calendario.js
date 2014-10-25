var t = document.getElementsByTagName('td');
var inputDay1= document.getElementById('checkin');
var inputDay2= document.getElementById('checkout');


    for (i=0; i<t.length; i++){
      t[i].onclick = selectDay;

};

function selectDay(e){

    var marcar=e.target.classList;
    if(marcar.contains("select1")){
      marcar.remove("select1");
    }else{
      marcar.add("select1");
    };
    addElement1(e);
};
 function addElement1(e){

    var a = [inputDay1,inputDay2]
    var linked = e.target.textContent+"-10-2014";
    if(a[0].textContent == ''){
      if (a[0].textContent == linked){
            a[0].textContent ='';
          }else{
            a[0].textContent = linked;
          };
    }else{
      if (a[1].textContent == linked){
            a[1].textContent ='';
          }else{
            a[1].textContent = linked;
          };
    };
};