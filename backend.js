const express = require("express")
//const cors  = require("cors")
const app = express();
//app.use(cors())

let todo =
    [
        { "id": 1, "title": "Study DSA", "description": "I have to study DSA for 5 hours" },
        { "id": 2, "title": "Practice Algorithms", "description": "Solve 3 algorithm problems" },
        { "id": 3, "title": "Review Sorting Techniques", "description": "Revisit quicksort and mergesort" },
        { "id": 4, "title": "Data Structures Revision", "description": "Revise linked lists and trees" },
        { "id": 5, "title": "Mock Interview", "description": "Practice mock interview questions" },
        { "id": 6, "title": "Study Dynamic Programming", "description": "Focus on understanding dynamic programming concepts" },
        { "id": 7, "title": "Practice Graph Problems", "description": "Solve 2 graph-based problems" },
        { "id": 8, "title": "Understand Complexity", "description": "Review time and space complexity analysis" },
        { "id": 9, "title": "Explore Hash Tables", "description": "Study the implementation and usage of hash tables" },
        { "id": 10, "title": "Leetcode Practice", "description": "Complete 5 Leetcode problems" }
    ]
app.get("/todos",(req,res)=>{
    let num = Math.round(Math.random()*10);
    let todos = []
    for(let i = 0 ; i <num ; i++)
    {
        todos.push(todo[i])
    }
    res.json({
        todos
    })
})

app.get("/todoId",(req,res)=>{
    const id = req.query.id
    const new_todo = todo.filter((inside_todo)=>{
       return inside_todo.id == id
    })
    // console.log(new_todo)
    // console.log(id)
    res.json({
        todos : new_todo[0]
    })
})

app.listen(3000,()=>{
    console.log("Running........")
})
