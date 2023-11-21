const btn=document.querySelector('.btn');
const result=document.querySelector('.result')
const image=document.querySelector('.image')
const comp=document.querySelector('.compliment')
const hght=document.querySelector(".height")
const wght=document.querySelector(".weight")


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const bmi=parseInt((weight/((height*height)/10000)))
    result.innerHTML=`<span><h3>${bmi}<h3></span>`
    if(bmi<=18.5){
        comp.innerHTML=`<h2>Your are Underweight <br> Go eat something</h2>`
        let img = document.createElement("img");
        img.src = "underweight.png";
        image.appendChild(img);
    }
    else if(bmi>=18.5 && bmi<=24.9){
        comp.innerHTML=`<h2>Your are Normal <br> You are perfect</h2>`
        let img = document.createElement("img");
        img.src = "normal.png";
        image.appendChild(img);
    }
    else if(bmi>=25 && bmi<=29.9){
        comp.innerHTML=`<h2>Your are OverWeight <br> Now time to go to gym</h2>`
        let img = document.createElement("img");
        img.src = "overweight.png";
        image.appendChild(img);
    }
    else if(bmi>30){
        comp.innerHTML=`<h2>Your are Obese <br> For god sake Stop eating</h2>`
        let img = document.createElement("img");
        img.src = "fat.png";
        image.appendChild(img);
    }
    if(height!=""&&weight!=""){
        image.style.display="block";
        btn.disabled = true;
    }
    hght.addEventListener('click',()=>{
        image.innerHTML=""
        result.innerHTML=""
        comp.innerHTML=""
        btn.disabled = false;
    })
    wght.addEventListener('click',()=>{
        image.innerHTML=""
        result.innerHTML=""
        comp.innerHTML=""
        btn.disabled = false;
    })

        
    
    
})
