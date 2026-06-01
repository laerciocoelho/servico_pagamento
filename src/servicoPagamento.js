export default class ServicoPagamento {
    #pagamentos // Propriedade privada

    constructor() {
        this.#pagamentos = [];
    }

    pagar(codigo, empresa, valor){
        this.#pagamentos.push({
            codigoBarras: codigo,
            empresa: empresa,
            valor: valor,
            categoria: valor > 100 ? 'cara' : 'padrão'
        });
    }

    consultar(){
        return this.#pagamentos[this.#pagamentos.length -1];
    }


}