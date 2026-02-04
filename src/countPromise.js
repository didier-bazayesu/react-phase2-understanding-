async function asyncCounter(){
    try{
        let start = 1 ;
        let array =  [];
    
        let interval = setInterval(()=>{
           console.log(start);
           start++;
           array.push(start);
        },1000)
        setTimeout(()=>{
        clearInterval(interval);
        },5000)
      setTimeout(()=> {
          return array;
      },7000)

    }catch(error){
       console.error(error);
    };
    
    
}

asyncCounter();