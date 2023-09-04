import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ faqs }) => {
    const [curOpen, setCurOpen] = useState(1);

    return (
        <div className='accordion'>
            {faqs.map((faq, index) => {
                return (
                    <AccordionItem 
                        key={faq.title}
                        curOpen={curOpen}
                        onCurOpen={setCurOpen}
                        title={faq.title}
                        // text={faq.text}
                        number={index}
                    >
                        {faq.text}
                    </AccordionItem> 
                )
            })}
        </div>
    );
};

export default Accordion;