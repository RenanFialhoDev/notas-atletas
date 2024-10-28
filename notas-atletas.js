let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   function calcularMediaNotas(objAtletas) {
       
       for (let i = 0; i < objAtletas.length; i++) {
         let somaNotas = 0;
       let media = 0;
        let notas = objAtletas[i].notas;
        notas = notas.sort((a,b) => a - b).slice(1,4);
        notas.forEach((nota) => {
          somaNotas = somaNotas + nota;
        });
        media = somaNotas/(notas.length)

        
        console.log(`Atleta: ${objAtletas[i].nome}`)
        console.log(`Notas Obtidas: ${objAtletas[i].notas}`)
        console.log(`Média Válida: ${media}\n`)
    }
}

calcularMediaNotas(atletas)