import React from 'react';

function InputSubmit() {
    return (
        <div>
            <label>&nbsp;</label>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </div>
    )
}

// add mandatory validation and autocomplete
function InputText(props) {
    return (
        <div>
            <label for={props.name}>{props.labelName}</label>
            <div>
                <input type="text" onChange={props.onchange} id={props.name} value={props.value}/>
            </div>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {subjectValue: '', bodyValue: '', subject: 'subject', body: 'body'};

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // dublicate code with id
    handleChange1(event) {
        var newState = Object.assign({}, this.state, {subjectValue: event.target.value});
        this.setState(newState);
    }
    handleChange2(event) {this.setState({bodyValue: event.target.value});}

    handleSubmit(event) {
        alert('A name, email was submitted: '  + this.state.subjectValue + ' ' +
            this.state.body +  ' ' + this.state.subject + ' '  + this.state.bodyValue);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Письмо посетителя сайта.</h2>
                <InputText labelName="Subject:" onchange={this.handleChange1} name={this.state.subject} value={this.state.subjectValue}/>
                <InputText labelName="Body:" onchange={this.handleChange2} name={this.state.body} value={this.state.bodyValue}/>
                <h2>Координаты для связи.</h2>
                {/*<InputText labelName="City:" onchange={this.handleChange2} name="city" value={this.state.subjectBody}/>*/}
                {/*<InputText labelName="Phone:" onchange={this.handleChange2} name="phone" value={this.state.subjectBody}/>*/}
                {/*<InputText labelName="Email:" onchange={this.handleChange2} name="email" value={this.state.subjectBody}/>*/}
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default App;
