import React from "react";

const CardsCourses = () => {
  const courses = [
    {
      id: 1814,
      title: "Curso Básico de JavaScript",
      badge:
        "https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png",
      url: "/clases/basico-javascript/",
      career: "Arquitectura Frontend",
      diploma_link: "/p/alpaar/curso/1814-basico-javascript/diploma/detalle/",
    },
    {
      id: 1331,
      title: "Curso de Bootstrap",
      badge:
        "https://static.platzi.com/media/achievements/1331-cda68a62-24e5-464a-95ca-6e5d339c7244.png",
      url: "/clases/bootstrap/",
      career: "Arquitectura Frontend",
      diploma_link: "/p/alpaar/curso/1331-bootstrap/diploma/detalle/",
    },
    {
      id: 1807,
      title: "Curso de Closures y Scope en JavaScript",
      badge:
        "https://static.platzi.com/media/achievements/badge-_closures-scope-javascript-3848a8e7-cf6f-47c5-a824-df5fc0c14d41.png",
      url: "/clases/scope/",
      career: "Arquitectura Frontend",
      diploma_link: "/p/alpaar/curso/1807-scope/diploma/detalle/",
    },
    {
      id: 1433,
      title:
        "Curso de Creación y Optimización de Sitios Web con WordPress 2018",
      badge:
        "https://static.platzi.com/media/achievements/badge-wordpress-0baaf46b-cb21-4c6b-bb95-3e944d55c3e9.png",
      url: "/clases/seo-wordpress/",
      career: "Negocios Online",
      diploma_link: "/p/alpaar/curso/1433-seo-wordpress/diploma/detalle/",
    },
    {
      id: 1867,
      title: "Curso de Debugging con Chrome DevTools",
      badge:
        "https://static.platzi.com/media/achievements/badge-debugging-chrome-devtools-c75256bb-2a2f-4954-b2c0-9c946494ac37.png",
      url: "/clases/devtools/",
      career: null,
      diploma_link: "/p/alpaar/curso/1867-devtools/diploma/detalle/",
    },
    {
      id: 1350,
      title: "Curso de Desarrollo Web Online",
      badge:
        "https://static.platzi.com/media/achievements/1350-09ddb033-354b-4c0c-84a4-56cbb71d0b08.png",
      url: "/clases/html5-css3/",
      career: "Arquitectura Frontend",
      diploma_link: "/p/alpaar/curso/1350-html5-css3/diploma/detalle/",
    },
    {
      id: 1732,
      title: "Curso de Engineering Management",
      badge:
        "https://static.platzi.com/media/achievements/badge-eng-management-8aa3f5cb-e16d-4ef6-8ef0-ff244a6ab746.png",
      url: "/clases/eng-management/",
      career: "Negocios Online",
      diploma_link: "/p/alpaar/curso/1732-eng-management/diploma/detalle/",
    },
  ];
  return (
    <div className="card-container">
      {courses
        ? courses.map((data) => {
            return (
              <a className="card" key={data.id}>
                <figure>
                  <img src={data.badge} alt="" />
                </figure>
                <h4>{data.title}</h4>
              </a>
            );
          })
        : null}
    </div>
  );
};

export default CardsCourses;
