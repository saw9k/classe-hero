class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


let guerreiro = new Heroi("Jaba", 40, "guerreiro");
let mago = new Heroi("Paralax", 560, "mago");
let monge = new Heroi("Wukong", 2700, "monge");
let ninja = new Heroi("Jotaro Akami", 27, "ninja");

guerreiro.atacar()
mago.atacar()
monge.atacar()
ninja.atacar()
