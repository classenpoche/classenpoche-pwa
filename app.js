// ?? ICI TU METS LES RÉPONSES (générées automatiquement plus tard)

const bonnesReponses = {
    imp: "1",
    cont: "6",
    plan: "8",
    vue: "10",
    prog: "15"
};

function corriger(){

    let score = 0;
    const total = Object.keys(bonnesReponses).length;

    for (let q in bonnesReponses){

        const r = document.querySelector('input[name="'+q+'"]:checked');

        if (r && r.value === bonnesReponses[q]){
            score++;
        }
    }

    let msg = "";

    const pct = Math.round(score * 100 / total);

    if (pct < 40) msg = "À revoir";
    else if (pct < 70) msg = "Correct";
    else msg = "Très bien";

    document.getElementById("resultat").innerHTML =
        `<h2>${score}/${total}</h2>
         <p>${pct}%</p>
         <p><b>${msg}</b></p>`;
}