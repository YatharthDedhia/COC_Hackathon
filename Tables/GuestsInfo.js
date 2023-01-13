class GuestsInfo{
    constructor(StudentId
        ,GuestFirstName
        ,GuestLastName
        ,Age
        ,MobileNo
        ,NoOfBreakfastsBought
        ,NoOfLunchesBought
        ,NoOfDinnersBought
        ,TotalNoOfMealsBought
        ,TotalSales){
            this.StudentId = StudentId;
            this.GuestFirstName = GuestFirstName;
            this.GuestLastName = GuestLastName;
            this.Age = Age;
            this.MobileNo = MobileNo;
            this.NoOfBreakfastsBought = NoOfBreakfastsBought;
            this.NoOfLunchesBought = NoOfLunchesBought;
            this.NoOfDinnersBought = NoOfDinnersBought,
            this.TotalNoOfMealsBought = TotalNoOfMealsBought;
            this.TotalSales = TotalSales;
        }
}

module.exports = GuestsInfo;