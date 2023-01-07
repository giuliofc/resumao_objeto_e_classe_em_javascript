let musica1 = {};
let musica2 = new Object();

musica1.nome = "Minha musica"; 
musica1['artista'] = "Nome artista";

// console.log(musica1);
// console.log(musica1.nome);
// console.log(musica1['artista']);

musica2 = {
    nome: 'Minha musica',
    artista: 'Giulio',
    duracao: 180
};
// console.log(musica2);

if('artista' in musica2){
    // console.log(`${musica2.artista}`);
}

for(let chave in musica2) {
    // console.log(`${chave} = ${musica2[chave]}`);
}
//  musica3 = musica1; 
//  musica3.nome="Rafael"; 
//  console.log(musica1);

let musica3 = {};
for(let chave in musica1){
    musica3[chave] = musica1[chave];
}
musica3.nome='Rafael';
// console.log(musica1);
// console.log(musica3);

function mudarNome(obj) {
    obj.nome='Novo nome da musica';
}

mudarNome(musica2);
// console.log(musica2);

let trocarNome = function (obj) {
    obj.nome='Nome2 da musica';
}
trocarNome(musica2);
// console.log(musica2.nome);


function criarMusica(nome, art, duracao) {
    // let longa = duracao >180; 
    return {
        nome: nome,
        artista: art,
        duracao: duracao,
        // longa: longa

            // diretosAutorais: function () {
            //     return this.artista == 'giulio 2'; 
            // }
    }
}

let musica4 = criarMusica('Musica 4', 'giulio 2', 250);
// console.log(musica4);

    // musica4.diretosAutorais = function () {
    //     return this.artista == 'giulio 2'; 
    // }
// console.log(musica4);
// console.log(musica4.diretosAutorais());

class Musica {
    constructor(n, a, d){
        this.nome = n;
        this.artista = a;
        this.duracao = d;
    }

    getLonga() {
        return this.duracao > 180;
    }
}

let musica5 = new Musica('Musica classica', 'giulio', 200);
// console.log(musica5);
// console.log(musica5.getLonga());


