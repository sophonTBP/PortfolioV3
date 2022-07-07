import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);



  return (
    <>
 <h1 className="header-text-title h1-text">LES VALEURS DE NOTRE AGENCE</h1>

      <div className="app__profiles">
        
        {abouts.sort((a, b) => a.index > b.index ? 1 : -1).map((about, index) => {
          const regex = /\.(\s+)/g
          const imageUrl1 = about.imgUrl1 !== undefined ? urlFor(about.imgUrl1) : null;
          const imageUrl2 = about.imgUrl2 !== undefined ? urlFor(about.imgUrl2) : null;
          return (

            <div className='app__profiles-item' key={index} >
             <section className="header-text">
              <h2 className="about-text">{about.title}</h2>
              <p className="small-p-text about-text" >{about.header.replace(regex, '.\n')}</p>
              </section>
              <img className="image1" src={imageUrl1} alt={about.subtitlep1} />
              <section className="paragraph1">
              <h2 className="  about-text" >{about.subtitlep1.toUpperCase()}</h2>
              <p className="small-p-text about-text "  >{about.paragraph1.replace(regex, '.\n')}</p>
              </section>
              
              <section className="paragraph2">
              <h2 className=" about-text" >{about.subtitlep2.toUpperCase()}</h2>
              <p className="small-p-text about-text"   >{about.paragraph2.replace(regex, '.\n')}</p>
              </section>
              <img className="image2" src={imageUrl2} alt={about.subtitlep2} />
            </div >
          )


        })}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'nos valeurs',
  'app__whitebg',
);
