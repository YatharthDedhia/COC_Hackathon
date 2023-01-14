class RequestGuestPass{
    constructor(StudentId
        ,Date
        ,GuestFirstName
        ,GuestLastName
        ,MealType){
            this.StudentId = StudentId;
            this.Date = Date;
            this.GuestFirstName = GuestFirstName;
            this.GuestLastName = GuestLastName;
            this.MealType = MealType;
        }
}

module.exports = RequestGuestPass;