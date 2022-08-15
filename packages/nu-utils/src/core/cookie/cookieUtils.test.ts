import { cookieStrToCookieObj, getCookie } from './cookieUtils';
import * as assert from 'assert';

describe('CookieUtils Test', () => {
  it('cookieStrToCookieObj', () => {
    const cookieStr =
      'i18n=ko; nu-fp=T3iXZ1wGSWonSrZE9CZ; wcs_bt=80a7f359899508:1660051916; _gcl_au=1.1.960871393.1660051917; _gid=GA1.2.616331521.1660051917; _gat_UA-138902488-1=1; _ga_LB0PC9M0KJ=GS1.1.1660051917.1.1.1660051917.60; _hjSessionUser_1450079=eyJpZCI6IjU1MWFhMzZjLTE4NzYtNTJmZi1iMGRmLWFkMTZlZTJmN2JlOSIsImNyZWF0ZWQiOjE2NjAwNTE5MTc0MzAsImV4aXN0aW5nIjpmYWxzZX0=; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1450079=eyJpZCI6IjUzYmIzYzFkLTQ3OTctNDRiMy05N2U0LTY2MDY4Y2Q5ZmQ3YSIsImNyZWF0ZWQiOjE2NjAwNTE5MTc2NTMsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0; amp_12e65b=vDoQbTVvcvnc-sIRkx5u3S.ODM1OGU3YTY5NWQ1Yzk2NA==..1ga1cs2d9.1ga1cs33l.a.2.c; _ga=GA1.2.1976253077.1660051917; _fbp=fb.1.1660051918056.1299859993; ch-veil-id=d0dd7b92-1558-487e-acfc-b575268671f6; ch-session-13076=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZXMiLCJrZXkiOiIxMzA3Ni02MWI1ZDQ2NDMzMmE5NWM0MGUxOSIsImlhdCI6MTY2MDA1MTkxOCwiZXhwIjoxNjYyNjQzOTE4fQ.Tdst1R-cGgS5NDtq6aYIreiPY_OUE9JGAoQoycMzlIQ';
    const cookieObj = cookieStrToCookieObj(cookieStr);
    assert.equal(cookieObj.i18n, 'ko');
    assert.equal(cookieObj['_gat_UA-138902488-1'], '1');
  });
  it('getCookie', () => {
    const cookieStr =
      'nu-auth=%7B%22__%40data%40__%22%3A%7B%22accessToken%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM3MDIsInMiOiJ4eFY1Y3NaWjVBPT0iLCJ2IjpmYWxzZSwiaWF0IjoxNjYwMDUxOTEwLCJleHAiOjE2NjAwNTU1MTAsImlzcyI6Im5leHR1bmljb3JuLmtyIiwic3ViIjoidXNlckluZm8ifQ.lkxtM60Sm-ol3RkRnM9KdChe8AgAIBQukD94BEzJDXI%22%2C%22refreshToken%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM3MDIsInMiOiJ4eFY1Y3NaWjVBPT0iLCJpYXQiOjE2NjAwNTE5MTAsImV4cCI6MTY2MjY0MzkxMCwiaXNzIjoibmV4dHVuaWNvcm4ua3IiLCJzdWIiOiJyZWZyZXNoVG9rZW4ifQ.pzWF3Kytz-y_zsJJ4pJPouqrt_GJpI4BLnDkA5m2H7M%22%2C%22expiresIn%22%3A3600%7D%2C%22__%40key%40__%22%3A%22singleton%22%2C%22__%40raw_data%40__%22%3A%7B%22accessToken%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM3MDIsInMiOiJ4eFY1Y3NaWjVBPT0iLCJ2IjpmYWxzZSwiaWF0IjoxNjYwMDUxOTEwLCJleHAiOjE2NjAwNTU1MTAsImlzcyI6Im5leHR1bmljb3JuLmtyIiwic3ViIjoidXNlckluZm8ifQ.lkxtM60Sm-ol3RkRnM9KdChe8AgAIBQukD94BEzJDXI%22%2C%22refreshToken%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM3MDIsInMiOiJ4eFY1Y3NaWjVBPT0iLCJpYXQiOjE2NjAwNTE5MTAsImV4cCI6MTY2MjY0MzkxMCwiaXNzIjoibmV4dHVuaWNvcm4ua3IiLCJzdWIiOiJyZWZyZXNoVG9rZW4ifQ.pzWF3Kytz-y_zsJJ4pJPouqrt_GJpI4BLnDkA5m2H7M%22%2C%22expiresIn%22%3A3600%7D%7D; ch-veil-id=d0dd7b92-1558-487e-acfc-b575268671f6; ch-session-13076=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZXMiLCJrZXkiOiIxMzA3Ni02MWI1ZDQ2NDMzMmE5NWM0MGUxOSIsImlhdCI6MTY2MDA1MTkxOCwiZXhwIjoxNjYyNjQzOTE4fQ.Tdst1R-cGgS5NDtq6aYIreiPY_OUE9JGAoQoycMzlIQ';
    const nuAuth = getCookie(cookieStr, 'nu-auth');
    assert.ok(nuAuth);
    assert.ok(getCookie(cookieStr, 'no-val'));
  });
});
