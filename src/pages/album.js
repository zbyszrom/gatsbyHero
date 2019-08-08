import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import pielgrzym from "../assets/pielgrzymka.pdf"
const Album = () => {
    return (
        <Layout>
            <Head title="Album"/>
            <h1>Album</h1>
            <div className = "text">
    <p>Tutaj umieściłem album (w formacie pdf), który złożyłem ze zdjęć zrobionych podczas pielgrzymki do Ziemi Świętej w 2014 r. Dodałem również refleksje, które spisałem wkrótce po powrocie. Album można przeglądac na stronie (przewijając
        w pionie), albo otworzyć oddzielnie <a href="https://drive.google.com/file/d/0B7u5sdRKSNmKX0dJV25KeG9lVVE/view?usp=sharing" target="_blank">Pielgrzymka do Ziemi Św.</a></p>
    </div>
            <embed src={pielgrzym} type="application/pdf" width="894" height="1262" />

        </Layout>
    )
}

export default Album