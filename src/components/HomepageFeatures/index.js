import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Fácil de aprender</Translate>,
    Svg: require('@site/static/img/easytouse.svg').default,
    description: (
      <Translate>
        Esta documentación está hecha para que la gente que no entiende mucho
        del tema por ende aprenderá rápido!
      </Translate>
    ),
  },
  {
    title: <Translate>Ve al grano!</Translate>,
    Svg: require('@site/static/img/vamos.svg').default,
    description: (
      <Translate>
        Esta documentación está dividida por secciones,
        puedes ir al concepto que tu quieras rápidamente!
      </Translate>
    ),
  },
  {
    title: <Translate>Powered by Docusaurus</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        Gracias a docusaurus ha sido posible desarrollar Esta
        documentación fácilmente!
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

// className="text--center padding-horiz--md"