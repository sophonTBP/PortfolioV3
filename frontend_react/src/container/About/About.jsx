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

      <h2 className="head-text">NOS VALEURS</h2>
      <div className="app__profiles">
        {abouts.map((about, index) => {

          let imageUrl = urlFor(about.imgUrl);
          console.log(imageUrl.url())
          
          return (

            < motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item  "
              key={about.title + index}
            >
              <div className='img-bg' style={{
                backgroundImage: `url(${ urlFor(about.imgUrl).width(300).height(400).url()})`, backgroundRepeat: 'no-repeat',padding: "1rem",
                width: '100%'
              }} alt={about.title} >
                {/* <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2> */}
                <p className="p-text" >{about.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'valeurs',
  'app__whitebg',
);
