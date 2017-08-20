import {
  Component,
  Input
} from "@angular/core";

@Component({
  selector: 'modal-window',
  templateUrl: './app/shared/components/modal-window/modal-window.component.html',
  styleUrls: ['./app/shared/components/modal-window/modal-window.component.css']
})
export class ModalWindowComponent {
  @Input() caption: string;
  @Input() modalId: string;
  @Input() dismissActionName: string;
  @Input() commitActionName: string;
}
