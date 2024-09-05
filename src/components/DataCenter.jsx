import React from 'react';
import CommonHeader from './CommonHeader';
import './styles/DataCenter.css'; // Importing the CSS file
import LoadingAnimation from '../utils/LoadingAnimation';

const DataCenter = () => {
  return (
    <div className="data-center-container">
      <LoadingAnimation />

      <CommonHeader title="Micro & Edge Data Centers" location="Micro & Edge" />
      <div className='data-center-wrapper'>
        <div className="data-center-content">
          <h2 className="data-center-heading">Micro and Edge Data Centers: Pioneering the Future of Localized Data Management</h2>
          
          <section className="data-center-section">
            <h3 className="data-center-subheading">Micro Data Centers:</h3>
            <h4 className="data-center-subsubheading">Defining Micro Data Centers</h4>
            <p className="data-center-paragraph">
              Micro Data Centers (MDCs) are compact and fully functional data centers that provide localized support for data processing and storage. These centers are designed to process data closer to the point of use, reducing latency and improving performance.
            </p>
            
            <h4 className="data-center-subsubheading">Core Attributes and Advantages of Micro Data Centers:</h4>
            <ul className="data-center-list">
              <li className="data-center-list-item"><strong>Close to Users:</strong> MDCs are strategically located near end-users, allowing for faster data handling and real-time analytics for services like smart devices and streaming.</li>
              <li className="data-center-list-item"><strong>Expandable:</strong> The flexible design of MDCs makes it easy to expand or shrink resources to match fluctuating business needs.</li>
              <li className="data-center-list-item"><strong>Dependability:</strong> MDCs often feature built-in redundancy and robust backup systems to ensure continuous operation.</li>
              <li className="data-center-list-item"><strong>Economic Advantage:</strong> By minimizing long-distance data transport and maximizing local processing, MDCs can help reduce operational costs.</li>
              <li className="data-center-list-item"><strong>Enhanced Protection:</strong> MDCs can employ stringent security protocols to safeguard critical data and infrastructure.</li>
            </ul>
            
            <h4 className="data-center-subsubheading">Applications of Micro Data Centers:</h4>
            <ul className="data-center-list">
              <li className="data-center-list-item"><strong>Connected Devices:</strong> MDCs support the intensive data needs of IoT, enabling timely data processing and insights.</li>
              <li className="data-center-list-item"><strong>Retail Solutions:</strong> Retailers use MDCs to optimize inventory systems, customer analytics, and in-store operations, enhancing service delivery.</li>
              <li className="data-center-list-item"><strong>Industrial Automation:</strong> MDCs facilitate real-time monitoring and predictive maintenance in factories by processing data from sensors on-site.</li>
            </ul>
          </section>
          
          <section className="data-center-section">
            <h3 className="data-center-subheading">Edge Data Centers:</h3>
            <h4 className="data-center-subsubheading">Understanding Edge Data Centers</h4>
            <p className="data-center-paragraph">
              Edge Data Centers (EDCs) are medium-sized facilities positioned closer to end-users than traditional data centers, enhancing data processing speed and reliability for critical applications.
            </p>
            
            <h4 className="data-center-subsubheading">Key Features and Benefits of Edge Data Centers:</h4>
            <ul className="data-center-list">
              <li className="data-center-list-item"><strong>Minimized Latency:</strong> EDCs provide ultra-low latency, which is crucial for services such as augmented reality, cloud gaming, and telemedicine.</li>
              <li className="data-center-list-item"><strong>Local Processing:</strong> By handling data at the edge, EDCs reduce the load on central servers and the overall network, improving efficiency.</li>
              <li className="data-center-list-item"><strong>Improved Delivery:</strong> EDCs optimize CDNs by storing frequently accessed data near users, enhancing performance and reducing lag.</li>
              <li className="data-center-list-item"><strong>Regulatory Compliance:</strong> Some sectors benefit from EDCs' ability to keep sensitive data within regulated boundaries.</li>
              <li className="data-center-list-item"><strong>High Availability:</strong> EDCs are built with resilience in mind, incorporating multiple layers of redundancy and failover systems.</li>
            </ul>
            
            <h4 className="data-center-subsubheading">Use Cases of Edge Data Centers:</h4>
            <ul className="data-center-list">
              <li className="data-center-list-item"><strong>Next-Gen Networks:</strong> EDCs play a pivotal role in 5G networks, enabling the fast data processing needed for low-latency services.</li>
              <li className="data-center-list-item"><strong>Urban Planning:</strong> Smart cities leverage edge computing to manage traffic flow, surveillance, and municipal services more efficiently.</li>
              <li className="data-center-list-item"><strong>Digital Health:</strong> EDCs provide the infrastructure needed for instantaneous telemedicine services and remote patient monitoring.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DataCenter;
