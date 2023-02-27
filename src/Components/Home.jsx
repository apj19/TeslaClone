import React from 'react';
import Section from './Section';


function Home() {
  return (
    <div className='h-[100vh] scroll-smooth'>
        <Section
        title="Model 3"
        desc="Leasing starting at $349/mo"
        backgroundimg="model3.jpg"
        leftBtntext="Custom Order"
        rightBtntext="Demo Drive"
        />

        <Section
        title="Model Y"
        
        backgroundimg="modely.jpg"
        leftBtntext="Custom Order"
        rightBtntext="Demo Drive"
        />
        
        <Section
            title="Model S"
            desc="Scheudle a Demo Drive"
            backgroundimg="model-s.jpg"
            leftBtntext="Custom Order"
            rightBtntext="View Inventory"
        />

        <Section
            title="Model X"
            desc="Scheudle a Demo Drive"
            backgroundimg="model-x.jpg"
            leftBtntext="Custom Order"
            rightBtntext="View Inventory"
        />

        <Section
            title="Solar Panels"
            desc="Lowest Cost Solar Panels in America"
            backgroundimg="solar-panel.jpg"
            leftBtntext="Custom Order"
            rightBtntext="Learn More"
        />

        <Section
            title="Solar Roof"
            desc="Produce Clean Energy From Your Roof"
            backgroundimg="solar-roof.jpg"
            leftBtntext="Custom Order"
            rightBtntext="Learn More"
        />

        <Section
            title="Accessories"
            
            backgroundimg="accessories.jpg"
            leftBtntext="Shop Now"
            
        />
    
    </div>
  )
}

export default Home