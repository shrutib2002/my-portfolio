import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import collab from "../../assets/projects/lets_collab_img3.jpg";
import blog from "../../assets/projects/bloggers.jpg";
import eeg from "../../assets/projects/eeg_500x300.jpg";

import ecom from "../../assets/projects/ecom.png";
import threatguardai from "../../assets/projects/threatguardai.jpg";
import student from "../../assets/projects/student.png";

import netflix from "../../assets/projects/netflix.png"
import beauty from "../../assets/projects/beauty.png"





export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={threatguardai}
            projectName={"Threat Guard AI"}
            aboutProject={"Multi-Domain Fraud Detection System"}
            techStack={"Python, Streamlit, Flask, MongoDB, Scikit-learn, OpenCV, Joblib, Firebase"}
            projectLiveLink=" https://lnkd.in/gczWRvMM"
            projectLink="https://github.com/Rohan1786/Fraud-Detector"
            
          />
          <ProjectCard
            projectImage={ecom}
            projectName={"E-Commerce Website"}
            aboutProject={"A MERN-based e-commerce app with auth, admin panel, and real-time inventory."}
            techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB, Tailwind CSS"}
            projectLiveLink="https://ecommerce-website-mern-liard.vercel.app/"
            projectLink="https://github.com/shrutib2002/ECommerce-using-MERN"
          />
          <ProjectCard
            projectImage={student}
            projectName={"Student Attendance and Marks management system"}
            aboutProject={"A web app for managing student records with dashboard and full CRUD operations."}
            techStack={"HTML, CSS, JavaScript (with jQuery and AJAX), Bootstrap, PHP, MySQL"}
            projectLink="https://github.com/shrutib2002/Student-Attendance-And-Marks-Management-System-DBMS"
          />
         
         
        </SimpleGrid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="Center"
          mt="40px"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MOCKUPS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={netflix}
            projectName={"Netflix Mockup"}
            aboutProject={"Netflix-style UI mockup designed in Figma with interactive layout."}
            projectLink="https://www.figma.com/proto/BpNuxeQkwgvwWs4lJf27xi/Netflix-mockup?node-id=0-1&t=zmmT2nWZtJCijcYv-1"
          />
          <ProjectCard
            projectImage={beauty}
            projectName={"Beauty Salon Mockup"}
            aboutProject={"Beauty salon web mockup designed in Figma with a clean, modern layout."}
            projectLink="https://www.figma.com/proto/iFQn9F89xZYxk4pBhiOE10/Beauty-salon-mockup?t=Zq3dMsmYHtFWrsHQ-1"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
