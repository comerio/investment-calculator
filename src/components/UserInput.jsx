export default function UserInput( {onChangeInput, userInput}) {    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">
                        Initial Investment
                    </label>
                    <input 
                        name="initial-investment"
                        type="number"
                        id="initial-investment"
                        onChange={(event) => onChangeInput('initialInvestment', event.target.value)}
                        value={userInput.initialInvestment}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">
                        Annual Investment
                    </label>
                    <input 
                        type="number"
                        id="annual-investment"
                        name="annual-investment"
                        onChange={(event) => onChangeInput('annualInvestment', event.target.value)}
                        value={userInput.annualInvestment}
                        required
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Return
                    </label>
                    <input 
                        type="number"
                        id="expected-return"
                        name="expected-return"
                        onChange={(event) => onChangeInput('expectedReturn', event.target.value)}
                        value={userInput.expectedReturn}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Duration
                    </label>
                    <input 
                        type="number"
                        id="duration"
                        name="duration"
                        onChange={(event) => onChangeInput('duration', event.target.value)}
                        value={userInput.duration}
                        required
                    />
                </p>
            </div>
        </section>
    );
};