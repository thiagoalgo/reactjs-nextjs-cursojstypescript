const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Valor A';
objetoA.chaveB = 'Valor B';
objetoA.chaveC = 'Valor C';
objetoA.chaveD = 'Valor D';
