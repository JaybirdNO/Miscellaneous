let query = prompt("What would you like to do?");
const todos = ['Clean room', 'Wash Car']
while (query !== 'quit' && query !== 'q') {
    if (query === 'list') {
        console.log('****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('****************')
    }
    else if (query === 'new') {
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }
    else if (query === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) { //To make sure no letters inputed can delete from list
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }
        else {
            console.log("unknown index")
        }

    }
    query = prompt("What would you like to do?")
}
console.log("You have quit the Todo APP")