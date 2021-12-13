import React, { useContext } from 'react'
import news from '../images/content-navlink-news.jpg'
import contact from '../images/content-05-contact.jpg'
import where from '../images/content-link-where.jpg'
import reputation from '../images/content-link-reputation.jpg'
import { ServiceContext } from '../context/ServiceContext'

export const Contact = () => {
    return (
        <React.Fragment>
            <br />
            <div class="container">
               <div class="row">
                    <div class="col-3" id="sidebar-contact">
                        <h3>Contact us </h3>
                        <hr />
                        <p>Directions / Parking</p>
                        <p>Carreer opportunities</p>
                        <img src={news} width="100%" alt="" />
                        <br />
                        <h5>News and events</h5>
                        <p>Join our magnificent firm and do more stuff with us</p>
                    </div>
                    <div class="col-6">
                        <img src={contact} width="100%" alt="" />
                        <br />
                        <p>The office hours are 8am-%pm Monday through Friday. </p>
                        <p>689 East south street <br />Suite 4210 <br />Huston Texas 09324</p>
                        <p>PH: 555.555.5555</p>
                        <p>Fax: 555.555.5555</p>
                        <p>Contact Rosemary Sage at <a href="rosemary@lawfirm.com">rosemary@lawfirm.com</a></p>
                    </div>
                    <div class="col-3 p-3 ml-auto">
                        <img src={where} width="100%"  alt="" />
                        <br />
                        <h5>News and events</h5>
                        <p>Join our magnificent firm and do more stuff with us</p>
                        <br />
                        <img src={reputation} width="100%" alt="" />
                        <h5>News and events</h5>
                        <p>Join our magnificent firm and do more stuff with us</p>
                    </div>
                </div>
            </div>
            <br/> 
        </React.Fragment >
    )
}
