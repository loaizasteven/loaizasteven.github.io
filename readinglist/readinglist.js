// Reading List Generator - Dynamic Content Management v2
// ===================================================
// 
// To add new reading items, simply use this structure:
// 
// 1. Create reading items:
//    createReadingItem('Title', 'URL', 'Type', 'Description')
//
// 2. Add to a section's items array in readingListData
//
// 3. To add a new topic, add to readingListData array:
//    {
//        id: 'topic-id',
//        emoji: '🚀',
//        title: 'Topic Name',
//        description: 'Topic description...',
//        sections: [/* sections array */]
//    }
//
// No HTML editing required!

// Reading List specific JavaScript functionality

// Function to create reading list items
function createReadingItem(title, url, type, description) {
    return {
        title,
        url,
        type,
        description
    };
}

// Function to create a reading section
function createReadingSection(sectionTitle, items) {
    const section = document.createElement('article');
    section.className = 'reading-item';
    
    const header = document.createElement('h3');
    header.textContent = sectionTitle;
    
    const content = document.createElement('div');
    content.className = 'reading-item-content';
    
    const ul = document.createElement('ul');
    
    items.forEach(item => {
        const li = document.createElement('li');
        
        const link = document.createElement('a');
        link.href = item.url;
        link.target = '_blank';
        link.innerHTML = `<strong>${item.title}</strong>`;
        
        const typeSpan = document.createElement('span');
        typeSpan.className = 'item-type';
        typeSpan.textContent = item.type;
        
        const description = document.createElement('p');
        description.textContent = item.description;
        
        li.appendChild(link);
        li.appendChild(typeSpan);
        li.appendChild(description);
        ul.appendChild(li);
    });
    
    content.appendChild(ul);
    section.appendChild(header);
    section.appendChild(content);
    
    return section;
}

// Function to create a complete topic section
function createTopicSection(id, emoji, title, description, sections) {
    const topicSection = document.createElement('section');
    topicSection.className = 'topic-section';
    
    const h2 = document.createElement('h2');
    h2.id = id;
    h2.textContent = `${emoji} ${title}`;
    
    const topicDesc = document.createElement('p');
    topicDesc.className = 'topic-description';
    topicDesc.textContent = description;
    
    const readingItems = document.createElement('div');
    readingItems.className = 'reading-items';
    
    sections.forEach(section => {
        readingItems.appendChild(section);
    });
    
    topicSection.appendChild(h2);
    topicSection.appendChild(topicDesc);
    topicSection.appendChild(readingItems);
    
    return topicSection;
}

// Function to render reading list data
function renderReadingList(data) {
    const main = document.querySelector('main');
    
    data.forEach(topic => {
        const sections = topic.sections.map(section => 
            createReadingSection(section.title, section.items)
        );
        
        const topicSection = createTopicSection(
            topic.id,
            topic.emoji,
            topic.title,
            topic.description,
            sections
        );
        
        main.appendChild(topicSection);
    });
}

