import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfo {

  @Input() name = '';
  @Input() emoji = '';
  @Input() age = 0;
  @Input() badge = '';
  @Input() badgeImage = '';
  @Input() location = '';
  @Input() type = '';
  @Input() typeColor = '';
  @Input() image = '';
  @Input() description = '';
  @Input() team: any[] = [];

  showDescription = false;
  showTeam = false;
  showMotto = false;

toggleTeam() {
  this.showTeam = !this.showTeam;
}

toggleMotto() {
  this.showMotto = !this.showMotto;
}

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
}