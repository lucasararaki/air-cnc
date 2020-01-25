const express = require('express');
const routes = express.Router();

const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const BookingController = require('./controllers/BookingController');
const DashboardController = require('./controllers/DashboardController');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:id/bookings', BookingController.store);

module.exports = routes;