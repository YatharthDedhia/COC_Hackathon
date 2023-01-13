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

router.route('/guestbooking').get((request,response)=>{
    
    Db.displayAllRequestGuestBooking().then(result =>{
        response.json(result[0]);
    })
})

router.route('/balance').get((request,response)=>{
    
    Db.displayBalanceOfStudent().then(result =>{
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

router.route('/guestinfo').get((request,response)=>{
    
    Db.displayGuestInfo().then(result =>{
        response.json(result[0]);
    })
})

router.route('/student/guest').get((request,response)=>{
    
    Db.displayStudentsGuest().then(result =>{
        response.json(result[0]);
    })
})

router.route('/ingredient/name').get((request,response)=>{
    
    Db.displayIngredientName().then(result =>{
        response.json(result[0]);
    })
})

router.route('/ingredient/date').get((request,response)=>{
    
    Db.displayIngredientDate().then(result =>{
        response.json(result[0]);
    })
})

router.route('/ingredient/month').get((request,response)=>{
    
    Db.displayIngredientMonth().then(result =>{
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




router.use((request, response, next)=> { //middleware(used for authentication)
    console.log("middleware");
    next();
})

app.get('/', (req, res) => res.send('Home route!'));

app.listen(config.port, ()=>{
    console.log(`App is listening on url http://${ config.host }:${ config.port }`)
})