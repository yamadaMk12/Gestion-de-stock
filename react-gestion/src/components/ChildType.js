import PropTypes from "prop-types"

export default function ChildType({ text }) {
    return <p>Recieved the text: {text}</p>
}

ChildType.propTypes = {
    text: PropTypes.string
}