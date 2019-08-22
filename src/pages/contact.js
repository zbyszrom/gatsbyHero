import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import '../styles/index.scss'

const Contact = () => {
    return (
        <Layout>
            <Head title="Kontakt"/>
             <div className="form">           
            <h2>Wyślij wiadomość</h2>
                <form id="contact_form" action="" method="POST" >
                    <div className="">
                        <label for="name">Twoje imię:</label><br />
                        <input id="name" className="input" name="name" type="text" value="" size="100" /><br />
                    </div>
                    <div className="">
                        <label for="email">Twój email:</label><br />
                         <input id="email" className="input" name="email" type="text" value="" size="100" /><br />
                    </div>
                    <div className="">
                        <label for="message">Twoja wiadomość:</label><br />
                        <textarea id="message" class="input" name="message" rows="7" cols="100"></textarea><br />
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