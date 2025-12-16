import { useState } from "react"
import ParentName from "./parentName"
import ParentOfChildes from "./ParentOfChildes"

export default function Test() {
    let [c, setC] = useState(0)
    let [text, setText] = useState("")
    return <>
        {console.log("Render Test component")}
        <p>count: {c}</p>
        <button onClick={() => setC(c+1)}>Increase</button>
        <button onClick={() => setC(c-1)}>Decrease</button>
        <hr></hr>
        <p>Text: {text}</p>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <hr></hr>
        <ParentName />
        <hr></hr>
        <ParentOfChildes />
    </>
}