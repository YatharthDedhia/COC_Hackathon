class Ingredients{
    constructor(IngredientName
        ,WeightOrAmount
        ,WeightOrAmountUsed
        ,WeightOrAmountLeft
        ,Cost
        ,CostPerKg
        ,Date
        ,NoOfMeals
        ,CostPerMeal
        ,MonthNo){
            this.IngredientName = IngredientName;
            this.WeightOrAmount = WeightOrAmount;
            this.WeightOrAmountUsed = WeightOrAmountUsed;
            this.WeightOrAmountLeft = WeightOrAmountLeft;
            this.Cost = Cost;
            this.CostPerKg = CostPerKg;
            this.Date = Date;
            this.NoOfMeals = NoOfMeals;
            this.CostPerMeal = CostPerMeal;
            this.MonthNo= MonthNo;
        }
}

module.exports = Ingredients;
