import {
  Component,
  OnInit,
  OnChanges,
  Input
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  IProject,
  IEmployee,
  IPayment,
  IWorktime,
  IWorktype
} from '../../models/index';

export class BaseEditor {
  @Input() dismissActionName: string;
  @Input() commitActionName: string;
}

@Component({
  selector: "project-editor",
  templateUrl: './app/shared/components/editor/project-editor.component.html',
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class ProjectEditorComponent extends BaseEditor implements OnInit, OnChanges {
  @Input() project: IProject;

  ngOnInit() {
    this.project = {
      id: 0,
      name: "Test",
      address: "",
      manager: "",
      state: "1"
    };
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  saveProject(newProject) {
  }
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
