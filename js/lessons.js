export const producers = {
            stace: { handle: "@geographer.stace", link: "https://www.instagram.com/geographer.stace/" },
            mike: { handle: "@mrmike.history.ss", link: "https://www.instagram.com/mrmike.history.ss/" }
        };

export const allLessons = [
    { 
        id: 1, 
        track: "Geography", 
        number: 1, 
        title: "Line Graphs", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/Line%20Graphs.mp4", 
        pdfId: "1i5p1bLh9-PtME2oRzKfbb3sEIDJC7DDo", 
        producer: producers.stace, 
        desc: `<div><h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3><p class="text-slate-600 mb-6">Describe trends in simple and comparative line graphs</p><h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3><ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6"><li>Describe the overall pattern</li><ul class="list-[circle] pl-5 mt-1 space-y-1"><li>Does the data increase, decrease, fluctuate or remain constant from the start to the end of the period?</li></ul><li>Describe specific patterns<ul class="list-[circle] pl-5 mt-1 space-y-1"><li>Are there periods of time with significant increase or decrease?</li><li>Are there exceptions?</li></ul></ul><div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl"><h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4><p class="text-amber-900/80 text-sm font-medium leading-relaxed">Make sure your units are correct! Look for the correct units in the question context, the title of the figure or the title of each axis in the figure.</p></div></div>`,
        challenge: {
            question: "Look at the video briefing again. Which of the following is the most accurate way to describe a line graph that goes up and down multiple times?",
            options: [
                { text: "The data is constantly increasing.", correct: false },
                { text: "The data shows a fluctuating trend.", correct: true },
                { text: "The data remains constant.", correct: false }
            ],
            successMsg: "🎯 Mission Success! You've mastered the 'Fluctuation' concept.",
            failMsg: "❌ Mission Failed: Check 'The Protocol' again for trends that change direction."
        }
    },
    { id: 2, track: "Geography", number: 2, title: "Bar Charts", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on comparing discrete variables using bar charts.</div>" },
    { id: 3, track: "Geography", number: 3, title: "Pie Charts", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on proportion analysis using pie charts.</div>" },
    { id: 4, track: "Geography", number: 4, title: "Fieldwork Skills", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on data collection and inquiry techniques.</div>" },
    { id: 5, track: "Geography", number: 5, title: "Weather Instruments", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on identifying and using meteorological tools.</div>" },
    { id: 6, track: "Geography", number: 6, title: "Map Reading", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on grid references and symbols.</div>" },
    { id: 7, track: "Geography", number: 7, title: "Data Collection", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on primary vs secondary data methods.</div>" },
    { id: 8, track: "Geography", number: 8, title: "Sustainability", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on sustainable urban development.</div>" },
    { id: 9, track: "Geography", number: 9, title: "Climate Change", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on the greenhouse effect and global warming.</div>" },
    { id: 10, track: "Geography", number: 10, title: "Plate Tectonics", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on plate boundaries and hazards.</div>" },
    { id: 11, track: "Geography", number: 11, title: "Coasts", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on erosion and depositional landforms.</div>" },
    { id: 12, track: "Geography", number: 12, title: "Rivers", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on the hydrological cycle and river profiles.</div>" },
    { id: 13, track: "Geography", number: 13, title: "Population", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on migration and population pyramids.</div>" },
    { id: 14, track: "Geography", number: 14, title: "Tourism", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on the impacts of global tourism.</div>" },
    { id: 15, track: "Geography", number: 15, title: "Food Resources", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.stace, desc: "<div>Briefing on food shortage and farming systems.</div>" },

    { id: 16, track: "History/SS", number: 1, title: "Inference (SBQ)", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: `<div><h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3><p class="text-slate-600 mb-6">Extracting hidden source meanings safely for Core Source-Based Question skills.</p><h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3><ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6"><li>Uncover precise subtextual author intent rather than basic summaries.</li><li>Link matching source evidence chunks back cleanly to assertions.</li></ul><div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl"><h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4><p class="text-amber-900/80 text-sm font-medium leading-relaxed">Don't simply summarize what the text says literally!</p></div></div>` },
    { id: 17, track: "History/SS", number: 2, title: "Purpose", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on evaluating author intent and desired outcomes.</div>" },
    { id: 18, track: "History/SS", number: 3, title: "Reliability", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on cross-referencing and checking source trustworthiness.</div>" },
    { id: 19, track: "History/SS", number: 4, title: "Utility", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HydANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on the usefulness of sources in historical inquiry.</div>" },
    { id: 20, track: "History/SS", number: 5, title: "Contextual Knowledge", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on using background knowledge to support source analysis.</div>" },
    { id: 21, track: "History/SS", number: 6, title: "Comparison", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on identifying similarities and differences in sources.</div>" },
    { id: 22, track: "History/SS", number: 7, title: "Evaluation", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on judging the value of arguments in a source.</div>" },
    { id: 23, track: "History/SS", number: 8, title: "Message", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on summarizing the main point of a cartoon or text.</div>" },
    { id: 24, track: "History/SS", number: 9, title: "Assertions", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on making clear historical claims.</div>" },
    { id: 25, track: "History/SS", number: 10, title: "Origin", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on how provenance affects source value.</div>" },
    { id: 26, track: "History/SS", number: 11, title: "Bias", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on identifying one-sided perspectives.</div>" },
    { id: 27, track: "History/SS", number: 12, title: "Motive", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on why an author chose to publish at a specific time.</div>" },
    { id: 28, track: "History/SS", number: 13, title: "Tone", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on how language reflects author attitude.</div>" },
    { id: 29, track: "History/SS", number: 14, title: "Hybrid Questions", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on questions that combine multiple SBQ skills.</div>" },
    { id: 30, track: "History/SS", number: 15, title: "Synthesis", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on grouping sources to answer a big question.</div>" }
];
