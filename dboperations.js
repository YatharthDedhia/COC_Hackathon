var config = require('./config');
const sql = require('mssql');
const { password } = require('./config');
const GuestMealLog = require('./Tables/GuestMealLog');
const RequestGuestPass = require('./Tables/RequestGuestPass');
const Overheads = require('./Tables/Overheads');

async function addToGuestMealLog(GuestMealLog){
    try{
        let pool = await sql.connect(config.sql);
        let insertMealLog = await pool.request()
            .input('GuestFirstName', sql.VarChar(8000), GuestMealLog.GuestFirstName)
            .input('GuestLastName', sql.VarChar(8000), GuestMealLog.GuestLastName)
            .input('StudentId', sql.Int, GuestMealLog.StudentId)
            .input('Date', sql.Date, GuestMealLog.Date)
            .input('Day', sql.VarChar(8000), GuestMealLog.Day)
            .input('MealType', sql.VarChar(8000), GuestMealLog.MealType)
            .input('MealPrice', sql.Money, GuestMealLog.MealPrice)
            .execute('AddToGuestMealLog')
        return insertMealLog.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function addToGuestMealInfo(GuestsInfo){
    try{
        let pool = await sql.connect(config.sql);
        let insertMealInfo = await pool.request()
            .input("StudentId", sql.Int, GuestsInfo.StudentId)
            .input('GuestFirstName', sql.VarChar(8000), GuestsInfo.GuestFirstName)
            .input('GuestLastName', sql.VarChar(8000), GuestsInfo.GuestLastName)
            .input("Age", sql.Int, GuestsInfo.Age)
            .input("MobileNo", sql.Numeric(10,0), GuestsInfo.MobileNo)
            .execute('AddToGuestsInfo')
        return insertMealInfo.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function addToIngredients(Ingredients){
    try{
        let pool = await sql.connect(config.sql);
        let insertIngredientsInfo = await pool.request()
            .input("Date", sql.Date, Ingredients.Date)
            .input("IngredientName", sql.VarChar(8000), Ingredients.IngredientName)
            .input("WeightOrAmount", sql.Float, Ingredients.WeightOrAmount)
            .input("WeightOrAmountUsed", sql.Float, Ingredients.WeightOrAmountUsed)
            .input("NoOfMeals", sql.Int, Ingredients.NoOfMeals)
            .input("Cost", sql.Money, Ingredients.Cost)
            .input("MonthNo", sql.Int, Ingredients.MonthNo)
            .execute('AddToIngredients')
        return insertIngredientsInfo.recordsets;

    }

    catch(error){
        console.log(error);
    }
}


async function addToMenu(Menu){
    try{
        let pool = await sql.connect(config.sql);
        let insertToMenu = await pool.request()
        .input("Date", sql.Date, Menu.Date)
        .input("MealType", sql.VarChar(8000), Menu.MealType)
        .input("ItemName", sql.VarChar(8000), Menu.ItemName) 
        .execute('AddToMenu')
        return insertMealInfo.recordsets;
        
    }
    
    catch(error){
        console.log(error);
    }
}

async function addToOverheads(Overheads){
    try{
        let pool = await sql.connect(config.sql);
        let insertToOverhead = await pool.request()
        .input("Date", sql.Date, Overheads.Date)
        .input("OverheadType", sql.VarChar(8000), Overheads.OverheadType)
        .input("Cost", sql.Money, Overheads.Cost)
        .input("NoOfMeals", sql.int, Overheads.NoOfMeals)
        .input("MonthNo", sql.int, Overheads.MonthNo)
        .execute('AddToOverheads')
        return insertToOverhead.recordsets;
        
    }
    
    catch(error){
        console.log(error);
    }
}

async function addToRequestGuestPass(RequestGuestPass){
    try{
        let pool = await sql.connect(config.sql);
        let insertToRequestGuestPass = await pool.request()
        .input("StudentId", sql.Int, RequestGuestPass.StudentId)
        .input('GuestFirstName', sql.VarChar(8000), RequestGuestPass.GuestFirstName)
        .input('GuestLastName', sql.VarChar(8000), RequestGuestPass.GuestLastName)
        .input("MealType", sql.VarChar(8000), RequestGuestPass.MealType) 
        .execute('AddToRequestGuestPass')
        return insertToRequestGuestPass.recordsets;
        
    }
    
    catch(error){
        console.log(error);
    }
}

async function addToStudentMealLog(StudentMealLog){
    try{
        let pool = await sql.connect(config.sql);
        let insertToStudentMealLog = await pool.request()
        .input("StudentId", sql.Int, StudentMealLog.StudentId)
        .input("Date", sql.Date, StudentMealLog.Date)
        .input("Day", sql.VarChar(8000), StudentMealLog.Day)
        .input("MealType", sql.VarChar(8000), StudentMealLog.MealType)
        .input("MealPrice", sql.Money, StudentMealLog.MealPrice) 
        .execute('AddToStudentMealLog')
        return insertToStudentMealLog.recordsets;
        
    }
    
    catch(error){
        console.log(error);
    }
}

async function addToStudentsInfo(StudentsInfo){ //DOUBT Remaining inputs
    try{
        let pool = await sql.connect(config.sql);
        let insertToStudentInfo = await pool.request()
        
        .input("Password", sql.VarChar(8000), StudentsInfo.Password)
        .input("StudentRegId", sql.Int, StudentsInfo.StudentRegId)
        .input("StudentFirstName", sql.VarChar(8000), StudentsInfo.StudentFirstName)
        .input("StudentLastName", sql.VarChar(8000), StudentsInfo.StudentLastName)
        .input("Age", sql.Int, StudentsInfo.Age)
        .input("Gender", sql.Bit, StudentsInfo.Gender)
        .input("EmailId", sql.VarChar(8000), StudentsInfo.EmailId)
        .input("MobileNo", sql.Numeric(10,0), StudentsInfo.MobileNo)
        .input("BlockNo", sql.Int, StudentsInfo.BlockNo)
        .input("RoomNo", sql.Int, StudentsInfo.RoomNo)
    //  .input("Balance", sql.Money, StudentsInfo.Balance)
        .input("Course", sql.VarChar(8000), StudentsInfo.Course)
        .input("Year", sql.Int, StudentsInfo.Year)
        .input("Branch", sql.VarChar(8000), StudentsInfo.Branch)
        .input("NumberOfGuestVisits", sql.Int, StudentsInfo.NumberOfGuestVisits)
        .input("CollegeIdPic", sql.VarBinary(max), StudentsInfo.CollegeIdPic)

        .execute('AddToStudentsInfo')
        return insertToStudentInfo.recordsets;
        
    }
    
    catch(error){
        console.log(error);
    }
}

async function addToWaste(Waste){
    try{
        let pool = await sql.connect(config.sql);
        let insertToWaste = await pool.request()
        .input("Date", sql.Date, Waste.Date)
        .input("NoOfMeals", sql.Int, Waste.NoOfMeals)
        .input("AmountOfWaste", sql.Float, Waste.AmountOfWaste)
        .input("MonthNo", sql.Int, Waste.MonthNo) 
        .execute('AddToWaste')
        return insertToWaste.recordsets;
        
    }
    
    catch(error){
        console.log(error);
    }
}

async function displayStudentsInfo(){
    try{
        let pool = await sql.connect(config.sql);
        let studentsInfo = await pool.request()
            .execute("DisplayActiveStudentsInfo");
        return studentsInfo.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}



async function displayAllBreakfasts(){
    try{
        let pool = await sql.connect(config.sql);
        let allbreakfasts = await pool.request()
            .execute("DisplayAllBreakfasts");
        return allbreakfasts.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayAllDinners(){
    try{
        let pool = await sql.connect(config.sql);
        let alldinners = await pool.request()
            .execute("DisplayAllDinners");
        return alldinners.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayAllLunch(){
    try{
        let pool = await sql.connect(config.sql);
        let allLunches = await pool.request()
            .execute("DisplayAllLunches");
        return allLunches.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayAllMeals(){
    try{
        let pool = await sql.connect(config.sql);
        let allMeals = await pool.request()
            .execute("DisplayAllMeals");
        return allMeals.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayAllMenus(){
    try{
        let pool = await sql.connect(config.sql);
        let allMenus = await pool.request()
            .execute("DisplayAllMenus");
        return allMenus.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayAllRequestGuestBooking(RequestGuestPass){
    try{
        let pool = await sql.connect(config.sql);
        let guestbookings = await pool.request()
            .input("Date", sql.Date, RequestGuestPass.Date)
            .execute("DisplayAllRequestGuestBooking");
        return guestbookings.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayBalanceOfStudent(StudentsInfo){
    try{
        let pool = await sql.connect(config.sql);
        let studentbalance = await pool.request()
            .input("StudentId", sql.Int, StudentsInfo.StudentId)
            .execute("DisplayBalanceOfSingleStudent");
        return studentbalance.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayBalanceOfAllStudents(){
    try{
        let pool = await sql.connect(config.sql);
        let studentsbalance = await pool.request()
            .execute("DisplayBalanceOfStudents");
        return studentsbalance.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayDeactivatedStudents(){
    try{
        let pool = await sql.connect(config.sql);
        let deactivatedStudents = await pool.request()
            .execute("DisplayDeactiveStudentsInfo");
        return deactivatedStudents.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayGuestsInfo(){
    try{
        let pool = await sql.connect(config.sql);
        let guests = await pool.request()
            .execute("DisplayGuestsInfo");
        return guests.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayGuestInfo(GuestsInfo){
    try{
        let pool = await sql.connect(config.sql);
        let guestinfo = await pool.request()
            .input("GuestFirstName", sql.VarChar(8000), GuestsInfo.GuestFirstName)
            .input("GuestLastName", sql.VarChar(8000), GuestsInfo.GuestLastName)
            .execute("DisplayGuestsInfoGUEST");
        return guestinfo.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayStudentsGuest(GuestsInfo){
    try{
        let pool = await sql.connect(config.sql);
        let studentsguest = await pool.request()
            .input("StudentId", sql.Int, GuestsInfo.StudentId)
            .execute("DisplayGuestsInfoSTUDENT");
        return studentsguest.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayIngredientName(Ingredients){
    try{
        let pool = await sql.connect(config.sql);
        let ingredientsname = await pool.request()
            .input("IngredientName", sql.Int, Ingredients.IngredientName)
            .execute("DisplayIngredientName");
        return ingredientsname.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayIngredientDate(Ingredients){
    try{
        let pool = await sql.connect(config.sql);
        let ingredientsdate = await pool.request()
            .input("Date", sql.Date, Ingredients.Date)
            .execute("DisplayIngredientsDate");
        return ingredientsdate.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayIngredientMonth(Ingredients){
    try{
        let pool = await sql.connect(config.sql);
        let ingredientsmonth = await pool.request()
            .input("MonthNo", sql.Int, Ingredients.MonthNo)
            .execute("DisplayIngredientsDate");
        return ingredientsmonth.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayGuestMealLog(){
    try{
        let pool = await sql.connect(config.sql);
        let guestsMealLog = await pool.request()
            .execute("DisplayMealLogOfAllGuests");
        return guestsMealLog.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function displayStudentsMealLog(){
    try{
        let pool = await sql.connect(config.sql);
        let studentsMealLog = await pool.request()
            .execute("DisplayMealLogOfAllMessStudents");
        return studentsMealLog.recordsets;
    }
    catch(error){
        console.log(error);
    } 
}

async function displayMealLogDate(GuestMealLog){  
    try{
        let pool = await sql.connect(config.sql);
        let mealLogDate = await pool.request()
            .input("Date", sql.Date, GuestMealLog.Date)
            .execute("DisplayMealLogOfDate");
        return mealLogDate.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

// async function displayMealLogMealPrice(GuestMealLog){ //NOT NEEDED since price is already fixed
//     try{
//         let pool = await sql.connect(config.sql);
//         let mealLogMealprice = await pool.request()
//             .input("MealPrice", sql.Money, GuestMealLog.MealPrice)
//             .execute("DisplayMealLogOfMealPrice");
//         return mealLogMealprice.recordsets;
//     }
//     catch(error){
//         console.log(error);
//     }    
// }

async function displayMealLogOfMealType(GuestMealLog){ 
    try{
        let pool = await sql.connect(config.sql);
        let mealLogMealType = await pool.request()
            .input("MealType", sql.VarChar(8000), GuestMealLog.MealType)
            .execute("DisplayMealLogOfMealType");
        return mealLogMealType.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayMealLogSingleGuest(GuestMealLog){  
    try{
        let pool = await sql.connect(config.sql);
        let mealLogDate = await pool.request()
            .input("GuestFirstName", sql.VarChar(8000), GuestMealLog.GuestFirstName)
            .input("GuestLastName", sql.VarChar(8000), GuestMealLog.GuestLastName)
            .execute("DisplayMealLogOfSingleGuest");
        return mealLogDate.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayMealLogSingleMessStudent(StudentMealLog){  
    try{
        let pool = await sql.connect(config.sql);
        let mealLogstudent = await pool.request()
            .input("StudentId", sql.Int, StudentMealLog.StudentId)
            .execute("DisplayMealLogOfSingleMessStudent");
        return mealLogstudent.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayMenuDate(Menu){  
    try{
        let pool = await sql.connect(config.sql);
        let menuDate = await pool.request()
            .input("Date", sql.Date, Menu.Date)
            .execute("DisplayMealLogOfSingleMessStudent");
        return menuDate.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayMenuMeal(Menu){  
    try{
        let pool = await sql.connect(config.sql);
        let menuMeal = await pool.request()
            .input("Date", sql.Date, Menu.Date)
            .input("MealType", sql.VarChar(8000), Menu.MealType)
            .execute("DisplayMenuMeal");
        return menuMeal.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayOverheadDate(Overheads){  
    try{
        let pool = await sql.connect(config.sql);
        let overheadsDate = await pool.request()
            .input("Date", sql.Date, Overheads.Date)
            .execute("DisplayOverheadDate");
        return overheadsDate.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayOverheadMonth(Overheads){  
    try{
        let pool = await sql.connect(config.sql);
        let overheadsMonth = await pool.request()
            .input("MonthNo", sql.Int, Overheads.MonthNo)
            .execute("DisplayOverheadMonthNo");
        return overheadsMonth.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayOverheadType(Overheads){  
    try{
        let pool = await sql.connect(config.sql);
        let overheadsType = await pool.request()
            .input("OverheadType", sql.VarChar(8000), Overheads.OverheadType)
            .execute("DisplayOverheadType");
        return overheadsType.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displaySingleStudent(StudentInfo){  
    try{
        let pool = await sql.connect(config.sql);
        let studentinfo = await pool.request()
            .input("StudentId", sql.Int, StudentInfo.StudentId)
            .execute("DisplaySingleStudent");
        return studentinfo.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayStudentsInfo(){  
    try{
        let pool = await sql.connect(config.sql);
        let studentsinfo = await pool.request()
            .execute("DisplayStudentsInfo");
        return studentsinfo.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayTotalIngredients(){  
    try{
        let pool = await sql.connect(config.sql);
        let ingredientsinfo = await pool.request()
            .execute("DisplayTotalIngredients");
        return ingredientsinfo.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayTotalOverheads(){  
    try{
        let pool = await sql.connect(config.sql);
        let overheadsinfo = await pool.request()
            .execute("DisplayTotalOverheads");
        return overheadsinfo.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayTotalWaste(){  
    try{
        let pool = await sql.connect(config.sql);
        let wasteinfo = await pool.request()
            .execute("DisplayTotalWaste");
        return wasteinfo.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayWasteDate(Waste){  
    try{
        let pool = await sql.connect(config.sql);
        let wastedateinfo = await pool.request()
            .input("Date", sql.Date, Waste.Date)
            .execute("DisplayWasteDate");
        return wastedateinfo.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function displayWasteMonth(Waste){  
    try{
        let pool = await sql.connect(config.sql);
        let wastemonthinfo = await pool.request()
            .input("MonthNo", sql.Int, Waste.MonthNo)
            .execute("DisplayWasteMonthNo");
        return wastemonthinfo.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function login(StudentsInfo){  
    try{
        let pool = await sql.connect(config.sql);
        let logininfo = await pool.request()
            .input("StudentId", sql.Int, StudentsInfo.StudentId)
            .input("Password", sql.VarChar(8000), StudentsInfo.Password)
            .execute("LoginStudent");
        return logininfo.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function updateSingleMealOfStudent(StudentsInfo){  
    try{
        let pool = await sql.connect(config.sql);
        let studentmealsinfo = await pool.request()

            .input("StudentId", sql.Int, StudentsInfo.StudentId)
            .query("EXEC UpdateMealOfSingleStudent @StudentId");
        return studentmealsinfo.recordsets;
    }
    catch(error){
        console.log(error);
    }    
}

async function addToMessIdPic(StudentsInfo){
    try{
        let pool = await sql.connect(config.sql);
        let insertMessId = await pool.request()
            .input("StudentId", sql.Int, StudentsInfo.StudentId)
            .input("Password", sql.VarChar(8000), StudentsInfo.Password)
            .input("MessIdPic", sql.VarBinary(max), StudentsInfo.MessIdPic)
            .execute('AddToGuestMealLog')
        return insertMessId.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function deductBalance(DeductBalanceLog){
    try{
        let pool = await sql.connect(config.sql);
        let deductdate = await pool.request()
            .input("Date", sql.Date, DeductBalanceLog.Date)
            .execute('DeductBalance')
        return deductdate.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function addBalance(StudentsInfo){
    try{
        let pool = await sql.connect(config.sql);
        let addbalance = await pool.request()
            .input("StudentId", sql.Int, StudentsInfo.StudentId)
            .execute('AddBalance')
        return addbalance.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function calculateMealCountPerDate(StudentMealLog){
    try{
        let pool = await sql.connect(config.sql);
        let mealcount = await pool.request()
            .input("Date", sql.Date, StudentMealLog.Date)
            .execute('CalculateMealCountPerDate')
        return mealcount.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function changeBalance(){
    try{
        let pool = await sql.connect(config.sql);
        let balancechange = await pool.request()
            .execute('ChangeBalance')
        return balancechange.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function displayHoldLogPerMonth(HoldRequestLog){
    try{
        let pool = await sql.connect(config.sql);
        let holdlogpermonth = await pool.request()
            .input("StartMonthNo", sql.Int, HoldRequestLog.StartMonthNo)
            .input("EndMonthNo", sql.Int, HoldRequestLog.EndMonthNo)
            .execute('DisplayHoldLogPerMonth')
        return holdlogpermonth.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function displayNotInHoldLogOnList(){
    try{
        let pool = await sql.connect(config.sql);
        let notinholdlog = await pool.request()
            .execute('DisplayNotInHoldOnList')
        return notinholdlog.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function insertHoldLog(HoldRequestLog){
    try{
        let pool = await sql.connect(config.sql);
        let insertinholdlog = await pool.request()
            .input("StudentID", sql.Int, HoldRequestLog.StudentID)
            .input("StartDate", sql.Date, HoldRequestLog.StartDate)
            .input("EndDate", sql.Date, HoldRequestLog.EndDate)
            .input("StartMonthNo", sql.Int, HoldRequestLog.StartMonthNo)
            .input("EndMonthNo", sql.Int, HoldRequestLog.EndMonthNo)
            .execute('InsertHoldLog')
        return insertinholdlog.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function monthlyAvgCostAllOverheadType(Overheads){
    try{
        let pool = await sql.connect(config.sql);
        let insertinholdlog = await pool.request()
            .input("MonthNo", sql.Int, Overheads.MonthNo)
            .execute('MonthlyAvgCostAllOverheadType')
        return insertinholdlog.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function monthlyAvgCostPerMealAllIngredient(Ingredients){
    try{
        let pool = await sql.connect(config.sql);
        let monthlyavg = await pool.request()
            .input("MonthNo", sql.Int, Ingredients.MonthNo)
            .execute('MonthlyAvgCostPerMealAllIngredient')
        return monthlyavg.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function monthlyAvgCostPerMealAllOverheadType(Overheads){
    try{
        let pool = await sql.connect(config.sql);
        let monthlyavg = await pool.request()
            .input("MonthNo", sql.Int, Overheads.MonthNo)
            .execute('MonthlyAvgCostPerMealAllIngredient')
        return monthlyavg.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function monthlyAvgCostPerMealPerOverheadType(Overheads){
    try{
        let pool = await sql.connect(config.sql);
        let monthlyavg = await pool.request()
            .input("MonthNo", sql.Int, Overheads.MonthNo)
            .execute('MonthlyAvgCostPerMealPerOverheadType')
        return monthlyavg.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function monthlyAvgCostPerOverheadType(Overheads){
    try{
        let pool = await sql.connect(config.sql);
        let monthlyavg = await pool.request()
            .input("MonthNo", sql.Int, Overheads.MonthNo)
            .execute('MonthlyAvgCostPerOverheadType')
        return monthlyavg.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function monthlyAvgWastePerMeal(Waste){
    try{
        let pool = await sql.connect(config.sql);
        let monthlyavg = await pool.request()
            .input("MonthNo", sql.Int, Waste.MonthNo)
            .execute('MonthlyAvgWastePerMeal')
        return monthlyavg.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function monthlyAvgWeightPerIngredient(Ingredients){
    try{
        let pool = await sql.connect(config.sql);
        let monthlyavg = await pool.request()
            .input("MonthNo", sql.Int, Ingredients.MonthNo)
            .execute('MonthlyAvgWeightPerIngredient')
        return monthlyavg.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function totalMonthlyAmountUsedIngredient(Ingredients){
    try{
        let pool = await sql.connect(config.sql);
        let totalmonthly = await pool.request()
            .input("MonthNo", sql.Int, Ingredients.MonthNo)
            .input("IngredientName", sql.VarChar(8000), Ingredients.IngredientName)
            .execute('TotalMonthlyAmountUsedIngredient')
        return totalmonthly.recordsets;

    }

    catch(error){
        console.log(error);
    }
}


async function totalMonthlyCostAllIngredients(Ingredients){
    try{
        let pool = await sql.connect(config.sql);
        let totalmonthly = await pool.request()
            .input("MonthNo", sql.Int, Ingredients.MonthNo)
            .execute('TotalMonthlyCostAllIngredients')
        return totalmonthly.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function totalMonthlyCostAllOverheads(Overheads){
    try{
        let pool = await sql.connect(config.sql);
        let totalmonthly = await pool.request()
            .input("MonthNo", sql.Int, Overheads.MonthNo)
            .execute('TotalMonthlyCostAllOverheads')
        return totalmonthly.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function totalMonthlyCostIngredient(Ingredients){
    try{
        let pool = await sql.connect(config.sql);
        let totalmonthly = await pool.request()
            .input("MonthNo", sql.Int, Ingredients.MonthNo)
            .input("IngredientName", sql.VarChar(8000), Ingredients.IngredientName)
            .execute('TotalMonthlyCostIngredient')
        return totalmonthly.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

async function totalMonthlyCostOverheads(Overheads){
    try{
        let pool = await sql.connect(config.sql);
        let totalmonthly = await pool.request()
            .input("MonthNo", sql.Int, Overheads.MonthNo)
            .input("OverheadType", sql.VarChar(8000), Overheads.OverheadType)
            .execute('TotalMonthlyCostOverheads')
        return totalmonthly.recordsets;

    }

    catch(error){
        console.log(error);
    }
}


async function totalMonthlyWaste(Waste){
    try{
        let pool = await sql.connect(config.sql);
        let totalmonthly = await pool.request()
            .input("MonthNo", sql.Int, Waste.MonthNo)
            .execute('TotalMonthlyWaste')
        return totalmonthly.recordsets;

    }

    catch(error){
        console.log(error);
    }
}

module.exports = {
    addToGuestMealLog : addToGuestMealLog,
    addToGuestMealInfo : addToGuestMealInfo,
    addToIngredients : addToIngredients,
    addToMenu : addToMenu,
    addToOverheads : addToOverheads,
    addToRequestGuestPass : addToRequestGuestPass,
    addToStudentMealLog : addToStudentMealLog,
    addToStudentsInfo : addToStudentsInfo,
    addToWaste : addToWaste,
    displayStudentsInfo : displayStudentsInfo,
    displayAllBreakfasts : displayAllBreakfasts,
    displayAllDinners : displayAllDinners,
    displayAllLunch : displayAllLunch,
    displayAllMeals : displayAllMeals,
    displayAllMenus : displayAllMenus,
    displayAllRequestGuestBooking : displayAllRequestGuestBooking,
    displayBalanceOfStudent : displayBalanceOfStudent,
    displayBalanceOfAllStudents : displayBalanceOfAllStudents,
    displayDeactivatedStudents : displayDeactivatedStudents,
    displayGuestsInfo : displayGuestsInfo,
    displayGuestInfo : displayGuestInfo,
    displayStudentsGuest : displayStudentsGuest,
    displayIngredientName : displayIngredientName,
    displayIngredientDate : displayIngredientDate,
    displayIngredientMonth : displayIngredientMonth,
    displayGuestMealLog : displayGuestMealLog,
    displayStudentsMealLog : displayStudentsMealLog,
    displayMealLogDate : displayMealLogDate,
    displayMealLogOfMealType : displayMealLogOfMealType,
    displayMealLogSingleGuest : displayMealLogSingleGuest,
    displayMealLogSingleMessStudent : displayMealLogSingleMessStudent,
    displayMenuDate : displayMenuDate,
    displayMenuMeal : displayMenuMeal,
    displayOverheadDate : displayOverheadDate,
    displayOverheadMonth : displayOverheadMonth,
    displayOverheadType : displayOverheadType,
    displaySingleStudent : displaySingleStudent,
    displayStudentsInfo : displayStudentsInfo,
    displayTotalIngredients : displayTotalIngredients,
    displayTotalOverheads : displayTotalOverheads,
    displayTotalWaste : displayTotalWaste,
    displayWasteDate : displayWasteDate,
    displayWasteMonth : displayWasteMonth,
    login : login,
    updateSingleMealOfStudent : updateSingleMealOfStudent,
    addToMessIdPic : addToMessIdPic,
    deductBalance : deductBalance,
    addBalance : addBalance,
    calculateMealCountPerDate : calculateMealCountPerDate,
    changeBalance : changeBalance,
    displayHoldLogPerMonth : displayHoldLogPerMonth,
    displayNotInHoldLogOnList : displayNotInHoldLogOnList,
    insertHoldLog : insertHoldLog,
    monthlyAvgCostAllOverheadType : monthlyAvgCostAllOverheadType,
    monthlyAvgCostPerMealAllIngredient : monthlyAvgCostPerMealAllIngredient,
    monthlyAvgCostPerMealAllOverheadType : monthlyAvgCostPerMealAllOverheadType,
    monthlyAvgCostPerMealPerOverheadType : monthlyAvgCostPerMealPerOverheadType,
    monthlyAvgCostPerOverheadType : monthlyAvgCostPerOverheadType,
    monthlyAvgWastePerMeal : monthlyAvgWastePerMeal,
    monthlyAvgWeightPerIngredient : monthlyAvgWeightPerIngredient,
    totalMonthlyAmountUsedIngredient : totalMonthlyAmountUsedIngredient,
    totalMonthlyCostAllIngredients : totalMonthlyCostAllIngredients,
    totalMonthlyCostAllOverheads : totalMonthlyCostAllOverheads,
    totalMonthlyCostIngredient : totalMonthlyCostIngredient,
    totalMonthlyCostOverheads : totalMonthlyCostOverheads,
    totalMonthlyWaste : totalMonthlyWaste

}