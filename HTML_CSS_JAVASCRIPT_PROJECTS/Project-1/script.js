function cal(){
    const a = document.getElementById("v").value;
    const o = document.getElementById("p");
    if(a===""){
      o.textContent = "Please enter a number bro....";
      return;
    }
    const v = Number(a);
    const b = document.getElementById("a").checked;
    const c = document.getElementById("s").checked;
    if(b){
      const r = (v*9/5)+32;
      o.textContent = r +" °F";
    }
    else if(c){
      const r = (v*5/9)-32;
      o.textContent = r+" °C";
    }
    else{
          o.textContent="select any option bro....";
    }
}