// Reading list data structure
const readingListData = [
    {
        id: 'agentic-frameworks',
        emoji: '🤖',
        title: 'Agentic Frameworks',
        description: 'Explore the cutting-edge world of AI agents and multi-agent systems that can autonomously plan, reason, and execute complex tasks.',
        sections: [
            {
                title: 'Foundation Papers',
                items: [
                    createReadingItem(
                        'ReAct: Synergizing Reasoning and Acting in Language Models',
                        'https://arxiv.org/abs/2210.03629',
                        'Paper',
                        'Introduces the ReAct framework that combines reasoning and acting capabilities in language models.'
                    ),
                    createReadingItem(
                        'Reflexion: Language Agents with Verbal Reinforcement Learning',
                        'https://arxiv.org/abs/2303.17580',
                        'Paper',
                        'Framework for agents to learn from verbal feedback and self-reflection.'
                    ),
                    createReadingItem(
                        'The Rise and Potential of Large Language Model Based Agents',
                        'https://arxiv.org/abs/2310.06825',
                        'Survey',
                        'Comprehensive survey on LLM-based autonomous agents and their capabilities.'
                    )
                ]
            },
            {
                title: 'Frameworks & Tools',
                items: [
                    createReadingItem(
                        'AutoGen - Microsoft',
                        'https://github.com/microsoft/autogen',
                        'Framework',
                        'Multi-agent conversation framework for building conversational AI applications.'
                    ),
                    createReadingItem(
                        'LangChain',
                        'https://github.com/langchain-ai/langchain',
                        'Framework',
                        'Framework for developing applications powered by language models with agent capabilities.'
                    ),
                    createReadingItem(
                        'OpenSpiel - DeepMind',
                        'https://github.com/deepmind/open_spiel',
                        'Framework',
                        'Collection of environments and algorithms for research in general reinforcement learning and search/planning in games.'
                    )
                ]
            }
        ]
    },
    {
        id: 'authentication',
        emoji: '🔐',
        title: 'Authentication',
        description: 'Master modern authentication patterns, security protocols, and identity management systems for building secure applications.',
        sections: [
            {
                title: 'Core Concepts & Standards',
                items: [
                    createReadingItem(
                        'OAuth 2.0 Authorization Framework (RFC 6749)',
                        'https://datatracker.ietf.org/doc/html/rfc6749',
                        'RFC',
                        'The official OAuth 2.0 specification for authorization framework.'
                    ),
                    createReadingItem(
                        'OpenID Connect',
                        'https://openid.net/connect/',
                        'Specification',
                        'Identity layer on top of OAuth 2.0 protocol for authentication.'
                    ),
                    createReadingItem(
                        'JSON Web Tokens (JWT) Introduction',
                        'https://jwt.io/introduction/',
                        'Guide',
                        'Compact, URL-safe means of representing claims between two parties.'
                    ),
                    createReadingItem(
                        'WebAuthn Guide',
                        'https://webauthn.guide/',
                        'Guide',
                        'Web Authentication API for passwordless authentication.'
                    )
                ]
            },
            {
                title: 'Implementation & Security',
                items: [
                    createReadingItem(
                        'Auth0 - Authentication Flows',
                        'https://auth0.com/docs/get-started/authentication-and-authorization-flow',
                        'Documentation',
                        'Comprehensive guide to different authentication flows and when to use them.'
                    ),
                    createReadingItem(
                        'OWASP Top 10',
                        'https://owasp.org/www-project-top-ten/',
                        'Security Guide',
                        'Top 10 web application security risks including authentication vulnerabilities.'
                    ),
                    createReadingItem(
                        'OWASP Authentication Cheat Sheet',
                        'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',
                        'Cheat Sheet',
                        'Best practices for implementing secure authentication.'
                    )
                ]
            }
        ]
    },
    {
        id: 'recommendation-systems',
        emoji: '📊',
        title: 'Recommendation Systems',
        description: 'Deep dive into collaborative filtering, content-based filtering, and modern neural approaches for building intelligent recommendation engines.',
        sections: [
            {
                title: 'Foundational Concepts',
                items: [
                    createReadingItem(
                        'Collaborative Filtering for Implicit Feedback Datasets',
                        'https://dl.acm.org/doi/10.1145/2827872',
                        'Paper',
                        'Classic paper on handling implicit feedback in recommendation systems.'
                    ),
                    createReadingItem(
                        'Probabilistic Matrix Factorization',
                        'https://papers.nips.cc/paper/3208-probabilistic-matrix-factorization',
                        'Paper',
                        'Fundamental approach to collaborative filtering using matrix factorization.'
                    ),
                    createReadingItem(
                        'Matrix Factorization Techniques for Recommender Systems',
                        'https://dl.acm.org/doi/10.1145/1864708.1864721',
                        'Paper',
                        'Comprehensive overview of matrix factorization in recommendation systems.'
                    ),
                    createReadingItem(
                        'Google Developers: Recommendation Systems Course',
                        'https://developers.google.com/machine-learning/recommendation',
                        'Course',
                        'A practical course on building recommendation systems from Google Developers.'
                    ),
                    createReadingItem(
                        'Cohere Blog: Dense Retrieval for Recommendations',
                        'https://cohere.com/llmu/dense-retrieval',
                        'Blog',
                        'Overview of dense retrieval techniques for modern recommendation systems.'
                    ),
                    createReadingItem(
                        'Neural Information Retrieval (Mitra & Craswell, 2018)',
                        'https://www.microsoft.com/en-us/research/wp-content/uploads/2017/06/fntir2018-neuralir-mitra.pdf',
                        'Book',
                        'Comprehensive book on neural approaches to information retrieval and recommendations.'
                    ),
                    createReadingItem(
                        'Personalized Machine Learning (McAuley, 2022)',
                        'https://cseweb.ucsd.edu/~jmcauley/pml/pml_book.pdf',
                        'Book',
                        'A book on personalized machine learning and recommendation systems.'
                    )
                ]
            },
            {
                title: 'Modern Approaches',
                items: [
                    createReadingItem(
                        'Wide & Deep Learning for Recommender Systems',
                        'https://arxiv.org/abs/1606.07792',
                        'Paper',
                        'Google\'s approach combining wide linear models and deep neural networks.'
                    ),
                    createReadingItem(
                        'Neural Collaborative Filtering',
                        'https://arxiv.org/abs/1708.05027',
                        'Paper',
                        'Using neural networks to model user-item interactions.'
                    ),
                    createReadingItem(
                        'BERT4Rec: Sequential Recommendation with Bidirectional Encoder',
                        'https://arxiv.org/abs/1909.02683',
                        'Paper',
                        'Applying BERT architecture to sequential recommendation tasks.'
                    ),
                    createReadingItem(
                        'FAISS',
                        'https://github.com/facebookresearch/faiss',
                        'Repository',
                        'Faiss is a library for efficient similarity search and clustering of dense vectors'
                    )
                ]
            },
            {
                title: 'Practical Implementation',
                items: [
                    createReadingItem(
                        'How Instacart Uses Machine Learning to Suggest Replacements for Out-of-Stock Products',
                        'https://tech.instacart.com/how-instacart-uses-machine-learning-to-suggest-replacements-for-out-of-stock-products-8f80d03bb5af',
                        'Blog',
                        'Exploring Instacart\'s use of machine learning for product recommendations.'
                    ),
                    createReadingItem(
                        'How Instacart Uses Embeddings to Improve Search Relevance',
                        'https://www.instacart.com/company/how-its-made/how-instacart-uses-embeddings-to-improve-search-relevance/',
                        'Blog',
                        'Exploring how Instacart uses embeddings to enhance search relevance.'
                    ),
                    createReadingItem(
                        'Facebook\'s DLRM (Deep Learning Recommendation Model)',
                        'https://engineering.fb.com/2021/09/09/ml-applications/dlrm/',
                        'Blog',
                        'Facebook\'s approach to deep learning for recommendation systems at scale.'
                    ),
                    createReadingItem(
                        'Practical Lessons from Predicting Clicks on Ads at Facebook',
                        'https://research.facebook.com/publications/practical-lessons-from-predicting-clicks-on-ads-at-facebook/',
                        'Publication',
                        'Facebook\'s model which combines decision trees with logistic regression, outperforming either of these methods on its own by over 3%, an improvement with significant impact to the overall system performance.'
                    )
                ]
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Clear existing content and render from data
    const main = document.querySelector('main');
    // Keep only the controls if they exist, remove existing topic sections
    const existingTopicSections = main.querySelectorAll('.topic-section');
    existingTopicSections.forEach(section => section.remove());
    
    // Render the reading list from data
    renderReadingList(readingListData);
    
    // Initialize collapsible functionality after content is rendered
    initializeCollapsibleItems();
    
    // Add "Expand All" / "Collapse All" functionality
    addExpandCollapseAllButtons();
});

function initializeCollapsibleItems() {
    // Collapsible reading items
    const readingItems = document.querySelectorAll('.reading-item');
    
    readingItems.forEach(item => {
        const header = item.querySelector('h3');
        
        // Set collapsed as default
        item.classList.add('collapsed');
        
        header.addEventListener('click', function() {
            // Toggle collapsed class
            item.classList.toggle('collapsed');
            
            // Add some visual feedback
            header.style.transition = 'all 0.2s ease';
        });
        
        // Optional: Add keyboard accessibility
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
        
        // Make headers focusable for accessibility
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false'); // Default to collapsed
        
        // Update aria-expanded when collapsed state changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isCollapsed = item.classList.contains('collapsed');
                    header.setAttribute('aria-expanded', !isCollapsed);
                }
            });
        });
        
        observer.observe(item, {
            attributes: true,
            attributeFilter: ['class']
        });
    });
}

function addExpandCollapseAllButtons() {
    // Find a good place to add the buttons (after the header)
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    
    if (header && main) {
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'reading-controls';
        controlsDiv.innerHTML = `
            <button id="expandAll" class="control-btn">Expand All</button>
            <button id="collapseAll" class="control-btn">Collapse All</button>
        `;
        
        // Insert before main content
        main.parentNode.insertBefore(controlsDiv, main);
        
        // Add event listeners
        document.getElementById('expandAll').addEventListener('click', function() {
            const readingItems = document.querySelectorAll('.reading-item');
            readingItems.forEach(item => {
                item.classList.remove('collapsed');
            });
        });
        
        document.getElementById('collapseAll').addEventListener('click', function() {
            const readingItems = document.querySelectorAll('.reading-item');
            readingItems.forEach(item => {
                item.classList.add('collapsed');
            });
        });
    }
}
