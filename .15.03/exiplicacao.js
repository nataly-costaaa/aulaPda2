/*variável que se altera em tempo de execução
ela busca dados dentro da tag select do html*/
var select = document.querySelector('select');

/*variável que se altera em tempo de execução
ela busca o elemente interno da tag p do html*/
var paragrafo = document.querySelector('p');

/*aplica-se aqui um evento dado valor a variável select
esse evento captura a mudança 'change' e o direciona para 
a função Mês*/
select.addEventListener('change', Mês);

function Mês() 
{
    const Meses = select.value; // captura o valor da mudança de select
    const fala= " Mês do ano"; // apenas texto

    switch (Meses) //estrutura de condição de única variável
    {
        case 'Janeiro':
            paragrafo.textContent = "Primeiro" + fala;
            break;

        case 'Segundo mês do ano':
            paragrafo.textContent = "Segundo" + fala;
            break;   

        case 'Terceiro mês do ano':
            paragrafo.textContent = "Terceiro" + fala;
            break;
            
        case 'Quarto mês do ano':
            paragrafo.textContent = "Quarto" + fala;
            break;
    }
}