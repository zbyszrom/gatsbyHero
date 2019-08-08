import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Strony nie znaleziono</h1>
            <p><Link to="/">Do strony głównej</Link></p>
        </Layout>
    )
}

export default NotFound