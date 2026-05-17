import { producers, allLessons } from './lessons.js';
let currentTrack = 'Geography';
let currentLessonId = null;

window.resetToGateway = function() {
    showPage('gateway');
};

function showPage(pageId) {
    document.getElementById('page-gateway').classList.add('hidden-page');
    document.getElementById('page-skillsslam').classList.add('hidden-page');
    document.getElementById('page-combi').classList.add('hidden-page');

    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));

    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) targetPage.classList.remove('hidden-page');

    const targetTab = document.getElementById(`tab-${pageId}`);
    if (targetTab) targetTab.classList.add('active');

    if (pageId !== 'skillsslam') {
        const player = document.getElementById('videoPlayer');
        if (player) { player.pause(); player.src = ""; }
    }
}

window.switchPage = function(pageId) {
    if (pageId === 'skillsslam') {
        resetToSelection();
    }
    showPage(pageId);
}

window.setTrack = function(trackName) {
    currentTrack = trackName;
    document.querySelectorAll('.track-btn').forEach(btn => btn.classList.remove('active'));
    if (trackName === 'Geography') document.getElementById('track-geog').classList.add('active');
    else document.getElementById('track-hist').classList.add('active');
    
    currentLessonId = null;
    renderLessons();
    resetToSelection(); 
}

window.resetToSelection = function() {
    currentLessonId = null;
    const player = document.getElementById('videoPlayer');
    if (player) {
        player.pause();
        player.src = "";
    }
    
    document.getElementById('mainDisplay').classList.add('hidden');
    document.getElementById('missionPlaceholder').classList.remove('hidden');
    document.getElementById('sidebar-container').classList.remove('hidden');
    
    renderLessons();
}

function renderLessons() {
    const list = document.getElementById('lessonList');
    if (!list) return;
    list.innerHTML = '';
    const filtered = allLessons.filter(l => l.track === currentTrack);
    filtered.forEach((lesson) => {
        const isActive = lesson.id === currentLessonId;
        const div = document.createElement('div');
        div.className = `p-3 rounded-xl cursor-pointer transition-all flex items-center gap-3 group ${isActive ? 'active-lesson' : 'hover:bg-white hover:shadow-md'}`;
        div.onclick = () => selectLesson(lesson.id);
        div.innerHTML = `
            <div class="ninja-badge w-10 h-10 flex items-center justify-center text-xs font-black transition-all shrink-0 ${isActive ? 'accent-bg text-white shadow-xl shadow-emerald-100' : 'bg-slate-200 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600'}">
                ${lesson.number}
            </div>
            <div class="flex-1 min-w-0 mobile-text-container text-left">
                <span class="hidden lg:inline accent-text text-[9px] uppercase tracking-widest block font-bold">Mission ${lesson.number}</span> 
                <h4 class="text-[11px] lg:text-sm font-black text-slate-700 leading-tight lg:leading-normal line-clamp-2 lg:line-clamp-1 ${isActive ? 'text-slate-900' : ''}">
                    ${lesson.title}
                </h4>
            </div>
            <i class="hidden lg:block fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
        `;
        list.appendChild(div);
    });
    updateLessonContent();
}

function selectLesson(id) {
    currentLessonId = id;
    renderLessons();
    document.getElementById('mainDisplay').classList.remove('hidden');
    document.getElementById('missionPlaceholder').classList.add('hidden');
    if (window.innerWidth < 1024) document.getElementById('sidebar-container').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('mainDisplay').scrollTo({ top: 0, behavior: 'smooth' });
}

