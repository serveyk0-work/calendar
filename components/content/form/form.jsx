export const Form = (props) => {
    const { MONTHS, DAYS, popup, currentDate } = props;
    const getEnding = (date) => {
        switch (date) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }

    return (
        <div className="grid grid-align-content-center popup">
            <div className="popup_wrapper margin-0-auto">
                <div className="grid grid-align-content-center grid-justify-center popup__data">
                    <div className="grid data-block">
                        <p className="popup__data-title">Month</p>
                        <input type="text" className="popup__data-block"
                            value={(MONTHS[currentDate.currentMonth])} readonly />
                    </div>
                    <div className="grid data-block">
                        <p className="popup__data-title">Day</p>
                        <input type="text" className="popup__data-block"
                            value={currentDate.showDate + getEnding() + " " + DAYS[currentDate.currentDay]} readonly />
                    </div>
                </div>
                <p className="close" onClick={() => popup()}>×</p>
            </div>
        </div >
    );
}