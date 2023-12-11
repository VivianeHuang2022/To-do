function ItemList({ tasks }) {
    // Splitting tasks into completed and not completed
    const completedTasks = tasks.filter(task => task.completed);
    const notCompletedTasks = tasks.filter(task => !task.completed);

    return (
        <div className="task-container" style={{ display: 'flex', justifyContent: 'space-around' } }>
            <div>
                <h2>Completed Tasks</h2>
                <ul>
                    {completedTasks.map((task, index) => (
                        <li key={index}>{task.task}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Not Completed Tasks</h2>
                <ul>
                    {notCompletedTasks.map((task, index) => (
                        <li key={index}>{task.task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ItemList;