// API Configuration
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Test API Connection
async function testBackendConnection() {
    try {
        const response = await fetch(`${API_BASE_URL}/hello/`);
        const data = await response.json();
        console.log('Backend connection successful:', data);
        return true;
    } catch (error) {
        console.error('Backend connection failed:', error);
        return false;
    }
}

// Test connection when app loads
testBackendConnection();
// Application Data
const appData = {
    users: [
        {
            id: "1",
            name: "Sarah Johnson",
            email: "sarah.j@company.com",
            password: "password123",
            role: "recruiter",
            department: "Human Resources",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            joinDate: "2023-01-15",
            stats: {
                jobsPosted: 45,
                applicationsReceived: 892,
                hiresCompleted: 23
            }
        },
        {
            id: "2", 
            name: "Michael Chen",
            email: "m.chen@email.com",
            password: "password123",
            role: "candidate",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            skills: ["JavaScript", "React", "Node.js", "Python"],
            experience: "5 years",
            location: "San Francisco, CA"
        },
        {
            id: "3",
            name: "Emily Rodriguez", 
            email: "emily.r@company.com",
            password: "password123",
            role: "recruiter",
            department: "Engineering",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            joinDate: "2022-08-20"
        }
    ],
    jobs: [
        {
            id: "1",
            title: "Senior Software Engineer", 
            department: "Engineering",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$120,000 - $180,000",
            status: "Active",
            postedDate: "2024-09-01",
            deadline: "2024-10-01",
            recruiterId: "3",
            applicationsCount: 47,
            description: "We're seeking a Senior Software Engineer to join our growing engineering team. You'll work on cutting-edge web applications using React, Node.js, and cloud technologies.",
            requirements: [
                "5+ years of software development experience",
                "Proficiency in JavaScript, React, and Node.js", 
                "Experience with cloud platforms (AWS, GCP, or Azure)",
                "Strong problem-solving and communication skills"
            ],
            benefits: [
                "Competitive salary and equity",
                "Health, dental, and vision insurance",
                "Flexible work arrangements",
                "Professional development budget"
            ]
        },
        {
            id: "2",
            title: "Product Manager",
            department: "Product",
            location: "Remote",
            type: "Full-time", 
            salary: "$100,000 - $140,000",
            status: "Active",
            postedDate: "2024-08-28",
            deadline: "2024-09-28",
            recruiterId: "1",
            applicationsCount: 32,
            description: "Join our product team to drive strategy and execution for our core platform. You'll work closely with engineering, design, and stakeholders.",
            requirements: [
                "3+ years of product management experience",
                "Strong analytical and strategic thinking",
                "Experience with agile development",
                "Excellent communication skills"
            ]
        },
        {
            id: "3",
            title: "UX Designer",
            department: "Design", 
            location: "New York, NY",
            type: "Full-time",
            salary: "$80,000 - $120,000", 
            status: "Paused",
            postedDate: "2024-08-15",
            recruiterId: "1", 
            applicationsCount: 23,
            description: "Create intuitive and beautiful user experiences for our web and mobile applications.",
            requirements: [
                "3+ years of UX design experience",
                "Proficiency in Figma, Sketch, or similar tools",
                "Strong portfolio demonstrating UX process",
                "Experience with user research and testing"
            ]
        },
        {
            id: "4",
            title: "Data Scientist",
            department: "Analytics",
            location: "Boston, MA", 
            type: "Full-time",
            salary: "$110,000 - $160,000",
            status: "Active",
            postedDate: "2024-09-05",
            recruiterId: "3",
            applicationsCount: 28,
            description: "Analyze complex datasets to derive insights and build predictive models that drive business decisions.",
            requirements: [
                "Master's degree in Statistics, Computer Science, or related field",
                "3+ years of data science experience",
                "Proficiency in Python, R, and SQL",
                "Experience with machine learning frameworks"
            ]
        }
    ],
    applications: [
        {
            id: "1",
            jobId: "1",
            candidateId: "2",
            candidateName: "Michael Chen",
            candidateEmail: "m.chen@email.com",
            appliedDate: "2024-09-03",
            status: "Interview Scheduled", 
            score: 85,
            resume: "michael_chen_resume.pdf",
            coverLetter: "Passionate software engineer with 5 years of experience in full-stack development. Excited about the opportunity to work with cutting-edge technologies...",
            matchingSkills: ["JavaScript", "React", "Node.js"],
            notes: [
                {
                    author: "Emily Rodriguez",
                    date: "2024-09-05",
                    text: "Strong technical background, good cultural fit. Recommended for next round."
                }
            ],
            interviews: [
                {
                    date: "2024-09-20",
                    time: "2:00 PM",
                    type: "Technical",
                    interviewer: "Emily Rodriguez"
                }
            ]
        },
        {
            id: "2", 
            jobId: "1",
            candidateId: "4",
            candidateName: "Jessica Wong",
            candidateEmail: "j.wong@email.com",
            appliedDate: "2024-09-02",
            status: "Under Review",
            score: 92,
            resume: "jessica_wong_resume.pdf",
            coverLetter: "Experienced developer with expertise in modern web technologies and cloud platforms...",
            matchingSkills: ["JavaScript", "React", "Python", "AWS"],
            notes: []
        },
        {
            id: "3",
            jobId: "2", 
            candidateId: "5",
            candidateName: "David Kim",
            candidateEmail: "d.kim@email.com",
            appliedDate: "2024-08-30",
            status: "Rejected",
            score: 65,
            resume: "david_kim_resume.pdf",
            coverLetter: "Product manager with experience in B2B software platforms...",
            rejectionReason: "Lacks required experience in agile methodologies"
        },
        {
            id: "4",
            jobId: "1",
            candidateId: "6", 
            candidateName: "Lisa Zhang",
            candidateEmail: "l.zhang@email.com",
            appliedDate: "2024-09-08",
            status: "New Application",
            score: 78,
            resume: "lisa_zhang_resume.pdf",
            coverLetter: "Full-stack developer passionate about creating scalable web applications..."
        }
    ],
    analytics: {
        totalJobs: 15,
        activeJobs: 12,
        totalApplications: 342,
        averageTimeToHire: 23,
        topSources: [
            {"source": "LinkedIn", "count": 145},
            {"source": "Indeed", "count": 89},
            {"source": "Company Website", "count": 67},
            {"source": "Referrals", "count": 41}
        ],
        applicationsByMonth: [
            {"month": "Jan", "applications": 45},
            {"month": "Feb", "applications": 52},
            {"month": "Mar", "applications": 38},
            {"month": "Apr", "applications": 67},
            {"month": "May", "applications": 71},
            {"month": "Jun", "applications": 58},
            {"month": "Jul", "applications": 63},
            {"month": "Aug", "applications": 74},
            {"month": "Sep", "applications": 82}
        ],
        hiringFunnel: {
            applied: 342,
            screened: 156,
            interviewed: 67,
            offered: 23,
            hired: 18
        }
    },
    messages: [
        {
            id: "1",
            from: "Emily Rodriguez",
            to: "Michael Chen", 
            subject: "Interview Confirmation - Senior Software Engineer",
            date: "2024-09-15",
            content: "Hi Michael, I'm confirming our technical interview scheduled for September 20th at 2:00 PM. Looking forward to speaking with you!"
        }
    ],
    settings: {
        companyName: "TechCorp Solutions",
        companyLogo: "/api/placeholder/200/60", 
        primaryColor: "#2563eb",
        emailTemplates: {
            applicationReceived: "Thank you for your application...",
            interviewInvite: "We'd like to invite you for an interview...",
            rejection: "Thank you for your interest..."
        }
    }
};

