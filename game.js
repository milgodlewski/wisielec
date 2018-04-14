const game = {
    currentSentence : null, //aktualnie pobrane has�o
    currentSentenceLetters : null,
    attempts : 5, //ile pr�b zosta�o dla aktualnej gry
    elemBoardElem : document.querySelector('.game-board'), //element z ca�� gr�
    elemSentence : document.querySelector('.game-sentence'), //element z has�em do zgadni�cia
    elemAttempts : document.querySelector('.game-attempts'), //element z liczba prob
    elemLetters : document.querySelector('.game-letters'), //lista z literkami do klikania
    sentences : [ //has�a z kt�rych losujemy
        "Fantomas",
        "Super Szamson",
        "Has�o",
        "Myszka",
        "Super bohaterowie",
        "Super pies",
        "Przyjaciel",
        "Kurs Javascript",
        "Terminator",
        "Superman",
        "Herkules",
        "Batman",
        "Spiderman",
        "Kapitan Ameryka"
    ],

generateLetterButtons : function() {
        const alphabet = ['a','�','b','c','�','d','e','�','f','g','h','i','j','k','l','�','m','n','�','o','�','p','q','r','s','�','t','u','v','w','x','y','z','�','�'];

        alphabet.forEach(function(letter) {
            const button = document.createElement('button');
            button.classList.add('game-letter');
            button.type = 'button';
            button.dataset.letter = letter;
            button.innerHTML = letter;
            this.elemLetters.appendChild(button);
        }.bind(this));
    },

    bindEvents : function() {
        this.elemLetters.addEventListener('click', function(e) {
            if (e.target.nodeName.toUpperCase() === "BUTTON" && e.target.classList.contains('game-letter')) {
                const letter = e.target.dataset.letter;
                console.log(letter); //narazie wypiszmy liter� w konsoli
                e.target.disabled = true;
            }
        }.bind(this));
    },

    initBoard : function() {
        this.generateLetterButtons();
        this.bindEvents();
    }
};

game.initBoard();