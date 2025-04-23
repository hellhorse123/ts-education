"use strict";
class AbstractMiddleWare {
    next(mid) {
        this.nextMiddleWare = mid;
        return mid;
    }
    handle(request) {
        if (this.nextMiddleWare) {
            return this.nextMiddleWare.handle(request);
        }
    }
}
class AuthMiddleWare extends AbstractMiddleWare {
    handle(request) {
        console.log("AuthMiddleWare");
        if (request.userId === 1) {
            return super.handle(request);
        }
        return { error: "Not authorize" };
    }
}
class ValidateMiddleWare extends AbstractMiddleWare {
    handle(request) {
        console.log("ValidateMiddleWare");
        if (request.body) {
            return super.handle(request);
        }
        return { error: "Don't have body" };
    }
}
class Controller extends AbstractMiddleWare {
    handle(request) {
        console.log("Controller");
        return { success: request };
    }
}
const controller = new Controller();
const validate = new ValidateMiddleWare();
const auth = new AuthMiddleWare();
auth.next(validate).next(controller);
console.log(auth.handle({
    userId: 1,
    body: 'OK'
}));
