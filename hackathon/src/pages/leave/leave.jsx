// import { Button } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { DatePicker } from 'antd';
import moment from 'moment';
import './css/leave.css'
// import { auto } from '@popperjs/core';
const { RangePicker } = DatePicker;



function Leave() {
    const [dates, Setdates] = useState([]);
    // const postData = (e) => {
    //     e.preventDefault();
    //     console.log(dates)
    //     const sendData = {
    //         "StudentID": 1,
    //         "StartDate": String(dates[0]),
    //         "EndDate": String(dates[1]),
    //         "StartMonthNo": dates[0].slice(5, 7),
    //         "EndMonthNo": dates[1].slice(5, 7)
    //     };

    //     console.log(sendData);

    //     axios.post('http://viveksem3apiv4.azurewebsites.net/api/holdlog', sendData).then(result => { console.log(result.data) });
    // }
    console.log(dates);
    return (
            <div style={{ margin: 20 }}>
                {/* <h1>Enter Leave Date</h1> */}
        
                <RangePicker
                    onChange={(values) => {
                        Setdates(values.map(item => {
                            return moment(item).format('YYYY-DD-MM');
                        }))
                    }}
                />
        </div>
    );
}
export default Leave;