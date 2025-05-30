import React, { useState } from 'react';
import '../styles/Footer.css'



function Footer() {
    const [inputValue, setInputValue] = useState ('')
    function handleInput(e) {
		setInputValue(e.target.value)
	}
    function checkValue() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }
    
    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
                <input
                    placeholder="Entrez votre mail !"
                    value={inputValue}
                    onChange={handleInput}
                    onBlur={checkValue}
                />
                <button onClick={() => alert(inputValue)}>Envoyer</button>
            
        </footer>
    )
}
export default Footer