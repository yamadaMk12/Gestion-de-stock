export default function ChildInput2({ setText }) {
    return <input onChange={(e) => setText(e.target.value)}></input>
}