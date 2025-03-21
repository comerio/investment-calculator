export default function UserInput() {
    return (
        <div id="user-input">
            <div className="input-group">
                <label htmlFor="initial-investment">
                    Initial Investment
                    <input type="text" id="initial-investment"/>
                </label>
                <label htmlFor="annual-investment">
                    Annual Investment
                    <input type="text" id="annual-investment"/>
                </label>
            </div>
            <div className="input-group">
                <label htmlFor="expected-return">
                    Expected Return
                    <input type="text" id="expected-return"/>
                </label>
                <label htmlFor="duration">
                    Duration
                    <input type="text" id="duration"/>
                </label>
            </div>
        </div>
    );
};