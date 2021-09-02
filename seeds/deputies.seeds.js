const mongoose = require('mongoose');
const Deputy = require('../models/Deputy.model');

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const deputies = [{
    depId: "11359",
    depCadId: "3",
    deputado: "ADÃO SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "4",
    circulo: "BRAGANÇA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ADÃO JOSÉ FONSECA SILVA"
}, {
    depId: "11392",
    depCadId: "4397",
    deputado: "AFONSO OLIVEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "AFONSO GONÇALVES DA SILVA OLIVEIRA"
}, {
    depId: "11395",
    depCadId: "5993",
    deputado: "ALBERTO FONSECA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ALBERTO JORGE TORRES DA SILVA FONSECA"
}, {
    depId: "11389",
    depCadId: "6937",
    deputado: "ALBERTO MACHADO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ALBERTO AMARO GUEDES MACHADO"
}, {
    depId: "10139",
    depCadId: "5837",
    deputado: "ALEXANDRA TAVARES DE MOURA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "ALEXANDRA NUNES ESTEVES TAVARES DE MOURA",
    "videos": {
        "pt_ar_wsgode_objectos_DadosVideo": {
            "tipo": "Videobiografia",
            "url": "http://media.parlamento.pt/site/XIVLEG/videobiografias/PS_ALEXANDRA_TAVARES_DE_MOURA.mp4"
        }
    }
}, {
    depId: "11427",
    depCadId: "5549",
    deputado: "ALEXANDRA VIEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA ALEXANDRA NOGUEIRA VIEIRA"
}, {
    depId: "11385",
    depCadId: "7240",
    deputado: "ALEXANDRE POÇO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ALEXANDRE DAMASCENO DA SILVA POÇO"
}, {
    depId: "11298",
    depCadId: "5930",
    deputado: "ALEXANDRE QUINTANILHA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ALEXANDRE TIEDTKE QUINTANILHA"
}, {
    depId: "11446",
    depCadId: "5706",
    deputado: "ALMA RIVERA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ALMA BENEDETTI CROCE RIVERA"
}, {
    depId: "11393",
    depCadId: "7093",
    deputado: "ÁLVARO ALMEIDA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ÁLVARO FERNANDO SANTOS ALMEIDA"
}, {
    depId: "11319",
    depCadId: "1212",
    deputado: "ANA CATARINA MENDONÇA MENDES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANA CATARINA VEIGA SANTOS MENDONÇA MENDES"
}, {
    depId: "10072",
    depCadId: "7121",
    deputado: "ANA MARIA SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2020-12-03"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-12-03"
        }]
    },
    depNomeCompleto: "ANA MARIA RIBEIRO DA SILVA"
}, {
    depId: "11449",
    depCadId: "5705",
    deputado: "ANA MESQUITA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "3",
            "carDes": "Secretário",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANA CRISTINA CARDOSO DIAS MESQUITA"
}, {
    depId: "11345",
    depCadId: "6538",
    deputado: "ANA MIGUEL DOS SANTOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANA MIGUEL MARQUES NEVES DOS SANTOS"
}, {
    depId: "10111",
    depCadId: "5678",
    deputado: "ANA PASSOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-10-28"
        }, {
            sioDes: "Efetivo Definitivo",
            sioDtInicio: "2020-10-28"
        }]
    },
    depNomeCompleto: "ANA LÚCIA SILVA DE PASSOS"
}, {
    depId: "11301",
    depCadId: "2263",
    deputado: "ANA PAULA VITORINO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "ANA PAULA MENDES VITORINO"
}, {
    depId: "11456",
    depCadId: "5748",
    deputado: "ANA RITA BESSA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7234",
            partido: "CDS-PP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANA RITA BARREIRA DUARTE BESSA"
}, {
    depId: "11330",
    depCadId: "4199",
    deputado: "ANABELA RODRIGUES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "16",
    circulo: "VIANA DO CASTELO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANABELA DE JESUS SOUSA RODRIGUES"
}, {
    depId: "11351",
    depCadId: "6539",
    deputado: "ANDRÉ COELHO LIMA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANDRÉ GUIMARÃES COELHO LIMA"
}, {
    depId: "11349",
    depCadId: "5499",
    deputado: "ANDRÉ NEVES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "NUNO ANDRÉ MAIA DAS NEVES"
}, {
    depId: "11327",
    depCadId: "6050",
    deputado: "ANDRÉ PINOTES BATISTA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANDRÉ ALEXANDRE PINOTES BATISTA"
}, {
    depId: "11458",
    depCadId: "5777",
    deputado: "ANDRÉ SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7235",
            partido: "PAN",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Renunciou",
            sioDtInicio: "2021-06-06"
        }, {
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-09-23",
            "sioDtFim": "2020-10-24"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-09-23"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-10-24",
            "sioDtFim": "2021-06-06"
        }]
    },
    depNomeCompleto: "ANDRÉ LOURENÇO E SILVA",
    "videos": {
        "pt_ar_wsgode_objectos_DadosVideo": {
            "tipo": "Videobiografia",
            "url": "http://media.parlamento.pt/site/XIVLEG/videobiografias/PAN_ANDRE_SILVA.mp4"
        }
    }
}, {
    depId: "11466",
    depCadId: "6535",
    deputado: "ANDRÉ VENTURA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7239",
            partido: "CH",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANDRÉ CLARO AMARAL VENTURA"
}, {
    depId: "11399",
    depCadId: "6571",
    deputado: "ANTÓNIO CUNHA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANTÓNIO DUARTE CONDE ALMEIDA DA CUNHA"
}, {
    depId: "11450",
    depCadId: "209",
    deputado: "ANTÓNIO FILIPE",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "14",
    circulo: "SANTARÉM",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "2",
            "carDes": "Vice-Presidente",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANTÓNIO FILIPE GAIÃO RODRIGUES"
}, {
    depId: "11316",
    depCadId: "1977",
    deputado: "ANTÓNIO GAMEIRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "14",
    circulo: "SANTARÉM",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANTÓNIO RIBEIRO GAMEIRO"
}, {
    depId: "11416",
    depCadId: "6137",
    deputado: "ANTÓNIO LIMA COSTA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "18",
    circulo: "VISEU",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANTÓNIO JOSÉ LIMA COSTA"
}, {
    depId: "11363",
    depCadId: "6853",
    deputado: "ANTÓNIO MALÓ DE ABREU",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "6",
    circulo: "COIMBRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANTÓNIO ALBERTO MALÓ DE ABREU"
}, {
    depId: "11274",
    depCadId: "6197",
    deputado: "ANTÓNIO SALES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-26"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }]
    },
    depNomeCompleto: "ANTÓNIO LACERDA SALES"
}, {
    depId: "11346",
    depCadId: "5489",
    deputado: "ANTÓNIO TOPA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANTÓNIO ANDRÉ DA SILVA TOPA"
}, {
    depId: "11418",
    depCadId: "6148",
    deputado: "ANTÓNIO VENTURA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "19",
    circulo: "AÇORES",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-11-24"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-11-24"
        }]
    },
    depNomeCompleto: "ANTÓNIO LIMA CARDOSO VENTURA"
}, {
    depId: "11412",
    depCadId: "6905",
    deputado: "ARTUR SOVERAL ANDRADE",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "17",
    circulo: "VILA REAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ARTUR JOSÉ MONTENEGRO SOVERAL FREIRE DE ANDRADE"
}, {
    depId: "11331",
    depCadId: "2010",
    deputado: "ASCENSO SIMÕES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "17",
    circulo: "VILA REAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ASCENSO LUÍS SEIXAS SIMÕES"
}, {
    depId: "11455",
    depCadId: "4057",
    deputado: "ASSUNÇÃO CRISTAS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7234",
            partido: "CDS-PP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Renunciou",
            sioDtInicio: "2020-01-27"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-01-27"
        }]
    },
    depNomeCompleto: "MARIA DE ASSUNÇÃO OLIVEIRA CRISTAS MACHADO DA GRAÇA"
}, {
    depId: "11308",
    depCadId: "1030",
    deputado: "BACELAR DE VASCONCELOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PEDRO CARLOS DA SILVA BACELAR DE VASCONCELOS"
}, {
    depId: "11433",
    depCadId: "4450",
    deputado: "BEATRIZ GOMES DIAS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "BEATRIZ GEBALINA PEREIRA GOMES DIAS"
}, {
    depId: "11460",
    depCadId: "6549",
    deputado: "BEBIANA CUNHA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7235",
            partido: "PAN",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "BEBIANA MARIA RIBEIRO DA CUNHA",
    "videos": {
        "pt_ar_wsgode_objectos_DadosVideo": {
            "tipo": "Videobiografia",
            "url": "http://media.parlamento.pt/site/XIVLEG/videobiografias/PAN_BEBIANA_CUNHA.mp4"
        }
    }
}, {
    depId: "10054",
    depCadId: "7083",
    deputado: "BRUNO ARAGÃO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "BRUNO ARMANDO ARAGÃO HENRIQUES"
}, {
    depId: "11348",
    depCadId: "4304",
    deputado: "BRUNO COIMBRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-06-08",
            "sioDtFim": "2020-07-13"
        }, {
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-11-04",
            "sioDtFim": "2020-12-04"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-06-08"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-07-13",
            "sioDtFim": "2020-11-04"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-12-04"
        }]
    },
    depNomeCompleto: "BRUNO MANUEL PEREIRA COIMBRA"
}, {
    depId: "10805",
    depCadId: "1715",
    deputado: "BRUNO DIAS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-30"
        }, {
            sioDes: "Efetivo Definitivo",
            sioDtInicio: "2019-10-30"
        }]
    },
    depNomeCompleto: "BRUNO RAMOS DIAS"
}, {
    depId: "11397",
    depCadId: "4147",
    deputado: "CARLA BARROS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CARLA MARIA GOMES BARROS"
}, {
    depId: "11415",
    depCadId: "6906",
    deputado: "CARLA BORGES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "18",
    circulo: "VISEU",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "FÁTIMA CARLA DIAS ANTUNES BORGES"
}, {
    depId: "11350",
    depCadId: "7007",
    deputado: "CARLA MADUREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CARLA MANUELA DE SOUSA MADUREIRA"
}, {
    depId: "11314",
    depCadId: "5933",
    deputado: "CARLA SOUSA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CARLA ALEXANDRA MAGALHÃES DE SOUSA"
}, {
    depId: "11422",
    depCadId: "1458",
    deputado: "CARLOS ALBERTO GONÇALVES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "21",
    circulo: "EUROPA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CARLOS ALBERTO SILVA GONÇALVES"
}, {
    depId: "10170",
    depCadId: "6661",
    deputado: "CARLOS BRÁS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "CARLOS ALBERTO SILVA BRÁS"
}, {
    depId: "11354",
    depCadId: "6930",
    deputado: "CARLOS EDUARDO REIS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CARLOS EDUARDO VASCONCELOS FERNANDES RIBEIRO DOS REIS"
}, {
    depId: "11368",
    depCadId: "4030",
    deputado: "CARLOS PEIXOTO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "9",
    circulo: "GUARDA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANTÓNIO CARLOS SOUSA GOMES DA SILVA PEIXOTO"
}, {
    depId: "11340",
    depCadId: "6187",
    deputado: "CARLOS PEREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "20",
    circulo: "MADEIRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CARLOS JOÃO PEREIRA"
}, {
    depId: "11384",
    depCadId: "4437",
    deputado: "CARLOS SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CARLOS MANUEL DOS SANTOS BATISTA DA SILVA"
}, {
    depId: "11324",
    depCadId: "2522",
    deputado: "CATARINA MARCELINO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Renunciou",
            sioDtInicio: "2020-09-06"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-09-06"
        }]
    },
    depNomeCompleto: "CATARINA MARCELINO ROSA DA SILVA"
}, {
    depId: "11436",
    depCadId: "4161",
    deputado: "CATARINA MARTINS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CATARINA SOARES MARTINS"
}, {
    depId: "11388",
    depCadId: "6901",
    deputado: "CATARINA ROCHA FERREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CATARINA LEITE DE FARIA DA ROCHA FERREIRA"
}, {
    depId: "10108",
    depCadId: "6917",
    deputado: "CÁTIA SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "7",
    circulo: "ÉVORA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }]
    },
    depNomeCompleto: "CÁTIA ALEXANDRA DE SOUSA SILVA"
}, {
    depId: "11457",
    depCadId: "2419",
    deputado: "CECÍLIA MEIRELES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7234",
            partido: "CDS-PP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CECÍLIA FELGUEIRAS DE MEIRELES GRAÇA"
}, {
    depId: "10113",
    depCadId: "7073",
    deputado: "CÉLIA PAZ",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-09-18"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-09-18"
        }]
    },
    depNomeCompleto: "CÉLIA MARIA MARQUES DA ROSA PAZ"
}, {
    depId: "11353",
    depCadId: "4299",
    deputado: "CLARA MARQUES MENDES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA CLARA GONÇALVES MARQUES MENDES"
}, {
    depId: "10210",
    depCadId: "7250",
    deputado: "CLARISSE CAMPOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "CLARISSE MARIA GAUDINO VEREDAS CAMPOS"
}, {
    depId: "11361",
    depCadId: "6529",
    deputado: "CLÁUDIA ANDRÉ",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "5",
    circulo: "CASTELO BRANCO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CLÁUDIA SOFIA FARINHA ANDRÉ"
}, {
    depId: "11411",
    depCadId: "6871",
    deputado: "CLÁUDIA BENTO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "17",
    circulo: "VILA REAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CLÁUDIA PATRÍCIA QUITÉRIO BENTO"
}, {
    depId: "11238",
    depCadId: "6859",
    deputado: "CLÁUDIA SANTOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CLÁUDIA MARIA CRUZ SANTOS"
}, {
    depId: "11311",
    depCadId: "5932",
    deputado: "CONSTANÇA URBANO DE SOUSA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA CONSTANÇA DIAS URBANO DE SOUSA"
}, {
    depId: "11261",
    depCadId: "5609",
    deputado: "CRISTINA JESUS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "6",
    circulo: "COIMBRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CRISTINA MARIA DOMINGUES DE JESUS"
}, {
    depId: "11303",
    depCadId: "7015",
    deputado: "CRISTINA MENDES DA SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CRISTINA MARIA MENDES DA SILVA"
}, {
    depId: "11461",
    depCadId: "6547",
    deputado: "CRISTINA RODRIGUES",
    depGP: {
        DadosSituacaoGP: [{
            gpId: "0",
            partido: "Ninsc",
            gpDtInicio: "2020-06-25",
            gpDtFim: "2021-07-01"
        }, {
            gpId: "7235",
            partido: "PAN",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2020-06-25"
        }]
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA CRISTINA PACHECO RODRIGUES",
    "videos": {
        "pt_ar_wsgode_objectos_DadosVideo": {
            "tipo": "Videobiografia",
            "url": "http://media.parlamento.pt/site/XIVLEG/videobiografias/PAN_CRISTINA_RODRIGUES.mp4"
        }
    }
}, {
    depId: "10120",
    depCadId: "6886",
    deputado: "CRISTINA SOUSA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "9",
    circulo: "GUARDA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "CRISTINA MARIA FIGUEIREDO ALMEIDA DE SOUSA"
}, {
    depId: "11365",
    depCadId: "2297",
    deputado: "CRISTÓVÃO NORTE",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CRISTÓVÃO DUARTE NUNES GUERREIRO NORTE"
}, {
    depId: "11448",
    depCadId: "4623",
    deputado: "DIANA FERREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "DIANA JORGE MARTINS FERREIRA"
}, {
    depId: "10675",
    depCadId: "6940",
    deputado: "DIANA SANTOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2021-04-14"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2021-04-14"
        }]
    },
    depNomeCompleto: "DIANA VANESSA DA CONCEIÇÃO SANTOS"
}, {
    depId: "10137",
    depCadId: "5831",
    deputado: "DIOGO LEÃO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "4",
            "carDes": "Vice-Secretário",
            "carDtInicio": "2019-10-26"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "DIOGO FEIJÓO LEÃO CAMPOS RODRIGUES"
}, {
    depId: "11447",
    depCadId: "5710",
    deputado: "DUARTE ALVES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "DUARTE LE FALHER DE CAMPOS ALVES"
}, {
    depId: "11403",
    depCadId: "4170",
    deputado: "DUARTE MARQUES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "14",
    circulo: "SANTARÉM",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-11-18",
            "sioDtFim": "2019-12-07"
        }, {
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-04-02",
            "sioDtFim": "2020-05-16"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-11-18"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-12-07",
            "sioDtFim": "2020-04-02"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-05-16"
        }]
    },
    depNomeCompleto: "DUARTE FILIPE BATISTA DE MATOS MARQUES"
}, {
    depId: "11379",
    depCadId: "42",
    deputado: "DUARTE PACHECO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "3",
            "carDes": "Secretário",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "DUARTE ROGÉRIO MATOS VENTURA PACHECO"
}, {
    depId: "11277",
    depCadId: "162",
    deputado: "EDITE ESTRELA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "2",
            "carDes": "Vice-Presidente",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "EDITE FÁTIMA SANTOS MARREIROS ESTRELA"
}, {
    depId: "10171",
    depCadId: "6685",
    deputado: "EDUARDO BARROCO DE MELO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "EDUARDO MIGUEL SABINO GUEDES BARROCO DE MELO"
}, {
    depId: "11278",
    depCadId: "163",
    deputado: "EDUARDO FERRO RODRIGUES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "1",
            "carDes": "Presidente",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "EDUARDO LUÍS BARRETO FERRO RODRIGUES"
}, {
    depId: "11409",
    depCadId: "2576",
    deputado: "EDUARDO TEIXEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "16",
    circulo: "VIANA DO CASTELO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "EDUARDO ALEXANDRE RIBEIRO GONÇALVES TEIXEIRA",
    "videos": {
        "pt_ar_wsgode_objectos_DadosVideo": {
            "tipo": "Videobiografia",
            "url": "http://media.parlamento.pt/site/XIVLEG/videobiografias/PSD_EDUARDO_TEIXEIRA.mp4"
        }
    }
}, {
    depId: "11273",
    depCadId: "4209",
    deputado: "ELZA PAIS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ELZA MARIA HENRIQUES DEUS PAIS"
}, {
    depId: "11357",
    depCadId: "2114",
    deputado: "EMÍDIO GUERREIRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "EMÍDIO GUERREIRO"
}, {
    depId: "11408",
    depCadId: "6119",
    deputado: "EMÍLIA CERQUEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "16",
    circulo: "VIANA DO CASTELO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA EMÍLIA E SOUSA CERQUEIRA"
}, {
    depId: "11321",
    depCadId: "4186",
    deputado: "EURÍDICE PEREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "EURÍDICE MARIA DE SOUSA PEREIRA"
}, {
    depId: "10574",
    depCadId: "7040",
    deputado: "FABIAN FIGUEIREDO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2021-04-26"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2021-06-12"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2021-04-26",
            "sioDtFim": "2021-06-12"
        }]
    },
    depNomeCompleto: "FABIAN FILIPE FIGUEIREDO"
}, {
    depId: "11440",
    depCadId: "6024",
    deputado: "FABÍOLA CARDOSO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "14",
    circulo: "SANTARÉM",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "FABÍOLA DA CRUZ NETO CARDOSO",
    "videos": {
        "pt_ar_wsgode_objectos_DadosVideo": {
            "tipo": "Videobiografia",
            "url": "http://media.parlamento.pt/site/XIVLEG/videobiografias/BE_FABIOLA_CARDOSO.mp4"
        }
    }
}, {
    depId: "11406",
    depCadId: "6909",
    deputado: "FERNANDA VELEZ",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA FERNANDA PARDALEIRO VELEZ"
}, {
    depId: "10140",
    depCadId: "4012",
    deputado: "FERNANDO ANASTÁCIO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "FERNANDO JOSÉ DOS SANTOS ANASTÁCIO"
}, {
    depId: "10209",
    depCadId: "7212",
    deputado: "FERNANDO JOSÉ",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-09-06"
        }, {
            sioDes: "Efetivo Definitivo",
            sioDtInicio: "2020-09-06"
        }]
    },
    depNomeCompleto: "FERNANDO MIGUEL CATARINO JOSÉ"
}, {
    depId: "11405",
    depCadId: "1905",
    deputado: "FERNANDO NEGRÃO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "2",
            "carDes": "Vice-Presidente",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "FERNANDO MIMOSO NEGRÃO"
}, {
    depId: "10141",
    depCadId: "6822",
    deputado: "FERNANDO PAULO FERREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "FERNANDO PAULO FERREIRA"
}, {
    depId: "11413",
    depCadId: "1442",
    deputado: "FERNANDO RUAS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "18",
    circulo: "VISEU",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "FERNANDO DE CARVALHO RUAS"
}, {
    depId: "11374",
    depCadId: "6541",
    deputado: "FILIPA ROSETA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "FILIPA MARIA SALEMA ROSETA VAZ MONTEIRO"
}, {
    depId: "11239",
    depCadId: "1554",
    deputado: "FILIPE NETO BRANDÃO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CARLOS FILIPE DE ANDRADE NETO BRANDÃO"
}, {
    depId: "11326",
    depCadId: "7103",
    deputado: "FILIPE PACHECO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "FILIPE ALEXANDRE PARDAL PACHECO"
}, {
    depId: "11352",
    depCadId: "1580",
    deputado: "FIRMINO MARQUES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "FIRMINO JOSÉ RODRIGUES MARQUES"
}, {
    depId: "11451",
    depCadId: "2077",
    deputado: "FRANCISCO LOPES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Renunciou",
            sioDtInicio: "2019-10-30"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-30"
        }]
    },
    depNomeCompleto: "FRANCISCO JOSÉ DE ALMEIDA LOPES"
}, {
    depId: "10112",
    depCadId: "7036",
    deputado: "FRANCISCO PEREIRA OLIVEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-09-18",
            "sioDtFim": "2020-10-28"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-09-18"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-10-28"
        }]
    },
    depNomeCompleto: "FRANCISCO JOSÉ PEREIRA DE OLIVEIRA"
}, {
    depId: "11332",
    depCadId: "523",
    deputado: "FRANCISCO ROCHA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "17",
    circulo: "VILA REAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "FRANCISCO JOSE FERREIRA DA ROCHA"
}, {
    depId: "11347",
    depCadId: "5490",
    deputado: "HELGA CORREIA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "4",
            "carDes": "Vice-Secretário",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "HELGA ALEXANDRA FREIRE CORREIA"
}, {
    depId: "11255",
    depCadId: "2225",
    deputado: "HORTENSE MARTINS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "5",
    circulo: "CASTELO BRANCO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA HORTENSE NUNES MARTINS"
}, {
    depId: "11398",
    depCadId: "7274",
    deputado: "HUGO CARNEIRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "HUGO MIGUEL DE SOUSA CARNEIRO"
}, {
    depId: "11313",
    depCadId: "5934",
    deputado: "HUGO CARVALHO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "HUGO MIGUEL COSTA CARVALHO"
}, {
    depId: "11318",
    depCadId: "6013",
    deputado: "HUGO COSTA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "14",
    circulo: "SANTARÉM",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "HUGO MIGUEL CARVALHEIRO DOS SANTOS COSTA"
}, {
    depId: "11386",
    depCadId: "6542",
    deputado: "HUGO MARTINS DE CARVALHO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "HUGO DANIEL ALVES MARTINS DE CARVALHO"
}, {
    depId: "11242",
    depCadId: "5509",
    deputado: "HUGO OLIVEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "HUGO DANIEL MATOS DE OLIVEIRA"
}, {
    depId: "11370",
    depCadId: "6857",
    deputado: "HUGO PATRÍCIO OLIVEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "HUGO PATRÍCIO MARTINHO DE OLIVEIRA"
}, {
    depId: "11250",
    depCadId: "3935",
    deputado: "HUGO PIRES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "HUGO ALEXANDRE POLIDO PIRES"
}, {
    depId: "10470",
    depCadId: "6889",
    deputado: "ILÍDIA QUADRADO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "19",
    circulo: "AÇORES",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-11-24"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-11-24"
        }]
    },
    depNomeCompleto: "ILÍDIA MARIA DA SILVA FIALHO QUADRADO"
}, {
    depId: "11459",
    depCadId: "6864",
    deputado: "INÊS DE SOUSA REAL",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7235",
            partido: "PAN",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PAULA INÊS ALVES DE SOUSA REAL",
    "videos": {
        "pt_ar_wsgode_objectos_DadosVideo": {
            "tipo": "Videobiografia",
            "url": "http://media.parlamento.pt/site/XIVLEG/videobiografias/PAN_INES_DE_SOUSA_REAL.mp4"
        }
    }
}, {
    depId: "11291",
    depCadId: "4452",
    deputado: "ISABEL ALVES MOREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ISABEL DE LIMA MAYER ALVES MOREIRA"
}, {
    depId: "11360",
    depCadId: "6551",
    deputado: "ISABEL LOPES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "4",
    circulo: "BRAGANÇA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ISABEL MARIA LOPES"
}, {
    depId: "11377",
    depCadId: "6935",
    deputado: "ISABEL MEIRELES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ISABEL MARIA MEIRELES TEIXEIRA"
}, {
    depId: "11306",
    depCadId: "4133",
    deputado: "ISABEL ONETO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "MARIA ISABEL SOLNADO PORTO ONETO"
}, {
    depId: "11435",
    depCadId: "5854",
    deputado: "ISABEL PIRES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ISABEL CRISTINA RUA PIRES"
}, {
    depId: "11337",
    depCadId: "6536",
    deputado: "ISABEL RODRIGUES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "19",
    circulo: "AÇORES",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ISABEL MARIA DUARTE DE ALMEIDA RODRIGUES"
}, {
    depId: "11401",
    depCadId: "6544",
    deputado: "ISAURA MORAIS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "14",
    circulo: "SANTARÉM",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ISAURA MARIA ELIAS CRISÓSTOMO BERNARDINO MORAIS"
}, {
    depId: "10211",
    depCadId: "6048",
    deputado: "IVAN GONÇALVES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-09-06"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-09-06"
        }]
    },
    depNomeCompleto: "IVAN DA COSTA GONÇALVES"
}, {
    depId: "11265",
    depCadId: "1600",
    deputado: "JAMILA MADEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-09-18"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-09-18"
        }]
    },
    depNomeCompleto: "JAMILA BÁRBARA MADEIRA E MADEIRA"
}, {
    depId: "11445",
    depCadId: "210",
    deputado: "JERÓNIMO DE SOUSA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JERÓNIMO CARVALHO DE SOUSA"
}, {
    depId: "11464",
    depCadId: "6540",
    deputado: "JOACINE KATAR MOREIRA",
    depGP: {
        DadosSituacaoGP: [{
            gpId: "0",
            partido: "Ninsc",
            gpDtInicio: "2020-02-03",
            gpDtFim: "2021-07-01"
        }, {
            gpId: "7237",
            partido: "L",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2020-02-03"
        }]
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOACINE ELYSEES KATAR TAVARES MOREIRA"
}, {
    depId: "10093",
    depCadId: "6914",
    deputado: "JOANA BENTO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "5",
    circulo: "CASTELO BRANCO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "JOANA MORGADINHO BENTO"
}, {
    depId: "11309",
    depCadId: "2885",
    deputado: "JOANA LIMA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOANA FERNANDA FERREIRA LIMA"
}, {
    depId: "11441",
    depCadId: "6063",
    deputado: "JOANA MORTÁGUA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOANA RODRIGUES MORTÁGUA"
}, {
    depId: "11243",
    depCadId: "7046",
    deputado: "JOANA SÁ PEREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOANA ISABEL MARTINS RIGUEIRO DE SÁ PEREIRA"
}, {
    depId: "11260",
    depCadId: "6880",
    deputado: "JOÃO ATAÍDE",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "6",
    circulo: "COIMBRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Falecido/a",
            sioDtInicio: "2020-02-21"
        }, {
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-02-21"
        }]
    },
    depNomeCompleto: "JOÃO ALBINO RAINHO ATAÍDE DAS NEVES"
}, {
    depId: "11333",
    depCadId: "6546",
    deputado: "JOÃO AZEVEDO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "18",
    circulo: "VISEU",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOÃO NUNO FERREIRA GONÇALVES AZEVEDO"
}, {
    depId: "11339",
    depCadId: "6158",
    deputado: "JOÃO AZEVEDO CASTRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "19",
    circulo: "AÇORES",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOÃO FERNANDO BRUM DE AZEVEDO E CASTRO",
    "videos": {
        "pt_ar_wsgode_objectos_DadosVideo": {
            "tipo": "Videobiografia",
            "url": "http://media.parlamento.pt/site/XIVLEG/videobiografias/PS_JOAO_AZEVEDO_CASTRO.mp4"
        }
    }
}, {
    depId: "11465",
    depCadId: "6550",
    deputado: "JOÃO COTRIM DE FIGUEIREDO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7238",
            partido: "IL",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOÃO FERNANDO COTRIM DE FIGUEIREDO"
}, {
    depId: "11443",
    depCadId: "5524",
    deputado: "JOÃO DIAS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "2",
    circulo: "BEJA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOÃO MANUEL ILDEFONSO DIAS"
}, {
    depId: "11373",
    depCadId: "1529",
    deputado: "JOÃO GOMES MARQUES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOÃO MANUEL GOMES MARQUES"
}, {
    depId: "10866",
    depCadId: "2867",
    deputado: "JOÃO GONÇALVES PEREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7234",
            partido: "CDS-PP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Renunciou",
            sioDtInicio: "2021-04-05"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-01-27"
        }, {
            sioDes: "Efetivo Definitivo",
            sioDtInicio: "2020-01-27",
            "sioDtFim": "2021-04-05"
        }]
    },
    depNomeCompleto: "JOÃO PEDRO GUIMARÃES GONÇALVES PEREIRA"
}, {
    depId: "10098",
    depCadId: "64",
    deputado: "JOÃO GOUVEIA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "6",
    circulo: "COIMBRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-02-21"
        }, {
            sioDes: "Efetivo Definitivo",
            sioDtInicio: "2020-02-21"
        }]
    },
    depNomeCompleto: "JOÃO EDUARDO DIAS MADEIRA GOUVEIA"
}, {
    depId: "10138",
    depCadId: "6785",
    deputado: "JOÃO MIGUEL NICOLAU",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "JOÃO MIGUEL MAÇARICO NICOLAU"
}, {
    depId: "11402",
    depCadId: "1706",
    deputado: "JOÃO MOURA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "14",
    circulo: "SANTARÉM",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOÃO MANUEL MOURA RODRIGUES"
}, {
    depId: "11444",
    depCadId: "2234",
    deputado: "JOÃO OLIVEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "7",
    circulo: "ÉVORA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-05-15",
            "sioDtFim": "2020-06-22"
        }, {
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-07-04",
            "sioDtFim": "2020-08-04"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-05-15"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-06-22",
            "sioDtFim": "2020-07-04"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-08-04"
        }]
    },
    depNomeCompleto: "JOÃO GUILHERME RAMOS ROSA DE OLIVEIRA"
}, {
    depId: "11304",
    depCadId: "2129",
    deputado: "JOÃO PAULO CORREIA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOÃO PAULO MOREIRA CORREIA"
}, {
    depId: "11275",
    depCadId: "456",
    deputado: "JOÃO PAULO PEDROSA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOÃO PAULO FETEIRA PEDROSA"
}, {
    depId: "11453",
    depCadId: "1657",
    deputado: "JOÃO PINHO DE ALMEIDA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7234",
            partido: "CDS-PP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOÃO RODRIGO PINHO DE ALMEIDA"
}, {
    depId: "11429",
    depCadId: "4022",
    deputado: "JOÃO VASCONCELOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOÃO MANUEL DUARTE VASCONCELOS"
}, {
    depId: "11249",
    depCadId: "419",
    deputado: "JOAQUIM BARRETO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOAQUIM BARROSO DE ALMEIDA BARRETO"
}, {
    depId: "11267",
    depCadId: "6884",
    deputado: "JORGE BOTELHO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-26"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }]
    },
    depNomeCompleto: "JORGE MANUEL DO NASCIMENTO BOTELHO"
}, {
    depId: "11434",
    depCadId: "4194",
    deputado: "JORGE COSTA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JORGE DUARTE GONÇALVES DA COSTA"
}, {
    depId: "11254",
    depCadId: "5587",
    deputado: "JORGE GOMES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "4",
    circulo: "BRAGANÇA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JORGE MANUEL NOGUEIRO GOMES"
}, {
    depId: "11290",
    depCadId: "179",
    deputado: "JORGE LACÃO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JORGE LACÃO COSTA"
}, {
    depId: "11355",
    depCadId: "2665",
    deputado: "JORGE PAULO OLIVEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JORGE PAULO DA SILVA OLIVEIRA"
}, {
    depId: "11407",
    depCadId: "6545",
    deputado: "JORGE SALGUEIRO MENDES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "16",
    circulo: "VIANA DO CASTELO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JORGE SALGUEIRO MENDES"
}, {
    depId: "11266",
    depCadId: "183",
    deputado: "JOSÉ APOLINÁRIO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Renunciou",
            sioDtInicio: "2020-10-28"
        }, {
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-09-18"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-09-18",
            "sioDtFim": "2020-10-28"
        }]
    },
    depNomeCompleto: "JOSÉ APOLINÁRIO NUNES PORTADA"
}, {
    depId: "11390",
    depCadId: "6973",
    deputado: "JOSÉ CANCELA MOURA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOSÉ JOAQUIM CANCELA MOURA"
}, {
    depId: "10173",
    depCadId: "6731",
    deputado: "JOSÉ CARLOS BARBOSA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }]
    },
    depNomeCompleto: "JOSÉ CARLOS RIBEIRO BARBOSA"
}, {
    depId: "11423",
    depCadId: "77",
    deputado: "JOSÉ CESÁRIO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "22",
    circulo: "FORA DA EUROPA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOSÉ DE ALMEIDA CESÁRIO"
}, {
    depId: "11302",
    depCadId: "2105",
    deputado: "JOSÉ LUÍS CARNEIRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "JOSÉ LUÍS PEREIRA CARNEIRO"
}, {
    depId: "11463",
    depCadId: "780",
    deputado: "JOSÉ LUÍS FERREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7236",
            partido: "PEV",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOSÉ LUÍS TEIXEIRA FERREIRA"
}, {
    depId: "11312",
    depCadId: "189",
    deputado: "JOSÉ MAGALHÃES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOSÉ MANUEL SANTOS DE MAGALHÃES"
}, {
    depId: "10222",
    depCadId: "1432",
    deputado: "JOSÉ MANUEL CARPINTEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "16",
    circulo: "VIANA DO CASTELO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "JOSÉ MANUEL VAZ CARPINTEIRA"
}, {
    depId: "11428",
    depCadId: "3998",
    deputado: "JOSÉ MANUEL PUREZA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "6",
    circulo: "COIMBRA",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "2",
            "carDes": "Vice-Presidente",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOSÉ MANUEL MARQUES DA SILVA PUREZA"
}, {
    depId: "11426",
    depCadId: "3951",
    deputado: "JOSÉ MARIA CARDOSO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOSÉ MARIA BARBOSA CARDOSO"
}, {
    depId: "11247",
    depCadId: "6862",
    deputado: "JOSÉ MENDES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-11-07"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-11-07"
        }]
    },
    depNomeCompleto: "JOSÉ FERNANDO GOMES MENDES"
}, {
    depId: "11437",
    depCadId: "2433",
    deputado: "JOSÉ MOURA SOEIRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOSÉ BORGES DE ARAÚJO DE MOURA SOEIRO"
}, {
    depId: "11336",
    depCadId: "4210",
    deputado: "JOSÉ RUI CRUZ",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "18",
    circulo: "VISEU",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOSÉ RUI ALVES DUARTE CRUZ"
}, {
    depId: "11375",
    depCadId: "271",
    deputado: "JOSÉ SILVANO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "JOSÉ MARIA LOPES SILVANO"
}, {
    depId: "11338",
    depCadId: "6157",
    deputado: "LARA MARTINHO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "19",
    circulo: "AÇORES",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "LARA FERNANDES MARTINHO"
}, {
    depId: "11383",
    depCadId: "5759",
    deputado: "LINA LOPES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "4",
            "carDes": "Vice-Secretário",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "LINA MARIA CARDOSO LOPES"
}, {
    depId: "11334",
    depCadId: "6129",
    deputado: "LÚCIA ARAÚJO SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "18",
    circulo: "VISEU",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "LÚCIA FERNANDA FERREIRA ARAÚJO SILVA"
}, {
    depId: "11263",
    depCadId: "197",
    deputado: "LUÍS CAPOULAS SANTOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "7",
    circulo: "ÉVORA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "LUÍS MANUEL CAPOULAS DOS SANTOS"
}, {
    depId: "11269",
    depCadId: "5677",
    deputado: "LUÍS GRAÇA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "LUÍS MIGUEL DA GRAÇA NUNES"
}, {
    depId: "11410",
    depCadId: "4364",
    deputado: "LUÍS LEITE RAMOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "17",
    circulo: "VILA REAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "LUÍS MANUEL MORAIS LEITE RAMOS"
}, {
    depId: "11378",
    depCadId: "1239",
    deputado: "LUÍS MARQUES GUEDES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "LUÍS MARIA DE BARROS SERRA MARQUES GUEDES"
}, {
    depId: "11438",
    depCadId: "5949",
    deputado: "LUÍS MONTEIRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "LUÍS VALENTIM PEREIRA MONTEIRO",
    "videos": {
        "pt_ar_wsgode_objectos_DadosVideo": {
            "tipo": "Videobiografia",
            "url": "http://media.parlamento.pt/site/XIVLEG/videobiografias/BE_LUIS_MONTEIRO.mp4"
        }
    }
}, {
    depId: "11296",
    depCadId: "4126",
    deputado: "LUÍS MOREIRA TESTA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "12",
    circulo: "PORTALEGRE",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "LUÍS DAVID TRINDADE MOREIRA TESTA"
}, {
    depId: "11252",
    depCadId: "5531",
    deputado: "LUÍS SOARES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "LUÍS MIGUEL DE FREITAS MARQUES CARVALHO SOARES"
}, {
    depId: "10559",
    depCadId: "6214",
    deputado: "MANUEL AZENHA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-07-21"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-08-25",
            "sioDtFim": "2020-12-18"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2021-01-17"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-07-21",
            "sioDtFim": "2020-08-25"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-12-18",
            "sioDtFim": "2021-01-17"
        }]
    },
    depNomeCompleto: "MANUEL ANTÓNIO AZENHA SANTOS PEREIRA"
}, {
    depId: "10198",
    depCadId: "6976",
    deputado: "MANUEL DOS SANTOS AFONSO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "14",
    circulo: "SANTARÉM",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "MANUEL ANTÓNIO DOS SANTOS AFONSO"
}, {
    depId: "10199",
    depCadId: "7018",
    deputado: "MARA COELHO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "14",
    circulo: "SANTARÉM",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "MARA LÚCIA LAGRIMINHA COELHO"
}, {
    depId: "11400",
    depCadId: "6595",
    deputado: "MÁRCIA PASSOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MÁRCIA ISABEL DUARTE PASSOS RESENDE"
}, {
    depId: "11284",
    depCadId: "2209",
    deputado: "MARCOS PERESTRELLO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARCOS DA CUNHA E LORENA PERESTRELLO DE VASCONCELLOS"
}, {
    depId: "11369",
    depCadId: "6207",
    deputado: "MARGARIDA BALSEIRO LOPES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANA MARGARIDA BALSEIRO DE SOUSA LOPES"
}, {
    depId: "11325",
    depCadId: "1594",
    deputado: "MARIA ANTÓNIA DE ALMEIDA SANTOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA ANTÓNIA MORENO AREIAS DE ALMEIDA SANTOS"
}, {
    depId: "11248",
    depCadId: "6893",
    deputado: "MARIA BEGONHA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "CRISTINA MARIA DA FONSECA SANTOS BACELAR BEGONHA"
}, {
    depId: "10238",
    depCadId: "6980",
    deputado: "MARIA DA GRAÇA REIS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "18",
    circulo: "VISEU",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "MARIA DA GRAÇA DA MOUTA SILVA REIS"
}, {
    depId: "11283",
    depCadId: "695",
    deputado: "MARIA DA LUZ ROSINHA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "3",
            "carDes": "Secretário",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA DA LUZ GAMEIRO BEJA FERREIRA ROSINHA"
}, {
    depId: "11356",
    depCadId: "7011",
    deputado: "MARIA GABRIELA FONSECA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA GABRIELA DA CUNHA BAPTISTA RODRIGUES DA FONSECA"
}, {
    depId: "11391",
    depCadId: "5984",
    deputado: "MARIA GERMANA ROCHA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA GERMANA DE SOUSA ROCHA"
}, {
    depId: "11268",
    depCadId: "6919",
    deputado: "MARIA JOAQUINA MATOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA JOAQUINA BAPTISTA QUINTANS DE MATOS"
}, {
    depId: "11439",
    depCadId: "5952",
    deputado: "MARIA MANUEL ROLA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA MANUEL DE ALMEIDA ROLA"
}, {
    depId: "11431",
    depCadId: "4557",
    deputado: "MARIANA MORTÁGUA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIANA RODRIGUES MORTÁGUA"
}, {
    depId: "11462",
    depCadId: "6933",
    deputado: "MARIANA SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7236",
            partido: "PEV",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIANA DA CONCEIÇÃO PEREIRA DA SILVA"
}, {
    depId: "11329",
    depCadId: "6870",
    deputado: "MARINA GONÇALVES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "16",
    circulo: "VIANA DO CASTELO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-09-18"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-09-18"
        }]
    },
    depNomeCompleto: "MARINA SOLA GONÇALVES"
}, {
    depId: "11342",
    depCadId: "6899",
    deputado: "MARTA FREITAS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "20",
    circulo: "MADEIRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARTA LUÍSA DE FREITAS"
}, {
    depId: "10168",
    depCadId: "6877",
    deputado: "MARTINA JESUS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "12",
    circulo: "PORTALEGRE",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-11-07"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-11-07"
        }]
    },
    depNomeCompleto: "MARTINA PIRES MARCELINO DE JESUS"
}, {
    depId: "11295",
    depCadId: "6706",
    deputado: "MIGUEL MATOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MIGUEL DE OLIVEIRA PIRES DA COSTA MATOS"
}, {
    depId: "11424",
    depCadId: "4162",
    deputado: "MOISÉS FERREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MOISÉS SALVADOR COELHO FERREIRA"
}, {
    depId: "11362",
    depCadId: "6531",
    deputado: "MÓNICA QUINTELA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "6",
    circulo: "COIMBRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MÓNICA CLÁUDIA DE CASTRO QUINTELA"
}, {
    depId: "11425",
    depCadId: "3928",
    deputado: "NELSON PERALTA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "3",
            "carDes": "Secretário",
            "carDtInicio": "2019-10-25"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "NELSON RICARDO ESTEVES PERALTA"
}, {
    depId: "10961",
    depCadId: "6896",
    deputado: "NELSON SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7235",
            partido: "PAN",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-09-23"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-10-24",
            "sioDtFim": "2021-06-06"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-09-23",
            "sioDtFim": "2020-10-24"
        }, {
            sioDes: "Efetivo Definitivo",
            sioDtInicio: "2021-06-06"
        }]
    },
    depNomeCompleto: "NELSON JOSÉ BASÍLIO SILVA"
}, {
    depId: "11264",
    depCadId: "5635",
    deputado: "NORBERTO PATINHO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "7",
    circulo: "ÉVORA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "NORBERTO ANTÓNIO LOPES PATINHO"
}, {
    depId: "11257",
    depCadId: "6878",
    deputado: "NUNO FAZENDA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "5",
    circulo: "CASTELO BRANCO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "NUNO JORGE CARDONA FAZENDA DE ALMEIDA"
}, {
    depId: "11404",
    depCadId: "6548",
    deputado: "NUNO MIGUEL CARVALHO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "NUNO MIGUEL OLIVEIRA DE CARVALHO"
}, {
    depId: "10174",
    depCadId: "5937",
    deputado: "NUNO MIGUEL COELHO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }]
    },
    depNomeCompleto: "NUNO MIGUEL RIBEIRO COELHO"
}, {
    depId: "11253",
    depCadId: "2215",
    deputado: "NUNO SÁ",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "NUNO ANDRÉ ARAÚJO DOS SANTOS REIS E SÁ"
}, {
    depId: "11367",
    depCadId: "6885",
    deputado: "OFÉLIA RAMOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "OFÉLIA ISABEL ANDRÉS DA CONCEIÇÃO RAMOS"
}, {
    depId: "11341",
    depCadId: "6865",
    deputado: "OLAVO CÂMARA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "20",
    circulo: "MADEIRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "OLAVO BALONA GOUVEIA CÂMARA"
}, {
    depId: "11372",
    depCadId: "4055",
    deputado: "OLGA SILVESTRE",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "OLGA CRISTINA FINO SILVESTRE"
}, {
    depId: "11251",
    depCadId: "3936",
    deputado: "PALMIRA MACIEL",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PALMIRA MACIEL FERNANDES DA COSTA"
}, {
    depId: "11452",
    depCadId: "4197",
    deputado: "PAULA SANTOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PAULA ALEXANDRA SOBRAL GUERREIRO SANTOS BARBOSA"
}, {
    depId: "11364",
    depCadId: "6881",
    deputado: "PAULO LEITÃO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "6",
    circulo: "COIMBRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PAULO JORGE CARVALHO LEITÃO"
}, {
    depId: "10143",
    depCadId: "5836",
    deputado: "PAULO MARQUES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-09-18"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-09-18"
        }]
    },
    depNomeCompleto: "PAULO JORGE DUARTE MARQUES"
}, {
    depId: "11417",
    depCadId: "6537",
    deputado: "PAULO MONIZ",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "19",
    circulo: "AÇORES",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PAULO ALEXANDRE LUIS BOTELHO MONIZ"
}, {
    depId: "10478",
    depCadId: "6178",
    deputado: "PAULO NEVES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "20",
    circulo: "MADEIRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PAULO ALEXANDRE DE SOUSA NEVES"
}, {
    depId: "11343",
    depCadId: "1741",
    deputado: "PAULO PISCO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "21",
    circulo: "EUROPA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PAULO ALEXANDRE DE CARVALHO PISCO"
}, {
    depId: "10265",
    depCadId: "7286",
    deputado: "PAULO PORTO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "22",
    circulo: "FORA DA EUROPA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "PAULO PORTO FERNANDES"
}, {
    depId: "11396",
    depCadId: "4392",
    deputado: "PAULO RIOS DE OLIVEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PAULO CÉSAR RIOS DE OLIVEIRA"
}, {
    depId: "11414",
    depCadId: "1738",
    deputado: "PEDRO ALVES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "18",
    circulo: "VISEU",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PEDRO FILIPE DOS SANTOS ALVES"
}, {
    depId: "11292",
    depCadId: "6637",
    deputado: "PEDRO CEGONHO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PEDRO MIGUEL DE SOUSA BARROCAS MARTINHO CEGONHO"
}, {
    depId: "11259",
    depCadId: "1893",
    deputado: "PEDRO COIMBRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "6",
    circulo: "COIMBRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PEDRO ARTUR BARREIRINHAS SALES GUEDES COIMBRA"
}, {
    depId: "11288",
    depCadId: "4453",
    deputado: "PEDRO DELGADO ALVES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PEDRO FILIPE MOTA DELGADO SIMÕES ALVES"
}, {
    depId: "11244",
    depCadId: "416",
    deputado: "PEDRO DO CARMO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "2",
    circulo: "BEJA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PEDRO NUNO RAPOSO PRAZERES DO CARMO"
}, {
    depId: "11432",
    depCadId: "3926",
    deputado: "PEDRO FILIPE SOARES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2021-04-26",
            "sioDtFim": "2021-06-12"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2021-04-26"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2021-06-12"
        }]
    },
    depNomeCompleto: "PEDRO FILIPE GOMES SOARES"
}, {
    depId: "10867",
    depCadId: "4429",
    deputado: "PEDRO MORAIS SOARES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7234",
            partido: "CDS-PP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2021-04-05"
        }, {
            sioDes: "Efetivo Definitivo",
            sioDtInicio: "2021-04-05"
        }]
    },
    depNomeCompleto: "ANTÓNIO PEDRO CARVALHO MORAIS SOARES"
}, {
    depId: "11376",
    depCadId: "629",
    deputado: "PEDRO PINTO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PEDRO AUGUSTO CUNHA PINTO"
}, {
    depId: "11382",
    depCadId: "3945",
    deputado: "PEDRO RODRIGUES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PEDRO NUNO MAZEDA PEREIRA NETO RODRIGUES"
}, {
    depId: "11371",
    depCadId: "1992",
    deputado: "PEDRO ROQUE",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANTÓNIO PEDRO ROQUE DA VISITAÇÃO OLIVEIRA"
}, {
    depId: "11310",
    depCadId: "7273",
    deputado: "PEDRO SOUSA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PEDRO MANUEL VALENTE DE SOUSA"
}, {
    depId: "10073",
    depCadId: "7161",
    deputado: "POMPEU MARTINS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-11-02"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-11-07"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-11-02",
            "sioDtFim": "2020-11-07"
        }]
    },
    depNomeCompleto: "POMPEU MIGUEL NOVAL DA ROCHA MARTINS"
}, {
    depId: "11240",
    depCadId: "469",
    deputado: "PORFÍRIO SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "PORFÍRIO SIMOES DE CARVALHO E SILVA"
}, {
    depId: "10099",
    depCadId: "7034",
    deputado: "RAQUEL FERREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "6",
    circulo: "COIMBRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-02-21"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-02-21"
        }]
    },
    depNomeCompleto: "RAQUEL DE FÁTIMA CARDOSO FERREIRA"
}, {
    depId: "11272",
    depCadId: "6534",
    deputado: "RAUL MIGUEL CASTRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "RAUL MIGUEL DE CASTRO"
}, {
    depId: "11381",
    depCadId: "4441",
    deputado: "RICARDO BAPTISTA LEITE",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "RICARDO AUGUSTUS GUERREIRO BAPTISTA LEITE"
}, {
    depId: "11293",
    depCadId: "5835",
    deputado: "RICARDO LEÃO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "RICARDO JORGE COLAÇO LEÃO"
}, {
    depId: "11297",
    depCadId: "6552",
    deputado: "RICARDO PINHEIRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "12",
    circulo: "PORTALEGRE",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-11-07"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-11-07"
        }]
    },
    depNomeCompleto: "RICARDO MIGUEL FURTADO PINHEIRO"
}, {
    depId: "11430",
    depCadId: "6533",
    deputado: "RICARDO VICENTE",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-07-21",
            "sioDtFim": "2020-08-25"
        }, {
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-12-18",
            "sioDtFim": "2021-01-17"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-07-21"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-08-25",
            "sioDtFim": "2020-12-18"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2021-01-17"
        }]
    },
    depNomeCompleto: "RICARDO SILVA VICENTE"
}, {
    depId: "10136",
    depCadId: "2273",
    deputado: "RITA BORGES MADEIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-06-15"
        }, {
            sioDes: "Efetivo Definitivo",
            sioDtInicio: "2020-06-15"
        }]
    },
    depNomeCompleto: "RITA MAFALDA NOBRE BORGES MADEIRA"
}, {
    depId: "11294",
    depCadId: "6682",
    deputado: "ROMUALDA FERNANDES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ROMUALDA MARIA DA CONCEIÇÃO MARTINS NUNES FERNANDES"
}, {
    depId: "11299",
    depCadId: "6867",
    deputado: "ROSÁRIO GAMBÔA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MARIA DO ROSÁRIO GAMBÔA LOPES DE CARVALHO"
}, {
    depId: "11366",
    depCadId: "5693",
    deputado: "RUI CRISTINA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "8",
    circulo: "FARO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "RUI CELESTINO DOS SANTOS CRISTINA"
}, {
    depId: "10268",
    depCadId: "5492",
    deputado: "RUI CRUZ",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-06-08"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-07-13",
            "sioDtFim": "2020-11-04"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-12-04"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-06-08",
            "sioDtFim": "2020-07-13"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-11-04",
            "sioDtFim": "2020-12-04"
        }]
    },
    depNomeCompleto: "RUI MIGUEL ROCHA DA CRUZ"
}, {
    depId: "11387",
    depCadId: "132",
    deputado: "RUI RIO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "RUI FERNANDO DA SILVA RIO"
}, {
    depId: "11358",
    depCadId: "5581",
    deputado: "RUI SILVA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "RUI MANUEL FERREIRA DA SILVA"
}, {
    depId: "11442",
    depCadId: "4196",
    deputado: "SANDRA CUNHA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7232",
            partido: "BE",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Renunciou",
            sioDtInicio: "2021-04-14"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2021-04-14"
        }]
    },
    depNomeCompleto: "SANDRA MESTRE DA CUNHA",
    "videos": {
        "pt_ar_wsgode_objectos_DadosVideo": {
            "tipo": "Videobiografia",
            "url": "http://media.parlamento.pt/site/XIVLEG/videobiografias/BE_SANDRA_CUNHA.mp4"
        }
    }
}, {
    depId: "11380",
    depCadId: "5749",
    deputado: "SANDRA PEREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "SANDRA CRISTINA DE SEQUEIROS PEREIRA"
}, {
    depId: "11271",
    depCadId: "1611",
    deputado: "SANTINHO PACHECO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "9",
    circulo: "GUARDA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "ANTÓNIO JOSÉ SANTINHO PACHECO"
}, {
    depId: "11421",
    depCadId: "6176",
    deputado: "SARA MADRUGA DA COSTA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "20",
    circulo: "MADEIRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "SARA MARTINS MARQUES DOS SANTOS MADRUGA DA COSTA"
}, {
    depId: "10124",
    depCadId: "6956",
    deputado: "SARA VELEZ",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "10",
    circulo: "LEIRIA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "SARA MARIA BELO VELEZ"
}, {
    depId: "11420",
    depCadId: "6866",
    deputado: "SÉRGIO MARQUES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "20",
    circulo: "MADEIRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "MÁRIO SÉRGIO QUARESMA GONÇALVES MARQUES"
}, {
    depId: "11286",
    depCadId: "1264",
    deputado: "SÉRGIO SOUSA PINTO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "SÉRGIO PAULO MENDES DE SOUSA PINTO"
}, {
    depId: "10223",
    depCadId: "6977",
    deputado: "SÍLVIA TORRES",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "16",
    circulo: "VIANA DO CASTELO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-09-18"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-09-18"
        }]
    },
    depNomeCompleto: "SÍLVIA MANUELA CARNEIRO AMORIM TORRES"
}, {
    depId: "10172",
    depCadId: "6710",
    deputado: "SOFIA ANDRADE",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }]
    },
    depNomeCompleto: "ISABEL SOFIA ALVES ANDRADE"
}, {
    depId: "10208",
    depCadId: "6049",
    deputado: "SOFIA ARAÚJO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "15",
    circulo: "SETÚBAL",
    legDes: "XIV",
    "depCargo": {
        "pt_ar_wsgode_objectos_DadosCargoDeputado": {
            "carId": "4",
            "carDes": "Vice-Secretário",
            "carDtInicio": "2019-10-26"
        }
    },
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-06-15"
        }, {
            sioDes: "Efetivo Definitivo",
            sioDtInicio: "2020-06-15"
        }]
    },
    depNomeCompleto: "ANA SOFIA FERREIRA ARAÚJO"
}, {
    depId: "11394",
    depCadId: "7128",
    deputado: "SOFIA MATOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "SOFIA HELENA CORREIA FERNANDES SOUSA MATOS"
}, {
    depId: "10415",
    depCadId: "6043",
    deputado: "SÓNIA FERREIRA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7231",
            partido: "PSD",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "14",
    circulo: "SANTARÉM",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-11-18"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2019-12-07",
            "sioDtFim": "2020-04-02"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-05-16"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-11-18",
            "sioDtFim": "2019-12-07"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-04-02",
            "sioDtFim": "2020-05-16"
        }]
    },
    depNomeCompleto: "SÓNIA PATRÍCIA DA SILVA FERREIRA QUINTINO"
}, {
    depId: "11246",
    depCadId: "1028",
    deputado: "SÓNIA FERTUZINHOS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2020-11-02",
            "sioDtFim": "2020-12-03"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-11-02"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-12-03"
        }]
    },
    depNomeCompleto: "SÓNIA ERMELINDA MATOS DA SILVA FERTUZINHOS"
}, {
    depId: "11285",
    depCadId: "1944",
    deputado: "SUSANA AMADOR",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suspenso(Eleito)",
            sioDtInicio: "2019-10-26",
            "sioDtFim": "2020-09-18"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo",
            sioDtInicio: "2020-09-18"
        }]
    },
    depNomeCompleto: "SUSANA DE FÁTIMA CARVALHO AMADOR"
}, {
    depId: "11241",
    depCadId: "6962",
    deputado: "SUSANA CORREIA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "1",
    circulo: "AVEIRO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "SUSANA ALEXANDRA LOPES CORREIA"
}, {
    depId: "11245",
    depCadId: "6861",
    deputado: "TELMA GUERREIRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "2",
    circulo: "BEJA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "TELMA CRISTINA FELIZARDO GUERREIRO"
}, {
    depId: "11454",
    depCadId: "1655",
    deputado: "TELMO CORREIA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7234",
            partido: "CDS-PP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "3",
    circulo: "BRAGA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "TELMO AUGUSTO GOMES DE NORONHA CORREIA"
}, {
    depId: "11305",
    depCadId: "2445",
    deputado: "TIAGO BARBOSA RIBEIRO",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "13",
    circulo: "PORTO",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "TIAGO BARBOSA RIBEIRO"
}, {
    depId: "11262",
    depCadId: "6949",
    deputado: "TIAGO ESTEVÃO MARTINS",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "6",
    circulo: "COIMBRA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: {
            sioDes: "Efetivo",
            sioDtInicio: "2019-10-25"
        }
    },
    depNomeCompleto: "TIAGO ESTEVÃO MARTINS"
}, {
    depId: "10142",
    depCadId: "6834",
    deputado: "VERA BRAZ",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7230",
            partido: "PS",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "11",
    circulo: "LISBOA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2019-10-26"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2019-10-26"
        }]
    },
    depNomeCompleto: "VERA LÚCIA RAIMUNDO BRAZ DOS SANTOS"
}, {
    depId: "10700",
    depCadId: "6854",
    deputado: "VERA PRATA",
    depGP: {
        DadosSituacaoGP: {
            gpId: "7233",
            partido: "PCP",
            gpDtInicio: "2019-10-25",
            gpDtFim: "2021-07-01"
        }
    },
    depCPId: "7",
    circulo: "ÉVORA",
    legDes: "XIV",
    depSituacao: {
        DadosSituacaoDeputado: [{
            sioDes: "Suplente",
            sioDtInicio: "2019-10-25",
            "sioDtFim": "2020-05-15"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-06-22",
            "sioDtFim": "2020-07-04"
        }, {
            sioDes: "Suplente",
            sioDtInicio: "2020-08-04"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-05-15",
            "sioDtFim": "2020-06-22"
        }, {
            sioDes: "Efetivo Temporário",
            sioDtInicio: "2020-07-04",
            "sioDtFim": "2020-08-04"
        }]
    },
    depNomeCompleto: "VERA LÚCIA SERELHA PRATA"
}];

Deputy.create(deputies)
    .then(deputiesFromDB => {
        console.log(`Created ${deputiesFromDB.length} deputies`);
        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating deputies from the DB: ${err}`));
