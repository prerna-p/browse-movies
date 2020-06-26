import React from 'react'

const Footer = () => {
  const devName = " Prerna Purohit";
  const apiSrc = " OMDB API"
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              {devName}
            </span>
            , using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {apiSrc}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
