import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Aprende a utilizar este ORM ",
    Svg: require("@site/static/img/laravel.png").default,
    description: (
      <>
        Este tutorial es una guía completa y sencilla para aprender a utilizar
        Eloquent y las bases de datos de Laravel. A través de ejemplos
        prácticos, aprenderás a diseñar y modelar tus bases de datos, a realizar
        consultas avanzadas, y a optimizar el rendimiento de tu aplicación.
        Descubrirás cómo utilizar las relaciones entre tablas para construir
        modelos de datos complejos, cómo utilizar las migraciones para mantener
        la integridad de tu base de datos, y cómo integrar Eloquent con otras
        herramientas y librerías de Laravel. Con este tutorial, podrás llevar
        tus habilidades de Eloquent al siguiente nivel, sin importar si eres un
        desarrollador novato o experimentado. Aprenderás los trucos y técnicas
        más avanzados para construir aplicaciones web con bases de datos
        potentes y eficientes. ¡No esperes más para empezar a dominar Eloquent y
        las bases de datos con Laravel!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--12")}>
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
