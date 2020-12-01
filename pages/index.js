import Fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout';
import App from '../components/App';
// import './Images.css'

const Index = (props) => (
    <Layout>
        <div>
            <h1>Photoswipe Gallery</h1>
            <br />
            <h5>Double click to zoom</h5>
            <App data={props.data} />
        </div>
    </Layout>
    );

Index.getInitialProps = async function() {
    const res =     await fetch('https://www.reddit.com/r/memes.json?limit=1000');
    const data =    await res.json();
    return {
        data: data.data
    };
}

export default Index;