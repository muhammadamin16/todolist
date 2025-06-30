import {createSlice} from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos:[
        {
            id: 1,
            title: "lorem ipsum 1"
        },
          {
            id: 2,
            title: "lorem ipsum 2"
        },
          {
            id: 3,
            title: "lorem ipsum 3"
        },
    ]
    },
    reducers: {
        addTodo(state,action){

        },
        removeTodo(){
             
        }
    }
})