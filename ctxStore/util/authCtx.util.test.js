import * as authCtxUtil from "./authCtx.util";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSHVzc2FtIiwiaWQiOiI1ZjlmYzExN2Q2M2Y0ODBlOGZkYzdhMGUiLCJpYXQiOjE2MzMwODU0MDMsImV4cCI6MTYzMzA4NTQyM30.CMUZXzlz6AqxqWEIDU2PeAokW1kTdAmt5XNMAlSMKjY";

describe("Auth Context", () => {
  let spyedOnRefreshToken, spyedOnStartRefreshToken;
  beforeEach(() => {
    jest.clearAllMocks();
    spyedOnStartRefreshToken = jest.spyOn(authCtxUtil, "onStartRefreshToken");
    spyedOnRefreshToken = jest.spyOn(authCtxUtil, "onRefreshToken");
  });

  it("onStartRefreshToken() should work well", () => {
    const { onStartRefreshToken } = authCtxUtil;
    const timer = onStartRefreshToken(accessToken, undefined, undefined);
    expect(spyedOnStartRefreshToken).toHaveBeenCalled();
    expect(spyedOnStartRefreshToken).toHaveBeenCalledTimes(1);
    expect(timer).toBeTruthy();
  });

  it("onRefreshToken() should work well", async () => {
    const { onRefreshToken } = authCtxUtil;
    const authSuccessSimulate = jest
      .fn()
      .mockImplementation((arg1, arg2) => [arg1, arg2]);
    const startRefreshTokenTimerSimulate = jest.fn();
    await onRefreshToken(authSuccessSimulate, startRefreshTokenTimerSimulate);
    expect(spyedOnRefreshToken).toHaveBeenCalled();
    expect(authSuccessSimulate).toHaveBeenCalled();
    expect(authSuccessSimulate).toHaveBeenCalledWith(accessToken, "9292", {
      name: "hussam",
      userId: "9292",
    });
    expect(authSuccessSimulate).toHaveReturnedWith([accessToken, "9292"]);
    expect(startRefreshTokenTimerSimulate).toHaveBeenCalled();
    expect(startRefreshTokenTimerSimulate).toHaveBeenCalledWith(accessToken);
  });
});
