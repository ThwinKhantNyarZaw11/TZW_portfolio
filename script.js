const projects = [
    {
        id: 1,
        title: "Financial System Modernization",
        shortDescription: "Led a comprehensive modernization of the company's financial systems",
        fullDescription: `Led a major financial transformation project that modernized the company's entire financial infrastructure. Key achievements include:
        • Implemented new ERP system resulting in 40% efficiency improvement
        • Automated monthly financial reporting processes
        • Reduced manual data entry by 75%
        • Integrated real-time financial analytics dashboard
        • Achieved ROI of 250% within first year`,
        technologies: ["SAP", "Power BI", "Excel Advanced Analytics"],
        duration: "18 months",
        impact: "Reduced operational costs by 30%"
    },
    {
        id: 2,
        title: "Budget Optimization Initiative",
        shortDescription: "Developed and implemented strategic budget optimization framework",
        fullDescription: `Spearheaded a company-wide budget optimization initiative that revolutionized our financial planning approach:
        • Created dynamic budgeting models for 5 departments
        • Implemented zero-based budgeting methodology
        • Developed KPI tracking system
        • Established monthly budget review process
        • Trained department heads on financial management`,
        technologies: ["Hyperion", "Tableau", "Financial Modeling"],
        duration: "12 months",
        impact: "Improved budget accuracy by 45%"
    },
    {
        id: 3,
        title: "Risk Management Framework",
        shortDescription: "Designed comprehensive financial risk management system",
        fullDescription: `Developed and implemented a robust risk management framework to identify and mitigate financial risks:
        • Created risk assessment matrices
        • Implemented automated risk monitoring system
        • Developed contingency plans for various scenarios
        • Established risk reporting protocols
        • Conducted company-wide risk management training`,
        technologies: ["Risk Analytics Tools", "Python", "R"],
        duration: "9 months",
        impact: "Reduced financial risk exposure by 60%"
    },
    {
        id: 4,
        title: "Investment Portfolio Optimization",
        shortDescription: "Managed and optimized company's investment portfolio",
        fullDescription: `Led the restructuring and optimization of the company's investment portfolio:
        • Analyzed market trends and opportunities
        • Developed investment strategy framework
        • Implemented portfolio tracking system
        • Created monthly performance reports
        • Achieved significant return on investments`,
        technologies: ["Bloomberg Terminal", "Financial Analysis Tools", "Investment Software"],
        duration: "24 months",
        impact: "Increased portfolio returns by 25%"
    },
    {
        id: 5,
        title: "Digital Finance Transformation",
        shortDescription: "Led digital transformation of finance operations",
        fullDescription: `Managed the digital transformation of finance operations to improve efficiency and accuracy:
        • Implemented cloud-based accounting system
        • Automated accounts payable/receivable processes
        • Developed digital financial dashboard
        • Integrated AI-powered forecasting tools
        • Created paperless workflow system`,
        technologies: ["Cloud Computing", "AI/ML", "Digital Workflows"],
        duration: "15 months",
        impact: "Achieved 50% reduction in processing time"
    }
];

// Populate projects in the main page
function populateProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'glass-nav p-6 rounded-xl transform hover:scale-105 transition-transform cursor-pointer';
        projectCard.innerHTML = `
            <h3 class="text-xl font-bold mb-3">${project.title}</h3>
            <p class="text-purple-200 mb-4">${project.shortDescription}</p>
            <button onclick="showProjectDetails(${project.id})" 
                    class="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
                View Details
            </button>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Show project details in a modal
function showProjectDetails(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'glass-nav p-8 rounded-2xl max-w-2xl w-full max-h-90vh overflow-y-auto';
    modalContent.innerHTML = `
        <div class="flex justify-between items-start mb-6">
            <h2 class="text-3xl font-bold">${project.title}</h2>
            <button onclick="this.closest('.fixed').remove()" 
                    class="text-2xl hover:text-purple-200">&times;</button>
        </div>
        <div class="space-y-4">
            <div class="mb-4">
                <h3 class="text-xl font-semibold mb-2">Description</h3>
                <p class="whitespace-pre-line">${project.fullDescription}</p>
            </div>
            <div class="mb-4">
                <h3 class="text-xl font-semibold mb-2">Technologies Used</h3>
                <div class="flex flex-wrap gap-2">
                    ${project.technologies.map(tech => 
                        `<span class="px-3 py-1 bg-purple-600 rounded-full text-sm">${tech}</span>`
                    ).join('')}
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <h3 class="font-semibold">Duration</h3>
                    <p>${project.duration}</p>
                </div>
                <div>
                    <h3 class="font-semibold">Impact</h3>
                    <p>${project.impact}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuItems = document.querySelectorAll('#mobile-menu a');

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
}

// Close mobile menu when clicking a link
mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});

// Toggle mobile menu on button click
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    }
});
