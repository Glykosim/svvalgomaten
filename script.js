document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    // Her ligger all politikk. Hvert spørsmål har:
    // text: Spørsmålet som stilles.
    // sv_answer: SVs posisjon (5=Helt enig, 1=Helt uenig).
    // policy_for: Teksten som vises hvis brukeren er enig med SV.
    // policy_mot: Teksten som vises hvis brukeren er uenig.
    const questionsData = {
        klima: {
            title: "Klima og natur",
            questions: [
                {
                    text: "Bør staten ta en mer aktiv rolle og investere stort i grønn industri for å skape nye, trygge arbeidsplasser og kutte utslipp?",
                    sv_answer: 5,
                    policy_for: "Du og SV mener staten må lede an i det grønne skiftet ved å investere i ny industri og skape klimajobber for fremtiden.",
                    policy_mot: "SV mener staten må ta en aktiv rolle i det grønne skiftet. Private aktører alene klarer ikke å omstille Norge raskt nok."
                },
                {
                    text: "Bør hensynet til sårbar natur veie tyngre enn økonomiske interesser når nye veier og hyttefelt skal bygges?",
                    sv_answer: 5,
                    policy_for: "Du og SV vil ta vare på naturen vår. Vi mener naturkrisen er like alvorlig som klimakrisen og vil ha en strengere arealpolitikk.",
                    policy_mot: "SV mener hensynet til naturen må komme først. Vi vil stanse bit-for-bit-nedbyggingen av norsk natur."
                }
            ]
        },
        skole: {
            title: "Skole og oppvekst",
            questions: [
                {
                    text: "Bør vi bruke mer av fellesskapets penger på å ansette flere lærere i den offentlige skolen, fremfor å støtte private skoler?",
                    sv_answer: 5,
                    policy_for: "Du og SV prioriterer fellesskolen. Vi vil ha flere lærere og mindre klasser for å sikre at alle barn blir sett og får den hjelpen de trenger.",
                    policy_mot: "SV mener fellesskolen er ryggraden i samfunnet og vil stoppe profitt fra velferd. Pengene skal gå til barna, ikke til private eiere."
                },
                {
                    text: "Bør alle barn ha rett til en gratis plass i SFO for å sikre lek, læring og sosial utjevning?",
                    sv_answer: 5,
                    policy_for: "Du og SV er enige om at gratis SFO er et viktig tiltak for å bekjempe ulikhet og gi alle barn en god start på livet.",
                    policy_mot: "SV kjemper for gratis SFO for alle. Det sparer familier for store utgifter og sikrer at ingen barn faller utenfor fellesskapet."
                }
            ]
        },
        helse: {
            title: "Helse og omsorg",
            questions: [
                {
                    text: "Bør vi styrke det offentlige helsevesenet i stedet for å la kommersielle selskaper drive sykehus og sykehjem for profitt?",
                    sv_answer: 5,
                    policy_for: "Du og SV stoler på fellesskapet. Vi vil ha et sterkt, offentlig helsevesen der pasientens behov kommer foran profittjag.",
                    policy_mot: "SV er imot profitt på velferd. Vi mener skattepengene våre skal gå til bedre helsetjenester, ikke til å berike private eiere."
                },
                {
                    text: "Bør tannhelse bli en del av det offentlige helsetilbudet, på lik linje med andre helsetjenester?",
                    sv_answer: 5,
                    policy_for: "Du og SV mener at god helse ikke skal avhenge av tykkelsen på lommeboka. Vi vil at tannhelse skal være en del av egenandelsordningen.",
                    policy_mot: "SV jobber for en tannhelsereform der det offentlige tar en større del av regningen, slik at alle har råd til å gå til tannlegen."
                }
            ]
        },
        okonomi: {
            title: "Rettferdig økonomi",
            questions: [
                {
                    text: "Bør de med de aller høyeste inntektene og formuene bidra mer til fellesskapet gjennom økt skatt for å finansiere velferd?",
                    sv_answer: 5,
                    policy_for: "Du og SV mener at de som har mest, skal bidra mest. Rettferdig skatt er nøkkelen til å finansiere gode skoler, sykehus og eldreomsorg for alle.",
                    policy_mot: "SV kjemper for et mer rettferdig skattesystem der de på toppen bidrar mer, slik at vi kan redusere forskjellene og styrke fellesskapet."
                },
                 {
                    text: "Bør staten regulere strømmarkedet sterkere for å sikre lavere og mer forutsigbare priser for folk og bedrifter?",
                    sv_answer: 5,
                    policy_for: "Du og SV mener at strøm er en grunnleggende nødvendighet, ikke en vare for spekulasjon. Vi vil ha politisk kontroll for å sikre trygghet og rettferdige priser.",
                    policy_mot: "SV vil endre dagens strømmarked og innføre en makspris for å gi folk og bedrifter forutsigbarhet og trygghet i hverdagen."
                }
            ]
        },
        arbeidsliv: {
            title: "Et trygt arbeidsliv",
            questions: [
                {
                    text: "Bør vi styrke retten til faste, hele stillinger og gjøre det vanskeligere for bedrifter å bruke midlertidige ansettelser og innleie?",
                    sv_answer: 5,
                    policy_for: "Du og SV er enige om at et trygt og forutsigbart arbeidsliv er grunnleggende. Faste, hele stillinger gir trygghet for den enkelte og familien.",
                    policy_mot: "SV kjemper for et organisert arbeidsliv og vil stramme inn reglene for innleie og midlertidighet for å bekjempe sosial dumping."
                },
                {
                    text: "Bør fagforeningenes rolle i samfunnet styrkes for å sikre arbeidstakere bedre lønns- og arbeidsvilkår?",
                    sv_answer: 5,
                    policy_for: "Du og SV ser verdien av et organisert arbeidsliv. Sterke fagforeninger er den beste garantien mot utnytting og for rettferdig lønn.",
                    policy_mot: "SV jobber for å styrke fagforeningene og øke fradraget for fagforeningskontingent, slik at flere kan organisere seg."
                }
            ]
        },
        bolig: {
            title: "Bolig for alle",
            questions: [
                {
                    text: "Bør det offentlige bygge og leie ut flere boliger med en husleie som er basert på byggekostnad, ikke markedspris?",
                    sv_answer: 5,
                    policy_for: "Du og SV mener at et trygt hjem er en menneskerett. Vi vil ha en tredje boligsektor med ikke-kommersielle utleieboliger for å sikre trygge hjem for alle.",
                    policy_mot: "SV vil at det offentlige skal ta en aktiv rolle i boligmarkedet for å dempe prispresset og sikre at flere har råd til et godt sted å bo."
                },
                {
                    text: "Bør det innføres strengere regulering av korttidsutleie (som Airbnb) for å sikre flere tilgjengelige langtidsleieboliger for fastboende?",
                    sv_answer: 5,
                    policy_for: "Du og SV er enige om at byene våre skal være for de som bor der, ikke for turister. Strengere regulering av Airbnb vil gi flere boliger til folk.",
                    policy_mot: "SV jobber for lokale handlingsrom til å regulere Airbnb, for å sikre levende nabolag og et mer stabilt leiemarked."
                }
            ]
        }
    };

    // --- DOM Elements ---
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');

    const topicCheckboxes = document.querySelectorAll('#topic-selection input[type="checkbox"]');
    const startError = document.getElementById('start-error');
    
    const questionTopicEl = document.getElementById('question-topic');
    const questionTextEl = document.getElementById('question-text');
    const answerOptions = document.getElementById('answer-options');
    const answerError = document.getElementById('answer-error');

    const progressBar = document.getElementById('progress-bar');
    
    const agreementList = document.getElementById('agreement-list');
    const disagreementList = document.getElementById('disagreement-list');

    // --- State Variables ---
    let currentQuestionIndex = 0;
    let selectedTopics = [];
    let questionQueue = [];
    let userAnswers = [];
    let currentAnswer = null;

    // --- Functions ---
    
    function startValgomat() {
        selectedTopics = Array.from(topicCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        if (selectedTopics.length !== 4) {
            startError.textContent = "Vennligst velg nøyaktig 4 temaer.";
            return;
        }
        startError.textContent = "";

        // Create the full list of questions based on selected topics
        questionQueue = selectedTopics.flatMap(topic => questionsData[topic].questions.map(q => ({...q, topicTitle: questionsData[topic].title})));
        
        // Reset state
        currentQuestionIndex = 0;
        userAnswers = [];
        
        startScreen.classList.add('hidden');
        resultScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');

        displayQuestion();
    }
    
    function displayQuestion() {
        // Reset answer state
        currentAnswer = null;
        answerError.textContent = "";
        document.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));

        const question = questionQueue[currentQuestionIndex];
        questionTopicEl.textContent = question.topicTitle;
        questionTextEl.textContent = question.text;
        
        updateProgressBar();
    }

    function handleAnswerClick(e) {
        if (e.target.classList.contains('answer-btn')) {
            currentAnswer = parseInt(e.target.dataset.value);
            
            // Visual feedback for selection
            document.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));
            e.target.classList.add('selected');
            answerError.textContent = ""; // Clear error if user clicks an answer
        }
    }

    function nextQuestion() {
        if (currentAnswer === null) {
            answerError.textContent = "Du må velge et svar før du går videre.";
            return;
        }

        userAnswers.push({
            question: questionQueue[currentQuestionIndex],
            answer: currentAnswer
        });

        currentQuestionIndex++;

        if (currentQuestionIndex < questionQueue.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }

    function updateProgressBar() {
        const progress = ((currentQuestionIndex) / questionQueue.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showResults() {
        // Final progress bar update
        progressBar.style.width = '100%';

        agreementList.innerHTML = '';
        disagreementList.innerHTML = '';

        let agreements = 0;
        let disagreements = 0;

        userAnswers.forEach(item => {
            const userScore = item.answer;
            const svScore = item.question.sv_answer;
            const difference = Math.abs(userScore - svScore);

            // Logic: 0 or 1 point difference = agreement. 3 or 4 points difference = disagreement.
            if (difference <= 1) {
                const li = document.createElement('li');
                li.textContent = item.question.policy_for;
                agreementList.appendChild(li);
                agreements++;
            } else if (difference >= 3) {
                const li = document.createElement('li');
                li.textContent = item.question.policy_mot;
                disagreementList.appendChild(li);
                disagreements++;
            }
        });

        if (agreements === 0) {
            agreementList.innerHTML = '<li>I de valgte spørsmålene fant vi ingen store enigheter, men politikk er komplisert!</li>';
        }
        if (disagreements === 0) {
            disagreementList.innerHTML = '<li>Du og SV er enige om det aller meste i disse spørsmålene!</li>';
        }

        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
    }

    function restartValgomat() {
        resultScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        // Uncheck boxes for a fresh start
        topicCheckboxes.forEach(cb => cb.checked = false);
    }


    // --- Event Listeners ---
    startBtn.addEventListener('click', startValgomat);
    nextBtn.addEventListener('click', nextQuestion);
    answerOptions.addEventListener('click', handleAnswerClick);
    restartBtn.addEventListener('click', restartValgomat);
});