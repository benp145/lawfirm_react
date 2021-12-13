import React, { useContext } from 'react'
import { ServiceContext } from '../context/ServiceContext'
import carrer from '../images/content-navlink-career.jpg'

export const WhereWeWork = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div class="row">
                    <div class="col-sm-3 ">

                        <div class="jbbox container-fluid">
                            <strong> WHERE WE WORK </strong>
                            <hr />

                            <div> United States</div>
                            <div> International</div>

                            <img src={carrer} alt="Man at Desk" />
                            <div>Career Opportunities</div>
                            <p><small>Join our magnificent firm</small></p>
                        </div>
                    </div>
                    <div class="col-9">
                        <p>Bigshot Zoo & Adds attorneys practice where our clients need us.
                            And, we are proud to say our clients have needed us everywhere - we have practiced in forty-eight states across the United States
                            and in four different countries. Currently, we have admitted in state and federal
                            courts across the country, either as a member of the bar of that state or via pro hoc vice admission.
                            Please see below for more information on where the firm has practiced.</p>
                        <br />
                        <br />

                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <b>United States</b>
                                    <hr />
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-4">
                                                <div>Alabama</div>
                                                <div>Alaska</div>
                                                <div>Arkansas</div>
                                                <div>California</div>
                                                <div>Colorado</div>
                                                <div>Connecticut</div>
                                                <div>Florida</div>
                                                <div>Georgia</div>
                                                <div>Hawaii</div>
                                                <div>Idaho</div>
                                                <div>Arizona</div>
                                                <div>Illinois</div>
                                                <div>Indiana</div>
                                                <div>Iowa</div>
                                                <div>Kansas</div>
                                                <div>Kentucky</div>
                                                <div>Louisiana</div>
                                                <div>Maine</div>
                                            </div>
                                            <div className="col-4">
                                                <div>Maryland</div>
                                                <div>Massachusetts</div>
                                                <div>Michigan</div>
                                                <div>Minnesota</div>
                                                <div>Mississippi</div>
                                                <div>Missouri</div>
                                                <div>Montana</div>
                                                <div>Nebraska</div>
                                                <div>Nevada</div>
                                                <div>New Hampshire</div>
                                                <div>New Jersey</div>
                                                <div>New Mexico</div>
                                                <div>New York</div>
                                                <div>North Carolina</div>
                                                <div>North Dakota</div>
                                            </div>
                                            <div className="col-4">
                                                <div>Ohio</div>
                                                <div>Oregon</div>
                                                <div>Pennsylvania</div>
                                                <div>South Carolina</div>
                                                <div>South Dakota</div>
                                                <div>Tennessee</div>
                                                <div>Texas</div>
                                                <div>Utah</div>
                                                <div>Vermont</div>
                                                <div>Virginia</div>
                                                <div>Washington</div>
                                                <div>West Virginia</div>
                                                <div>Wisconsin</div>
                                                <div>Wyoming</div>
                                                <div>Oklahoma</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <b>International</b>
                                    <hr />
                                    <div >

                                        <div>Canada</div>
                                        <div>Columbia</div>
                                        <div>Germany</div>
                                        <div>Nicarauga</div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        



                    </div>


                </div>
            </div>
        </React.Fragment>
    )
}
