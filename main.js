const faqs = {
    'What is Frontend Mentor, and how will it help me?': 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.',
    'Is Frontend Mentor free?': 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    'Can I use Frontend Mentor projects in my portfolio?': 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellentway to showcase your skills to potential employers!',
    'How can I get help if I\'m stuck on a Frontend Mentor challenge?': 'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.'
}

const faqContainer = document.createElement('div');
faqContainer.className = 'questions-container';



for (question of Object.keys(faqs)) {
    const qaContainer = document.createElement('div');
    qaContainer.className = 'questions-container acordion';

    const questionTitle = document.createElement('h3');
    const answerParagraph = document.createElement('p');

    questionTitle.textContent = question.trim();
    answerParagraph.textContent = faqs[question];
    answerParagraph.style.display = 'none';

    questionTitle.addEventListener('click', openedQuestion);

    function openedQuestion() {
        if (answerParagraph.style.display === 'none') {
            answerParagraph.style.display = 'block';
            
            const iconPlus = document.createElement('img');
            iconPlus.src = '/assets/images/icon-plus.svg'


        } else {
            answerParagraph.style.display = 'none';
        }
    }
    
    qaContainer.append(questionTitle, answerParagraph);
    faqContainer.appendChild(qaContainer);
}

document.body.appendChild(faqContainer);
