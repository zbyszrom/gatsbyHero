import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import '../styles/index.scss'

const Contact = () => {
    return (
        <Layout>
            <Head title="Kontakt"/>
             <div className="form-container">           
            <h2>Wyślij wiadomość</h2>
                <form id="contact_form"  action="" method="POST" >
                    <div className="form-item">
                        <label for="name">Twoje imię:</label><br />
                        <input id="name" className="input" name="name" type="text" value="" size="50" /><br />
                    </div>
                    <div className="form-item">
                        <label for="email">Twój email:</label><br />
                         <input id="email" className="input" name="email" type="text" value="" size="50" /><br />
                    </div>
                    <div className="form-item">
                        <label for="message">Twoja wiadomość:</label><br />
                        <textarea id="message" className="input" name="message" rows="7" cols="50"></textarea><br />
                     </div>
                     <div>
                        <input id="submit_button" type="submit" value="Wyślij email" />
                     </div>
                </form>	
        </div>	
        </Layout>
    )
}

export default Contact