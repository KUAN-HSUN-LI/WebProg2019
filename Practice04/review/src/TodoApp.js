import React, { Component } from 'react';
import './TodoApp.css';
import Todo_Header from "./containers/Todo_Header"
import Todo_Main from "./containers/Todo_Main"
import Todo_Footer from "./containers/Todo_Footer"
//
//const input = document.getElementById("todo-input");
//const viewAllButtom = document.getElementById("todo-viewall");
//const viewActiveButtom = document.getElementById("todo-viewactive");
//const viewCompletedButtom = document.getElementById("todo-viewcompleted");
//const cleanButton = document.getElementById("todo-cleaner");
//var listState = "All";
//
//const escapeHTML = function (text) { 
//    return text.replace(/&/g, "&amp;")
//               .replace(/"/g, "&quot;")
//               .replace(/</g, "&lt;")
//               .replace(/>/g, "&gt;");
//};
//
//const updateCount = function () {
//    const todoCount = document.getElementById("todo-count");
//    const lastCount = todoItems.filter(ele => !ele.isComplete).length;
//    todoCount.innerHTML = lastCount + " left"
//    return lastCount;
//};
//
//const cleanButtonState = function (completeCount) {
//    if (completeCount > 0) {
//        cleanButton.setAttribute("state", "show");
//    }
//    else {
//        cleanButton.setAttribute("state", "hide");
//    }
//};
//
//const displayItems = function () {
//    const list = document.getElementById("todo-list");
//    list.innerHTML = "";
//    if (listState == "All") {
//        for (i = 0; i < todoItemCount; i++) {
//            list.appendChild(todoItems[i].node);
//        }
//    }
//    else if (listState == "Active") {
//        for (i = 0; i < todoItemCount; i++) {
//            if (!todoItems[i].isComplete)
//                list.appendChild(todoItems[i].node);
//        }
//    }
//    else if (listState == "Completed") {
//        for (i = 0; i < todoItemCount; i++) {
//            if (todoItems[i].isComplete)
//                list.appendChild(todoItems[i].node);
//        }
//    }
//};
//
//const changeId = function (item, newid) {
//    const node = item.node;
//    node.setAttribute("itemid", newid);
//    const boxWrapper = node.firstChild;
//    const checkbox = boxWrapper.firstChild;
//    const label = boxWrapper.lastChild;
//    checkbox.setAttribute("id", newid);
//    label.setAttribute("for", newid);
//};
//
//const deleteItem = function (targetID) {
//    for (i = targetID; i < todoItemCount-1; i++) {
//        todoItems[i] = todoItems[i+1];
//        changeId(todoItems[i], i);
//    }
//    todoItems.pop();
//    todoItemCount--;
//};
//
//const deleteButtonOnclick = function (event) {
//    const button = event.target;
//    const targetItem = button.parentNode;
//    const targetID = +targetItem.getAttribute("itemid");
//    deleteItem(targetID);
//    displayItems();
//    const lastCount = updateCount();
//    cleanButtonState(todoItemCount - lastCount);
//};
//
//const editInputHandler = function (event) {
//    const targetID = +event.target.parentNode.getAttribute("itemid");
//    console.log(targetID);
//    if (event.keyCode === 13 && event.target.value.trim() !== "") {
//        var text = escapeHTML(event.target.value.trim());
//        const itemNode = todoItems[targetID].node;
//        const detail = document.createElement("H2");
//        detail.setAttribute("class", "todo-app__item-detail");
//        detail.setAttribute("ondblclick", "editDetail(event)");
//        detail.innerHTML = text;
//        itemNode.replaceChild(detail, event.target);
//        displayItems();
//    }
//    else if (event.keyCode === 13) {
//        deleteItem(targetID);
//        displayItems();
//        const lastCount = updateCount();
//        cleanButtonState(todoItemCount - lastCount);
//    }
//};
//
//const editDetail = function (event) {
//    const detail = event.target;
//    const originText = detail.innerHTML;
//    const targetItem = detail.parentNode;
//    const targetID = +targetItem.getAttribute("itemid");
//    const editInput = document.createElement("INPUT");
//    editInput.className = "todo-app__item-editInput";
//    editInput.value = originText;
//    targetItem.replaceChild(editInput, detail);
//    outside = document.body;
//    editInput.addEventListener("keyup", event => {editInputHandler(event);});
//};
//
//const checkboxOnclick = function (event) {
//    const checkbox = event.target;
//    const targetID = +event.target.getAttribute("id");
//    const targetItem = todoItems[targetID];
//    const itemNode = targetItem.node;
//    targetItem.isComplete = !targetItem.isComplete;
//    if (targetItem.isComplete) {
//        itemNode.style["textDecoration"] = "line-through";
//        itemNode.style["opacity"] = 0.5;
//    }
//    else {
//        itemNode.style["textDecoration"] = "";
//        itemNode.style["opacity"] = 1;
//    }
//    const lastCount = updateCount();
//    cleanButtonState(todoItemCount - lastCount);
//    displayItems();
//};
//
//const createItem = function (text, itemid) {
//    const itemNode = document.createElement("LI");
//    const boxWrapper = document.createElement("DIV");
//    const checkbox = document.createElement("INPUT");
//    const label = document.createElement("LABEL");
//    const detail = document.createElement("H2");
//    const deleteButton = document.createElement("IMG");
//    label.setAttribute("for", itemid);
//    checkbox.setAttribute("type", "checkbox");
//    checkbox.setAttribute("id", itemid);
//    checkbox.setAttribute("onclick", "checkboxOnclick(event)");
//    boxWrapper.appendChild(checkbox);
//    boxWrapper.appendChild(label);
//    boxWrapper.setAttribute("class", "todo-app__checkbox");
//    detail.setAttribute("class", "todo-app__item-detail");
//    detail.setAttribute("ondblclick", "editDetail(event)");
//    detail.innerHTML = text;
//    deleteButton.setAttribute("src", "img/x.png");
//    deleteButton.setAttribute("class", "todo-app__item-x");
//    deleteButton.setAttribute("onclick", "deleteButtonOnclick(event)");
//    itemNode.appendChild(boxWrapper);
//    itemNode.appendChild(detail);
//    itemNode.appendChild(deleteButton);
//    itemNode.setAttribute("class", "todo-app__item");
//    itemNode.setAttribute("itemid", itemid);
//    const newItem = {node: itemNode, isComplete: false};
//    return newItem;
//};
//
//input.addEventListener("keyup", event => {
//    if (event.keyCode === 13 && event.target.value.trim() !== "") {
//        var text = escapeHTML(event.target.value.trim());
//        const newItem = createItem(text, todoItemCount);
//        todoItems[todoItemCount] = newItem;
//        todoItemCount++;
//        displayItems();
//        const lastCount = updateCount();
//        cleanButtonState(todoItemCount - lastCount);
//        event.target.value = "";
//    }
//});
//
//cleanButton.addEventListener("click", function () {
//    var i = 0;
//    while (i < todoItems.length) {
//        if (todoItems[i].isComplete) {
//            todoItems.splice(i, 1);
//        }
//        else i++;
//    }
//    todoItemCount = todoItems.length;
//    for (i = 0; i < todoItemCount; i++) {
//        changeId(todoItems[i], i);
//    }
//    displayItems();
//    updateCount();
//    cleanButtonState(0);
//});
//
//viewAllButtom.addEventListener("click", function () {
//    viewAllButtom.setAttribute("state", "active");
//    viewActiveButtom.setAttribute("state", "inactive");
//    viewCompletedButtom.setAttribute("state", "inactive");
//    if (listState != "All") {
//        listState = "All";
//        displayItems();
//    }
//});
//
//viewActiveButtom.addEventListener("click", function () {
//    viewAllButtom.setAttribute("state", "inactive");
//    viewActiveButtom.setAttribute("state", "active");
//    viewCompletedButtom.setAttribute("state", "inactive");
//    if (listState != "Active") {
//        listState = "Active";
//        displayItems();
//    }
//});
//
//viewCompletedButtom.addEventListener("click", function () {
//    viewAllButtom.setAttribute("state", "inactive");
//    viewActiveButtom.setAttribute("state", "inactive");
//    viewCompletedButtom.setAttribute("state", "active");
//    if (listState != "Completed") {
//        listState = "Completed";
//        displayItems();
//    }
//});

