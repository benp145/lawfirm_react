import React, { useContext } from 'react'
import attornyes from '../images/content-01-attorneys.jpg'
import subrogation from '../images/sub-02-subrogation.jpg'
import litigation from '../images/sub-02-litigation.jpg'
import business from '../images/sub-02-business.jpg'
import warehouse from '../images/sub-02-warehouse.jpg'
import { ServiceContext } from '../context/ServiceContext'

export const WhatWeDo = (props) => {
    const { search, setSearch } = useContext(ServiceContext)
    // setSearch([])

    return (
        <React.Fragment>
            <div className="container" id="what">
                <div className="row">

                    <div className="col-3">
                        <div className="myBox-dm container-fluid">
                            <h3>WHAT WE DO</h3>
                            <hr />
                            <div>Subrogation</div>

                            <ul>
                                <li>Property</li>
                                <li>Workers</li>
                                <li>Compensation</li>
                            </ul>
                            <div>Litigation</div>

                            <ul>
                                <li>Appellate</li>
                                <li>Comercial</li>
                                <li>Defense</li>
                                <li>Labor/Employment</li>
                            </ul>
                            <div>Business</div>

                            <ul>
                                <li>Brokerage</li>
                                <li>Agreement</li>
                                <li>Business Formation</li>
                                <li>Business Related</li>
                                <li>Contracts</li>
                                <li>Labor/Employment</li>
                            </ul>
                            <p>Transportation</p>
                            <img src={attornyes} alt="" width="90%" />
                            <p><b>Attorneys</b></p>
                            <div>Meet our prestigious partners</div>
                            <p>and esteemed assocciates</p>
                        </div>
                    </div>
                    <div className="col-9">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Impedit, soluta suscipit in possimus temporibus eum voluptates rem ad voluptatem recusandae
                            necessitatibus nam nulla, at cum aut maiores consequuntur culpa voluptatum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Impedit, soluta suscipit in possimus temporibus eum voluptates rem ad voluptatem recusandae
                            necessitatibus nam nulla, at cum aut maiores consequuntur culpa voluptatum.</p><br /><br />
                        {
                            props.s=='sub'
                                ?  
                            <div className="what-pic bg-success">
                                <img src={subrogation} width="350px;" alt="" className="selected-option"/>
                            </div>
                                :
                            <div className="what-pic">
                                <img src={subrogation} width="350px;" alt="" />
                            </div>
                        }
                        {
                            props.s=='lit'
                                ?
                            <div className="what-pic bg-success">
                                <img src={litigation} width="350px;" alt="" className="selected-option"/>
                            </div>
                                :
                            <div className="what-pic">
                                <img src={litigation} width="350px;" alt="" />
                            </div>
                            
                        }
                        {
                            props.s=='bus'
                                ?       
                            <div className="what-pic bg-success">
                                <img src={business} width="350px;" alt="" className="selected-option"/>
                            </div>
                                :
                            <div className="what-pic">
                                <img src={business} width="350px;" alt="" />
                            </div>
                            
                        }
                        {
                            props.s=='tra'
                                ?
                            
                            <div className="what-pic bg-success">
                                <img src={warehouse} width="350px;" alt="" className="selected-option"/>
                            </div>
                                :
                            <div className="what-pic">
                                <img src={warehouse} width="350px;" alt="" />
                            </div>
                            
                        }
                    </div>



                        

                </div>
                <br />
            </div>
        </React.Fragment>
    )
}
