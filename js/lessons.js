export const producers = {
            stace: { handle: "@geographer.stace", link: "https://www.instagram.com/geographer.stace/" },
            mike: { handle: "@mrmike.history.ss", link: "https://www.instagram.com/mrmike.history.ss/" }
        };

export const masterWorkbooks = {
    "Geography": "[https://drive.google.com/uc?export=download&id=1i5p1bLh9-PtME2oRzKfbb3sEIDJC7DDo](https://drive.google.com/uc?export=download&id=1i5p1bLh9-PtME2oRzKfbb3sEIDJC7DDo)", // replace this ID if needed
    "History/SS": "[https://drive.google.com/uc?export=download&id=1i5p1bLh9-PtME2oRzKfbb3sEIDJC7DDo](https://drive.google.com/uc?export=download&id=1i5p1bLh9-PtME2oRzKfbb3sEIDJC7DDo)" // replace with your master History Drive ID
};

export const allLessons = [
    { 
        id: 1, 
        track: "Geography", 
        number: 1, 
        title: "Line Graphs", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%201%20-%20Line%20Graphs.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Describe trends in simple and comparative line graphs</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Describe the overall pattern</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                            <li>Does the data increase, decrease, fluctuate or remain constant from the start to the end of the period?</li>
                        </ul>
                        <li>Describe specific patterns
                            <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Are there periods of time with significant increase or decrease?</li>
                                <li>Are there exceptions?</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            Make sure your units are correct! Look for the correct units in the question context, the title of the figure or the title of each axis in the figure.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 2, 
        track: "Geography", 
        number: 2, 
        title: "Bar Graphs", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%202%20-%20Bar%20Graphs.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Describe trends in simple bar graphs & compare data in comparative bar graphs</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3>
                    <p class="text-slate-600 mb-6"><strong>To describe trends</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Describe the overall pattern</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                            <li>Does the data increase, decrease, fluctuate or remain constant from the start to the end of the period?</li>
                        </ul>
                        <li>Describe specific patterns
                            <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Are there periods of time with significant increase or decrease?</li>
                                <li>Are there exceptions?</li>
                            </ul>
                        </li>
                    </ul>
                        <p class="text-slate-600 mb-6"><strong>To compare data</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Describe at least one similarity</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                            <li>E.g. Both X and Y increased from 1990 to 2020.</li>
                            <li>E.g. Both X and Y had the highest percentage in 2010.</li>
                        </ul>
                        <li>Describe at least one difference</li>
                            <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>E.g. From 2015 to 2020, X increased by Y decreased. </li>
                                <li>E.g. In 2020, X had the highest percentage but Y had the lowest percentage.</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            Every point you write needs a common criteria that you use to compare (i.e. a basis of comparison). Do not write all about X, then all about Y. Write one similarity / difference between X and Y in one point, before moving on to the next similarity / difference.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 3, 
        track: "Geography", 
        number: 3, 
        title: "Pie Charts", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%203%20-%20Pie%20Charts.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Describe the distribution of data in pie charts</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Describe from most to least percentage</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                            <li>Which category has the highest percentage?</li>
                            <li>Which category has a moderate percentage?</li>
                            <li>Which category has the least percentage?</li>
                        </ul>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            If it is not possible to determine a “most” or “least” category because multiple categories show similar percentages, group these categories together instead. E.g. X and Y both show a high percentage of greenhouse gas emissions.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 4, 
        track: "Geography", 
        number: 4, 
        title: "Climographs", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%204%20-%20Climographs.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Describe climate characteristics of climographs</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Describe temperature characteristics</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                            <li>Is the temperature range small, moderate or large?</li>
                            <li>What is the mean annual temperature?</li>
                        </ul>
                        <li>Describe rainfall characteristics</li>
                            <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Is the total annual precipitation low or high?</li>
                                <li>Is there a distinct wet and dry season? </li>
                            </ul>
                        </li>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            A climograph has two vertical axes - one for temperature and one for rainfall. Make sure you are looking at the correct axis when you cite temperature and rainfall data. If you end up writing that the mean annual temperature of a place is 100 degree celsius, you should know something is wrong!
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 5, 
        track: "Geography", 
        number: 5, 
        title: "Tables", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%205%20-%20Tables.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Describe relationships between variables, describe trends and compare data in tables</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3>
                    <p class="text-slate-600 mb-6"><strong>To describe relationships</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Describe the overall relationship</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                            <li>When X increases, does Y increase, decrease or change inconsistently?</li>
                        </ul>
                        <li>Describe an exception, if any</li>
                            <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Pick a data point that does not show the overall relationship that you described</li>
                            </ul>
                    </ul>
                    <p class="text-slate-600 mb-6"><strong>To describe trends</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Describe the overall pattern</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                            <li>Does the data increase, decrease, fluctuate or remain constant from the start to the end of the period?</li>
                        </ul>
                        <li>Describe specific patterns</li>
                            <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Are there periods of time with significant increase or decrease?</li>
                                <li>Are there exceptions?</li>
                    </ul>
                    <p class="text-slate-600 mb-6"><strong>To compare data</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Describe at least one similarity</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                            <li>E.g. Both X and Y increased from 1990 to 2020.</li>
                            <li>E.g. Both X and Y had the highest percentage in 2010.</li>
                        </ul>
                        <li>Describe at least one difference</li>
                            <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>E.g. From 2015 to 2020, X increased by Y decreased. </li>
                                <li>E.g. In 2020, X had the highest percentage but Y had the lowest percentage.</li>
                            </ul>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            Not every “describe the relationship” question actually comes with a figure that shows a clear relationship between two variables. In this case, write that “there is no relationship between X and Y”, then justify your answer with data.
                        </p>
                    </div>
                </div>
            `,
    },

    { id: 16, track: "History/SS", number: 1, title: "Describe", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: `<div><h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3><p class="text-slate-600 mb-6">Extracting hidden source meanings safely for Core Source-Based Question skills.</p><h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3><ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6"><li>Uncover precise subtextual author intent rather than basic summaries.</li><li>Link matching source evidence chunks back cleanly to assertions.</li></ul><div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl"><h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4><p class="text-amber-900/80 text-sm font-medium leading-relaxed">Don't simply summarize what the text says literally!</p></div></div>` },
    { id: 17, track: "History/SS", number: 2, title: "Explain", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on evaluating author intent and desired outcomes.</div>" },
    { id: 18, track: "History/SS", number: 3, title: "Analysis of Pictorial Sources", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HvANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on cross-referencing and checking source trustworthiness.</div>" },
    { id: 19, track: "History/SS", number: 4, title: "Analysis of Textual Sources", directUrl: "1pAEpGRrMVs2HpXlHEbPdxZ6cYL9HydANU", pdfId: "", producer: producers.mike, desc: "<div>Briefing on the usefulness of sources in historical inquiry.</div>" },
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
