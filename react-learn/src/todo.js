import {useState} from "react"
const Todo  =() => {

const [list,Setlist] = useState(["apple","orange"])

    return(
<>
<h1>Welcome to todo list</h1>
<ul>
    {
        list.map(function(item)
        {
          return <li>{item} <button>Button</button></li>
        }
    
    )
    }
    <li>apple</li>
    
</ul>

</>
    )
}

export default Todo