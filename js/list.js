var todos = ["Buy new Turtle"];

var input = prompt("What would you like to do?");


while(input != "quit") {
	if(input === "list") {
		todos.forEach(function(todo) {
			console.log(todo);
		});
		console.log(todos);
}	else if(input === "new") {
	//will ask for new todo
	var newTodo = prompt("Enter new todo");
	//add this array to todos
	todos.push(newTodo);

}
	
}
console.log("You have quit the app");