// Global State
let currentUser = null;
let currentPage = 'dashboard';
let applicationChart = null;
let candidateStatusChart = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showMainApp();
    } else {
        showLoginScreen();
    }
    
    // Setup event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Login form handlers
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabType = btn.getAttribute('data-tab');
            switchTab(tabType);
        });
    });
    
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.getAttribute('data-page');
            navigateToPage(page);
        });
    });
    
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    // Global search
    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('input', handleGlobalSearch);
    }
}

// Authentication Functions
// Replace your existing handleLogin function
async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    console.log('Attempting login with:', email);
    
    // For now, use the demo data but test backend connection
    const backendConnected = await testBackendConnection();
    
    if (backendConnected) {
        console.log('Backend is connected! Using demo login for now.');
    }
    
    // Keep existing login logic for demo
    const user = appData.users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        showMainApp();
    } else {
        alert('Invalid email or password');
    }
}

    
    // Create new user
    const newUser = {
        id: String(appData.users.length + 1),
        name,
        email,
        password,
        role,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        joinDate: new Date().toISOString().split('T')[0]
    };
    
    appData.users.push(newUser);
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    showMainApp();


function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLoginScreen();
}

function switchTab(tabType) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabType) {
            btn.classList.add('active');
        }
    });
    
    // Update forms
    document.querySelectorAll('.login-form').forEach(form => {
        form.classList.remove('active');
    });
    
    if (tabType === 'login') {
        document.getElementById('loginForm').classList.add('active');
    } else {
        document.getElementById('registerForm').classList.add('active');
    }
}

// UI Functions
function showLoginScreen() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
}

function showMainApp() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('mainApp').style.display = 'grid';
    
    setupMainApp();
    loadUserData();
    navigateToPage(currentUser.role === 'recruiter' ? 'dashboard' : 'candidate-dashboard');
}

function setupMainApp() {
    // Update user info in header
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    
    if (userAvatar && userName) {
        userAvatar.src = currentUser.avatar;
        userName.textContent = currentUser.name;
    }
    
    // Show appropriate menu based on role
    const recruiterMenu = document.getElementById('recruiterMenu');
    const candidateMenu = document.getElementById('candidateMenu');
    
    if (currentUser.role === 'recruiter') {
        recruiterMenu.style.display = 'flex';
        candidateMenu.style.display = 'none';
    } else {
        recruiterMenu.style.display = 'none';
        candidateMenu.style.display = 'flex';
    }
}

function navigateToPage(page) {
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        }
    });
    
    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    const targetPage = document.getElementById(page + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    currentPage = page;
    
    // Load page-specific data
    loadPageData(page);
}

function loadPageData(page) {
    switch (page) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'jobs':
            loadJobs();
            break;
        case 'applications':
            loadApplications();
            break;
        case 'candidate-dashboard':
            loadCandidateDashboard();
            break;
        case 'job-search':
            loadJobSearch();
            break;
        case 'my-applications':
            loadMyApplications();
            break;
    }
}

// Dashboard Functions
function loadDashboard() {
    if (currentUser.role === 'recruiter') {
        loadRecruiterDashboard();
    }
}

