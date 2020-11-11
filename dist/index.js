"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
// * Simulated user input based on test document
var userInput = {
    "birthDate": "1985-02-08",
    "givenName": "James",
    "middleName": "Robert",
    "familyName": "Smith",
    "licenceNumber": "94977000",
    "stateOfIssue": "NSW",
    "expiryDate": "2020-01-01"
};
var apiKey = process.env.API_KEY;
var apiEndpoint = process.env.API_ENDPOINT;
var apiHeader = {
    'Authorization': "Bearer " + apiKey,
    "Content-type": 'application/json'
};
// * PRIMARY FUNCTION  ============================
var checkUser = function (userObject) { return __awaiter(void 0, void 0, void 0, function () {
    var userValidationResult, apiResponse, responseCheck;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userValidationResult = validateUserInput(userObject);
                // *2.  DONE check if object has been validated
                if (!userValidationResult) {
                    console.error("Error: Please fill out all required fields");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, makeApiRequest(userObject, apiEndpoint, apiHeader)];
            case 1:
                apiResponse = _a.sent();
                responseCheck = checkApiResponse(apiResponse);
                console.log(responseCheck);
                return [2 /*return*/];
        }
    });
}); };
// * HELPER FUNCTIONS  ============================
var validateUserInput = function (userInputObject) {
    // * DONE check user input exists
    for (var key in userInputObject) {
        // The provided document states: 'middleName' and 'expiryDate' are not "required"
        if (key !== 'middleName' && key !== 'expiryDate') {
            var valueExists = checkValueExists(key);
            if (!valueExists)
                return false;
        }
    }
    console.log('Success: All inputs have been filled');
    // * DONE check user input matches regexp values
    for (var key in userInputObject) {
        if (key) {
            switch (key) {
                case "birthDate":
                    if (!reChecks[0].test(userInputObject[key])) {
                        console.log("Error: " + key + " does not match YYYY-MM-DD format.");
                        return false;
                    }
                    break;
                case "givenName":
                    if (!reChecks[1].test(userInputObject[key])) {
                        console.log("Error: " + key + " has too many characters");
                        return false;
                    }
                    break;
                case "middleName":
                    if (!reChecks[1].test(userInputObject[key])) {
                        console.log("Error: " + key + " has too many characters");
                        return false;
                    }
                    break;
                case "familyName":
                    if (!reChecks[1].test(userInputObject[key])) {
                        console.log("Error: " + key + " has too many characters");
                        return false;
                    }
                    break;
                case "licenceNumber":
                    break;
                case "stateOfIssue":
                    if (!states.includes(userInputObject[key])) {
                        console.log("Error: " + key + " is not from the available list");
                        return false;
                    }
                    break;
                case "expiryDate":
                    if (!reChecks[0].test(userInputObject[key]))
                        break;
            }
        }
    }
    return true;
};
var reChecks = [/\d{4}-\d{2}-\d{2}/, /\w{0,100}/, /\d+/];
var states = ['NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT'];
var checkValueExists = function (value) {
    if (value.length !== 0 && value) {
        return true;
    }
    else {
        return false;
    }
};
function makeApiRequest(reqObject, endPoint, headers) {
    return __awaiter(this, void 0, void 0, function () {
        var responseObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default({
                        method: 'post',
                        url: endPoint,
                        data: JSON.stringify(reqObject),
                        headers: headers
                    })
                        .then(function (res) {
                        responseObj = res.data;
                    })
                        .catch(function (err) {
                        console.error(err);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, responseObj];
            }
        });
    });
}
var checkApiResponse = function (apiBlob) {
    switch (apiBlob.verificationResultCode) {
        case 'Y':
            //do something
            return { 'kycResult': true };
        case 'N':
            //do something
            return { 'kycResult': false };
        case 'D':
            //do something
            return { code: 'D', message: 'Document Error' };
        case 'S':
            //do something
            return { code: 'S', message: 'Server Error' };
        default:
            console.log("No result received");
            break;
    }
    return null;
};
// * RUN MAIN PROGRAM =============================
checkUser(userInput);
checkUser(userInput);
checkUser(userInput);
//# sourceMappingURL=index.js.map