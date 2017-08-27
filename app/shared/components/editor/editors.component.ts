import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  Inject
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  IProject,
  IEmployee,
  IPayment,
  IWorktime,
  IWorktype
} from '../../models/index';

import {
  JQ_TOKEN
} from '../../index';

import {
  ProjectService
} from '../../index';

export class BaseEditor {
  @Input() dismissActionName: string;
  @Input() commitActionName: string;
  @Output() submitAction = new EventEmitter<IProject>();

  constructor(@Inject(JQ_TOKEN) jquery: any) {
  }

  submitted() {
  }
}

@Component({
  selector: "project-editor",
  templateUrl: './app/shared/components/editor/project-editor.component.html',
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class ProjectEditorComponent extends BaseEditor implements OnInit, OnChanges {
  @Input() project: IProject;
  @Input() managers: string[];

  constructor(private service: ProjectService, @Inject(JQ_TOKEN) private jquery: any) {
    super(jquery);
  }

  ngOnInit() {
    this.project = {
      id: 0,
      name: "",
      address: "",
      manager: "",
      state: "1"
    };
  }

  ngOnChanges() {
  }

  saveProject(newProject) {
    this.submitAction.emit(newProject);
  }

  submitted() {
    console.log(this.jquery('#createNewModal'));
    this.jquery('#createNewModal').modal('hide');
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
