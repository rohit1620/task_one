console.log("my name is product");

let localOne=JSON.parse(localStorage.getItem("onelocal"))
 console.log("rohit");
let appendData=()=>{
    document.getElementById("dataAdded").innerHTML=null;
    localOne.forEach((el)=>{
        let image=document.createElement("img");
         let div=document.createElement("div");
          let h3=document.createElement("h3");
           let p=document.createElement("p");
            let  h4 =document.createElement("h4");
             let remove=document.createElement("button");
             let add=document.createElement("button");
        div.className="mainDiv";
             image.src=el.url;
             h3.innerText=el.name;
             p.innerText=el.price;
             h4.innerText=el.type;
             remove.innerText="Remove"
             add.innerText="Add"
             div.append(image,h3,p,h4,remove,add);
             document.getElementById("dataAdded").append(div);
    })
}

appendData()