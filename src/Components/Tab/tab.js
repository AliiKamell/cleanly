import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './tab.css'

function FillExample() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="cairo" title="Cairo">
                Location: Cairo<br/>
                Price: 15 EGP / m²
            </Tab>
            <Tab eventKey="giza" title="Giza">
              Location: Giza <br/>
              Price: 15 EGP / m²
            </Tab>
            <Tab eventKey="sokhna" title="Al-Sokhna">
               Location: Al-Sokhna<br/>
               Price: 25 EGP / m²
            </Tab>
            <Tab eventKey="sahel" title="Soon In Sahel" disabled>
            </Tab>
        </Tabs>
    );
}

export default FillExample;