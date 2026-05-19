const rawQuestions = [
      { 
          context: "Heritage & Change", 
          q: "Your neighbourhood is being redeveloped. A historical monument might be torn down. What do you focus on?", 
          options: [
              { text: "Exploring which structures and artefacts that date back several decades or centuries should be preserved.", type: "H" }, 
              { text: "Analysing how the decision might affect businesses and employment opportunities in the neighbourhood in the future", type: "G" }
          ] 
      },
      { 
          context: "Evidence Analysis", 
          q: "You are given a confusing political cartoon and a complex topographic map. What would you do first?", 
          options: [
              { text: "Decipher symbols in the cartoon to infer messages about social power.", type: "H" }, 
              { text: "Decipher symbols in the legend to determine what features are present on the map.", type: "G" }
          ] 
      },
      { 
          context: "Global Challenges", 
          q: "You're watching a report on a global conflict over water resources. Which part interests you more?", 
          options: [
              { text: "Contradictions in the reports and commentaries.", type: "H" }, 
              { text: "The location of the countries and water bodies affected by this conflict.", type: "G" }
          ] 
      },
      { 
          context: "Migration & Roots", 
          q: "You are researching a multicultural district in your city. What interests you more?", 
          options: [
              { text: "The reasons that contributed to the growth of this district.", type: "H" }, 
              { text: "How the city is designed to include unique cultural elements.", type: "G" }
          ] 
      },
      { 
          context: "Urban Identity", 
          q: "A city must choose between preserving an old traditional market or developing a high-tech smart mall. What do you investigate?", 
          options: [
              { text: "People's memories of the place.", type: "H" }, 
              { text: "The number of people who walk by the area at different times of the day.", type: "G" }
          ] 
      },
      { 
          context: "Discovery Preference", 
          q: "Which project are you more interested to take on?", 
          options: [
              { text: "A project on finding hidden motives in texts and pictures.", type: "H" }, 
              { text: "A project on uncovering hidden patterns in messy data.", type: "G" }
          ] 
      },
      { 
          context: "Environmental Impact", 
          q: "A field trip to the coast reveals rapid erosion near an old fort. What do you want to investigate?", 
          options: [
              { text: "Old records to find out its role in past defences.", type: "H" }, 
              { text: "The impact of waves to determine measures to lessen erosion.", type: "G" }
          ] 
      },
      { 
          context: "Crisis Analysis", 
          q: "A pandemic has hit a major city. Which would you rather focus on?", 
          options: [
              { text: "Examining what leaders did to shape their responses in previous health crises.", type: "H" }, 
              { text: "Analysing the source of the virus, how it spread to the city, and where it might spread to next.", type: "G" }
          ] 
      },
      { 
          context: "Uncovering Clues", 
          q: "You find a box from the 1940s containing a diary and weather records. What are you inclined to do first?", 
          options: [
              { text: "Read the diary to uncover decisions and their impact.", type: "H" }, 
              { text: "Analyse the rainfall and temperature records to determine the climate at that time.", type: "G" }
          ] 
      }
  ];

  const results = {
      H: { title: "History", desc: "You are a 'Humanities Detective'. You are naturally drawn to stories of power, leadership, and change. Your strengths lie in critical evaluation and structured arguments.", skills: ["Source Analysis", "Logical Argument", "Contextualisation"] },
      G: { title: "Geography", desc: "You are a 'Global Systems Thinker'. You are fascinated by the physical world and human interactions. You excel at interpreting data and patterns.", skills: ["Spatial Data", "Environmental Inquiry", "Systems Analysis"] }
  };

  let currentQuestion = 0;
  let scores = { H: 0, G: 0 };
  let choiceHistory = [];
  let shuffledQuestions = [];

  function shuffleArray(array) {
      const newArr = [...array];
      for (let i = newArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
  }

  function startQuiz() {
      shuffledQuestions = shuffleArray(rawQuestions.map(q => ({ ...q, options: shuffleArray([...q.options]) })));
      scores = { H: 0, G: 0 };
      currentQuestion = 0;
      choiceHistory = [];
      document.getElementById('welcome-screen').classList.add('hidden');
      document.getElementById('quiz-screen').classList.remove('hidden');
      document.getElementById('result-screen').classList.add('hidden');
      updateQuestion();
  }

  function updateQuestion() {
      const q = shuffledQuestions[currentQuestion];
      const container = document.getElementById('question-container');
      const backBtnContainer = document.getElementById('back-btn-container');
      
      if (currentQuestion > 0) backBtnContainer.classList.remove('opacity-0', 'pointer-events-none');
      else backBtnContainer.classList.add('opacity-0', 'pointer-events-none');
      
      container.classList.remove('fade-in');
      void container.offsetWidth; 
      container.classList.add('fade-in');
      
      document.getElementById('scenario-label').innerText = `Scenario ${currentQuestion + 1}`;
      document.getElementById('scenario-context').innerText = q.context;
      document.getElementById('question-text').innerText = q.q;
      
      const optionsGrid = document.getElementById('options-grid');
      optionsGrid.innerHTML = '';
      
      q.options.forEach((opt, idx) => {
          const btn = document.createElement('button');
          btn.className = "option-card w-full text-left rounded-xl flex items-center p-4 shadow-sm hover:shadow-md";
          btn.onclick = () => handleAnswer(opt.type);
          btn.innerHTML = `<div class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 font-bold mr-3 text-[10px]">${String.fromCharCode(65 + idx)}</div><span class="text-slate-700 font-semibold text-xs sm:text-sm leading-snug">${opt.text}</span>`;
          optionsGrid.appendChild(btn);
      });
      
      const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
      document.getElementById('progress-bar').style.width = `${progress}%`;
  }

  function handleAnswer(type) {
      scores[type]++;
      choiceHistory.push(type);
      if (currentQuestion < shuffledQuestions.length - 1) {
          currentQuestion++;
          setTimeout(updateQuestion, 200);
      } else showResult();
  }

  function goBack() {
      if (currentQuestion > 0) {
          const lastChoice = choiceHistory.pop();
          scores[lastChoice]--;
          currentQuestion--;
          updateQuestion();
      }
  }

  function showResult() {
      document.getElementById('quiz-screen').classList.add('hidden');
      document.getElementById('result-screen').classList.remove('hidden');
      const finalType = scores.H > scores.G ? 'H' : 'G';
      const res = results[finalType];
      document.getElementById('result-title').innerText = res.title;
      document.getElementById('result-desc').innerText = res.desc;
      const skillsHtml = res.skills.map(skill => `
          <div class="flex flex-col items-center justify-center text-center text-slate-800 bg-slate-50 p-2 rounded-2xl border border-slate-100 font-extrabold text-[13px] leading-tight min-h-[60px] shadow-sm">
              <div class="w-1.5 h-1.5 rounded-full bg-[#63C191] mb-1"></div>
              ${skill}
          </div>
      `).join('');
      document.getElementById('result-skills').innerHTML = skillsHtml;
  }

  function resetQuiz() {
      currentQuestion = 0;
      scores = { H: 0, G: 0 };
      choiceHistory = [];
      document.getElementById('result-screen').classList.add('hidden');
      document.getElementById('quiz-screen').classList.add('hidden');
      document.getElementById('welcome-screen').classList.remove('hidden');
  }

  function shareResults() {
      const finalType = scores.H > scores.G ? 'H' : 'G';
      const titleText = finalType === 'H' ? "*History*! 📜" : "*Geography*! 🌏";
      const shareMessage = `I just used the Krunch Academy Subject Navigator and discovered my perfect match: ${titleText} Curious where your interests lead? Find your subject match here!`;
      const shareUrl = 'https://krunchsg.github.io/krunchacademy/';
      const shareBtn = document.getElementById('share-btn');

      // Attempt browser's native share feature (primarily mobile)
      if (navigator.share) {
          navigator.share({
              title: 'Krunch Academy | Subject Navigator',
              text: `${shareMessage}\n`,
              url: shareUrl
          }).catch(err => {
              console.log('Share prompt dismissed', err);
          });
      } else {
          // Clipboard fallback (primarily desktop)
          const fallbackText = `${shareMessage} ${shareUrl}`;
          const tempInput = document.createElement('textarea');
          tempInput.value = fallbackText;
          document.body.appendChild(tempInput);
          tempInput.select();
          try {
              document.execCommand('copy');
              
              // Temporary visual feedback button change
              const originalContent = shareBtn.innerHTML;
              shareBtn.innerHTML = `
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Copied!</span>
              `;
              shareBtn.style.backgroundColor = '#10B981'; // Green confirmation color
              
              setTimeout(() => {
                  shareBtn.innerHTML = originalContent;
                  shareBtn.style.backgroundColor = '';
              }, 2000);
          } catch (err) {
              console.error('Copy failed: ', err);
          }
          document.body.removeChild(tempInput);
      }
  }

      function toggleMobileMenu() {
          const mobileNav = document.getElementById('mobile-nav');
          const menuIcon = document.getElementById('menu-icon');
          
          if (mobileNav && menuIcon) {
              if (mobileNav.classList.contains('hidden')) {
                  // Open Menu
                  mobileNav.classList.remove('hidden');
                  menuIcon.classList.remove('fa-bars');
                  menuIcon.classList.add('fa-xmark');
              } else {
                  // Close Menu
                  mobileNav.classList.add('hidden');
                  menuIcon.classList.remove('fa-xmark');
                  menuIcon.classList.add('fa-bars');
              }
          }
      }
      
      document.getElementById('menu-btn')?.addEventListener('click', toggleMobileMenu);
