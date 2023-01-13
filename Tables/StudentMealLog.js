class StudentMealLog{
    constructor(StudentId
        ,Date
        ,Day
        ,MealType
        ,MealPrice){
            this.StudentId = StudentId;
            this.Date = Date;
            this.Day = Day;
            this.MealType = MealType;
            this.MealPrice = MealPrice;
        }
}

module.exports = StudentMealLog;