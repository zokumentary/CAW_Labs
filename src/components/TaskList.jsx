/* eslint-disable react/prop-types */


const TaskList = (props) => {


    return (
        <>
            <div className="task_list">
                <div className="till_list">
                    {props.tasks.map(task => (
                        <div key={task.id} className="task_item" >
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <button className="delete-button" onClick={() => props.delete(task.id)}>
                                <div className="crose-icon">
                                </div>
                            </button>
                            <button className="check-task-button" onClick={() => props.togleTask(task)}>
                                {task.isComplete ? 'DONE' : 'Complete'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TaskList;