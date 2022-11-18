import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="h1-text">NOTRE DERNIERE REALISATION</h2>

      {/*   <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div> */}

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >

                <a href='https://gilded-moonbeam-9e1b13.netlify.app/' target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >

                    <AiFillEye />
                  </motion.div>
                </a>


                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>

              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h2 className="bold-text workTitle">{work.title}</h2>
              <h1 className="bold-text workDescription" style={{ marginTop: 10 }}>{work.description}</h1>
              <p className="bold-text" style={{ marginTop: 15 }}>
                Solution complete pour site e-commerce, composée de:</p>
              <p className="bold-text" style={{ marginTop: 15 }}>
                Un site vitrine sécurisé avec login et moyen de paiement intégré. Le caddie est persistant que l'utilisateur soit enregistré ou non. Si l'utilisateur est enregistré son caddie est accésible depuis n'importe quel appareil connecté a son compte.
                Le site s'adapte à toutes les tailles d'écrans et les logos, bouttons et le fond d'écran sont costumisable par nos soins. 
                Enfin la vitrine est optimisée pour charger rapidement se qui améliore le référencement google et permet d'apparaître dans les premiers résultats du moteur de recherche. </p>

              <p className="bold-text" style={{ marginTop: 15 }}>
                Un studio pour gérer l'achalandage: non référencé par google et protégé par un mot de passe administrateur on l'utilisé pour définir la bannière (pour mettre en avant un produit), les noms des produits, leurs prix, leurs fiche d'information et c'est ici que l'on upload les vignettes pour la vitrine.
              </p>

              <p className="bold-text" style={{ marginTop: 10 }}>
                Un gestionaire de Commande : lui aussi non référencé par google et protégé par un mot de passe administrateur il permet au gestionaire des stocks de préparer les colis. Une fois la commande prète à être prise en charge par le transporteur il sufit de rentrer le numero de suivi pour que le client le reçoive automatiquement par mail. Les donées utilisateurs ne sont concervé sur le site que le temps que la commande soit envoyée, seuls les numeros de commandes et de transactions sont conservés.
              </p>

              <p className="bold-text" style={{ marginTop: 10 }}>
                *note: la gestion des données personelles des utilisateurs étant un domaine trés sensible leur sauvegarde est assurée par Stripes, en particulier les numeros de carte de crédits ne transitent jamais sur nos serveurs (vous recevez les paiement directement sur votre compte bancaire) cependant en cas de besoin il est trés facile de consulter l'adresse et le nom du client en utilisant le numero de transaction sur votre compte stripes que nous configurerons avec vous`
              </p>



              {/* <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>  */}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'realisations',
  'app__primarybg',
);
