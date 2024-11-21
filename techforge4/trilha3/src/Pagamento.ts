class Pagamento {
    processar(): void {
        console.log("Processando pagamento...");
    }
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    validarCartao(): boolean {
        return this.numeroCartao.length === 16;
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento com cartão ${this.numeroCartao} processado.`);
        } else {
            console.log("Número do cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    gerarCodigoBoleto(): string {
        return "BOLETO12345";
    }

    processar(): void {
        console.log(`Pagamento via boleto gerado com código: ${this.gerarCodigoBoleto()}`);
    }
}

function processarPagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

const pagamentoCartao = new PagamentoCartao("1234567812345678");
const pagamentoBoleto = new PagamentoBoleto();

processarPagamento(pagamentoCartao);
processarPagamento(pagamentoBoleto);
