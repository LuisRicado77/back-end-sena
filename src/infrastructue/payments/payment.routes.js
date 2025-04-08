"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("./payment.controller");
const router = (0, express_1.Router)();
router.post('/create-order', payment_controller_1.createOrder);
router.get('/capture-order', payment_controller_1.captureOrder);
router.get('/cancel-payment', payment_controller_1.cancelPayment);
exports.default = router;
