import ChildInput1 from "./ChildInput1"
import ChildInput2 from "./ChildInput2"
import { useState } from "react"

export default function ParentOfChildes() {
    const [text, setText] = useState("")
    return <>
        <h1>This is Parent of Childes component</h1>
        <ChildInput1 text={text} />
        <ChildInput2 setText={setText} />
    </>
}