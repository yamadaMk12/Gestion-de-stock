import Child2 from "./Child2"

export default function Child1() {
    return <>
        <div>
            <h2>This is the first child comp</h2>
            <Child2 />
        </div>
    </>
}