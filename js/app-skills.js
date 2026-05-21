import { producers, allLessons } from './lessons.js';
let currentTrack = 'Geography';
let currentLessonId = null;

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

window.downloadMasterWorkbook = function() {
    const url = masterWorkbooks[currentTrack];
    if (url) {
        window.open(url, '_blank');
    }
};

window.setTrack = function(trackName) {
    currentTrack = trackName;
    document.querySelectorAll('.track-btn').forEach(btn => btn.classList.remove('active'));
    if (trackName === 'Geography') document.getElementById('track-geog').classList.add('active');
    else document.getElementById('track-hist').classList.add('active');
    
    currentLessonId = null;
    const btnText = document.getElementById('masterDownloadText');
    if (btnText) {
        btnText.innerText = `Download Master ${trackName} Workbook`;
    }
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

    const guidanceText = document.getElementById('lessonWorkbookGuidance');
    if (guidanceText) {
        guidanceText.innerHTML = `Grab your master workbook and look at <span class="text-emerald-600 font-extrabold underline">${lesson.track} Mission ${lesson.number}</span> to complete today's briefing.`;
    }
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
        const briefContent = document.getElementById('briefContent');

        if (!briefBtn) return;

        if (tab === 'brief') {
            briefBtn.className = "pb-4 px-2 text-[11px] font-black uppercase tracking-[0.3em] text-emerald-500 border-b-2 border-emerald-500 transition-all";
            briefContent.classList.remove('hidden');
        }
    };

document.getElementById('menu-btn')?.addEventListener('click', toggleMobileMenu);

// Initialize
renderLessons();
