//  HTML Elements
const greeting=document.getElementById("greeting");
const time=document.querySelector(".time");
const tasks=document.querySelector("#tasks");
const input=document.querySelector("#input");
const btnAdd=document.querySelector(".add");

// Time & Greeting 
function updateTimeAndGreeting() {
    const now=new Date();
    const options={hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true };
    time.textContent=now.toLocaleTimeString('en-US', options);
    
    const hour=now.getHours();
    if(hour >= 5 && hour < 12) greeting.textContent="Good Morning!";
    else if(hour >= 12 && hour < 17) greeting.textContent="Good Afternoon!";
    else if(hour >= 17 && hour < 21) greeting.textContent="Good Evening!";
    else greeting.textContent="Good Night!";
}

updateTimeAndGreeting();
setInterval(updateTimeAndGreeting,1000);

// Empty Message
function updateEmptyMessage(){
    const emptyMsg = document.querySelector(".empty");
    if(tasks.children.length === 0){
        if(!emptyMsg){
            const div = document.createElement("div");
            div.className = "empty";
            div.textContent = "No tasks yet. Add your first one!";
            tasks.appendChild(div);
        }
    }else{
        if(emptyMsg) emptyMsg.remove();
    }
}

//LocalStorage Utilitie
function initStorage(key){
    if(!localStorage.getItem(key)){
        localStorage.setItem(key, JSON.stringify([]));
    }else{
        renderTasksFromStorage(key);
    }
}

function getStorage(key){
    return JSON.parse(localStorage.getItem(key)) || [];
}

function setStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function addItem(key, item){
    const data = getStorage(key);
    data.push(item);
    setStorage(key, data);
}

function removeItem(key, isoTime){
    let data = getStorage(key);
    data = data.filter(item => item.time !== isoTime);
    setStorage(key, data);
}

function updateItem(key, isoTime, status){
    const data = getStorage(key).map(item => {
        if(item.time === isoTime){
            return { ...item, status: status };
        }
        return item;
    });
    setStorage(key, data);
}

function convertTask(content, date, status){
    return {
        content: content,
        time: date.toISOString(),
        status: status
    };
}

// Task Rendering 
function createTaskElement(content, date, status) {
    const li = document.createElement("li");
    li.className = "task";
    li.dataset.time = date.toISOString();  
    li.innerHTML = `
        <span class="text ${status ? 'end' : ''}">${content}</span>
        <div class="tools">
            <input type="checkbox" class="check" ${status ? 'checked' : ''}>
            <span class="time-task">${date.toLocaleString()}</span>
            <button class="delete">&#128465;</button>
        </div>
    `;
    tasks.appendChild(li);
}

function renderTasksFromStorage(key) {
    const data = getStorage(key);
    data.forEach(item => {
        createTaskElement(item.content, new Date(item.time), item.status);
    });
}

// Add Task Event 
btnAdd.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const now = new Date();
    createTaskElement(text, now, false);
    addItem("tasks", convertTask(text, now, false));

    input.value = "";
    updateEmptyMessage();
});

//  Task Click Events 
tasks.addEventListener("click", (e) => {
    const li = e.target.closest(".task");
    if (!li) return;

    const isoTime = li.dataset.time;  

    // Delete task
    if (e.target.classList.contains("delete")) {
        removeItem("tasks", isoTime);
        li.remove();
        updateEmptyMessage();
    }

    // Check/uncheck task
    if (e.target.classList.contains("check")) {
        const textElement = li.querySelector(".text");
        const checked = e.target.checked;

        if (checked) textElement.classList.add("end");
        else textElement.classList.remove("end");

        updateItem("tasks", isoTime, checked);
    }
});

//  Initialization 
initStorage("tasks");
updateEmptyMessage();