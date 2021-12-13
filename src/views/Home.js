import React from 'react'
import slideshow from '../images/nza_slideshow.jpg'
import { useState, useContext } from 'react'
import { ServiceContext } from '../context/ServiceContext'
import { Link } from 'react-router-dom'

export const Home = () => {
    
    console.log(useContext(ServiceContext))
    
    const { search, setSearch } = useContext(ServiceContext)
    

    function handleChange(event) {
        setSearch(event.target.value)
    }


    return (
        <React.Fragment>
            <div className="row" id="home-top">
                <div className="col-9">
                    <img src={slideshow} width="100%" alt="" />
                </div>


                <div className="col-3">
                    <div className="myBox container-fluid">
                        <h3>News feed</h3>
                        {/* <hr color="white" /> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores ratione iste
                            voluptatibus soluta a neque officia libero laudantium totam eaque id laborum, nam eveniet
                            dolorem alias nemo consequuntur magnam?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores ratione iste
                            voluptatibus soluta a neque officia libero laudantium totam eaque id laborum, nam eveniet
                            dolorem alias nemo consequuntur magnam?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores ratione iste
                            voluptatibus soluta a neque officia libero laudantium totam eaque id laborum, nam eveniet
                            dolorem alias nemo consequuntur magnam?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores ratione iste
                            voluptatibus soluta a neque officia libero laudantium totam eaque id laborum, nam eveniet
                            dolorem alias nemo consequuntur magnam?</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-9">
                    <b>Welcome to our website!</b>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum maxime quo vero quae ipsam quas
                        repellendus corrupti laborum placeat, non pariatur delectus! Nulla cum nesciunt quas et facere.
                        Voluptatum cupiditate mollitia natus aliquam laborum eaque officia. Itaque eaque commodi alias
                        ullam illo inventore id, numquam sapiente, dolores perspiciatis vero, cumque incidunt quisquam
                        provident illum excepturi. Mollitia, quidem sit modi quibusdam earum natus, facilis eligendi
                        laborum dolorum exercitationem minus molestiae? Inventore porro consequatur iste minima! Nulla a
                        et officiis unde optio odit, similique sequi veniam ducimus totam. Reiciendis soluta error quia
                        laboriosam aliquid? Quo, facilis. Natus, numquam quidem. Voluptatem, porro vero?</p>
                </div>
                <div className="col-3">
                    <b>Bigshot, Zoo & Adds,P.C.</b>
                    <p>
                        419 West South Street 4200 <br />Huston, Texas 35983 <br /> 322.322.8800 <br />322.322.8800 Fax <br /> <a href="#">Me@lzblaw.com</a>
                    </p>
                </div>

                <form className="m-5">
                    <div className="form-group">
                      <label>What kind of service are you interested in?</label>
                      <select onChange={handleChange} className="form-control" name="" id="">
                        <option></option>
                        <option value="sub">Subrogation</option>
                        <option value="lit">Litigation</option>
                        <option value="bus">Business</option>
                        <option value="tra">Transportation</option>
                      </select>
                    </div>
                    <Link to="/what-we-do" className="btn btn-secondary btn-block">Continue</Link>
                </form>

            </div>
        </React.Fragment>
    )
}
