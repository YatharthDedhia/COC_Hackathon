import React  from "react";
import "./DatePicker.css";
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
class Month extends React.PureComponent {
    // const weekDaysMarkup = weekdays.map(weekday =>)
    render() {
        return (
            <React.Fragment>
                <div className="WeekdayContainer">{weekDaysMarkup}</div>
            </React.Fragment>
        )
    }
}
export default Month;