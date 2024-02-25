import React, { useState } from 'react';
import '../styles/QuestionForm.css'
function QuestionForm() {
    const [inputValue, setInputValue] = useState ('Posez votre question ici ?')
    return (
        <div className="lmj-QuestionForm">
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}
export default QuestionForm