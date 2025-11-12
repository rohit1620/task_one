console.log("my name is product");

let localOne=JSON.parse(localStorage.getItem("onelocal"))
 console.log("rohit");
let appendData=(item)=>{
    document.getElementById("dataAdded").innerHTML=null;
    item.forEach((el,index)=>{
        let image=document.createElement("img");
         let div=document.createElement("div");
          let h3=document.createElement("h2");
           let p=document.createElement("p");
            let  h4 =document.createElement("h4");
             let remove=document.createElement("button");
             let add=document.createElement("button");
             let div2=document.createElement("div")
        div.className="mainDiv";
        div2.className="div2"
        remove.addEventListener("click",()=>{
            removeData(el,index)
        })
        add.addEventListener("click",()=>{
            addData(el)
        })
             image.src=el.url;
             h3.innerText=el.name;
             p.innerText=el.price;
             h4.innerText=el.type;
             remove.innerText="Remove"
             add.innerText="Add"
             div2.append(remove,add)
             div.append(image,h3,p,h4,div2);
             document.getElementById("dataAdded").append(div);
    })
}



appendData(localOne)

const localTwo=JSON.parse(localStorage.getItem("twolocal"))||[];

const removeData=(el,index)=>{
    localOne.splice(index,1);
    localStorage.setItem("onelocal",JSON.stringify(localOne));
    window.location.reload();
}

const addData=(el)=>{
   localStorage.setItem("twolocal",JSON.stringify(el));
   window.location.href='./cart.html'
}

const lth=()=>{
    localOne.sort((a,b)=>{
        return a.price-b.price
    })
    appendData(localOne)
}

const htl=()=>{
    localOne.sort((a,b)=>{
        return b.price-a.price;
    })
        appendData(localOne)
}

const selectDatas=()=>{
    let value= document.getElementById("datas").value;
    console.log("select",value);
    let data;
    if(value==""){
          data=localOne;
    }else{
     data=localOne.filter((el)=>{
       return el.type==value;
    })
}
    console.log("value",data)
    appendData(data)

}