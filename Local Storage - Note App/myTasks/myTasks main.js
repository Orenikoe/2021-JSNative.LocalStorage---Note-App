const fillArr = Array.from(document.querySelectorAll('.fill'));
const empties = document.querySelectorAll('.empty');
const trash = document.querySelector('.trash');

let draggedItem = null;

trash.addEventListener('dragover', dragOverTrash);
trash.addEventListener('dragenter', dragEnterTrash);
trash.addEventListener('drop', dropToTrash);

for (const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

function assignDraggability() {
    fillArr.forEach(i => {
       if(i.innerHTML.length === 0){
i.draggable = false;
i.style.cursor = 'auto';
i.classList.add('invisible');


       }
    })
}

for (let i = 0; i < fillArr.length; i++) {
	const item = fillArr[i];

	item.addEventListener('dragstart', (e) => {
		this.className += ' hold';
        setTimeout(() => (this.className = 'invisible'), 0);
        draggedItem = e.target;
       
        
    });
    
    item.addEventListener('dragend', (e) => {
        this.className = 'fill';
     
    })
}

function dropToTrash() {
	console.log('dropped');
	this.append(draggedItem);
    this.removeChild(draggedItem);
    removeTaskFromArr();
	// this.className = 'trash';
}

function dragEnterTrash(e) {
	e.preventDefault();
}

function dragOverTrash(e) {
	e.preventDefault();
}

function dragEnd() {
   
        this.className = 'fill';

    
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
	this.className += ' hovered';
}

function dragLeave() {
	this.className = 'empty';
}

function dragDrop() {

    this.className = 'empty';
    
    this.append(draggedItem);
    
}

window.onstorage = divAppendTask();

function divAppendTask() {
    let tasksArr =JSON.parse(localStorage.getItem('tasks')); 

    for(let i = 0; i < tasksArr.length; i++) {
        fillArr[i].innerHTML = tasksArr[i]
        
        
    }
    assignDraggability();
    
}

function removeTaskFromArr() {
    itemNumber = Number(draggedItem.id);
    const tasksArr = JSON.parse(localStorage.getItem('tasks'));
    tasksArr.splice(itemNumber, 1);
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
    console.log(itemNumber);
}