 
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
    const sent=parseFloat(find_tag('amount').value);
    if(sent>0){
        const x=parseFloat(find_tag('alredy-donated').innerText);
        const total=sent+x;
        find_tag('alredy-donated').innerText=total;
        find_tag('collection').innerText=parseFloat(find_tag('collection').innerText)+total;
        console.log(total);
        find_tag('modal').style.display='block';
        const div=document.createElement('div');
 
       const m=new Date();
       const hr=m.getHours();
       const mnt=m.getMinutes();
       const sec=m.getSeconds()
       const day=m.getDate();
      const mnth=m.getMonth()+1;
      const yr=m.getFullYear();
      div.classList.add('rounded-xl,p-4,border-8');
     div.innerHTML= ` 
     <h1>${sent} </h1>
     <p> Date: ${day}
 `;
    find_tag('history').appendChild(div);
        
      //   find_tag('close').addEventListener('click',function(){
      //    find_tag('modal').style.display='hidden';
       
      //   })
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

      