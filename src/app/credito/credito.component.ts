import { Component } from '@angular/core';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.scss'],
})
export class CreditoComponent {
  limite = 5000;

  solicitarCredito() {
    alert('Crédito solicitado com sucesso!');
  }
}
