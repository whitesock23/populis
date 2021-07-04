const mongoose = require('mongoose');
const Deputy = require('../models/Deputy.model');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/populis";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const deputies = [
    {
        "id": 3188,
        "shortname": "Abel Almeida",
        "slug": "abel-almeida",
        "name": "Abel Augusto de Sousa Gomes de Almeida",
        "gender": "M",
        "party": "CDS",
        "active": false,
        "birthdate": null,
        "occupation": "",
        "occupation2": "",
        "url_parlamento": "http://www.parlamento.pt/DeputadoGP/Paginas/Biografia.aspx?BID=3188",
        "url_democratica": "http://demo.cratica.org/deputados/abel-almeida/",
        "url_hemiciclo": "http://hemiciclo.pt/cds/3188",
        "image_url": "http://app.parlamento.pt/webutils/getimage.aspx?id=3188&type=deputado",
        "mandates": [
          {
            "legislature": 4,
            "party": "CDS",
            "constituency": "Lisboa",
            "start_date": "1986-01-06",
            "end_date": "1987-08-13",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=3188&lg=IV"
          },
          {
            "legislature": 3,
            "party": "CDS",
            "constituency": "Lisboa",
            "start_date": "1983-05-31",
            "end_date": "1983-06-09",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=3188&lg=III"
          }
        ]
      },
      {
        "id": 2167,
        "shortname": "Abel Baptista",
        "slug": "abel-baptista",
        "name": "Abel Lima Baptista",
        "gender": "M",
        "party": "CDS-PP",
        "active": false,
        "birthdate": "1963-10-13",
        "occupation": "Funcionário Autárquico; Jurista;",
        "occupation2": "",
        "jobs": [
          "Director do Departamento da C.M. de Lamego",
          "Director do Centro Distrital de Solidariedade de Viana do Castelo",
          "Chefe de Divisão da C.M. da Nazaré",
          "Vereador da C. M. de Ponte de Lima",
          "Deputado na X Legislatura",
          "Deputado na XI Legislatura",
          "Deputado da XII Legislatura",
          "Presidente da Assembleia Municipal de Ponte de Lima",
          "Secretário da Mesa da Assembleia da República",
          "Presidente da Comissão de Educação Ciência e Cultura"
        ],
        "current_jobs": [
          "Deputado na XIII Legislatura",
          "Vereador da Câmara Municipal de Monção"
        ],
        "url_parlamento": "http://www.parlamento.pt/DeputadoGP/Paginas/Biografia.aspx?BID=2167",
        "url_democratica": "http://demo.cratica.org/deputados/abel-baptista/",
        "url_hemiciclo": "http://hemiciclo.pt/cds/2167",
        "image_url": "http://app.parlamento.pt/webutils/getimage.aspx?id=2167&type=deputado",
        "mandates": [
          {
            "legislature": 13,
            "party": "CDS-PP",
            "constituency": "Viana do Castelo",
            "start_date": "2015-10-23",
            "end_date": "2016-09-16",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=2167&lg=XIII"
          },
          {
            "legislature": 12,
            "party": "CDS-PP",
            "constituency": "Viana do Castelo",
            "start_date": "2011-06-20",
            "end_date": "2015-10-23",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=2167&lg=XII"
          },
          {
            "legislature": 11,
            "party": "CDS-PP",
            "constituency": "Viana do Castelo",
            "start_date": "2009-10-15",
            "end_date": "2011-06-20",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=2167&lg=XI"
          },
          {
            "legislature": 10,
            "party": "CDS-PP",
            "constituency": "Viana do Castelo",
            "start_date": "2005-05-19",
            "end_date": "2009-10-15",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=2167&lg=X"
          }
        ]
      },
      {
        "id": 1957,
        "shortname": "Abílio Almeida Costa",
        "slug": "abilio-almeida-costa",
        "name": "Abílio Jorge Leite Almeida Costa",
        "gender": "M",
        "party": "PSD",
        "active": false,
        "birthdate": "1941-06-13",
        "occupation": "Empresário",
        "occupation2": "",
        "jobs": [
          "Deputado na IX legislatura",
          "Sócio n.º 2 - Rancho Folclórico de São Martinho do Campo - Presidente da Mesa da Assembleia Geral (1979-82), Colégio Santa Teresa de Jesus - Santo Tirso - Presidente da Direcção da Associação de Pais (1987-90), Presidente da Mesa da Assembleia Geral (1990-94)",
          "Secretário da Direcção da Casa de Beneficência \"\"Manuel Dias Machado\"\" - São Martinho do Campo",
          "Câmara Municipal de Santo Tirso - Deputado da Assembleia Municipal (1972-82)",
          "Vereador da Câmara Municipal (1982-89 e 1997-2001)",
          "Secretário da C.P.C./PSD de Santo Tirso (1982-83)",
          "Vice-Presidente da C.P.C./PSD de Santo Tirso (1984-85)",
          "Presidente da C.P.C./PSD de Santo Tirso (1987-97)",
          "Director Financeiro da C.P.C./PSD/Porto (1991-2002)",
          "Membro do Conselho Nacional do PSD (1996-2000)",
          "Sócio n.º 11, Casa de Beneficência \"\"Manuel Dias Machado\"\" - Secretário da Direcção (1981-2002)",
          "Sócio n.º 1503 - Irmandade e Santa Casa da Misericórdia - Mesário da Mesa Administrativa (1990-1996)",
          "Sócio Fundador - Lions Clube de São Martinho do Campo - Secretário (1982-83), Presidente (1984-85), Tesoureiro (1989-90), Past Presidente (1990-91)",
          "Sócio desde 30/06/1992 - Rotary Clube de Santo Tirso - Secretário (1996-97), Vice-Presidente (1997-98), Presidente (1998-99), Past Presidente (1999-2000), Assessor do Governador Distrital 1970 (1999-00)",
          "Sócio Fundador n.º 14 - Associação Recreativa de São Martinho do Campo - Secretário da Direcção (1965-70), Presidente da Direcção (1970-82)",
          "Sócio n.º 342 - Ginásio Clube de Santa Tirso - Vice-Presidente da Direcção (1984-88)",
          "Sócio n.º 445 - Futebol Clube Tirsense - Vice-Presidente da Direcção, Delegado à Associação do Futebol do Porto, Delegado à Liga dos Clubes (1985-90)",
          "Director Financeiro da C.P.C./PSD/Porto"
        ],
        "url_parlamento": "http://www.parlamento.pt/DeputadoGP/Paginas/Biografia.aspx?BID=1957",
        "url_democratica": "http://demo.cratica.org/deputados/abilio-almeida-costa/",
        "url_hemiciclo": "http://hemiciclo.pt/psd/1957",
        "image_url": "http://app.parlamento.pt/webutils/getimage.aspx?id=1957&type=deputado",
        "mandates": [
          {
            "legislature": 9,
            "party": "PSD",
            "constituency": "Porto",
            "start_date": "2002-04-05",
            "end_date": "2005-03-10",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=1957&lg=IX"
          }
        ]
      },
      {
        "id": 2910,
        "shortname": "Abílio Costa",
        "slug": "abilio-costa",
        "name": "António Abílio Costa",
        "gender": "M",
        "party": "PSD",
        "active": false,
        "birthdate": null,
        "occupation": "",
        "occupation2": "",
        "url_parlamento": "http://www.parlamento.pt/DeputadoGP/Paginas/Biografia.aspx?BID=2910",
        "url_democratica": "http://demo.cratica.org/deputados/abilio-costa/",
        "url_hemiciclo": "http://hemiciclo.pt/psd/2910",
        "image_url": "http://app.parlamento.pt/webutils/getimage.aspx?id=2910&type=deputado",
        "mandates": [
          {
            "legislature": 5,
            "party": "PSD",
            "constituency": "Bragança",
            "start_date": "1987-08-13",
            "end_date": "1991-11-04",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=2910&lg=V"
          },
          {
            "legislature": 3,
            "party": "PSD",
            "constituency": "Bragança",
            "start_date": "1983-05-31",
            "end_date": "1983-12-01",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=2910&lg=III"
          }
        ]
      },
      {
        "id": 141,
        "shortname": "Abílio Curto",
        "slug": "abilio-curto",
        "name": "Abílio Aleixo Curto",
        "gender": "M",
        "party": "PS",
        "active": false,
        "birthdate": "1941-01-01",
        "occupation": "BANCARIO",
        "occupation2": "",
        "jobs": [
          "BANCARIO",
          "DEPUTADO - III, IV E V LEGISLATURAS",
          "MEMBRO",
          "VICE-PRESIDENTE",
          "PRESIDENTE"
        ],
        "current_jobs": [
          "PRESIDENTE"
        ],
        "awards": [
          "COMENDADOR DA ORDEM DO INFANTE DOM HENRIQUE",
          "HONORARIO DA CIDADE AMERICANA DE NATERBURY (ALEMANHA)",
          "MEDALHA DE MERITO DA CRUZ VERMELHA PORTUGUESA"
        ],
        "url_parlamento": "http://www.parlamento.pt/DeputadoGP/Paginas/Biografia.aspx?BID=141",
        "url_democratica": "http://demo.cratica.org/deputados/abilio-curto/",
        "url_hemiciclo": "http://hemiciclo.pt/ps/141",
        "image_url": "http://app.parlamento.pt/webutils/getimage.aspx?id=141&type=deputado",
        "mandates": [
          {
            "legislature": 6,
            "party": "PS",
            "constituency": "Guarda",
            "start_date": "1991-11-04",
            "end_date": "1991-12-19",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=141&lg=VI"
          },
          {
            "legislature": 5,
            "party": "PS",
            "constituency": "Guarda",
            "start_date": "1987-08-13",
            "end_date": "1987-08-29",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=141&lg=V"
          },
          {
            "legislature": 4,
            "party": "PS",
            "constituency": "Guarda",
            "start_date": "1985-11-04",
            "end_date": "1987-08-12",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=141&lg=IV"
          },
          {
            "legislature": 3,
            "party": "PS",
            "constituency": "Guarda",
            "start_date": "1983-05-31",
            "end_date": "1985-11-03",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=141&lg=III"
          },
          {
            "legislature": 2,
            "party": "PS",
            "constituency": "Guarda",
            "start_date": "1980-11-13",
            "end_date": "1983-05-30",
            "activity_url": "http://www.parlamento.pt/DeputadoGP/Paginas/ActividadeDeputado.aspx?BID=141&lg=II"
          }
        ]
      },
    
];

Deputy.create(deputies)
    .then(deputiesFromDB => {
        console.log(`Created ${deputiesFromDB.length} deputies`);
        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating deputies from the DB: ${err}`));
