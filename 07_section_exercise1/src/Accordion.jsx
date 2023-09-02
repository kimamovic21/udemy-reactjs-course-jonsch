import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ faqs }) => {
    // console.log(faqs);
    return (
        <div className='accordion'>
            {faqs.map((faq, index) => {
                // console.log(faq);
                // console.log(index);
                return (
                    <AccordionItem 
                        key={faq.title}
                        title={faq.title}
                        text={faq.text}
                        number={index}
                    />
                )
            })}
        </div>
    );
};

export default Accordion;