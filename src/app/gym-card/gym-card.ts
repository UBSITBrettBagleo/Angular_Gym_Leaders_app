import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymLeader } from '../gym-leader.model';

@Component({
  selector: 'app-gym-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gym-card.html',
})
export class GymCardComponent {
  @Input() leader!: GymLeader;
}