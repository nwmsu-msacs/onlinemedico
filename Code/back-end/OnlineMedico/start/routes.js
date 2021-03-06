'use strict'

const CustomerController = require('../app/Controllers/Http/CustomerController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
|
| Https routes used too authenticate user login and logout
| 
*/
Route.group(() => {
  Route.post("/signup", "CustomerController.signup");
  Route.post("/login", "CustomerController.login");
  Route.post("/forgotpassword", "CustomerController.forgotPassword");
  Route.post("/newpassword", "CustomerController.newPassword");
  Route.post("/updateProfile/:userID","CustomerController.updateProfile");
}).prefix("/onlinemedico/user");



/*
|--------------------------------------------------------------------------
| Customer Routes
|--------------------------------------------------------------------------
|
| Https routes used too authenticate user login and logout
| 
*/
Route.group(() => {
  
  Route.post("/address", "CustomerController.addAddress");
  Route.post("/card-details", "CustomerController.addCard");
  Route.get("/addressData", "CustomerController.getAddress");
  Route.get("/card-details/:customerId", "CustomerController.newPassword");
  Route.get("/userDetails/:userId", "CustomerController.getDetails");
  Route.post("/addProduct", "CustomerController.addProduct");
  Route.post("/contactUs", "CustomerController.contactUs");
  Route.get("/contactReview", "CustomerController.contactReview");

}).prefix("/onlinemedico/user")//.middleware("auth");

/*
|--------------------------------------------------------------------------
| order  Routes
|--------------------------------------------------------------------------
|
| Https routes used too authenticate user login and logout
| 
*/

Route.group(() => {
  Route.get("/orders", "OrderController.getAllOrders");
  Route.post("/createOrder", "OrderController.createOrder");
  Route.get("/activeOrders", "OrderController.getActiveOrders");
  Route.get("/pastOrders", "OrderController.getPastOrders");
  Route.get("/orders/:orderId", "OrderController.getOrder");
  Route.get("/ordersFilter/:orderName", "OrderController.getOrderFilter");
  Route.get("/orderStatus/:id/:orderStatus", "OrderController.getOrderStatus");
  Route.get("/cancelOrder/:orderId", "OrderController.cancelOrder");
 
}).prefix("/onlinemedico");

/*
|--------------------------------------------------------------------------
| Prescription  Routes
|--------------------------------------------------------------------------
|
| Https routes used too authenticate user login and logout
| 
*/
Route.group(() => {
  Route.post("/uploadPrescription", "PrescriptionController.fileUploader");
  Route.get("/prescriptionDetails", "PrescriptionController.login");
  Route.post("/updatePrescription/:PrescriptionId", "PrescriptionController.forgotPassword");
  Route.delete("/prescription/:PrescriptionId", "PrescriptionController.newPassword");
}).prefix("/onlinemedico");




/*
|--------------------------------------------------------------------------
| Medicine Routes
|--------------------------------------------------------------------------
|
| Https routes used too authenticate user login and logout
| 
*/

Route.group(() => {
  Route.post("/addMedicine", "MedicineController.addMedicine");
  Route.get("/medicines", "MedicineController.getMedicines");
  Route.post("/updateMedicine/:medicineId", "MedicineController.updateMedicine");
  Route.delete("/medicine/:medicineId", "MedicineController.newPassword");
  Route.get("/search/:medicineCode", "MedicineController.searchProduct");
}).prefix("/onlinemedico");



//Shipping address route

Route.group(() => {
  Route.post("/shippingaddress", "CustomerController.addShippingAddress");
  Route.post("/ordered","OrderController.getRandomIntBetween");
  Route.post("/review","CustomerController.review");
}).prefix("/onlinemedico");
