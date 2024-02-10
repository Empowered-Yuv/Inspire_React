import { createSlice, nanoid } from "@reduxjs/toolkit"
//nanoid create unique ids

const initialState = {
    todos: [
        // {
        //     id: nanoid(),
        //     text: "Hello"
        // }
    ]
}

//App reset krne mai reset ho jaa raha hai

// const initialState = JSON.parse(localStorage.getItem("todos"))

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

//reducers mai props aur funcs

//Syntax
//addTodo: (state, action) => {}
//payload object hai

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer