import './herostyles.css';
import Image from 'next/image';
export default function Hero () {
    const heroContent = {
        title: 'Best Piles Treatment in Hyderabad',
        heroImage : '/happy patient.svg',
        descList : [
            'Piles are swollen blood vessels in the rectum.',
            'Piles are very common but not something.',
            'We are a team of experienced doctors who.',
            'If you are suffering from piles.',
            'We are here to help you'
        ],
    }
    return (
        <>
        <section className='hero_section'>
        <h1 className='hero_title'>{heroContent.title}</h1>  
           <div className='hero_content flex flex-wrap'>
            <div className="left_hero"> 
            <Image src={heroContent.heroImage} alt="Logo" fill  className='hero_image'
            LazyLoad={true}
            />
            </div>
            <div className="right_hero">
            <ul className='list_items_hero'>
                    {heroContent.descList.map((desc, index) => (
                        <li className='list_item_hero' key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
           </div>
        </section>
        </>
    )
}