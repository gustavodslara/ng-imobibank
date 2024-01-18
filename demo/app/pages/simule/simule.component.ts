import { CurrencyPipe } from "@angular/common";
import { Component, Inject, LOCALE_ID } from "@angular/core";

@Component({
  selector: "app-simule",
  templateUrl: "./simule.component.html",
  styleUrls: ["./simule.component.scss"],
})
export class SimuleComponent {
  valor: number = 300; // Valor inicial
  valorFormatado!: string;
  @Inject(LOCALE_ID) public locale: string;

  constructor(private currencyPipe: CurrencyPipe) {
    this.atualizarValorFormatado(); // Formata o valor inicial
  }

  incrementar() {
    if (this.valor < 70000) {
      this.valor += 100; // Incrementa o valor
      this.atualizarValorFormatado();
    }
  }

  decrementar() {
    if (this.valor > 300) {
      this.valor -= 100; // Decrementa o valor
      this.atualizarValorFormatado();
    }
  }

  atualizarValorFormatado() {
    this.valorFormatado =
      this.currencyPipe.transform(
        this.valor,
        "BRL",
        "symbol-narrow",
        "1.2-2",
        this.locale
      ) || "";
  }

  onValorInput(value: any) {
    const numero = this.valorFormatado
      .replace(/[^\d,.-]/g, "")
      .replace(",", ".");
    const valorNumerico = parseFloat(numero);

    if (!isNaN(valorNumerico)) {
      this.valor = valorNumerico;
      this.atualizarValorFormatado();
    }
  }
}
