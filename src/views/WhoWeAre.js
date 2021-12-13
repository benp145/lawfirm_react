import React, { useContext } from 'react'
import attorneys from '../images/sub-01-attorneys.jpg'
import staff from '../images/sub-01-staff.jpg'
import reputation from '../images/sub-01-reputation.jpg'
import history from '../images/sub-01-history.jpg'
import where from '../images/content-link-where.jpg'
import { Link } from 'react-router-dom'
import { ServiceContext } from '../context/ServiceContext'

export const WhoWeAre = () => {
    return (
        <React.Fragment>
            <div id="who" className="container">
                <div className="row">
                    

                    <div className="col-3" id="sidebar-who">
                        <h3>Who We Are</h3>
                        <hr />
                        <p>Welcome</p>
                        <p><Link id="attorneys-link" to="/who-we-are/attorneys">Attorneys</Link></p>
                        <p>Staff</p>
                        <p>Reputation</p>
                        <p>History</p>
                        <Link to="/where-we-work"><img src={where} alt="" /></Link>
                        <p>Find out more about our work</p>
                        <p>coverage area</p>
                    </div>

                

                

                    <div className="col-md-9">
                        <p>Who we are? that is one of the most important questions a prospective client can ask our.
                            answer - one of the most respected law firms in the country that cares about your case,
                            your
                            business, and solving your problem. We invite you to get to know our attorneys better
                            and
                            understand the depth of experience and talent we have in the links below.
                        </p>
                        <div className="container" id="img-container">
                            <img src="https://via.placeholder.com/300x118" />
                            <Link id="attorneys-link-img" to="/who-we-are/attorneys"><img src={attorneys} /></Link>
                            <img src={staff} />
                            <img src={reputation} />
                            <img src={history} />
                        </div>
                    </div>

                    
                </div>
            </div>
        </React.Fragment>
    )
}
