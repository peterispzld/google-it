import React from 'react';

class AddSearchQuery extends React.Component {
    state = {
        text: ''
    }

    handleChange = event => {
        this.setState({ text: event.target.value });
    }

    handleSubmit = () => {
        if (this.state.text) {
            this.props.addSearchQuery(this.state.text.toUpperCase())
        }
    }

    render() {
        return (
            <div className="add-search-query-form m-5 row">
                <form
                    className="mx-auto"
                    onSubmit={this.handleSubmit}>
                    <input
                        className="form-control-lg"
                        placeholder="what's on your mind?"
                        type='text'
                        onChange={this.handleChange}
                        value={this.state.text} />
                    <button
                        className='btn btn-lg btn-deep-orange ml-3'
                        type='submit'
                    >add</button>
                </form>
            </div>
        )
    }
}

export default AddSearchQuery;
