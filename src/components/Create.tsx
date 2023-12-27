export function Created() {

    async function submit(formData: FormData) {

        'use server'

        const text = formData.get('todo')

        let getURL = `http://localhost:3000/api/todos/`

        fetch(getURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: text
            })
        })

    }

    return (

        <form className="my-10 flex flex-row items-center justify-between w-8/12 mx-auto" action={submit}>

            <input required type="text" className="w-8/12 flex h-10 rounded-md border border-input bg-blue-100 px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" name="todo" id="newTask" placeholder="Add New Task" />

            <button type="submit" className="w-3/12 inline-flex items-center justify-evenly rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-700 h-10 px-4 py-2">

                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0019 20C11.0019 20.5523 11.4497 21 12.0019 21C12.5542 21 13.0019 20.5523 13.0019 20L13.0019 12.9999L20.0019 12.9999C20.5542 12.9999 21.0019 12.5522 21.0019 11.9999C21.0019 11.4476 20.5542 10.9999 20.0019 10.9999H13.0019L13.0019 4C13.0019 3.44772 12.5542 3 12.0019 3C11.4497 3 11.0019 3.44772 11.0019 4V10.9999H4.00195C3.44967 10.9999 3.00195 11.4476 3.00195 11.9999C3.00195 12.5522 3.44967 12.9999 4.00195 12.9999H11.0019V20Z" fill="white" />
                </svg>

                Add New Task
            </button>
        </form>
    )
}