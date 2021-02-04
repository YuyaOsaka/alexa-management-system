import React, { Component } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://7gtgwyk1p9.execute-api.ap-northeast-1.amazonaws.com/default/getUserData';

class GetDynamoData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    async componentWillMount() {
        await this.getDataFromApi();
    }
    async getDataFromApi(){
        await axios.get(API_BASE_URL)
        .then((res) => {
            console.log(res)
            this.setState({
                data: res.data.Items
            });
        })
        .catch((error) => {
            console.log(error)
            this.setState({
                data: "err"
            }); 
        });
    }

    render() {
        return (
            <div>
                <p>DB: {JSON.stringify(this.state)}</p>
            </div>
          );
    }
}

export default GetDynamoData;
