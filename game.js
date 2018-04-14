const game = {
    currentSentence : null, //aktualnie pobrane has³o
    currentSentenceLetters : null,
    attempts : 5, //ile prób zosta³o dla aktualnej gry
    elemBoardElem : document.querySelector('.game-board'), //element z ca³¹ gr¹
    elemSentence : document.querySelector('.game-sentence'), //element z has³em do zgadniêcia
    elemAttempts : document.querySelector('.game-attempts'), //element z liczba prob
    elemLetters : document.querySelector('.game-letters'), //lista z literkami do klikania
    sentences : [ //has³a z których losujemy
        "Fantomas",
        "Super Szamson",
        "Has³o",
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
        const alphabet = ['a','¹','b','c','æ','d','e','ê','f','g','h','i','j','k','l','³','m','n','ñ','o','ó','p','q','r','s','œ','t','u','v','w','x','y','z','Ÿ','¿'];

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
                console.log(letter); //narazie wypiszmy literê w konsoli
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