import { useRef, useState } from "react"
import ParentName from "./parentName"
import ParentOfChildes from "./ParentOfChildes"
import ChildType from "./ChildType"

export default function Test() {
    let [c, setC] = useState(0)
    let [text, setText] = useState("")
    const element = useRef()
    const focus = () => {
        console.log(element)
    }
    return <>
        <p>count: {c}</p>
        <button onClick={() => setC(c+1)}>Increase</button>
        <button onClick={() => setC(c-1)}>Decrease</button>
        <hr></hr>
        <p>Text: {text}</p>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <ChildType text={Number(text)} />
        <hr></hr>
        <ParentName />
        <hr></hr>
        <ParentOfChildes />
        <hr></hr>
        <input ref={element} />
        {console.log(element)}
        <button onClick={focus}>Click focus</button>
    </>
}