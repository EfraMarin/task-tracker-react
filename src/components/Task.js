const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <div className="flex justify-between">
                <h3>{task.text}</h3>

                <button onClick={() => onDelete(task.id)}>
                    <svg className="w-6 h-6" fill="none" stroke="#e6d5b8" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <p>{task.date}</p>
        </div>
    )
}

export default Task