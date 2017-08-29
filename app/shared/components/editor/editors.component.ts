import {
  Component,
  OnInit,
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
  ProjectService,
  EmployeeService,
  PaymentService,
  WorktypeService,
  WorktimeService
} from '../../index';

/** Base Editor Class */
export class BaseEditor {
  @Input() dismissActionName: string = "关闭";
  @Input() commitActionName: string = "保存";
  @Output() submitAction = new EventEmitter<IProject>();

  constructor(@Inject(JQ_TOKEN) public jquery: any) {
  }

  saveItem(item) {
    this.submitAction.emit(item);
  }

  submitted() {
     this.jquery('#createNewModal').modal('hide');
  }
}

/** Project Editor Component */
@Component({
  selector: "project-editor",
  templateUrl: './app/shared/components/editor/project-editor.component.html',
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class ProjectEditorComponent extends BaseEditor implements OnInit {
  @Input() project: IProject;
  @Input() managers: string[];

  constructor(private service: ProjectService, @Inject(JQ_TOKEN) public jquery: any) {
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
}

/** Employee Editor Component */
@Component({
  selector: "employee-editor",
  templateUrl: './app/shared/components/editor/employee-editor.component.html',
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class EmployeeEditorComponent extends BaseEditor implements OnInit {
  @Input() employee: IEmployee;

  constructor(private service: EmployeeService, @Inject(JQ_TOKEN) public jquery: any) {
    super(jquery);
  }

  ngOnInit() {
  }
}

/** Payment Editor Component */
@Component({
  selector: "payment-editor",
  templateUrl: './app/shared/components/editor/payment-editor.component.html',
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class PaymentEditorComponent extends BaseEditor implements OnInit {
  @Input() payment: IPayment;

  constructor(private service: EmployeeService, @Inject(JQ_TOKEN) public jquery: any) {
    super(jquery);
  }

  ngOnInit() {
  }
}

/** Worktype Editor Component */
@Component({
  selector: "worktype-editor",
  templateUrl: './app/shared/components/editor/worktype-editor.component.html',
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class WorktypeEditorComponent extends BaseEditor implements OnInit {
  @Input() worktype: IWorktype;

  constructor(private service: EmployeeService, @Inject(JQ_TOKEN) public jquery: any) {
    super(jquery);
  }

  ngOnInit() {
  }
}

/** Worktime Editor Component */
@Component({
  selector: "worktime-editor",
  templateUrl: './app/shared/components/editor/worktime-editor.component.html',
  styleUrls: ['./app/shared/components/editor/editors.component.css']
})
export class WorkimetEditorComponent extends BaseEditor implements OnInit {
  @Input() worktime: IWorktime;

  constructor(private service: EmployeeService, @Inject(JQ_TOKEN) public jquery: any) {
    super(jquery);
  }

  ngOnInit() {
  }
}
