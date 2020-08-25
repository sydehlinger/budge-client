import React from "react";
import Table from "./Table";
import axios from "axios";

export default class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            csvData: '',
            selectedFile: null
        };
    }

    callAPI() {
        fetch("http://localhost:9000/pdfParser")
            .then(res => res.json())
            .then(res => this.setState({ csvData: res }))
            .catch(err => err);
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    };

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:9000/upload", data)
            .then(() => {this.callAPI()})
    };

    render() {
        return (
            <div>
                <input type="file" name="file" onChange={this.onChangeHandler}/>
                <button type="button" onClick={this.onClickHandler}>Upload</button>
                {this.state.csvData && <Table data={this.state.csvData}/>}
            </div>
        )
    };

}