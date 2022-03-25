var listatecs = [];

function area() {
    const area = document.querySelector('input[name="area"]:checked').value;

    if (area === "Front-End") {
        document.getElementById("linguagem").innerHTML =
            "<p>O que você quer aprender?</p><br><input type='radio' name='aprender' id='react' value='React' checked /><label for='react'>React</label><input type='radio' name='aprender' id='vue' value='Vue' /><label for='vue'>Vue</label><br><br><button type='submit' onclick='aprender()'>Escolher</button>";
    } else {
        document.getElementById("linguagem").innerHTML =
            "<p>O que você quer aprender?</p><br><input type='radio' name='aprender' id='c' value='C#' checked /><label for='c'>C#</label><input type='radio' name='aprender' id='java' value='Java' /><label for='java'>Java</label><br><br><button type='submit' onclick='aprender()'>Escolher</button>";
    }
}

function aprender() {
    var area = document.querySelector('input[name="area"]:checked').value;
    const aprender = document.querySelector('input[name="aprender"]:checked')
        .value;

    document.getElementById(
        "escolha"
    ).innerHTML = `<p>O que você pretende fazer?</p><br><input type='radio' name='escolha' id='especializar' value='especializar' checked /><label for='especializar'>Se especializar em ${area} e ${aprender}</label><input type='radio' name='escolha' id='fullstack' value='fullstack' /><label for='fullstack'>seguir se desenvolvendo para se tornar Fullstack</label><br><br><button type='submit' onclick='escolha()'>Escolher</button>`;
}

function escolha() {
    document.getElementById(
        "tecnologias"
    ).innerHTML = `<p> Você gostaria de aprender outras tecnologias?</p><input type='radio' name='tecnologias' value='sim' checked /><label for='sim'>Sim</label><input type='radio' name='tecnologias' value='nao' /><label for='nao'>Não</label><br><br><button type='submit' onclick='sn()'>Escolher</button>`;
}

function sn() {
    const sn = document.querySelector('input[name="tecnologias"]:checked').value;

    if (sn === "sim") {
        document.getElementById(
            "digitartec"
        ).innerHTML = `<p>Digite uma tecnologia que você gostaria de aprender</p><br><input type='text' id='tecdigitada'/><br><br><button type='submit' onclick='enviartec()'>Adicionar</button>`;
    } else {
        alert(
            "Ótimo! Continue sempre estudando e se aprimorando na área escolhida que você irá longe!"
        );
    }
}

function enviartec() {
    var listatecs = [];
    var tecnologia = document.getElementById("tecdigitada").value;

    listatecs.push(tecnologia);

    for (var indice = 0; indice < listatecs.length; indice++) {
        document.getElementById(
            "listatecs"
        ).innerHTML = `<p>${listatecs[indice]} é uma tecnologia maravilhosa! Você não vai se arrepender.</p>`;
        document.getElementById(
            "digitartec"
        ).innerHTML = `<p> Existe outra tecnologia que você gostaria de aprender?</p><input type='radio' name='tecnologias' value='sim' checked /><label for='sim'>Sim</label><input type='radio' name='tecnologias' value='nao' /><label for='nao'>Não</label><br><br><button type='submit' onclick='sn()'>Escolher</button>`;
    }
}