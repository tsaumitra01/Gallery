import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitz</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout;