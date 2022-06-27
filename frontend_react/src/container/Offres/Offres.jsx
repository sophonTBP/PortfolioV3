import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Offres.scss';

const Offres = () => {

    const [offres, setOffres] = useState([]);

    useEffect(() => {

        const offresQuery = '*[_type == "offres"]';

      
        client.fetch(offresQuery).then((data) => {
            setOffres(data);
        });
    }, []);

    return (
        <>
            <h1 className="h1-text">LA QUALITÉ À UN PRIX</h1>
            <h3 className="head-text-h3">Coût Site Internet</h3>
            <div className="app__offres-container">
                <motion.div className="app__offres-list">
                    {offres.sort((a, b) => a.price > b.price ? 1 : -1).map((offre) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__offres-item app__flex"
                            key={offre.name}
                        >
                            {/* <div
                                className="app__flex"
                                style={{ backgroundColor: offre.bgColor }}
                            >
                           </div>   */}
                            
                            <p className="p-price">{offre.name}</p>
                            <p className="p-price">€ {offre.price} unité</p>
                            <p className="p-details">{offre.details_ligne1}</p>
                            <p className="p-details">{offre.details_ligne2}</p>
                            <p className="p-details">{offre.details_ligne3}</p>
                            <p className="p-details">{offre.details_ligne4}</p>
                            <p className="p-details">{offre.details_ligne5}</p>
                            <p className="p-details">{offre.details_ligne6}</p>
                            <p className="p-details">{offre.details_ligne7}</p>

                          
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Offres, 'app__offres'),
    'offres',
    'app__whitebg',
);
