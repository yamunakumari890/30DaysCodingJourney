const habitInput = document.getElementById("habitInput");
const addBtn = document.getElementById("addBtn");
const habitList = document.getElementById("habitList");
const progress = document.getElementById("progress");
const resetBtn = document.getElementById("resetBtn");

let habits = [];

let savedHabits = localStorage.getItem("habits");

if(savedHabits){
  habits = JSON.parse(savedHabits);
}

function saveHabits(){
  localStorage.setItem(
    "habits",
    JSON.stringify(habits)
  );
}

addBtn.addEventListener("click", addHabit);

function addHabit() {
  let name = habitInput.value.trim();
  if(name === "") {
    alert("Please Enter a Habit");
    return;
  }

let habit = {
  name: name,
  completed: false
};

habits.push(habit);

saveHabits();

habitInput.value = "";

displayHabits();

}

function displayHabits() {
  habitList.innerHTML = "";
  habits.forEach(function(habit, index) {
    
    let habitDiv = document.createElement("div");

    habitDiv.className = "habit";

    if (habit.completed) {
      habitDiv.classList.add("completed");
    }

    let habitName = document.createElement("span");
    habitName.className = "habit-name";
    habitName.innerText = habit.name

    let completeBtn = document.createElement("button");

    completeBtn.className = "complete-btn";

    completeBtn.innerText = habit.completed ? "↩️ Undo" : "✅ Complete";

    completeBtn.addEventListener(
      "click",
      function() {
        toggleHabit(index);
      }
    );

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "🗑️ Delete";

    deleteBtn.addEventListener(
      "click",
      function() {
        deleteHabit(index);
      }
    );

    let buttons = document.createElement("div");

    buttons.appendChild(completeBtn);
    buttons.appendChild(deleteBtn);
    habitDiv.appendChild(habitName);
    habitDiv.appendChild(buttons);
    habitList.appendChild(habitDiv);
  });

  updateProgress();

}

function toggleHabit(index) {

  habits[index].completed =
  !habits[index].completed;

  saveHabits();

  displayHabits();
}

function deleteHabit(index) {
  habits.splice(index, 1);
  saveHabits();
  displayHabits();
}

function updateProgress() {
  if(habits.length === 0) {
    Progress.innerText = "0%";
    return;
  }
  
  let completedHabits = habits.filter(function(habit){
    return habit.completed;

  }).length;

  let percentage = (completedHabits / habits.length) * 100;

  progress.innerText = Math.round(percentage) + "%";
}

resetBtn.addEventListener(
  "click",
  resetHabits
);

function resetHabits() {
  let confirmReset = confirm("Are you sure you want to reset all habits?");

  if(!confirmReset) {
    return;
  }

  habits = [];

  localStorage.removeItem("habits");
  displayHabits();
}

displayHabits();


