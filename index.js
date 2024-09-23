 
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

 

   find_tag('done').addEventListener('click',function(){
    let sent=parseFloat(find_tag('amount').value);
    if(sent>0){
        let x=parseFloat(find_tag('alredy-donated').innerText);
        let total=sent+x;
        find_tag('alredy-donated').innerText=total;
        let sum=parseFloat(find_tag('collection').innerText);
        sum+=total;
        find_tag('collection').innerText=sum;
        console.log(total);
        find_tag('modal').style.display='block';
        const div=document.createElement('div');
 
       const m=new Date();
       const hr=m.getHours();
       const mnt=m.getMinutes();
       const sec=m.getSeconds();
       const day=m.getDate();
      const mnth=m.getMonth();
      const yr=m.getFullYear();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan","feb", "March", "April", "May", "June", "July", "August", "Sep" ,"Oct" ,"Nov", "Dec"];
       const title=find_tag('source1').innerText;
       find_tag('history').classList.add('rounded-xl',  'w-3/4','py-4');
     div.innerHTML= ` 
      <h1 class="font-bold text-2xl"> ${sent} Taka ${title}</h1>
     <p> Date: ${days[m.getDay()]} ${months[m.getMonth()]} ${day} ${yr} ${hr}:${mnt-1}:${sec}  </p>
 `;
    find_tag('history').appendChild(div);
        
      
   }
     else{
      alert('Invalid Amount');
     }
   })
   find_tag('done2').addEventListener('click',function(){
      let sent2=parseFloat(find_tag('amount2').value);
      console.log(sent2);
      if( sent2>0){
         let x = parseFloat(find_tag('alredy-donated2').innerText) || 0;
          let total2=sent2+x;
          find_tag('alredy-donated2').innerText=total2;
          let sum=parseFloat(find_tag('collection').innerText);
          sum+=total2;
          find_tag('collection').innerText=sum;
          console.log(x);
          find_tag('modal').style.display='block';
          const div=document.createElement('div');
   
         const m=new Date();
         const hr=m.getHours();
         const mnt=m.getMinutes();
         const sec=m.getSeconds();
         const day=m.getDate();
        const mnth=m.getMonth()+1;
        const yr=m.getFullYear();
         const title=find_tag('source2').innerText;
         find_tag('history').classList.add('rounded-xl',  'w-3/4','py-4');
       div.innerHTML= ` 
        <h1 class="font-bold text-2xl"> ${sent2} Taka ${title}</h1>
       <p> Date: ${day} ${yr} ${hr}:${mnt}:${sec}  </p>
   `;
      find_tag('history').appendChild(div);
          
        
     }
       else{
        alert('Invalid Amount');
       }
     })

   
     
     find_tag('done3').addEventListener('click',function(){
      let sent3=parseFloat(find_tag('amount3').value);
      console.log(sent3);
      if( sent3>0){
         let x = parseFloat(find_tag('alredy-donated3').innerText) || 0;
         //  let total3=sent3+x;
          x+=sent3
          find_tag('alredy-donated3').innerText=x+sent3;
          let sum=parseFloat(find_tag('collection').innerText);
          sum+=x;
          find_tag('collection').innerText=sum;
          console.log(x);
          find_tag('modal').style.display='block';
          const div=document.createElement('div');
   
         const m=new Date();
         const hr=m.getHours();
         const mnt=m.getMinutes();
         const sec=m.getSeconds();
         const day=m.getDate();
        const mnth=m.getMonth()+1;
        const yr=m.getFullYear();
         const title=find_tag('source3').innerText;
        find_tag('history').classList.add('rounded-xl',  'w-3/4','py-4');
       div.innerHTML= ` 
       <h1 class="font-bold text-2xl"> ${sent3} Taka ${title}</h1>
       <p> Date: ${day} ${yr} ${hr}:${mnt}:${sec}  </p>
   `;
      find_tag('history').appendChild(div);
          
        
     }
       else{
        alert('Invalid Amount');
       }
     })


   find_tag('close').addEventListener('click',function(){
      find_tag('modal').classList.remove('modal-box');
      find_tag('modal').style.display = 'none'; 
     
    
     })
    find_tag('blg').addEventListener('click',function(){
        window.location.href='blog.html';
    })

      