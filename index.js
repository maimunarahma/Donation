
  function bg(){
     find_tag('btn-1').addEventListener('click',function(){
       
        find_tag('btn-1').classList.add('bg-[#B4F461]');
        find_tag('btn-2').classList.remove('bg-[#B4F461]');
     })
  }
  function bg_history(){
    find_tag('btn-2').addEventListener('click',function(){
       
       find_tag('btn-2').classList.add('bg-[#B4F461]');
       find_tag('btn-1').classList.remove('bg-[#B4F461]');
    })
 }
