import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { House } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Folder } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { SquarePen } from 'lucide-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 35px;
  padding: 6px 20px;
  margin-bottom: 4rem;
  border: 1px solid #333;
  border-radius: 16px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.03);
  opacity: 1;
  height: 48px;
  align-items: center;
`;


export const NavBarItem = (props) => {
    return <motion.div  {...props}>
        <Link to={props.to} >
            {props.children}
        </Link>
    </motion.div>
}



export const NavBar = () => {

    const IconStyle = { width: '20px', height: '20px' }; // Tamaño uniforme para los íconos

    return (
        <Container>
            <div style={{ display: "flex", justifyContent: "center", color: "white" }}>

                <Navbar>

                    <NavBarItem to="/"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <House style={IconStyle} />
                    </NavBarItem>

                    <NavBarItem
                        to="/projects"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <Folder style={IconStyle} />
                    </NavBarItem>

                    <NavBarItem
                        to="/tools"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <Wrench style={IconStyle} />
                    </NavBarItem>

                    <NavBarItem
                        to="/contact"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <SquarePen style={IconStyle} />
                    </NavBarItem>
                </Navbar>
            </div>
        </Container>
    );
}

