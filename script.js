const formulario = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

formulario.addEventListener('input', (event) => {
    event.preventDefault();

    const cep = event.target.value;

    console.log(cep);
//viacep.com.br/ws/${cep}/json/
    const urlViaCepApi = `https://viacep.com.br/ws/${cep}/json/`;

    if(cep.length === 8){
        fetch(urlViaCepApi)
        .then((response) => response.json())
        .then((data) => {

            const ruaCEP = data.logradouro;
            const bairroCEP = data.bairro;
            const cidadeCEP = data.localidade;
            const estadoCEP = data.estado;

            console.log(data);

            rua.value = ruaCEP;
            bairro.value = bairroCEP;
            cidade.value = cidadeCEP;
            estado.value = estadoCEP;


        })
    }

    }
)

