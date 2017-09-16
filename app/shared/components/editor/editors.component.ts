import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
  ViewChild
} from "@angular/core";
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
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
  @Input() updateActionName: string = "更新";
  @Input() mode: string;
  @Output() submitAction = new EventEmitter<IProject>();

  public editorFrom: NgForm;

  constructor(@Inject(JQ_TOKEN) public jquery: any) {
  }

  saveItem(item) {
    this.submitAction.emit(item);
  }

  submitted() {
    this.jquery('#createNewModal').modal('hide');
  }

  // dismissed() {
  //   if (this.editorFrom !== undefined) {
  //     this.editorFrom.reset();
  //   }
  // }
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

  @ViewChild('newProjectForm') public newProjectForm: NgForm;

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
    this.editorFrom = this.newProjectForm;
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

  @ViewChild('newEmpForm') public newEmpForm: NgForm;

  constructor(@Inject(JQ_TOKEN) public jquery: any) {
    super(jquery);
  }

  ngOnInit() {
    this.employee = {
      id: 0,
      name: "",
      email: "",
      phone: "",
      age: 0,
      gender: "",
      idCard: "",
    };
    this.editorFrom = this.newEmpForm;
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
  @Input() emps: string[];
  @Input() projects: string[];
  @Input() worktypes: string[];

  @ViewChild('newPaymentForm') public newPaymentForm: NgForm;

  constructor(private service: EmployeeService, @Inject(JQ_TOKEN) public jquery: any) {
    super(jquery);
  }

  ngOnInit() {
    this.payment = {
      id: 0,
      employee: "",
      project: "",
      worktype: "",
      year: 2017,
      month: 1,
      isUpperHalf: true,
      paid: 0,
      verified: false
    };
    this.editorFrom = this.newPaymentForm;
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
  @Input() emps: string[];

  @ViewChild('newWorktypeForm') public newWorktypeForm: NgForm;

  constructor(private service: EmployeeService, @Inject(JQ_TOKEN) public jquery: any) {
    super(jquery);
  }

  ngOnInit() {
    this.worktype = {
      id: 0,
      worktype: "",
      lead: ""
    };
    this.editorFrom = this.newWorktypeForm;
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
  @Input() emps: string[];
  @Input() projects: string[];
  @Input() worktypes: string[];

  @ViewChild('newWorktimeForm') public newWorktimeForm: NgForm;

  constructor(
    private worktimeService: WorktimeService,
    @Inject(JQ_TOKEN) public jquery: any) {
    super(jquery);
  }

  ngOnInit() {
    this.worktime = {
      id: 0,
      employee: "",
      project: "",
      worktype: "",
      year: 2017,
      month: 1,
      worktime: 0,
      verified: false
    };
    this.editorFrom = this.newWorktimeForm;
  }
}
