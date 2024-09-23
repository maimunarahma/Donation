
 function find_tag(id){
   const p= document.getElementById(id);
   return p;
 }  
 const m=new Date();
 const hr=m.getHours();
 const mnt=m.getMinutes();
 const sec=m.getSeconds();
 const day=m.getDate();
const mnth=m.getMonth()+1;
const yr=m.getFullYear();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan","feb", "March", "April", "May", "June", "July", "August", "Sep" ,"Oct" ,"Nov", "Dec"];
   function day_name(){
     return days[m.getDay()];
     
   }

   function mnth_name(){
     return months[m.getMonth()];
   }
   function day_yr(){
    return `${day}, ${yr}`; 
   }
   function time(){
     return `${hr}:${mnt}:${sec}`;
   }