const Leilao = require('./Leilao');
const Lance = require('./Lance');

test('Pega maior lance aleatório',
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('Alicia', 100.0));
        leilao.propoe(new Lance('Laura', 200.0));
        leilao.propoe(new Lance('Otávio', 150.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(200.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
    }

);

test('Pega maior lance ordem crescente',
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('Alicia', 100.0));
        leilao.propoe(new Lance('Otávio', 150.0));
        leilao.propoe(new Lance('Laura', 200.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(200.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
    }

);

test('Pega maior lance ordem decrescente',
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('Laura', 200.0));
        leilao.propoe(new Lance('Otávio', 150.0));
        leilao.propoe(new Lance('Alicia', 100.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(200.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
    }

);

test('Coloca lance negativo',
    () => {
        var leilao = new Leilao('Bola de futebol');
        leilao.propoe(new Lance('Lavínia', -100.0));
        leilao.propoe(new Lance('Bruno', -10.0));
        leilao.propoe(new Lance('Vanessa', -1.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(0);
        expect(leilao.getMaiorLance().getNome()).toBe('Nenhum');
    }

);
    
