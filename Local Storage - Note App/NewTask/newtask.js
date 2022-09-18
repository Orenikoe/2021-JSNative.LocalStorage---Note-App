const addTaskBtn = document.querySelector('button');
const taskCanvas = document.getElementById('myCanvas');
let taskText = document.querySelector('textarea');
let tasks = null;

function init() {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    if(tasks === null) {
        tasks = [];
    }
    
}
init();

addTaskBtn.addEventListener('click', saveTaskToLocalStorage)



function saveTaskToLocalStorage() {
    
    const taskData = taskText.value
    const invalidText = taskData.trim();
   const mission = new LocalstorageObj(taskData, '12:00', '13:00');
    if(invalidText == false){
      return;  
    }
    else {
        localStorage.setItem('task', JSON.stringify(taskData));
        localStorage.setItem('task1', JSON.stringify(mission));

        const task = JSON.parse(localStorage.getItem('task'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskText.value = '';

    }



}

class LocalstorageObj {
    constructor(content, start, end) {
        this.content = content;
        this.start_time = start;
        this.end_time = end;

    }
}
  

   
        
    
 





   
        



   

    
    
    






