import {
    Component,
    OnInit,
    EventEmitter,
    Output } from '@angular/core';

@Component({
  selector: 'tr-toggle-viewmode',
  templateUrl: './toggle-viewmode.component.html',
  styleUrls: ['./toggle-viewmode.component.sass']
})
export class ToggleViewmodeComponent implements OnInit {
  @Output() isGridViewChange
    = new EventEmitter<boolean>();
  isGridView = false;
  constructor() { }

  toggle() {
    this.isGridView = !this.isGridView;
    this.isGridViewChange.emit(
      this.isGridView
    );
  }

  ngOnInit() {
  }

}
