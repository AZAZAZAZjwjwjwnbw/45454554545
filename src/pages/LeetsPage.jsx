// import React, { useState } from 'react';

// export default function LeetsPage() {
//     const vocabulate = {
//         "a": "/-\\",
//         "b": "8|",
//         "c": "<",
//         "d": "|0",
//         "e": "2",
//         "f": "|=",
//         "g": "9",
//         "k": "|<",
//         "j": "1",
//         "l": "|", 
//         "s": "~",
//         "v": "|/",
//         "n": "4",
//         "h": "|->",
//         "m": "|)/|",
//         "p": "|0",
//         "o": "0",
//         "i": ";",
//         "u": "(),",
//         "y": "8",
//         "t": "+",
//         "r": "/>",
//         "w": "\\/\\/",
//         "q": "0|",
//         "x": "><",
//         "z": "7_"
//     };
//     const [inputText, setInputText] = useState('');

//     const [leetText, setLeetText] = useState('');
//     const handleInputChange = (event) => {
//         const value = event.target.value;
//         setInputText(value);
//         convertTextToLeet(value);
//     };
//     const convertTextToLeet = (textToConvert) => {
//         const lowerCaseText = textToConvert.toLowerCase(); 
//         let result = '';

//         for (let i = 0; i < lowerCaseText.length; i++) {
//             const char = lowerCaseText[i];
//             result += vocabulate[char] !== undefined ? vocabulate[char] : char;
//         }
//         setLeetText(result);
//     };

//     return (
//         <div>
//             <h1>Leet Speak </h1>
//             <input
//                 type="text"
//                 value={inputText}
//                 onChange={handleInputChange}
//                 placeholder="Введите слова..."
//             />
           
//             <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
//                 {leetText}
//             </div>
//         </div>
//     );
// }