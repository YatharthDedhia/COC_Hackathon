class HoldRequestLog{
    constructor(HoldRequestLogID
        ,StudentID
        ,StartDate
        ,EndDate
        ,StartMonthNo
        ,EndMonthNo){
            this.HoldRequestLogID = HoldRequestLogID;
            this.StudentID = StudentID;
            this.StartDate = StartDate;
            this.EndDate = EndDate;
            this.StartMonthNo = StartMonthNo;
            this.EndMonthNo = EndMonthNo
        }
}

module.exports = HoldRequestLog