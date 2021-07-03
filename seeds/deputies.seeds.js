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
    
];

Deputy.create(deputies)
    .then(deputiesFromDB => {
        console.log(`Created ${deputiesFromDB.length} deputies`);
        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating deputies from the DB: ${err}`));
