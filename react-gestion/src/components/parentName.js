import ChildName from "./ChildName"

export default function ParentName() {
    const name = "Yamada"
    return <ChildName name={name} />
}