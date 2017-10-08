export class Constants {
  static root = "http://139.196.56.36:8010/";

  // employee api endpoints
  static employeeIndex = Constants.root + "api/employee";
  static employeeSearch = Constants.root + "api/employee/search/";
  static employeeTotal = Constants.root + "api/employee/total";

  // payment api endpoints
  static paymentIndex = Constants.root + "api/payment";
  static paymentSearch = Constants.root + "api/payment/search/";
  static paymentTotal = Constants.root + "api/payment/total";

  // project api endpoints
  static projectIndex = Constants.root + "api/project";
  static projectSearch = Constants.root + "api/project/search/";
  static projectTotal = Constants.root + "api/project/total";

  // worktype api endpoints
  static worktypeIndex = Constants.root + "api/worktype";
  static worktypeSearch = Constants.root + "api/worktype/search/";
  static worktypeTotal = Constants.root + "api/worktype/total";

  // worktime api endpoints
  static worktimeIndex = Constants.root + "api/worktime";
  static worktimeSearch = Constants.root + "api/worktime/search/";
  static worktimeTotal = Constants.root + "api/worktime/total";

  // statics api endpoints
  static staticsWorktime = Constants.root + "api/statics/worktime";
  static staticsPayment = Constants.root + "api/statics/payment";

  static dashboardEmployee = Constants.root + "api/dashboard/employee";
  static dashboardGeneral = Constants.root + "api/dashboard/general";

  // authorization endpoints
  static authenticate = Constants.root + "auth/authenticate";
  static register = Constants.root + "auth/register";
}
