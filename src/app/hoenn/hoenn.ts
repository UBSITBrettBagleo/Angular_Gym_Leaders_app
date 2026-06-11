import { Component, inject } from '@angular/core';
import { HoennService } from '../hoenn-service/hoenn-services';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [],
  templateUrl: './hoenn.html',
  styleUrl: './hoenn.css',
})
export class Hoenn {

  hoennService = inject(HoennService);

}