function updateLessonContent() {
    if (currentLessonId === null) return;
    
    window.switchMissionTab('brief');
    
    const lesson = allLessons.find(l => l.id === currentLessonId);
    if (!lesson) return;
    
    const player = document.getElementById('videoPlayer');
    if (lesson.directUrl) {
        player.src = lesson.directUrl;
    } 
    
    document.getElementById('lessonTitle').innerText = lesson.title;
    document.getElementById('lessonCategory').innerText = lesson.track;
    document.getElementById('missionLabel').innerText = `Mission ${lesson.number}`;
    document.getElementById('lessonDescription').innerHTML = lesson.desc;
    
    if (lesson.producer) {
        document.getElementById('producerLink').href = lesson.producer.link;
        document.getElementById('producerHandle').innerText = lesson.producer.handle;
    }

    document.getElementById('downloadBtn').onclick = () => {
        if(lesson.pdfId) window.open(`https://drive.google.com/uc?export=download&id=${lesson.pdfId}`, '_blank');
        else {
            const btn = document.getElementById('downloadBtn');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<i class="fa-solid fa-clock"></i> Coming Soon!`;
            setTimeout(() => btn.innerHTML = originalText, 2000);
        }
    };
}

window.toggleMobileMenu = function() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');
    
    // Toggle the hidden class on the menu
    mobileNav.classList.toggle('hidden');
    
    // Check if the menu is now hidden or shown
    if (mobileNav.classList.contains('hidden')) {
        // If hidden, show the bars icon
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    } else {
        // If shown, show the cross icon
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    }
};

window.refreshVideo = function() {
    const player = document.getElementById('videoPlayer');
    const currentSrc = player.src;
    player.src = ''; 
    player.src = currentSrc; 
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        document.getElementById('sidebar-container').classList.remove('hidden');
        if (currentLessonId === null) {
            document.getElementById('missionPlaceholder').classList.remove('hidden');
            document.getElementById('mainDisplay').classList.add('hidden');
        } else {
            document.getElementById('missionPlaceholder').classList.add('hidden');
            document.getElementById('mainDisplay').classList.remove('hidden');
        }
    }
});

window.switchMissionTab = function(tab) {
    const briefBtn = document.getElementById('mission-tab-brief');
    const challengeBtn = document.getElementById('mission-tab-challenge');
    const briefContent = document.getElementById('briefContent');
    const challengeContent = document.getElementById('challengeContent');

    if (!briefBtn || !challengeBtn) return;

    if (tab === 'brief') {
        briefBtn.className = "pb-4 px-2 text-[11px] font-black uppercase tracking-[0.3em] text-emerald-500 border-b-2 border-emerald-500 transition-all";
        challengeBtn.className = "pb-4 px-2 ml-6 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-600 transition-all";
        briefContent.classList.remove('hidden');
        challengeContent.classList.add('hidden');
    } else {
        challengeBtn.className = "pb-4 px-2 ml-6 text-[11px] font-black uppercase tracking-[0.3em] text-emerald-500 border-b-2 border-emerald-500 transition-all";
        briefBtn.className = "pb-4 px-2 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-600 transition-all";
        briefContent.classList.add('hidden');
        challengeContent.classList.remove('hidden');
        renderChallenge();
    }
};

function renderChallenge() {
    const lesson = allLessons.find(l => l.id === currentLessonId);
    const container = document.getElementById('challengeContainer');
    
    if (!lesson || !lesson.challenge) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-10 text-center">
                <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                    <i class="fa-solid fa-circle-info text-2xl"></i>
                </div>
                <p class="text-slate-400 font-bold italic">Intel not yet available. HQ is preparing the challenge for this mission.</p>
            </div>`;
        return;
    }

    container.innerHTML = `
        <h4 class="text-xl font-extrabold text-slate-900 mb-6 leading-tight">${lesson.challenge.question}</h4>
        <div class="grid gap-3">
            ${lesson.challenge.options.map((opt, i) => `
                <button onclick="checkAnswer(${i})" class="w-full text-left p-5 rounded-2xl border-2 border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all font-bold text-slate-700 group flex justify-between items-center">
                    <span>${opt.text}</span>
                    <div class="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-emerald-300"></div>
                </button>
            `).join('')}
        </div>
        <div id="challengeFeedback" class="mt-8 hidden p-6 rounded-2xl font-black text-center border"></div>
    `;
}

window.checkAnswer = function(index) {
    const lesson = allLessons.find(l => l.id === currentLessonId);
    const feedback = document.getElementById('challengeFeedback');
    const isCorrect = lesson.challenge.options[index].correct;
    
    feedback.classList.remove('hidden', 'bg-red-50', 'text-red-700', 'bg-emerald-50', 'text-emerald-700', 'border-red-100', 'border-emerald-100');
    feedback.classList.add(isCorrect ? 'bg-emerald-50' : 'bg-red-50');
    feedback.classList.add(isCorrect ? 'text-emerald-700' : 'text-red-700');
    feedback.classList.add(isCorrect ? 'border-emerald-100' : 'border-red-100');
    feedback.innerText = isCorrect ? lesson.challenge.successMsg : lesson.challenge.failMsg;
    feedback.classList.remove('hidden');
};

// Initialize
resetToGateway();
renderLessons();
