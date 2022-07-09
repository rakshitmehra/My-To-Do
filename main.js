if (window.localStorage.getItem('id') == undefined) {
	window.localStorage.setItem('id',1);
}
function send(){
	var task = document.getElementById("task").value;
	var des = document.getElementById("des").value;
	var id = window.localStorage.getItem("id");
	if(task==""||des==""){
		window.alert("Please fill the empty blanks")
	}
	else {
	window.localStorage.setItem("task"+ id, task);
	window.localStorage.setItem("des"+ id, des);
	compo(task,des,id);
	id++;
	window.localStorage.setItem("id",id);
	}
}
function compo(task,des,id){
	var div = document.createElement("div");
	var h2 = document.createElement("h2");
	var hr = document.createElement("hr");
	var p = document.createElement("p");
	var button = document.createElement("button");
	h2.innerHTML = task;
	p.innerHTML = des;
	button.innerHTML = "Completed";
	div.id = id;
	div.append(h2,hr,p,button);
	document.getElementById("components").appendChild(div);
}