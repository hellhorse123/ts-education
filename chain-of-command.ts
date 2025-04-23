interface IMiddleWare {
  next(mid: IMiddleWare): IMiddleWare;
  handle(request: any): any;
}

abstract class AbstractMiddleWare implements IMiddleWare {
  private nextMiddleWare!: IMiddleWare;

  next(mid: IMiddleWare): IMiddleWare {
    this.nextMiddleWare = mid;
    return mid;
  }

  handle(request: any) {
    if (this.nextMiddleWare) {
      return this.nextMiddleWare.handle(request);
    }
  }
}

class AuthMiddleWare extends AbstractMiddleWare {
  override handle(request: any) {
    console.log("AuthMiddleWare");
    if (request.userId === 1) {
      return super.handle(request);
    }

    return { error: "Not authorize" };
  }
}

class ValidateMiddleWare extends AbstractMiddleWare {
  override handle(request: any) {
    console.log("ValidateMiddleWare");
    if (request.body) {
      return super.handle(request);
    }

    return { error: "Don't have body" };
  }
}

class Controller extends AbstractMiddleWare {
  override handle(request: any) {
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
