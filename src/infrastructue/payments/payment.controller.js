"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelPayment = exports.captureOrder = exports.createOrder = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../../config");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "105.70",
                    },
                },
            ],
            application_context: {
                brand_name: "mycompany.com",
                landing_page: "NO_PREFERENCE",
                user_action: "PAY_NOW",
                return_url: `${req.protocol}://${req.get("host")}/capture-order`,
                cancel_url: `${req.protocol}://${req.get("host")}/cancel-payment`,
            },
        };
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
        const { data: { access_token } } = yield axios_1.default.post("https://api-m.sandbox.paypal.com/v1/oauth2/token", params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            auth: {
                username: config_1.PAYPAL_API_CLIENT,
                password: config_1.PAYPAL_API_SECRET,
            },
        });
        const response = yield axios_1.default.post(`${config_1.PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        return res.json(response.data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something goes wrong" });
    }
});
exports.createOrder = createOrder;
const captureOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.query;
    try {
        const response = yield axios_1.default.post(`${config_1.PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
            auth: {
                username: config_1.PAYPAL_API_CLIENT,
                password: config_1.PAYPAL_API_SECRET,
            },
        });
        return res.redirect("/payed.html");
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server error" });
    }
});
exports.captureOrder = captureOrder;
const cancelPayment = (req, res) => {
    res.redirect("/");
};
exports.cancelPayment = cancelPayment;
