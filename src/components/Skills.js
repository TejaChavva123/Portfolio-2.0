import React from 'react'

const Skills = () => {
  return (
    <div>
        <div className='skills' id="skills">
            <div className='title'>
                <h2>Skills</h2>
            </div>
            <div className='descri'>
                <p>I'm passionate about lifelong learning and constantly look for methods to broaden my skill set by experimenting with new technologies. I have a variety of abilities that I have used to create applications that are used in real-time. This experience of learning new skills and applying them to software development has been incredibly entertaining, and it inspires me to become a better engineer.</p>
            </div>

        </div>
    <div className="skills-container">
        <div className="card text-white" style={{width: '20rem'}}>
            <div className="cardtitle card-header"><i class="fa fa-bug" aria-hidden="true"></i> Programming Languages</div>
            <div className="card-body">
                <h5 className="card-title">C</h5>
                <h5 className="card-title">C++</h5>
                <h5 className="card-title">Python</h5>
                <h5 className="card-title">Javascript</h5>
            </div>
        </div>   
        <div className="card text-white" style={{width: '20rem'}}>
            <div className="cardtitle card-header"><i class="fa fa-code" aria-hidden="true"></i> Web Technologies</div>
            <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <h5 className="card-title">CSS</h5>
                <h5 className="card-title">Bootstrap</h5>
                <h5 className="card-title">React JS</h5>
                <h5 className="card-title">Node JS</h5>
                <h5 className="card-title">Express JS</h5>
            </div>
        </div>   
        <div className="card text-white" style={{width: '21rem'}}>
            <div className="cardtitle card-header"><i class="fa fa-cogs" aria-hidden="true"></i> Machine Learning</div>
            <div className="card-body">
                <h5 className="card-title">Numpy</h5>
                <h5 className="card-title">Pandas</h5>
                <h5 className="card-title">Matplotlib</h5>
                <h5 className="card-title">Scikit-Learn</h5>
                <h5 className="card-title">Keras</h5>
                <h5 className="card-title">Tensorflow</h5>
            </div>
        </div>   
        <div className="card text-white" style={{width: '20rem'}}>
            <div className="cardtitle card-header"><i class="fa fa-database" aria-hidden="true"></i> Database Management</div>
            <div className="card-body">
                <h5 className="card-title">MySQL</h5>
                <h5 className="card-title">MongoDB</h5>
            </div>
        </div>    
        <div className="card text-white" style={{width: '20rem'}}>
            <div className="cardtitle card-header"><i class="fa fa-desktop" aria-hidden="true"></i> Computer Fundamentals</div>
            <div className="card-body">
                <h5 className="card-title">Operating Systems</h5>
            </div>
        </div>  
    </div>
    </div>
  )
}

export default Skills
