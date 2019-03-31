var tasks = [];
var count = 0;
var btnNow = "all";
let btn = document.getElementById("all");
btn.style.border = "lightgray 1px solid";
const input = document.getElementById("todo-input");
input.addEventListener("keyup", event => {
	if (event.keyCode === 13 && event.target.value !== "") {
		event.target.value = event.target.value.trim();
		if (event.target.value == "") {
			return;
		}
		newItem = { node: itemCreate(event.target.value), isComplete: false };
		input.value = null;
		tasks.push(newItem);
		update();
	}
});
function itemCreate(id) {
	let num = count;
	const itemNode = document.createElement("LI");
	itemNode.setAttribute("class", "todo-app__item");
	const wrapper = document.createElement("DIV");
	wrapper.setAttribute("class", "todo-app__checkbox");
	const checkbox = document.createElement("INPUT");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("id", count);
	var task = document.createElement("h1");
	checkbox.onclick = function completed() {
		if (tasks[num]["isComplete"]) {
			tasks[num]["isComplete"] = false;
			task.style["textDecoration"] = "none";
			task.style["opacity"] = 1.0;
		} else {
			tasks[num]["isComplete"] = true;
			task.style["textDecoration"] = "line-through";
			task.style["opacity"] = 0.5;
		}
		update();
	};
	const label = document.createElement("label");
	label.setAttribute("for", count);
	task.setAttribute("class", "todo-app__item-detail");
	task.innerHTML = id;
	const del = document.createElement("img");
	del.setAttribute("src", "./img/x.png");
	del.setAttribute("class", "todo-app__item-x");
	del.onclick = function cancel() {
		let parent = document.getElementById("todo-list");
		parent.removeChild(itemNode);
		delete tasks[num];
		update();
	};
	wrapper.appendChild(checkbox);
	wrapper.appendChild(label);
	itemNode.appendChild(wrapper);
	itemNode.appendChild(task);
	itemNode.appendChild(del);
	let parent = document.getElementById("todo-list");
	parent.appendChild(itemNode);
	++count;
	return itemNode;
}

function update() {
	let todoCount = document.getElementById("todo-app__totalNum");
	todoCount.innerHTML = tasks.filter(ele => !ele.isComplete).length;
	let footer = document.querySelector(".todo-app__footer");
	footer.style.display = "none";
	let flag = true;
	for (let i in tasks) {
		if (tasks[i] !== undefined) {
			footer.style.display = "flex";
			flag = false;
			break;
		}
	}
	if (flag) {
		btnClear("all");
	}
}

function All() {
	let parent = document.getElementById("todo-list");
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
	for (let i in tasks) {
		if (tasks[i] !== null) {
			parent.appendChild(tasks[i]["node"]);
		}
	}
	btnClear("all");
	update();
}
function Active() {
	let parent = document.getElementById("todo-list");
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
	for (i in tasks) {
		if (tasks[i] !== null) {
			if (!tasks[i]["isComplete"]) {
				parent.appendChild(tasks[i]["node"]);
			}
		}
	}
	btnClear("active");
	update();
}
function Completed() {
	let parent = document.getElementById("todo-list");
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
	for (i in tasks) {
		if (tasks[i] !== null) {
			if (tasks[i]["isComplete"]) {
				parent.appendChild(tasks[i]["node"]);
			}
		}
	}
	btnClear("completed");
	update();
}

function btnClear(button) {
	let all = document.getElementById("all");
	let active = document.getElementById("active");
	let completed = document.getElementById("completed");
	all.style.border = "";
	active.style.border = "";
	completed.style.border = "";
	let btn = document.getElementById(button);
	btn.style.border = "lightgray 1px solid";
	btnNow = button;
}

function clearCompleted() {
	let parent = document.getElementById("todo-list");
	while (parent.hasChildNodes()) {
		parent.removeChild(parent.lastChild);
	}
	for (i in tasks) {
		if (tasks[i]["isComplete"]) {
			delete tasks[i];
		}
	}
	if (btnNow === "all") {
		All();
	} else if (btnNow === "active") {
		Active();
	} else {
		Completed();
	}
}

function clearAll() {
	let parent = document.getElementById("todo-list");
	while (parent.hasChildNodes()) {
		parent.removeChild(parent.lastChild);
	}
	tasks.length = 0;
	count = 0;
	update();
}
