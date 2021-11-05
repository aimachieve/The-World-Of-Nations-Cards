const express = require('express')
const router = express.Router()

const DrawController = require('../../controllers/DrawController')

// router.post("/register", DrawController.register);
// router.post("/login", DrawController.login);
// router.post("/verify-email", DrawController.verifyEmail);
router.get("/products", DrawController.getProducts);
/*================ Mr.New ==============*/
router.get('/createMockData', DrawController.createMockData)
router.get('/getRandomTables', DrawController.getRandomTables)
router.get(
  '/getRandomTablesByUserId/:userId',
  DrawController.getRandomTablesByUserId,
)
router.get('/getAllDays', DrawController.getAllDays)
router.post('/search', DrawController.searchData)
router.post('/getAllUsers', DrawController.getAllUsers)
router.post(
  '/getRandomTablesByDayIdAndRoomNumber',
  DrawController.getRandomTablesByDayIdAndRoomNumber,
)
router.put(
  '/getSatelliteUsersByEventId/:satelliteEventId',
  DrawController.getSatelliteUsersByEventId,
)
router.put(
  '/searchSatelliteUsersBySatelliteEventId/:satelliteEventId',
  DrawController.searchSatelliteUsersBySatelliteEventId,
)
router.get('/getEventById/:_id', DrawController.getEventById)
router.post('/sendEmailToAdmin', DrawController.sendEmailToAdmin)
router.get('/getTicketsByUserId/:userId', DrawController.getTicketsByUserId)
/*======================================*/
router.post("/payment", DrawController.payment);


/*=====================Play Game=================*/
router.post("/assignSatelliteTable", DrawController.assignSatelliteTable);
router.get("/makeTable", DrawController.makeTable);
router.get("/roomDraw/:roomnumber/:daynumber", DrawController.roomDraw);
router.get("/endDay/:daynumber", DrawController.endDay);
router.get("/finalRoom/:id", DrawController.finalRoom);
router.get("/getFinalWinner", DrawController.getFinalWinner);


/*=====================Admin Page=================*/
router.get("/current_event", DrawController.getCurrentEvent);
router.post("/create_event", DrawController.create_Event);
router.post("/create_sEvent", DrawController.create_sEvent);
router.post("/create_mEvent", DrawController.create_mEvent);

router.get("/get_tickets", DrawController.get_tickets);

/*=====================Mock Data for testing=================*/
router.post("/create_mock", DrawController.createMockData);

module.exports = router
