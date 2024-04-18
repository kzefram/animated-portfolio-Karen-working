import "../aboutme/aboutme.scss";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div className="AboutMe">
      <motion.div className="textContainer"></motion.div>
      <motion.div className="titleContainter">
        <div className="title">
          <img src="../Components/aboutme/coverpic.png" alt="Picture of Karen" />
          <h1>All About <b>Karen</b> </h1>
        </div>
        <div className="text">
          <p>I have been homeschooling my daughter part-time since she was three, and that brings me to how I became interested in coding and software testing. She had approached me with a passing interest in coding. At the time, I didn&apos;t know much about it at all and needed to learn the basics. <br/><br/>I read many books, and within a month, I was online in classes and watched YouTube. I went with Mike Dane for most of my classes and MIT for the Scratch training; I thought it would be fun. As I was learning the HTML and CSS to teach her, and eventually a few more, I learned about animations and making things happen. &ldquo;OOHH! That&apos;s cool! What else can I learn?&ldquo; <br/><br/>I then moved on to New Brunswick Community College for Manual Testing and UNB for a Full-Stack program.<br/><br/>I lookforward to speaking with you soon. Karen</p>

        </div>
      </motion.div>
      <motion.div className="skillsContainers">
        <motion.div className="box" whileHover={{background: "#ccccff", color: "#6F8FAF"}}>
          <h2>Front-End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>API</li>
            <li>Bootstrap</li>
            <li>React-bootstrap</li>
            <li>Local Storage</li>
            <li>Framer-motion</li>
            <li>Responsive design</li>
          </ul>
        </motion.div>
        <motion.div className="box" whileHover={{background: "#ccccff", color: "#6F8FAF"}}>
          <h2>Server side development</h2>
          <ul>
            <li>User Authentication</li>
            <li>Node.js</li>
            <li>MERN Stack</li>
            <li>Express.js</li>
          </ul>
        </motion.div>
        <motion.div className="box" whileHover={{background: "#ccccff", color: "#6F8FAF"}}>
          <h2>Deployment and Delivery</h2>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitHub pages</li>
            <li>Shell Scripting</li>
            <li>Unit Testing</li>
            <li>Render</li>
            <li>Netlify</li>
          </ul>
        </motion.div>
        <motion.div className="box" whileHover={{background: "#ccccff", color: "#6F8FAF"}}>
          <h2>API Design</h2>
          <ul>
            <li>Client-server Model API</li>
            <li>HTTP request methods</li>
            <li>JSON</li>
            <li>REST</li>
            <li>AJAX (Fetch API)</li>
          </ul>
        </motion.div>
        <motion.div className="box" whileHover={{background: "#ccccff", color: "#6F8FAF"}}>
          <h2>Programs and Other Skills</h2>
          <ul>
            <li>Insomnia</li>
            <li>Postman</li>
            <li>Python</li>
            <li>Java</li>
            <li>Amazon Web Services</li>
            <li>Microsoft Office</li>
            <li>Google Suite</li>
            <li>Microsoft Coplit</li>
            <li>Visual Studio Code</li>
            <li>Sublime</li>
          </ul>
        </motion.div>
        <motion.div className="box" whileHover={{background: "#ccccff", color: "#6F8FAF"}}>
          <h2>Databases</h2>
          <ul>
            <li>MongoDB</li>
            <li>MYSQL</li>
            <li>Microsoft Server SQL</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
