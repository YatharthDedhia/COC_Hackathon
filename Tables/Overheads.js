class Overheads{
    constructor(Date
        ,OverheadType
        ,Cost
        ,NoOfMeals
        ,CostPerMeal
        ,MonthNo){
            this.Date = Date;
            this.OverheadType= OverheadType;
            this.Cost = Cost;
            this.NoOfMeals = NoOfMeals; 
            this.CostPerMeal = CostPerMeal;
            this.MonthNo = MonthNo;
        }
}

module.exports = Overheads;