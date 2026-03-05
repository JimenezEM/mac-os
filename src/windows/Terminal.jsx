import WindowWrapper from '#hoc/WindowWrapper.jsx';
import { techStack } from '#constants/index.js';

import React from 'react';
import { Check, Flag } from "lucide-react";
import WindowControls from '#components/WindowControls.jsx';

const Terminal = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="terminal" />
            <h2>Tech Stack</h2>
        </div>

        <div className='techstack'>
            <p>
                <span className='font-bold'>@emily.jimenez % </span>
                show tech stack
            </p>

            <div className='label'>
                <p className='w-32'>Catergory</p>
                <p>Technologies</p>
            </div>

            <ul className='content'>
                {techStack.map(({ category, items }) => (
                    <li key={category} className='flex items-center'>
                        <Check className = "check" size={20} />
                        <h3>{category}</h3>
                        <ul>
                            {items.map((item, i) => (
                                <li key={i}>
                                    {item}
                                    {i < items.length - 1 ? "," : ""} 
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className='footnote'>
                <p>
                    <Check size={20} /> 5 of 5 stacks loaded successfully
                    100%
                </p>

                <p className='text-black'>
                    Render time: 6ms
                </p>
            </div>

        </div>
    </>
  );
  
};

//hoc: a component that takes a component as an input a returns a modified version of it

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
