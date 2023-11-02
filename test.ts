enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

interface IDataSuccess {
  successMes: string;
  databaseId: number;
  data: object;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function isSuccess(res: Res): res is IResponseSuccess {
  if (res.status === PaymentStatus.Success) {
    return true;
  }
  return false;
}

function getIdFromResponse(res: Res): number {
  if (isSuccess(res)) {
    return res.data.databaseId;
  } else {
    throw new Error(res.data.errorMessage);
  }
}
