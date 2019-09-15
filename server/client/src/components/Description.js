import React from 'react'
import { translate } from '../apis'

class Description extends React.Component {
    state = { text: ""}

    componentDidMount = async () => {
        const text = await translate(this.props.text, this.props.language)
        this.setState({text})
    }

    render() {
        return <p>{this.state.text}</p>
    }
}

export default Description