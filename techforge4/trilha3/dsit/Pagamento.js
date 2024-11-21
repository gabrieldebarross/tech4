"use strict";
class Pagamento {
    processar() {
        console.log("Processando pagamento...");
    }
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    validarCartao() {
        return this.numeroCartao.length === 16;
    }
    processar() {
        if (this.validarCartao()) {
            console.log(`Pagamento com cartão ${this.numeroCartao} processado.`);
        }
        else {
            console.log("Número do cartão inválido.");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    gerarCodigoBoleto() {
        return "BOLETO12345";
    }
    processar() {
        console.log(`Pagamento via boleto gerado com código: ${this.gerarCodigoBoleto()}`);
    }
}
function processarPagamento(pagamento) {
    pagamento.processar();
}
const pagamentoCartao = new PagamentoCartao("1234567812345678");
const pagamentoBoleto = new PagamentoBoleto();
processarPagamento(pagamentoCartao);
processarPagamento(pagamentoBoleto);
