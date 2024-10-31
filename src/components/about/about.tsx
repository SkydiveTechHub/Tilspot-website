
import { Button } from "../ui/Button";
import { CntItem } from "../../utils/comps";
import { TitleText } from "../ui/Typograph";
import Container from "../ui/Container";

const About = () => {
	return (
		<div className='md:px-[4.3rem] relative pt-[4rem] pb-[10rem]'>
        <Container>
            <div className='flex flex-col lg:flex-row justify-between items-center space-y-6'>
                <div className='relative flex-1'>
                    <img data-aos="fade-right" className='w-full h-[300px]' src="/images/aboutUs.jpg" alt="connect image" />
                    {/* <img data-aos="fade-up" className='hidden lg:block absolute top-[170px] h-[300px] right-5' src="/images/mobile.png" alt="connect image" />
                    <img data-aos="fade-left" className='lg:hidden absolute h-[300px] top-5' src="/images/c2.png" alt="connect image" /> */}
                </div>
                <div data-aos="fade-left" className='flex-1 md:px-8'>
                    <div className='lg:px-[2.5rem] space-y-4'>
                        <TitleText style='text-center lg:text-left md:text-[28px] text-left' text='WHO WE ARE!'/>
                        
                            <p>We envision a future where managing payments is stress-free, transparent, and fully integrated into your daily routine. With a focus on continuous improvement and innovation, Tilspot aims to , , and </p>
                            <ul className='space-y-2'>
                                <CntItem text="Transform people's approach financial management"/>
                                <CntItem text='Help people save time and reduce stress.'/>
                                <CntItem text='Gain better control over their finances.'/>
                            </ul>
                            
                            
                            
                        <Button variant='primary' text='Start now'/>                        
                    </div>


                </div>

            </div>       
        </Container>



      
    </div>
	);
};

export default About;
