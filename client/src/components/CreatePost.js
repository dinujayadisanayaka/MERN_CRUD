import React, {Component} from 'react';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state={
            topic:"",
            description:"",
            postCategory:""
        }
    };

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal" Create new post>
            </h1>
        <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom: '15px'}}>
                <label style={{marginBottom: '5px'}} >Topics</label>
                    <input type="text"
                           className="form-control"
                           name="topic"
                           placeholder="Enter Topic"
                           value={this.state.topic}
                           onChange={this.handleInputChange}/>

            </div>

            <div className="form-group" style={{marginBottom: '15px'}}>
                <label style={{marginBottom: '5px'}} >Decription</label>
                <input type="text"
                       className=" form-control"
                       name="description"
                       placeholder="Enter Description"
                       value={this.state.description}
                       onChange={this.handleInputChange}/>

            </div>

            <div className="form-group" style={{marginBottom: '15px'}}>
                <label style={{marginBottom: '5px'}} >postCategory</label>
                <input type="text"
                       className=" form-control"
                       name="postCategory"
                       placeholder="Enter postCategory"
                       value={this.state.postCategory}
                       onChange={this.handleInputChange}/>

            </div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>&nbsp;Save
            </button>

        </form>
    </div>

            );
    }
}

export default CreatePost;