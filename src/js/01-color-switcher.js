const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const timer = { 
  intervalId: 0,
    isActive: false,
    start(){
      startBtn.setAttribute('disabled', true);
        if(this.isActive){
          startBtn.removeAttribute('disabled');
          };
          this.intervalId = setInterval(()=>{ changeBody()
           
        },
        1000);
    },
    stop() { 
      clearInterval(this.intervalId);
    },
};

function changeBody(){
    body.style.backgroundColor = getRandomHexColor();
};



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  


  startBtn.addEventListener("click",() =>{ timer.start()} );
    
  

 stopBtn.addEventListener("click", () => {timer.stop()} );