let pessoa = {
  nome: 'Geovanna',
  idade: 25,
  dizerOla() {
    console.log(
      'Olá, mundo! Meu nome é ' +
        this.nome + // this refere-se ao objeto em contexto, ou seja, ao objeto atual no qual o código será executado
        '!' +
        ' Tenho ' +
        this.idade +
        ' anos.'
    );
  },
};

console.log(pessoa);
pessoa.dizerOla();
