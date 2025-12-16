import { useState } from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"

export default function Vente() {
    const [ name, setName ] = useState("Yama")
    return (
        <>
            <Child1 name={name}/>
            <Child2 setName={setName}/>
        </>
    )
}