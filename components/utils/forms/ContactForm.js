import React from 'react';

class ContactForm extends React.Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        submitted: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            submitted: true
        })
    }

    render() {

        const { submitted } = this.state
        
        return (
            <React.Fragment>
                <section
                    className=""
                >
                    <section
                        className="bg-black rounded-xl w-full"
                    >
                        <h2 className="text-white text-5xl pt-5 pl-10">{submitted ? "Thanks for submitting!" : "say hi!"}</h2>
                        <form
                            className="pt-5 pb-10 px-10"
                            onSubmit={this.submitHandler}
                        >
                            <div>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name*"
                                    required
                                    value={this.state.name}
                                    className="w-full py-2 px-4 rounded-3xl focus:outline-none mt-1"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <br />
                            <div>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email*"
                                    required
                                    value={this.state.email}
                                    className="w-full py-2 px-4 rounded-3xl focus:outline-none mt-1"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <br/>
                            <div>
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="Subject*"
                                    required
                                    value={this.state.subject}
                                    className="w-full py-2 px-4 rounded-3xl focus:outline-none mt-1"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <br/>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    required
                                    value={this.state.message}
                                    className="w-full py-2 px-4 rounded-2xl focus:outline-none mt-1"
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <br />
                            <input
                                type="submit"
                                className="bg-altYellow text-black text-lg py-1 px-2 rounded-xl cursor-pointer"
                            />
                        </form>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default ContactForm