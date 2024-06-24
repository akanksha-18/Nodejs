const fs = require('fs');
const path = require('path');
const readline = require('readline');

const tasksFilePath = path.join(__dirname, 'tasks.txt');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function addTask(task) {
    fs.appendFile(tasksFilePath, `${task}\n`, (err) => {
        if (err) throw err;
        console.log('Task added successfully!');
        rl.close();
    });
}


function viewTasks() {
    fs.readFile(tasksFilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const tasks = data.trim().split('\n');
        if (tasks.length === 0 || tasks[0] === '') {
            console.log('No tasks available.');
        } else {
            console.log('Tasks:');
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
        rl.close();
    });
}

function markTaskComplete(taskIndex) {
    fs.readFile(tasksFilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const tasks = data.trim().split('\n');
        if (taskIndex < 1 || taskIndex > tasks.length) {
            console.log('Invalid task number.');
        } else {
            tasks[taskIndex - 1] = `${tasks[taskIndex - 1]} (completed)`;
            fs.writeFile(tasksFilePath, tasks.join('\n') + '\n', (err) => {
                if (err) throw err;
                console.log('Task marked as complete.');
            });
        }
        rl.close();
    });
}


function removeTask(taskIndex) {
    fs.readFile(tasksFilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const tasks = data.trim().split('\n');
        if (taskIndex < 1 || taskIndex > tasks.length) {
            console.log('Invalid task number.');
        } else {
            tasks.splice(taskIndex - 1, 1);
            fs.writeFile(tasksFilePath, tasks.join('\n') + '\n', (err) => {
                if (err) throw err;
                console.log('Task removed.');
            });
        }
        rl.close();
    });
}


function main() {
    rl.question('Choose an operation: [1] Add Task [2] View Tasks [3] Complete Task [4] Remove Task: ', (choice) => {
        switch (choice) {
            case '1':
                rl.question('Enter the task description: ', (task) => {
                    addTask(task);
                });
                break;
            case '2':
                viewTasks();
                break;
            case '3':
                rl.question('Enter the task number to mark as complete: ', (taskIndex) => {
                    markTaskComplete(parseInt(taskIndex));
                });
                break;
            case '4':
                rl.question('Enter the task number to remove: ', (taskIndex) => {
                    removeTask(parseInt(taskIndex));
                });
                break;
            default:
                console.log('Invalid choice. Please try again.');
                rl.close();
                break;
        }
    });
}

main();