const MAX_VAL = 10;
const NO_BAR = 4;

window.onload = (event) =>{
    loadBar('progress1', currentVal1);
    if(currentVal1 >= MAX_VAL){
      currentVal1 = MAX_VAL;
      loadBar('progress1', currentVal1);
    }
    loadBar('progress2', currentVal2);
    if(currentVal2 >= MAX_VAL){
      currentVal2 = MAX_VAL;
      loadBar('progress2', currentVal2);
    }
    loadBar('progress3', currentVal3);
    if(currentVal3 >= MAX_VAL){
      currentVal3 = MAX_VAL;
      loadBar('progress3', currentVal3);
    }
    loadBar('progress4', currentVal4);
    if(currentVal4 >= MAX_VAL){
      currentVal4 = MAX_VAL;
      loadBar('progress4', currentVal4);
    }
  }

  var currentVal1 = getCookie('progress1') ? parseInt(getCookie('progress1')) : 0;
  var currentVal2 = getCookie('progress2') ? parseInt(getCookie('progress2')) : 0;
  var currentVal3 = getCookie('progress3') ? parseInt(getCookie('progress3')) : 0;
  var currentVal4 = getCookie('progress4') ? parseInt(getCookie('progress4')) : 0;

  function loadBar(pname, pval){
    let elem = document.getElementById(pname);
    let width = (pval/MAX_VAL) * 100;
    setCookie(pname, pval, 30);
    elem.style.width = width + '%';
  }

  function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i=0; i<ca.length; i++){
      let c = ca[i];
      while (c.charAt(0) == ' '){
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0){
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function setCookie(cname, cvalue, exdays){
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function resetBar(pname, pval){
    //debugger;
    pval = 0;
    loadBar(pname, pval);
    return pval;
  }

  function mover(pname, pval){
      //debugger;
      if(pval < MAX_VAL){
        pval++;
        if(pval == MAX_VAL){
          alert("Has completado la Lección I");
        }
      }
      else if(pval >= MAX_VAL){
        pval = MAX_VAL;
        loadBar(pname, pval);
        alert("Has completado la Lección I");
        return pval;
      }
      loadBar(pname, pval);
      return pval;
  }

  document.getElementById("moverButton1").addEventListener("click", function(){
    currentVal1 = mover('progress1', currentVal1);
  })
  document.getElementById("resetButton1").addEventListener("click", function(){
    currentVal1 = resetBar('progress1', currentVal1);
  })

  document.getElementById("moverButton2").addEventListener("click", function(){
    currentVal2 = mover('progress2', currentVal2);
  })
  document.getElementById("resetButton2").addEventListener("click", function(){
    currentVal2 = resetBar('progress2', currentVal2);
  })

  document.getElementById("moverButton3").addEventListener("click", function(){
    currentVal3 = mover('progress3', currentVal3);
  })
  document.getElementById("resetButton3").addEventListener("click", function(){
    currentVal3 = resetBar('progress3', currentVal3);
  })

  document.getElementById("moverButton4").addEventListener("click", function(){
    currentVal4 = mover('progress4', currentVal4);
  })
  document.getElementById("resetButton4").addEventListener("click", function(){
    currentVal4 = resetBar('progress4', currentVal4);
  })