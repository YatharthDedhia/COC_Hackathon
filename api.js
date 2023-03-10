const Db = require('./dboperations');
const config = require('./config');

var express = require('express');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

var cors = require('cors');
const { request, response } = require('express');
var app = express();
var router = express.Router();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.route('/guestmeal').post((request,response)=>
{
    let GuestMealLog = {... request.body};
    Db.addToGuestMealLog(GuestMealLog).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/guestinfo').post((request,response)=>
{
    let GuestMealInfo = {... request.body};
    Db.addToGuestMealInfo(GuestMealInfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/ingredients').post((request,response)=>
{
    let ingredientsInfo = {... request.body};
    Db.addToIngredients(ingredientsInfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/menu').post((request,response)=>
{
    let menuinfo = {... request.body};
    Db.addToMenu(menuinfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/overhead').post((request,response)=>
{
    let overheadinfo = {... request.body};
    Db.addToOverheads(overheadinfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/guestpass').post((request,response)=>
{
    let guestpassinfo = {... request.body};
    Db.addToRequestGuestPass(guestpassinfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/studentmeal').post((request,response)=>
{
    let studentMealLog = {... request.body};
    Db.addToStudentMealLog(studentMealLog).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/studentinfo').post((request,response)=>
{
    let StudentInfo = {... request.body};
    Db.addToStudentsInfo(StudentInfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/waste').post((request,response)=>
{
    let wasteinfo = {... request.body};
    Db.addToWaste(wasteinfo).then(result=>
        {
            response.status(201).json(result);
        })
}
)

router.route('/studentsinfo').get((request,response)=>{
    
    Db.displayStudentsInfo().then(result =>{
        response.json(result[0]);
    })
})

router.route('/breakfast').get((request,response)=>{
    
    Db.displayAllBreakfasts().then(result =>{
        response.json(result[0]);
    })
})

router.route('/dinner').get((request,response)=>{
    
    Db.displayAllDinners().then(result =>{
        response.json(result[0]);
    })
})

router.route('/lunch').get((request,response)=>{
    
    Db.displayAllLunch().then(result =>{
        response.json(result[0]);
    })
})

router.route('/meal').get((request,response)=>{
    
    Db.displayAllMeals().then(result =>{
        response.json(result[0]);
    })
})

router.route('/menu').get((request,response)=>{
    
    Db.displayAllMenus().then(result =>{
        response.json(result[0]);
    })
})

router.route('/guestbooking').post((request,response)=>{
    
    let date = {... request.body}
    Db.displayAllRequestGuestBooking(date).then(result =>{
        response.json(result[0]);
    })
})

router.route('/balance').post((request,response)=>{
    
    let studentid = {... request.body};
    Db.displayBalanceOfStudent(studentid).then(result =>{
        response.json(result[0]);
    })
})

router.route('/allbalance').get((request,response)=>{
    
    Db.displayBalanceOfAllStudents().then(result =>{
        response.json(result[0]);
    })
})

router.route('/deactivated').get((request,response)=>{
    
    Db.displayDeactivatedStudents().then(result =>{
        response.json(result[0]);
    })
})

router.route('/guests').get((request,response)=>{
    

    Db.displayGuestsInfo().then(result =>{
        response.json(result[0]);
    })
})

router.route('/guest/info').post((request,response)=>{
    
    let name = {... request.body}
    Db.displayGuestInfo(name).then(result =>{
        response.json(result[0]);
    })
})

router.route('/student/guest').post((request,response)=>{
    
    let studentid = {... request.body}
    Db.displayStudentsGuest(studentid).then(result =>{
        response.json(result[0]);
    })
})

router.route('/ingredient/name').post((request,response)=>{
    
    let ingredient = {... request.body}
    Db.displayIngredientName(ingredient).then(result =>{
        response.json(result[0]);
    })
})

router.route('/ingredient/date').post((request,response)=>{
    
    let date = {... request.body}
    Db.displayIngredientDate(date).then(result =>{
        response.json(result[0]);
    })
})

router.route('/ingredient/month').post((request,response)=>{
    
    let month = {... request.body}
    Db.displayIngredientMonth(month).then(result =>{
        response.json(result[0]);
    })
})

router.route('/meal/guest').get((request,response)=>{
    
    Db.displayGuestMealLog().then(result =>{
        response.json(result[0]);
    })
})

router.route('/meal/student').get((request,response)=>{
    
    Db.displayStudentsMealLog().then(result =>{
        response.json(result[0]);
    })
})

router.route('/meallog/date').post((request,response)=>{

    let date = {... request.body}
    Db.displayMealLogDate(date).then(result =>{
        response.json(result);
    })
})

// router.route('/meallog/mealprice').post((request,response)=>{

//     let mealprice = {... request.body}
//     Db.displayMealLogDate(mealprice).then(result =>{
//         response.json(result);
//     })
// })

router.route('/meallog/mealtype').post((request,response)=>{

    let mealtype = {... request.body}
    Db.displayMealLogOfMealType(mealtype).then(result =>{
        response.json(result);
    })
})

router.route('/meallog/guest').post((request,response)=>{

    let guest = {... request.body}
    Db.displayMealLogSingleGuest(guest).then(result =>{
        response.json(result);
    })
})

router.route('/meallog/student').post((request,response)=>{

    let student = {... request.body}
    Db.displayMealLogSingleMessStudent(student).then(result =>{
        response.json(result);
    })
})

router.route('/menu/date').post((request,response)=>{

    let date = {... request.body}
    Db.displayMenuDate(date).then(result =>{
        response.json(result);
    })
})

router.route('/menu/meal').post((request,response)=>{

    let meal = {... request.body}
    Db.displayMenuMeal(meal).then(result =>{
        response.json(result);
    })
})

router.route('/overhead/date').post((request,response)=>{

    let date = {... request.body}
    Db.displayOverheadDate(date).then(result =>{
        response.json(result);
    })
})

router.route('/overhead/month').post((request,response)=>{

    let month = {... request.body}
    Db.displayOverheadMonth(month).then(result =>{
        response.json(result);
    })
})

router.route('/overhead/type').post((request,response)=>{

    let type = {... request.body}
    Db.displayOverheadType(type).then(result =>{
        response.json(result);
    })
})

router.route('/student').post((request,response)=>{

    let studentinfo = {... request.body}
    Db.displaySingleStudent(studentinfo).then(result =>{
        response.json(result);
    })
})

router.route('/student').get((request,response)=>{
    Db.displayStudentsInfo().then(result =>{
        response.json(result);
    })
})

router.route('/ingredient').get((request,response)=>{
    Db.displayTotalIngredients().then(result =>{
        response.json(result);
    })
})

router.route('/overhead').get((request,response)=>{
    Db.displayTotalOverheads().then(result =>{
        response.json(result);
    })
})

router.route('/waste').get((request,response)=>{
    Db.displayTotalWaste().then(result =>{
        response.json(result);
    })
})

router.route('/waste/date').post((request,response)=>{
    let date = {... request.body}
    Db.displayWasteDate(date).then(result =>{
        response.json(result);
    })
})


router.route('/waste/month').post((request,response)=>{
    let month = {... request.body}
    Db.displayWasteMonth(month).then(result =>{
        response.json(result);
    })
})

router.route('/login').post((request,response)=>{
    let logininfo = {... request.body}
    Db.login(logininfo).then(result =>{
        response.json(result);
    })
})

router.route('/update/meal/student').post((request,response)=>{
    let mealinfo = {... request.body}
    Db.updateSingleMealOfStudent(mealinfo).then(result =>{
        response.json(result);
    })
})

router.route('/messid').post((request,response)=>
{
    let messid = {... request.body};
    Db.addToMessIdPic(messid).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/deduct').post((request,response)=>
{
    let date = {... request.body};
    Db.deductBalance(date).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/add').post((request,response)=>
{
    let studentinfo = {... request.body};
    Db.addBalance(studentinfo).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/day/meals').post((request,response)=>
{
    let mealsperday = {... request.body};
    Db.calculateMealCountPerDate(mealsperday).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/changebalance').get((request,response)=>{
    Db.changeBalance().then(result =>{
        response.json(result);
    })
})


router.route('/holdpermonth').post((request,response)=>
{
    let months = {... request.body};
    Db.displayHoldLogPerMonth(months).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/not/holdlog').get((request,response)=>{
    Db.displayNotInHoldLogOnList().then(result =>{
        response.json(result);
    })
})


router.route('/holdlog').post((request,response)=>
{
    let holdloginfo = {... request.body};
    Db.insertHoldLog(holdloginfo).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/monthlyavg/alloverheadtype').post((request,response)=>
{
    let info = {... request.body};
    Db.monthlyAvgCostAllOverheadType(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/monthlyavg/allingredient').post((request,response)=>
{
    let info = {... request.body};
    Db.monthlyAvgCostPerMealAllIngredient(info).then(result=>
        {
            response.status(201).json(result);
        })
})
router.route('/monthlyavg/permealalloverheadtype').post((request,response)=>
{
    let info = {... request.body};
    Db.monthlyAvgCostPerMealAllOverheadType(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/monthlyavg/permealperoverheadtype').post((request,response)=>
{
    let info = {... request.body};
    Db.monthlyAvgCostPerMealPerOverheadType(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/monthlyavg/peroverheadtype').post((request,response)=>
{
    let info = {... request.body};
    Db.monthlyAvgCostPerOverheadType(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/monthlyavg/wastepermeal').post((request,response)=>
{
    let info = {... request.body};
    Db.monthlyAvgWastePerMeal(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/monthlyavg/weightperingredient').post((request,response)=>
{
    let info = {... request.body};
    Db.monthlyAvgWeightPerIngredient(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/totalmonthly/ingredientamount').post((request,response)=>
{
    let info = {... request.body};
    Db.totalMonthlyAmountUsedIngredient(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/totalmonthly/ingredientcost').post((request,response)=>
{
    let info = {... request.body};
    Db.totalMonthlyCostAllIngredients(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/totalmonthly/alloverheadscost').post((request,response)=>
{
    let info = {... request.body};
    Db.totalMonthlyCostAllOverheads(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/totalmonthly/ingredientcost').post((request,response)=>
{
    let info = {... request.body};
    Db.totalMonthlyCostIngredient(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/totalmonthly/overheadcost').post((request,response)=>
{
    let info = {... request.body};
    Db.totalMonthlyCostOverheads(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.route('/totalmonthly/waste').post((request,response)=>
{
    let info = {... request.body};
    Db.totalMonthlyWaste(info).then(result=>
        {
            response.status(201).json(result);
        })
})

router.use((request, response, next)=> { //middleware(used for authentication)
    console.log("middleware");
    next();
})

app.get('/', (req, res) => res.send('Home route!'));

app.listen(config.port, ()=>{
    console.log(`App is listening on url http://${ config.host }:${ config.port }`)
})