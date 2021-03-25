function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Thiago', 'Goulart');

const pessoa = {
  nome: 'Thiago',
  sobrenome: 'Goulart',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
