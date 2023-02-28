import React from 'react';
import 'animate.css';





function Section(props) {
   

 const imgurl=`/${props.backgroundimg}`

  return (
    <div className={`w-[100vw]
    h-[100vh] bg-cover bg-center
    flex flex-col justify-between items-center 
    `}  style={{backgroundImage: `url('${imgurl}')`}}
      >
      
      
        <div className='pt-[15vh] text-center animate__animated animate__fadeInUp'>
            <h1 className='text-[40px]'>{props.title}</h1>
            <p className='text-[16px]'>{props.desc}</p>
        </div>
        
        <div className='  mb-[30px] flex flex-col justify-center items-center'>
            
            <div className='flex flex-col gap-4 md:flex-row md:gap-10 mb-8'>
          
                <button className='animate__animated  animate__fadeInLeft bg-[#3a3c40]
                h-[40px] w-[180px] text-[white]
                opacity-80  text-[14px] rounded cursor-pointer
                '>{props.leftBtntext}</button>
            
                {props.rightBtntext && <button className='animate__animated  animate__fadeInRight bg-[#e6e7e5]
                h-[40px] w-[180px] opacity-80  text-[14px] rounded cursor-pointer
                '>{props.rightBtntext}</button>}
              
            </div>
            
            <div className='animate-bounce'>
            <svg className='w-8 h-8 fill-white    ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
            </div>

        </div>
        
        
    </div>
  )
}

export default Section