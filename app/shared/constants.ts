export class Constants {
  static root = "http://localhost:8010/api/";

  // employee api endpoints
  static employeeIndex = Constants.root + "employee";
  static employeeSearch = Constants.root + "employee/search/";
  static employeeTotal = Constants.root + "employee/total";

  // payment api endpoints
  static paymentIndex = Constants.root + "payment";
  static paymentSearch = Constants.root + "payment/search/";
  static paymentTotal = Constants.root + "payment/total";

  // project api endpoints
  static projectIndex = Constants.root + "project";
  static projectSearch = Constants.root + "project/search/";
  static projectTotal = Constants.root + "project/total";

  // worktype api endpoints
  static worktypeIndex = Constants.root + "worktype";
  static worktypeSearch = Constants.root + "worktype/search/";
  static worktypeTotal = Constants.root + "worktype/total";

  // worktime api endpoints
  static worktimeIndex = Constants.root + "worktime";
  static worktimeSearch = Constants.root + "worktime/search/";
  static worktimeTotal = Constants.root + "worktime/total";

  // statics api endpoints
  static staticsWorktime = Constants.root + "statics/worktime";
  static staticsPayment = Constants.root + "statics/payment";
}