function loadRecruiterDashboard() {
    // Create application trends chart
    const ctx = document.getElementById('applicationChart');
    if (ctx && !applicationChart) {
        applicationChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: appData.analytics.applicationsByMonth.map(item => item.month),
                datasets: [{
                    label: 'Applications',
                    data: appData.analytics.applicationsByMonth.map(item => item.applications),
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f1f5f9'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// Jobs Functions
function loadJobs() {
    const jobsGrid = document.getElementById('jobsGrid');
    if (!jobsGrid) return;
    
    const jobs = currentUser.role === 'recruiter' 
        ? appData.jobs.filter(job => job.recruiterId === currentUser.id)
        : appData.jobs.filter(job => job.status === 'Active');
    
    jobsGrid.innerHTML = jobs.map(job => createJobCard(job)).join('');
}

function createJobCard(job) {
    const statusClass = job.status.toLowerCase();
    const isRecruiter = currentUser.role === 'recruiter';
    
    return `
        <div class="job-card fade-in">
            <div class="job-header">
                <div>
                    <div class="job-title">${job.title}</div>
                    <div class="job-department">${job.department}</div>
                </div>
                <span class="job-status ${statusClass}">${job.status}</span>
            </div>
            
            <div class="job-details">
                <div class="job-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${job.location}</span>
                </div>
                <div class="job-detail">
                    <i class="fas fa-briefcase"></i>
                    <span>${job.type}</span>
                </div>
                <div class="job-detail">
                    <i class="fas fa-dollar-sign"></i>
                    <span>${job.salary}</span>
                </div>
                ${isRecruiter ? `
                <div class="job-detail">
                    <i class="fas fa-users"></i>
                    <span>${job.applicationsCount} applications</span>
                </div>
                ` : ''}
            </div>
            
            <div class="job-actions">
                ${isRecruiter ? `
                    <button class="btn btn--secondary btn--small" onclick="editJob('${job.id}')">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn--primary btn--small" onclick="viewJobApplications('${job.id}')">
                        <i class="fas fa-eye"></i> View Applications
                    </button>
                ` : `
                    <button class="btn btn--secondary btn--small" onclick="saveJob('${job.id}')">
                        <i class="fas fa-bookmark"></i> Save
                    </button>
                    <button class="btn btn--primary btn--small" onclick="viewJobDetails('${job.id}')">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                `}
            </div>
        </div>
    `;
}

// Applications Functions
function loadApplications() {
    const applicationsTableBody = document.getElementById('applicationsTableBody');
    if (!applicationsTableBody) return;
    
    const applications = appData.applications.filter(app => {
        const job = appData.jobs.find(j => j.id === app.jobId);
        return job && job.recruiterId === currentUser.id;
    });
    
    applicationsTableBody.innerHTML = applications.map(app => createApplicationRow(app)).join('');
}

function createApplicationRow(application) {
    const job = appData.jobs.find(j => j.id === application.jobId);
    const statusClass = application.status.toLowerCase().replace(/\s+/g, '-');
    
    return `
        <tr>
            <td><input type="checkbox" value="${application.id}"></td>
            <td>
                <div class="candidate-info">
                    <strong>${application.candidateName}</strong>
                    <small class="text-muted">${application.candidateEmail}</small>
                </div>
            </td>
            <td>${job ? job.title : 'Unknown'}</td>
            <td>${new Date(application.appliedDate).toLocaleDateString()}</td>
            <td><span class="application-status ${statusClass}">${application.status}</span></td>
            <td><span class="score-badge">${application.score}</span></td>
            <td>
                <button class="btn btn--small btn--primary" onclick="viewApplication('${application.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--small btn--secondary" onclick="updateApplicationStatus('${application.id}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `;
}

// Candidate Dashboard Functions
function loadCandidateDashboard() {
    const candidateName = document.getElementById('candidateName');
    if (candidateName) {
        candidateName.textContent = currentUser.name;
    }
    
    // Create candidate status chart
    const ctx = document.getElementById('candidateStatusChart');
    if (ctx && !candidateStatusChart) {
        const myApplications = appData.applications.filter(app => app.candidateId === currentUser.id);
        const statusCounts = {};
        
        myApplications.forEach(app => {
            statusCounts[app.status] = (statusCounts[app.status] || 0) + 1;
        });
        
        candidateStatusChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(statusCounts),
                datasets: [{
                    data: Object.values(statusCounts),
                    backgroundColor: [
                        '#2563eb',
                        '#f59e0b',
                        '#8b5cf6',
                        '#059669',
                        '#dc2626'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    loadJobRecommendations();
}

function loadJobRecommendations() {
    const container = document.getElementById('jobRecommendations');
    if (!container) return;
    
    const recommendedJobs = appData.jobs
        .filter(job => job.status === 'Active')
        .slice(0, 3);
    
    container.innerHTML = recommendedJobs.map(job => `
        <div class="job-card">
            <div class="job-title">${job.title}</div>
            <div class="job-department">${job.department}</div>
            <div class="job-detail">
                <i class="fas fa-map-marker-alt"></i>
                <span>${job.location}</span>
            </div>
            <button class="btn btn--primary btn--small" onclick="viewJobDetails('${job.id}')">
                View & Apply
            </button>
        </div>
    `).join('');
}

// Job Search Functions
function loadJobSearch() {
    searchJobs();
}

function searchJobs() {
    const container = document.getElementById('jobListings');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!container || !resultsCount) return;
    
    const activeJobs = appData.jobs.filter(job => job.status === 'Active');
    
    resultsCount.textContent = `${activeJobs.length} jobs found`;
    
    container.innerHTML = activeJobs.map(job => `
        <div class="job-listing fade-in">
            <div class="job-listing-header">
                <div>
                    <div class="job-listing-title">${job.title}</div>
                    <div class="job-listing-company">TechCorp Solutions</div>
                </div>
            </div>
            
            <div class="job-listing-meta">
                <div class="job-meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${job.location}</span>
                </div>
                <div class="job-meta-item">
                    <i class="fas fa-briefcase"></i>
                    <span>${job.type}</span>
                </div>
                <div class="job-meta-item">
                    <i class="fas fa-dollar-sign"></i>
                    <span>${job.salary}</span>
                </div>
                <div class="job-meta-item">
                    <i class="fas fa-calendar"></i>
                    <span>Posted ${new Date(job.postedDate).toLocaleDateString()}</span>
                </div>
            </div>
            
            <div class="job-listing-description">
                ${job.description}
            </div>
            
            <div class="job-listing-actions">
                <button class="btn btn--secondary" onclick="saveJob('${job.id}')">
                    <i class="fas fa-bookmark"></i> Save
                </button>
                <button class="btn btn--primary" onclick="applyToJob('${job.id}')">
                    <i class="fas fa-paper-plane"></i> Apply Now
                </button>
            </div>
        </div>
    `).join('');
}

// Modal Functions
function viewJobDetails(jobId) {
    const job = appData.jobs.find(j => j.id === jobId);
    if (!job) return;
    
    const modal = document.getElementById('jobModal');
    const title = document.getElementById('jobModalTitle');
    const body = document.getElementById('jobModalBody');
    
    title.textContent = job.title;
    
    body.innerHTML = `
        <div class="job-details-full">
            <div class="job-meta">
                <div><strong>Department:</strong> ${job.department}</div>
                <div><strong>Location:</strong> ${job.location}</div>
                <div><strong>Type:</strong> ${job.type}</div>
                <div><strong>Salary:</strong> ${job.salary}</div>
            </div>
            
            <div class="job-description">
                <h4>Description</h4>
                <p>${job.description}</p>
            </div>
            
            ${job.requirements ? `
            <div class="job-requirements">
                <h4>Requirements</h4>
                <ul>
                    ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            ${job.benefits ? `
            <div class="job-benefits">
                <h4>Benefits</h4>
                <ul>
                    ${job.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            ${currentUser.role === 'candidate' ? `
            <div class="modal-actions">
                <button class="btn btn--primary" onclick="applyToJob('${job.id}')">
                    <i class="fas fa-paper-plane"></i> Apply for This Position
                </button>
            </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
}

function applyToJob(jobId) {
    closeJobModal();
    const modal = document.getElementById('applicationModal');
    modal.style.display = 'block';
    
    // Store job ID for form submission
    modal.setAttribute('data-job-id', jobId);
    
    // Handle form submission
    const form = document.getElementById('applicationForm');
    form.onsubmit = function(e) {
        e.preventDefault();
        submitApplication(jobId);
    };
}

function submitApplication(jobId) {
    const job = appData.jobs.find(j => j.id === jobId);
    if (!job) return;
    
    // Create new application
    const newApplication = {
        id: String(appData.applications.length + 1),
        jobId: jobId,
        candidateId: currentUser.id,
        candidateName: currentUser.name,
        candidateEmail: currentUser.email,
        appliedDate: new Date().toISOString().split('T')[0],
        status: "New Application",
        score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
        resume: "resume.pdf",
        coverLetter: document.querySelector('#applicationForm textarea').value
    };
    
    appData.applications.push(newApplication);
    
    closeApplicationModal();
    alert('Application submitted successfully!');
    
    // Update job application count
    job.applicationsCount = (job.applicationsCount || 0) + 1;
    
    // Refresh current page if needed
    if (currentPage === 'job-search') {
        loadJobSearch();
    }
}

function closeJobModal() {
    document.getElementById('jobModal').style.display = 'none';
}

function closeApplicationModal() {
    document.getElementById('applicationModal').style.display = 'none';
}

// Utility Functions
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function handleGlobalSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Searching for:', searchTerm);
    // Implement global search functionality
}

function saveJob(jobId) {
    alert('Job saved to your favorites!');
}

function editJob(jobId) {
    alert('Edit job functionality would open here');
}

function viewJobApplications(jobId) {
    navigateToPage('applications');
    // Filter applications for this job
}

function viewApplication(applicationId) {
    alert('Application details would open here');
}

function updateApplicationStatus(applicationId) {
    const application = appData.applications.find(app => app.id === applicationId);
    if (!application) return;
    
    const newStatus = prompt('Enter new status:', application.status);
    if (newStatus && newStatus !== application.status) {
        application.status = newStatus;
        loadApplications(); // Refresh the table
    }
}

function exportApplications() {
    alert('Applications exported to CSV!');
}

function bulkActions() {
    alert('Bulk actions panel would open here');
}

function showProfile() {
    alert('Profile settings would open here');
}

function showSettings() {
    alert('Settings panel would open here');
}

function showJobForm() {
    alert('Job creation form would open here');
}

function loadUserData() {
    // Load user-specific data and preferences
    console.log('Loading user data for:', currentUser.name);
}

function loadMyApplications() {
    // Load applications for current candidate
    const myApplications = appData.applications.filter(app => app.candidateId === currentUser.id);
    console.log('My applications:', myApplications);
}

// Handle clicks outside modals to close them
window.onclick = function(event) {
    const jobModal = document.getElementById('jobModal');
    const applicationModal = document.getElementById('applicationModal');
    
    if (event.target === jobModal) {
        jobModal.style.display = 'none';
    }
    
    if (event.target === applicationModal) {
        applicationModal.style.display = 'none';
    }
};

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('open');
        }
    }
});

// Export functions for global access (if needed)
window.ATS = {
    navigateToPage,
    viewJobDetails,
    applyToJob,
    closeJobModal,
    closeApplicationModal,
    logout
};
