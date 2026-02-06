import React from 'react'
import figlet from "figlet";
import cryptoRandomString from 'crypto-random-string';

const randomString = cryptoRandomString({length: 10, type: 'ascii-printable'});

const Figlet = () => {
const [displayText, setDisplayText] = React.useState('');
const [currentString, setCurrentString] = React.useState(randomString);
const [inputValue, setInputValue] = React.useState('');
const [figletText, setFigletText] = React.useState('');

// Initialize figlet fonts on component mount
React.useEffect(() => {
    figlet.defaults({ fontPath: 'https://unpkg.com/figlet@latest/fonts' });
}, []);

const generateFiglet = () => {
    figlet(inputValue || 'Hello', (err, data) => {
        if (err) {
            console.error('Error generating figlet:', err);
            setFigletText('Error generating figlet');
        } else {
            setFigletText(data);
        }
    });
}

React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
        if (index <= currentString.length) {
            setDisplayText(currentString.slice(0, index));
            index++;
        } else {
            clearInterval(interval);
        }
    }, 120);
    
    return () => clearInterval(interval);
}, [currentString]);

React.useEffect(() => {
    const timer = setInterval(() => {
        setCurrentString(cryptoRandomString({length: 10, type: 'ascii-printable'}));
    }, 10000);
    
    return () => clearInterval(timer);
}, []);

const [showCopyNotification, setShowCopyNotification] = React.useState(false);

const handleCopy = () => {
    navigator.clipboard.writeText(figletText);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
};

return (
    <div className='flex flex-col items-center h-screen w-screen'>
        <div className='flex top-10 text-4xl justify-center mb-10 py-2'>
            <pre className='pt-4 text-4xl'>Welcome to the Figlet!   </pre>
            <pre>
                {displayText}
            </pre>
        </div>
        <div className=''>
            <h1 className='p-4'>In put your text here :</h1>
            <input type="text" className='border-2 border-white rounded-md p-2' onChange={(e) => {setInputValue(e.target.value)}}/>
            <br />
            <button onClick={() => {generateFiglet()}} className='border border-white bg-green-600 rounded-md p-2 mt-2'>Generate Figlet</button>
            <div className='relative'>
                {figletText && (
                    <pre className='mt-4 text-sm overflow-auto border-2 border-white rounded-md p-4 bg-slate-800 text-green-400'>
                        {figletText}
                    </pre>
                )}
                <div className='absolute bottom-0 right-0 bg-gray-400 p-1'>
                    <button onClick={handleCopy} className='cursor-pointer'>
                        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H7V13H3.5C3.22386 13 3 12.7761 3 12.5V2.5C3 2.22386 3.22386 2 3.5 2H4V2.25C4 2.66421 4.33579 3 4.75 3H10.25C10.6642 3 11 2.66421 11 2.25V2H11.5C11.7761 2 12 2.22386 12 2.5V7H13V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5ZM10.5 9C10.7761 9 11 8.77614 11 8.5C11 8.22386 10.7761 8 10.5 8C10.2239 8 10 8.22386 10 8.5C10 8.77614 10.2239 9 10.5 9ZM13 8.5C13 8.77614 12.7761 9 12.5 9C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8C12.7761 8 13 8.22386 13 8.5ZM14.5 9C14.7761 9 15 8.77614 15 8.5C15 8.22386 14.7761 8 14.5 8C14.2239 8 14 8.22386 14 8.5C14 8.77614 14.2239 9 14.5 9ZM15 10.5C15 10.7761 14.7761 11 14.5 11C14.2239 11 14 10.7761 14 10.5C14 10.2239 14.2239 10 14.5 10C14.7761 10 15 10.2239 15 10.5ZM14.5 13C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5C14 12.7761 14.2239 13 14.5 13ZM14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15ZM8.5 11C8.77614 11 9 10.7761 9 10.5C9 10.2239 8.77614 10 8.5 10C8.22386 10 8 10.2239 8 10.5C8 10.7761 8.22386 11 8.5 11ZM9 12.5C9 12.7761 8.77614 13 8.5 13C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12C8.77614 12 9 12.2239 9 12.5ZM8.5 15C8.77614 15 9 14.7761 9 14.5C9 14.2239 8.77614 14 8.5 14C8.22386 14 8 14.2239 8 14.5C8 14.7761 8.22386 15 8.5 15ZM11 14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5C10 14.2239 10.2239 14 10.5 14C10.7761 14 11 14.2239 11 14.5ZM12.5 15C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                {showCopyNotification && (
                    <div className='absolute bottom-12 right-0 bg-green-500 border-2 border-white rounded-md p-2'>
                        <p className='text-white'>Successfully copied to clipboard</p>
                    </div>
                )}
            </div>
        </div>
    </div>
)
}

export default Figlet