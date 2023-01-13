import React,{Component} from 'react';
import DatePicker from './components/DatePicker/DatePicker'
import './leave.css';

class Leave extends Component {
    render() {
        return (
            <div className="Leave">
            <div className="MainContent">
                <DatePicker />
            </div>
            </div>
        );
    }
}

export default Leave;
