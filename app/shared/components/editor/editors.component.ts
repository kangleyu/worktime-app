import { Component } from "@angular/core";

@Component({
  selector: "project-editor",
  template: `<section>
          <form name="newProject" method="post" role="form" data-toggle="validator">
            <div class="form-group">
              <input type="text" class="form-control" id="pname" name="pname" placeholder="项目名称" data-error="项目名称不能为空"
                required>
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <select class="form-control" ng-model="newP.plead" data-error="项目名称不能为空" required>
                  <option value="" selected="selected">--负责人--</option>
                </select>
            </div>
            <div class="form-group">
              <select class="form-control" ng-model="newP.pstate" data-error="项目名称不能为空" required>
                  <option value="">--请选择项目状态--</option>
                  <option value="1">未开工</option>
                  <option value="2">在建</option>
                  <option value="3">竣工</option>
                </select>
            </div>
          </form>
        </section>`,
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class ProjectEditorComponent {
}

@Component({
  selector: "employee-editor",
  template: `<div>Employee Editor</div>`,
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class EmployeeEditorComponent {
}

@Component({
  selector: "payment-editor",
  template: `<div>Payment Editor</div>`,
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class PaymentEditorComponent {
}

@Component({
  selector: "worktype-editor",
  template: `<div>Worktype Editor</div>`,
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class WorktypeEditorComponent {
}

@Component({
  selector: "worktime-editor",
  template: `<div>Worktime Editor</div>`,
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class WorkimetEditorComponent {
}
