import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ProjectDetail from './ProjectDetail';

import { motion, AnimatePresence } from 'framer-motion';

const ProjectImage = ({ projectInfo }) => {
  const { name, img, description, repo, app } = projectInfo;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      onClick={toggleOpen}
      className={isOpen ? 'expandedCard' : 'compactCard'}
    >
      <Card>
        <Card.Img src={img} alt={name} />
        <AnimatePresence>
          {isOpen && (
            <Card.ImgOverlay
              style={{
                zIndex: 10,
                backgroundColor: 'rgba(191, 178, 163, .75)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='mediaQuery'
                style={{
                  width: '75%'
                }}
              >
                <ProjectDetail
                  name={name}
                  description={description}
                  repo={repo}
                  app={app}
                />
              </motion.div>
            </Card.ImgOverlay>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default ProjectImage;