 
  function bg(){
     find_tag('btn-1').addEventListener('click',function(){
       
        find_tag('btn-1').classList.add('bg-[#B4F461]');
        find_tag('btn-2').classList.remove('bg-[#B4F461]');
        find_tag('cards').style.display='block';
        find_tag('cards').classList.add('section1');
        find_tag('history').style.display='none';
        find_tag('history').classList.remove('section2');
     })
  }
  function bg_history(){
    find_tag('btn-2').addEventListener('click',function(){
       
       find_tag('btn-2').classList.add('bg-[#B4F461]');
       find_tag('btn-1').classList.remove('bg-[#B4F461]');
       find_tag('cards').style.display='none';
        find_tag('cards').classList.remove('section1');
        find_tag('history').style.display='block';
        find_tag('history').classList.add('section2');
        find_tag('donated-money').innerText=parseFloat(find_tag('amount').value);
       
      
    })
 }

 
 const elmnt=getElementByClassNameAndIndex('done',0);
  if(elmnt){

   elmnt.addEventListener('click',function(){
    let sent=parseFloat(find_tag('amount').value);
    let sum=parseFloat(find_tag('collection').innerText);
    if(sent>0 && sent<=sum){
        let x=parseFloat(find_tag('alredy-donated').innerText);
        let total=sent+x;
        find_tag('alredy-donated').innerText=total;
       
        sum-=total;
        find_tag('collection').innerText=sum;
        console.log(total);
        find_tag('modal1').showModal();
        const div=document.createElement('div');
 
      
       const title=find_tag('source1').innerText;
       find_tag('history').classList.add( 'w-3/4','py-4');
     div.innerHTML= ` 
        <div class=" border-2 my-2 border-black rounded-xl">
      <h1 class="font-bold text-2xl p-3"> ${sent} Taka ${title}</h1>
     <p class="p-3"> Date: ${day_name()} ${mnth_name()} ${day_yr()}  ${time()}  </p>
     </div>
 `;
    find_tag('history').appendChild(div);
        
      
   }
     else{
      alert('Invalid Amount');
     }
   })
}

const elmnt2=getElementByClassNameAndIndex('done',1);
if(elmnt2){

   elmnt2.addEventListener('click',function(){
      let sent2=parseFloat(find_tag('amount2').value);
      let sum=parseFloat(find_tag('collection').innerText);
      console.log(sent2);
      if( sent2>0 && sent2<=sum){
         let x = parseFloat(find_tag('alredy-donated2').innerText);
          let total2=sent2+x;
          find_tag('alredy-donated2').innerText=total2;
         
          sum-=total2;
          find_tag('collection').innerText=sum;
          console.log(x);
          find_tag('modal2').showModal();
          const div=document.createElement('div');
   
         const title=find_tag('source2').innerText;
         find_tag('history').classList.add(  'w-3/4','py-4');
       div.innerHTML= ` 
       <div class=" border-2 my-2 border-black rounded-xl">
           <h1 class="font-bold text-2xl p-3"> ${sent2} Taka ${title}</h1>
     <p class="p-3"> Date: ${day_name()} ${mnth_name()} ${day_yr()}  ${time()}  </p>
       </div>

     
   `;
      find_tag('history').appendChild(div);
          
        
     }
       else{
        alert('Invalid Amount');
       }
     })

}
   
const elmnt3=getElementByClassNameAndIndex('done',2);
if(elmnt3){

     
     elmnt3.addEventListener('click',function(){
      let sent3=parseFloat(find_tag('amount3').value);
      let sum=parseFloat(find_tag('collection').innerText) ;
      console.log(sent3);
      if( sent3>0 && sent3<=sum){
         let x = parseFloat(find_tag('alredy-donated3').innerText) ;
         //  let total3=sent3+x;
          x+=sent3;
          find_tag('alredy-donated3').innerText=x;
         
          sum-=sent3;
          find_tag('collection').innerText=sum;
        
         //  collection-blg
          console.log(x);
          find_tag('modal3').showModal();
          const div=document.createElement('div');
   
         const title=find_tag('source3').innerText;
        find_tag('history').classList.add( 'w-3/4','py-4');
       div.innerHTML= ` 
          <div class=" border-2 my-2 border-black rounded-xl">
       <h1 class="font-bold text-2xl p-3"> ${sent3} Taka ${title}</h1>
      <p class="p-3"> Date: ${day_name()} ${mnth_name()} ${day_yr()}  ${time()}  </p>
      </div>
   `;
      find_tag('history').appendChild(div);
          
        
     }
       else{
        alert('Invalid Amount');
       }
     })
   }

   find_tag('close').addEventListener('click',function(){
      find_tag('modal').classList.remove('modal-box');
      find_tag('modal').style.display = 'none'; 
     
    
     })
    find_tag('blg').addEventListener('click',function(event){
      event.preventDefault();
        window.location.href='blog.html';

        find_tag('blg').innerText='Home';
      //   document.getElementById('collection-blg').innerText = document.getElementById('collection').innerText;

    })

   

      