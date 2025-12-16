import { useContext } from "react"
import { NameContext } from "../context/nameProvider"

export default function Child2() {
    const name = useContext(NameContext)
    return <h3>This is the child of Child1 comp, welcome {name}</h3>
}