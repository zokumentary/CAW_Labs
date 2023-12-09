import TaskList from "./TaskList";
import Form from "./Form";
import "../App.css";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TaskCard = ({ globalState }) => {
    const [tasks, setTasks] = useState(null);



    const [errorMessage, setErrorMessage] = useState('')

    const [isPendingAdd, setIsPendingAdd] = useState(false);

    const [selectedGroup, setSelectedGroup] = useState(null);

    const { isPending, error } = useFetch('http://localhost:3030/selectedGroup', setTasks, setSelectedGroup, globalState);

    const deletes = (id) => {
        setErrorMessage('');
        fetch('http://localhost:3030/tasks/' + id, {
            method: 'DELETE'
        }).then((e) => {
            if (!e.ok) {
                throw Error('error');
            }
            setTasks(tasks.filter((task) => task.id !== id));
            console.log('task deleted');
        }).catch((e) => {
            setErrorMessage('Could not delete task !');
            console.log(e);
        })
    }


    const addTask = (task) => {
        // Send a POST request to add a new task
        if (!selectedGroup) {
            return
        }
        let newTask =
        {
            "title": task.title,
            "group": selectedGroup.id_group,
            "owner": 2,
            "isComplete": false,
            "description": task.description
        }

        setIsPendingAdd(true);
        fetch('http://localhost:3030/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask),
        })
            .then((res) => {
                if (!res.ok) {
                    setIsPendingAdd(false);
                    throw Error('Could not add the data !');
                }
                setIsPendingAdd(false);
                return res.json();
            })
            .then((data) => {
                setTasks([...tasks, data]);
                console.log('New task added', data);
            })
            .catch((err) => {
                setIsPendingAdd(false);
                console.log(err.message);
            });

    }


    const togleTask = (task) => {
        let newTask = {
            "title": task.title,
            "group": task.group,
            "owner": task.owner,
            "isComplete": !task.isComplete,
            "description": task.description
        }
        fetch('http://localhost:3030/tasks/' + task.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask),
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not update the data !');
                }
                return res.json();
            })
            .then((data) => {
                // setTasks([tasks]);
                setTasks(
                    tasks.map((element) => {
                        if (element.id === data.id) {
                            element = data
                        }
                        return element
                    })
                )
                console.log('task updated', data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }



    return (
        <>
            <div className="task_card">
                {(!error && !isPending) && <Form addTask={addTask} selectedGroup={selectedGroup} />}
                {error && <div className="error">{error}</div>}
                {isPending && <div className="isPending">Loading...</div>}
                {tasks && <TaskList tasks={tasks} delete={deletes} togleTask={togleTask} />}
                {
                    errorMessage && <div className="error" >error</div>
                }
                {
                    isPendingAdd && <div className="isPending">Loading...</div>
                }
            </div>
        </>
    );
}

export default TaskCard;