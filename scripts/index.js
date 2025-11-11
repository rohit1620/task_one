
let localOne=JSON.parse(localStorage.getItem("onelocal"))||[]

const myform=(event)=>{
  event.preventDefault();
  let name=document.getElementById("name").value;
  let url=  document.getElementById("img").value;
  let price= Number(document.getElementById("price").value);
  let type=  document.getElementById("type").value;
  console.log(typeof(price));
  
  
  let obj={
    name,url,price,type
  }
  localOne.push(obj)
  localStorage.setItem("onelocal",JSON.stringify(localOne));
   document.getElementById("name").value=null;
document.getElementById("img").value=null;
  document.getElementById("price").value=null;
  document.getElementById("type").value=null;
}
document.querySelector("form").addEventListener("submit",myform)