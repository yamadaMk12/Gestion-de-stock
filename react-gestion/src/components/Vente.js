import Child1 from "./Child1"
import { NameContext } from "../context/nameProvider"

export default function Vente() {
    const name = "Yama"
    return (
        <>
            <NameContext.Provider value={name}>
                <h1>This is Parent who held the var name</h1>
                <Child1/>
            </NameContext.Provider>
        </>
    )
}