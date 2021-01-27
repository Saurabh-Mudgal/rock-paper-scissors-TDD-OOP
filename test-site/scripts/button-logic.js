export default class ButtonLogic {

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    clearLog() {
        const logDivs = document.querySelectorAll(".selection")
        const records = document.querySelectorAll(".record")

        logDivs.forEach(logDiv => {
            logDiv.remove()
        })

        records.forEach(record => {
            record.innerText = "0"
        })
    }
}