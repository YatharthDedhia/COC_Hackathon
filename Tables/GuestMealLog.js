class GuestMealLog{
    constructor(GuestFirstName
        ,GuestLastName
        ,StudentId
        ,Date
        ,Day
        ,MealType
        ,MealPrice){
            this.GuestFirstName = GuestFirstName;
            this.GuestLastName = GuestLastName;
            this.StudentId = StudentId;
            this.Date = Date;
            this.Day = Day;
            this.MealType = MealType;
            this.MealPrice = MealPrice;
        }
}

module.exports = GuestMealLog;