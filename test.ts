// first variant (My)
// interface Request {
//   sum: number;
//   from: number;
//   to: number;
// }

// interface ResponseSuccessData extends Request {
//   databaseId: number;
// }

// interface SuccessResponse {
//   status: string;
//   data: ResponseSuccessData;
// }

// interface FailedResponse {
//   status: string;
//   data: {
//     errorMessage: string;
//     errorCode: number;
//   };
// }

// type ResponseStatus = SuccessResponse | FailedResponse;

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

interface IPaymentRequest extends IPayment {}

enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

interface IPaymentDataSuccess extends IPayment {
  databaseId: number;
}

interface IPaymentDataFailed {
  errorMessage: string;
  errorCode: number;
}

// interface IResponse {
//   status: PaymentStatus;
//   data: IPaymentDataSuccess | IPaymentDataFailed;
// }

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IPaymentDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IPaymentDataFailed;
}

// function get(): IResponseSuccess | IResponseFailed {}
