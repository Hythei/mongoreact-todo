// This thing will focus on creating a new task


function Form(){
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
    };
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="task">
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="Add a task"
                />
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
            </button>
        </form>
    )
}

export default Form;