import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-app">
      <h1 className="main-heading">Find The Job That Fits Your Life</h1>
      <p className="description">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link className="nav-button" to="/jobs">
        <button className="job-button" type="button">
          Find Jobs
        </button>
      </Link>
    </div>
  </>
)

export default Home
