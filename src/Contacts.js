import React from 'react'


class Contact extends React.Component {

    onSubmit = () => {
        this.props.history.push("/Users");
    }
    
    render() {
        return (
            <>
        <h1>Contact</h1>
        <label> Name</label>
        <input type="text" placeholder="enter your name" />
        <label> E-mail</label>
        <input type="text" placeholder="enter your email" />
        <button onClick={this.onSubmit} > Submit </button>
        </>
        )
    }
}

export default Contact
