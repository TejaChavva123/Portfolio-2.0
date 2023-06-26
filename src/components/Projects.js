import React from 'react'
import crud from './Images/crud.png'
import loginpage from './Images/loginpage.png'
import netflix from './Images/netflix.png'
import budget from './Images/budget.png'
import intrusion from './Images/intrusion.png'
import homepage from './Images/homepage.png'
const Projects = () => {
  return (
    <div className='projects-tab my-10' id="projects">
      <div className='skills'>
            <div className='title'>
                <h2>Projects</h2>
            </div>
            <div className='descri'>
                <p>"Practise is learning, but learning is not practise,", so I am always interested in applying my knowledge to some of the projects that we deal with in our daily lives and finding innovative solutions for them. Whether it's building some cool websites or making predictions based on the test data applied to the model.</p>
            </div>

        </div>
    <div className='projects'>

    <div class="card">
        <img  class="card-img-top" src={homepage} alt="Card image cap" />
        <div class="card-body text-center">
          <h5 class="card-title">MERCHSTORE</h5>
          <p class="card-text">One-stop solution for college students to buy their college merchandise in one place. It deals from booking to delivery and is able to accept payments.</p>
          <a target="_blank" href="https://github.com/TejaChavva123/MERCHSTORE" class="btn">CODE</a>
        </div>
      </div>

      <div class="card">
        <img class="card-img-top" src={netflix} alt="Card image cap" />
        <div class="card-body text-center">
          <h5 class="card-title">Netflix Landing Page</h5>
          <p class="card-text">Replicated the Netflix landing page using HTML and CSS.</p>
          <footer><a target="_blank" href="https://github.com/TejaChavva123/Netflix-Landing-Page-Clone-using-HTML-and-CSS" class="btn">CODE</a></footer>
        </div>
      </div>

      <div class="card">
        <img  class="card-img-top" src={budget} alt="Card image cap" />
        <div class="card-body text-center">
          <h5 class="card-title">Budget Tracker using React JS</h5>
          <p class="card-text">Budget Tracker allows the user to enter the expenses and income of a person, and it makes sure the person knows how much he left with and how much he has to spend.</p>
          <footer><a target="_blank" href="https://github.com/TejaChavva123/Budget-Tracker-React-App" class="btn">CODE</a></footer>
        </div>
      </div>

      <div class="card">
        <img  class="card-img-top" src={crud} alt="Card image cap" />
        <div class="card-body text-center">
          <h5 class="card-title">Management System</h5>
          <p class="card-text">The project mainly focuses on the internship data of the students and the stipend offered by the respective company. It mainly deals with CRUD (create, read, update, delete) properties.</p>
          <a href="https://github.com/TejaChavva123/Mern-Stack-CRUD-App" target="_blank"class="btn">CODE</a>
        </div>
      </div>

      <div class="card">
        <img class="card-img-top" src={loginpage} alt="Card image cap" />
        <div class="card-body text-center">
          <h5 class="card-title">Login System using JWT</h5>
          <p class="card-text">The login page is built using JWT (Json Web Token), which is one of the authentication tools, and web technologies like MongoDB, React JS, Express JS, and NodeJS. And errors are sent into the front-end using the http-errors library.</p>
          <a target="_blank" href="https://github.com/TejaChavva123/Login-Page-Using-JWT" class="btn">CODE</a>
        </div>
      </div>

      <div class="card">
        <img  class="card-img-top" src={intrusion} alt="Card image cap" />
        <div class="card-body text-center">
          <h5 class="card-title">Intrsuion Detection System</h5>
          <p class="card-text">IDS is implemented using machine learning (ML) techniques. The model we have implemented is able to detect the attacks that are going to happen by performing analysis on the incoming traffic.</p>
          <a target='_blank' href="https://github.com/TejaChavva123/Intrusion-Detection-System" class="btn">CODE</a>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Projects
