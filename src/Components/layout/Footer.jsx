import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>
        <svg fill="#000000" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 190 190" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31.686,187.333H70.61l2.293-40.266h38.262l-2.293,40.266h38.924l2.293-40.266H190v-38.86h-37.697l1.504-26.413H190v-38.86 h-33.98l2.293-40.266h-38.925l-2.293,40.266h-38.26l2.293-40.266H42.205l-2.293,40.266H0v38.86h37.698l-1.504,26.413H0v38.86h33.98 L31.686,187.333z M76.622,81.794h38.261l-1.505,26.413H75.117L76.622,81.794z"></path> </g></svg>
            <p> Copyright &copy; {footerYear} All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer