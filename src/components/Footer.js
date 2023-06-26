import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='info'>
            <h6 className='email text-center'><a href = "mailto: abc@example.com">Email:chavvateja123@gmail.com</a></h6>
            <div className='social-media'>
              <a target="_blank" href ="https://github.com/TejaChavva123"><i class="fa fa-github"> &nbsp; GitHub </i></a>
              <a target="_blank" href ="https://www.linkedin.com/in/teja-chavva/"><i class="fa fa-linkedin"></i>  LinkedIn </a>
              <a target="_blank" href ="https://www.instagram.com/teja_chavva/"><i class="fa fa-instagram"></i>  Instagram </a>
            </div>
        </div>

      <div className='copyright mx-5 text-center'>
        <h5>Copyrights &copy; TejaChavva</h5>
      </div>
    </footer>
  )
}

export default Footer
