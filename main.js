const faqs = {
    'What is Frontend Mentor, and how will it help me?': 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.',
    'Is Frontend Mentor free?': 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    'Can I use Frontend Mentor projects in my portfolio?': 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellentway to showcase your skills to potential employers!',
    'How can I get help if I\'m stuck on a Frontend Mentor challenge?': 'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.'
}

const faqContainer = document.createElement('div');

for (question of Object.keys(faqs)) {
    const questionTitle = document.createElement('h3');
    const answerParagraph = document.createElement('p');

    questionTitle.textContent = question.trim();
    answerParagraph.textContent = faqs[question];
    answerParagraph.style.display = 'none';

    questionTitle.addEventListener('click', function() {
        if (answerParagraph.style.display === 'none') {
            answerParagraph.style.display = 'block';
        } else {
            answerParagraph.style.display = 'none';
        }
    });

    faqContainer.appendChild(questionTitle);
    faqContainer.appendChild(answerParagraph);
}

document.body.appendChild(faqContainer);