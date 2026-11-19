
import './App.css';

const projects = [
  {
    title: 'Hostel Management System',
    description:
      'A web application for hostel owners and students with registration, authentication and location-based hostel searching.',
    tech: 'Java • Servlet • JSP • MySQL • Bootstrap',
  },
  {
    title: 'Digital Voting System',
    description:
      'A secure voting application with user authentication, candidate management and one-vote-per-user functionality.',
    tech: 'Spring Boot • Spring Security • JPA • MySQL',
  },
  {
    title: 'OTP Email Authentication',
    description:
      'An authentication application featuring OTP generation, email delivery and OTP verification with expiration.',
    tech: 'Java • Spring Boot • REST APIs • Email',
  },
];

const skills = [
  'Core Java',
  'Spring Boot',
  'Hibernate / JPA',
  'React.js',
  'JavaScript',
  'SQL / MySQL',
  'REST APIs',
  'HTML & CSS',
  'Bootstrap',
  'Git & GitHub',
  'Maven',
];

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2><span>Abhilash Reddy.</span></h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="tag">JAVA FULL STACK DEVELOPER</p>
        <h1>Hi, I'm Abhilash Reddy</h1>
        <h2>Building Web Applications with Java & React</h2>
        <p>
          Computer Science graduate passionate about
          Java, Spring Boot, React and developing
          practical software solutions.
        </p>
        <a className="btn" href="#projects">Explore My Projects</a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am an aspiring Java Full Stack Developer
          with hands-on experience building web
          applications using Java, Spring Boot,
          Hibernate, MySQL and React.js.
          I enjoy solving problems and continuously
          improving my development skills.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills">
          {skills.map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="projects">
          {projects.map(project => (
            <article className="project" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Let's Connect</h2>
        <p>I'm open to entry-level Java Developer opportunities.</p>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abhilashreddyc88@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="email-btn"
>
  Send Me an Email
</a>
        <a href="https://www.linkedin.com/in/abhilash-reddy-chitkuri-91552b2b8/">
          LinkedIn
        </a>
        <a href="https://github.com/chitkuriabhilashreddy1289/">
          GitHub
        </a>
      </section>

      <footer>
        © 2026 Abhilash Reddy | Java Full Stack Developer
      </footer>
    </div>
  );
}

export default App;
