function openTab(id) {
    // Verwijder active class van alle pagina's en knoppen
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));


    const targetPage = document.getElementById(id);
    const targetBtn = document.getElementById('tab-' + id + '-btn');

    if(targetPage && targetBtn) {
        targetPage.classList.add('active');
        targetBtn.classList.add('active');
    }
}



window.onload = () => {
    const statusElement = document.getElementById('status-update');
    if (statusElement) {
        const uren = new Date().getHours();
        let bericht = "";

        if (uren < 12) bericht = "Goedemorgen! Klaar om te creëren.";
        else if (uren < 18) bericht = "Goedemiddag! Focus op design.";
        else bericht = "Goedenavond! Werken aan nieuwe ideeën.";

        statusElement.innerText = bericht;
    }

    console.log("Portfolio van Thibau geladen. Versie 1.0");
};


function highlightProject(element) {
    element.style.borderColor = "#00ff41";
    element.style.boxShadow = "0 0 15px rgba(0, 255, 65, 0.3)";
}