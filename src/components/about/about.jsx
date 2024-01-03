import React from 'react';
import './about.css';
import image1 from '../../assets/1.webp';
import image2 from '../../assets/2.webp';
import image3 from '../../assets/3.webp';

const About = () => {
  return (
    <section id='About'>
        <span className="title">About GatherEase</span>
        <div className="employees">
            <div className="employee">
                <img src={image1} alt="image1" className="employeeimage" />
                <div className="etext">
                   <h2>Our Dream Team</h2>
                   <p>At GatherEase, we are passionate about making your event dreams come true. Our team is comprised of experienced professionals who are dedicated to ensuring every detail of your event is perfect. From catering to transportation, accommodation to lighting, music systems to decorations, and security, we handle it all with precision and care to make your event a success.</p> 
                </div>
            </div>
            <div className="employee">
                <img src={image2} alt="image2" className="employeeimage" />
                <div className="etext">
                   <h2>Turning Visions into Reality</h2>
                   <p>Jessica is a visionary with a passion for event planning. With over 10 years of experience in the industry, she has the expertise and creativity to turn any event vision into a reality. She oversees our team of professionals to ensure every detail is executed flawlessly.</p> 
                </div>
            </div>
            <div className="employee">
                <img src={image3} alt="image3" className="employeeimage" />
                <div className="etext">
                   <h2>A Perfectionist on Every Detail</h2>
                   <p>Angela brings an eye for detail to every event she plans. Her meticulous approach ensures that no detail is overlooked, and every aspect of your event is executed to perfection. With her creative vision and attention to detail, Angela is an essential member of our team.</p> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default About