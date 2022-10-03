function aluno (nome, nota) {
    this.nome=nome
    this.nota=nota

    this.dados_anononimo=function(){
        setTimeout(function(){
            console.log(this.nome)
             console.log(this.nota)
        },2000)                    // determina um tempo antes de executar o próximo comando

    }
    
}

const aluno1=new aluno("Lucas",10)
aluno1.dados_anononimo()