import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import '../styles/index.scss'

import antek from "../assets/antek2e.pdf"
import essays from "../assets/essays.pdf"

const Ebooks = () => {
    return (
        <Layout>
            <Head title="e-booki"/>
            <h1>E booki</h1>
            <div className="">
                    <h2>Buława marszałkowska</h2>
                    <h4>Mini - opowiadania</h4>
                    <p><em>(1939- 1948)</em></p>
                    <p><em>“Maszerują strzelcy, maszerują, karabiny błyszczą, szary strój…</em></p>

                    <p>Ile to razy śpiewałem tę i inne piosenki najpierw w podchorążówce, a później razem z moimi żołnierzami! Także podczas marszów forsownych, 80 km z pełnym wyposażeniem, gdy niektórzy nie wytrzymywali i trzeba ich było
                                    później zbierać i dowozić.</p>
                    <p>Tajemnicą cicho powtarzaną wśród panów oficerów jest to, że piosenki wojskowe są po to, żeby zająć czymś żołnierza podczas marszu. Nie czuje on wtedy tak zmęczenia, niewygody znosi łatwo, ale przede wszystkim nie ma
                                    czasu na strach, gdy już idzie tam, dokąd ma dojść, gdzie jest potrzebny. Ojczyzna nas potrzebuje, kraj na nas liczy…</p>
                    <p>Wstydliwe słowo: strach… Właściwie nigdy nie wypowiadane. W wojsku nie ma przecież miejsca na coś takiego. Liczą się nasze ideały, w cenie jest patriotyzm, odwaga, a przede wszystkim honor. Szczególnie ktoś taki jak
                                    ja, oficer zawodowy, po prostu nie ma prawa się bać.</p>
                    <p>A jednak Antek czuł pewne zdenerwowanie. Pociąg toczył się spokojnie, cicho dudniąc po torach. Każdy wstrząs na złączach wywoływał lekkie mdłości. Czy oni też to czują?”</p>
                    <br></br>
                    <p><em>fragment</em></p>
            </div>
            <a href = {antek} target="_blank">Antek</a><br></br>
            <div className=""><br></br>
            <h2>Eseje</h2>
            <h4>Szkice historyczno - polityczne</h4>
            <p><em>(2913 - 2015)</em></p>
            <p><em>Hrubieszów 1944</em></p>
            <p>“Jest lipiec 1944. To już blisko 70 lat temu! A jednak dawne opowieści wracają, dodając życia historii, a niekiedy weryfikując obiegowe opinie o nas, Polakach i o tamtych czasach.</p>
            <p>Czy może to mieć wpływ na nasze obecne rozumienie i odczuwanie tego, co istotne dla nas, ludzi spragnionych narodowej dumy tak często odrzucanej i wykpiwanej przez tych, co teraz są “na górze”?</p>
            <p>Nie chcemy wciąż przepraszać, za winy niepopełnione, chcemy być dumni z naszej przeszłości i mamy z czego, bo wielu naszych przodków dało przykład heroizmu i postawy moralnej, jaką dziś już chyba niewielu potrafiłoby
                się wykazać.</p>
            <p>A jednak ludzie zawsze byli różni i tak jak teraz, oprócz tych dzielnych, dążących do prawdy i sprawiedliwości, mamy krętaczy i zakłamanych karierowiczów, tak i kiedyś obok bohaterów, oraz ludzi po prostu dobrych i
                uczciwych zdarzali się podli i cyniczni, a czasem tacy, którym złe emocje odbierały zdolność do moralnego osądu. Byli też i tacy naiwni, wieczni optymiści, którzy “wierzą w ludzi” i nie chcą przyjmować “teorii spiskowych”</p>
            <br></br>
            <p><em>fragment</em></p>
        </div>
            <a href ={essays} target="_blank">Eseje</a>
        
        </Layout>
    )
}

export default Ebooks