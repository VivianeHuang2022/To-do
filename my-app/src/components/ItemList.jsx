import React, { useState } from 'react';



function ItemList({ tasks, onUpdateTask, onDeleteTask, onAddTask }) {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState('');
    const [selectedTask, setSelectedTask] = useState(null);

    const handleSelect = (index, isCompleted) => {
        setSelectedTask({ index, isCompleted });
    };
    

    const handleEdit = (index, task) => {
        setEditingIndex(index);
        setEditingText(task.task);
    };

    const handleEditChange = (e) => {
        setEditingText(e.target.value);
    };

    const saveEdit = (index) => {
        if (editingText !== '') {
            onUpdateTask(index, editingText, tasks[index].completed);
        }
        setEditingIndex(null);
    };


// 

return (
    <div className="task-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
            <h2>Completed Tasks</h2>
            <ul>
                {tasks.filter(task => task.completed).map((task, index) => (
                    <li key={index} onClick={() => handleSelect(index, true)} style={{ background: selectedTask?.index === index && selectedTask.isCompleted ? 'lightgray' : 'transparent' }}>
                        {editingIndex === index ? (
                            <input value={editingText} onChange={handleEditChange} onBlur={() => saveEdit(index)} autoFocus />
                        ) : (
                            <span onDoubleClick={() => handleEdit(index, task)}>{task.task}</span>
                        )}
                    </li>
                ))}
            </ul>
            {selectedTask != null && selectedTask.isCompleted && (
                <div>
                    <button onClick={() => onDeleteTask(selectedTask.index, true)}>Delete Task</button>
                </div>
            )}
            <button onClick={() => onAddTask(true)}>Add Task</button>
        </div>
        <div>
            <h2>Not Completed Tasks</h2>
            <ul>
                {tasks.filter(task => !task.completed).map((task, index) => (
                <li key={index} onClick={() => handleSelect(index, task.completed)} style={{ background: selectedTask?.index === index ? 'lightgray' : 'transparent' }}>
                    {editingIndex === index ? (
                         <input
                                 value={editingText}
                                 onChange={handleEditChange}
                                 onBlur={() => saveEdit(index)}
                                 autoFocus />
                        ) : (<span onDoubleClick={() => handleEdit(index, task)}>{task.task}</span> )}
                </li>
                ))}
            </ul>
            {selectedTask != null && !selectedTask.isCompleted && (
                <div>
                    <button onClick={() => onDeleteTask(selectedTask.index, false)}>Delete</button>
                </div>
            )}
            <button onClick={() => onAddTask(false)}>Add Task</button>
        </div>
    </div>
);

}

export default ItemList;




// function ItemList({ tasks }) {
//     // Splitting tasks into completed and not completed
//     const completedTasks = tasks.filter(task => task.completed);
//     const notCompletedTasks = tasks.filter(task => !task.completed);

//     return (
//         <div className="task-container" style={{ display: 'flex', justifyContent: 'space-around' } }>
//             <div>
//                 <h2>Completed Tasks</h2>
//                 <ul>
//                     {completedTasks.map((task, index) => (
//                         <li key={index}>{task.task}</li>
//                     ))}
//                 </ul>
//             </div>
//             <div>
//                 <h2>Not Completed Tasks</h2>
//                 <ul>
//                     {notCompletedTasks.map((task, index) => (
//                         <li key={index}>{task.task}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default ItemList;