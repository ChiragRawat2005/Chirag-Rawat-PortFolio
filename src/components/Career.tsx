import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tecnia Institute Of Advanced Studies</h4>
                <h5>Indira Gandhi National Open University</h5>
              </div>
              <h3>2024 2027</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Computer Applications with a
              focus on software development and modern web technologies. The
              program covers core computer science concepts including
              programming, data structures, database management systems,
              operating systems, and web development. Through this program, I am
              strengthening my skills in Java, full-stack web development,
              database design, and software engineering principles, while
              building practical projects such as a Contact Manager application
              using Spring Boot and MySQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java FullStack</h4>
                <h5>Ducat</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              I am currently learning Java Full Stack Development from Ducat
              India. During my training, I am gaining practical knowledge of
              Core Java, Advanced Java, Spring Boot, Hibernate, MySQL, HTML,
              CSS, JavaScript, and modern web development technologies. I am
              passionate about building dynamic and user-friendly web
              applications and continuously improving my programming and
              problem-solving skills. As a fresher developer, I am focused on
              strengthening both backend and frontend development skills to
              become a successful Full Stack Java Developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
