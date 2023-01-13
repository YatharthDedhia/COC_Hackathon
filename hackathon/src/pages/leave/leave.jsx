import React,{useState} from 'react';
import {DatePicker}from 'antd';
import moment from 'moment';
import './css/leave.css'
const {RangePicker}=DatePicker;

function Leave(){
    const [dates,Setdates]=useState([]);
    console.log(dates);
    return(
    <div style={{margin:20}}>
        {/* <h1>Enter Leave Date</h1> */}

        <RangePicker
        onChange={(values)=>{
            Setdates(values.map(item=>{
                return moment(item).format('YYYY-DD-MM');
            }))
        }}
            />
    </div>
    );
};
export default Leave;