class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.item_count = 0;
        this.items = [];
    }
    escapeHTML = text => text.replace(/&/g, "&amp;")
                             .replace(/"/g, "&quot;")
                             .replace(/</g, "&lt;")
                             .replace(/>/g, "&gt;");
    createItem = function (text, itemid) {
    const itemNode = document.createElement("LI");
    const boxWrapper = document.createElement("DIV");
    const checkbox = document.createElement("INPUT");
    const label = document.createElement("LABEL");
    const detail = document.createElement("H2");
    const deleteButton = document.createElement("IMG");
    label.setAttribute("for", itemid);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", itemid);
    checkbox.setAttribute("onclick", "checkboxOnclick(event)");
    boxWrapper.appendChild(checkbox);
    boxWrapper.appendChild(label);
    boxWrapper.setAttribute("class", "todo-app__checkbox");
    detail.setAttribute("class", "todo-app__item-detail");
    detail.setAttribute("ondblclick", "editDetail(event)");
    detail.innerHTML = text;
    deleteButton.setAttribute("src", "img/x.png");
    deleteButton.setAttribute("class", "todo-app__item-x");
    deleteButton.setAttribute("onclick", "deleteButtonOnclick(event)");
    itemNode.appendChild(boxWrapper);
    itemNode.appendChild(detail);
    itemNode.appendChild(deleteButton);
    itemNode.setAttribute("class", "todo-app__item");
    itemNode.setAttribute("itemid", itemid);
    const newItem = {node: itemNode, isComplete: false};
    return newItem;
};
    handleInput = e => {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            var text = this.escapeHTML(e.target.value.trim());
            const newItem = this.createItem(text, this.item_count);
        }
    }
    render () {
        return (
            <div className="todo-app__root">
                <Todo_Header />
                <Todo_Main />
                <Todo_Footer last={0}/>
            </div>
        );
    }
}

export default TodoApp;