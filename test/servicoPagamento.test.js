import ServicoPagamento from '../src/servicoPagamento.js';
import assert from 'node:assert';

describe("Servico de pagamento", () => {
    it('Validar consulta do ultimo pagamento realizado', () => {
        //Arrange
        const servicoPagamento = new ServicoPagamento();

        //Act
        servicoPagamento.pagar('0000-1111-2222', 'Cosern', 150);
        servicoPagamento.pagar('0987-7656-3475', 'Embasa', 100);
        const ultimoPagamento = servicoPagamento.consultar();

        //Assert
        assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Embasa');
        assert.equal(ultimoPagamento.valor, 100);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    })

    it('Validar se valor acima de 100 é classificado como cara', () => {
        //Arrange
        const servicoPagamento = new ServicoPagamento();

        //Act
        servicoPagamento.pagar('0987-7656-3475', 'Embasa', 150);
        const ultimoPagamento = servicoPagamento.consultar();

        //Assert
        assert.equal(ultimoPagamento.categoria, 'cara');
    })

    it('Validar se valor menor ou igual a 100 é classificado como padrão', () => {
        //Arrange
        const servicoPagamento = new ServicoPagamento();

        //Act
        servicoPagamento.pagar('0987-7656-3475', 'Embasa', 100);
        const ultimoPagamento = servicoPagamento.consultar();

        //Assert
        assert.equal(ultimoPagamento.categoria, 'padrão');
    })
    
})