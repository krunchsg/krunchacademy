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
                        <li>Describe specific patterns</li>
                            <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Are there periods of time with significant increase or decrease?</li>
                                <li>Are there exceptions?</li>
                            </ul>
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
                        <li>Describe specific patterns</li>
                            <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Are there periods of time with significant increase or decrease?</li>
                                <li>Are there exceptions?</li>
                            </ul>
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
{ 
        id: 6, 
        track: "Geography", 
        number: 6, 
        title: "Photographs", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%206%20-%20Photographs.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Describe and explain features in photographs</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3>
                    <p class="text-slate-600 mb-6"><strong>To describe features</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Name and specify where the feature is located - address any of the following:</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                            <li>Is the location specified in the question context?</li>
                            <li>Is the feature in the foreground, middle ground or background?</li>
                            <li>Is the feature near to another feature that’s already labelled in the figure?</li>
                        </ul>
                        <li>Describe what the feature looks like - choose what is most relevant</li>
                            <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Is it a single feature that stands on its own, or is it a feature that consists of individual parts that take up a huge amount of space in total?</li>
                                <li>Is it tall or short, clustered or dispersed?</li>
                            </ul>
                    </ul>
                    <p class="text-slate-600 mb-6"><strong>To explain features</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Identify the keyword in the question, which gives you the question context</li>
                        <li>Relate each feature in the figure to the question context</li>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            When the question asks you to describe features, do not just identify what you see. For example, “solar panels” will not get you the mark. “Rows of solar panels on the rooftop” is a much better description because you are specifying where the feature is found and how it is laid out.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 7, 
        track: "Geography", 
        number: 7, 
        title: "Schematic Diagrams", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%207%20-%20Schematic%20Diagrams.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Describe processes and explain links in schematic diagrams</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3>
                    <p class="text-slate-600 mb-6"><strong>To describe processes</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Group related processes together and describe them in order</li>
                    </ul>
                    <p class="text-slate-600 mb-6"><strong>To explain links</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Use the legend to help you understand what symbols in the figure (e.g. links, colours) mean</li>
                        <li>Identify the keyword in the question, which gives you the question context</li>
                        <li>Relate information in the figure to the question context</li>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            Every schematic diagram is drawn differently. For example, the water cycle shown in the textbook could be different from what appears in your exam. Answer the question based on the information shown in the figure first, then rely on your own knowledge to fill in any gaps in explanation.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 8, 
        track: "Geography", 
        number: 8, 
        title: "Infographics", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%208%20-%20Infographics.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Explain content in an infographic</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3> 
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Identify the keyword in the question, which gives you the piece of information to describe, and the question context</li>
                        <li>Relate each piece of information in the figure to the question context</li>
                        <li>Bring in your textbook knowledge to fill in any gaps in the information shown in the figure</li>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            If a piece of information in the figure is better explained using a geographical term that you have learnt, use the geographical term instead. This shows that you are enhancing figure evidence with your knowledge.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 9, 
        track: "Geography", 
        number: 9, 
        title: "Choropleth Maps", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%209%20-%20Choropleth%20Maps.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Interpret data in choropleth maps</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3> 
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Look at the legend</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Each shade or type of colour in the legend shows you a different data range</li>
                            </ul>
                        <li>Identify the data range that the question specifies</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Does the question require you to talk about all data ranges, or only specific data ranges?</li>
                            </ul>
                        <li>Identify locations with colours that match the data range specified in the question</li>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            You are expected to know the names of continents, major countries in the world and countries that are near Singapore (e.g. US, China, Malaysia, Indonesia). This helps you to describe the distribution of data more specifically and accurately when you are given a world map.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 10, 
        track: "Geography", 
        number: 10, 
        title: "Proportional Symbol Maps", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%2010%20-%20Proportional%20Symbol%20Maps.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Interpret data in proportional symbol maps</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3> 
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Look at the legend</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Each shade or type of colour in the legend represents a category</li>
                                <li>The size of the symbol represents the range of data (the bigger the symbol, the proportionately higher the number it represents)</li>
                            </ul>
                        <li>Identify the data range that the question specifies</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Does the question require you to talk about all data ranges, or only specific data ranges?</li>
                            </ul>
                        <li>Identify locations with colours and symbol sizes that match the data range specified in the question</li>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            Some maps come with the north arrow. This is a hint to you to use compass directions (north, south, east or west) to describe specific locations of a country or continent. For example, write “southeastern parts of Africa” instead of just “in Africa”.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 11, 
        track: "Geography", 
        number: 11, 
        title: "Mental Maps", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%2011%20-%20Mental%20Maps.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Interpret perceptions of places through mental maps</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3> 
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Look at the words used to label places</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>These words tell you the most important thing(s) that people associate a place with</li>
                            </ul>
                        <li>Look at the colours and symbols used to represent places</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>The more detail drawn in, the more familiar the person is likely to be with a place</li>
                                <li>Different colours and symbols represent different emotions (e.g. lighter colours and hearts could represent that the person likes the place)</li>
                            </ul>
                        <li>Compare the mental map with an actual map</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>A place that is drawn bigger than it is could mean that the person has a stronger positive or negative impression of the place</li>
                                <li>Two places that are drawn nearer to each other than they actually are could mean that these places are more important to the person</li>
                            </ul>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            When asked to describe differences between two mental maps, do not write “Map A has X but Map B does not have X.” This is considered a low-level answer that typically is not awarded marks. It is better to identify one thing that both maps have, but are drawn differently.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 12, 
        track: "Geography", 
        number: 12, 
        title: "Scatterplots", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%2012%20-%20Scatterplots.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Describe relationships between variables in scatterplots</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3>
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
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            At the secondary level, you will mostly encounter scatterplots that show you a linear relationship (i.e. a best-fit straight line can be drawn). Beyond the mainstream secondary syllabus, in reality, scatterplots can show non-linear relationships. For example, a best-fit curve should be drawn for Q2 rather than a best-fit straight line.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 13, 
        track: "Geography", 
        number: 13, 
        title: "Bipolar Graphs", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%2013%20-%20Bipolar%20Graphs.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Interpret data in perception surveys and represent the data in bipolar graphs</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3>
                    <p class="text-slate-600 mb-6"><strong>To interpret data in perception surveys</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Look at the questions given in the survey</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Opposing descriptors are placed in the same row for survey respondents to rate</li>
                            </ul>
                        <li>For each set of opposing descriptors, compare the number of respondents who responded positively and negatively</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>This gives you a quick overview of whether respondents view the place positively or negatively</li>
                            </ul>
                    </ul>
                    <p class="text-slate-600 mb-6"><strong>To represent data in bipolar graphs</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Look at one set of descriptors at a time</li>
                        <li>Leave out those who respond ‘0’</li>
                        <li>Calculate data for those who responded negatively: (number of respondents x -2) + (number of respondents x -1) etc.</li>
                         <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Plot this negative number on the negative side of the bipolar graph</li>
                            </ul>
                        <li>Calculate data for those who responded positively: (number of respondents x 1) + (number of respondents x 2) etc.</li>
                         <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>Plot this positive number on the positive side of the bipolar graph</li>
                            </ul>
                        <li>Repeat the steps for each set of descriptors</li>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            The positive and negative segments of the bipolar graph need to be calculated separately. Do not sum the positive and negative results for each set of descriptors.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 14, 
        track: "Geography", 
        number: 14, 
        title: "Sentiment Analysis", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%2014%20-%20Sentiment%20Analysis.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Interpret data in sentiment analysis charts</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3> 
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Look at the question given in the survey</li>
                        <li>Compare the number of respondents who responded positively and negatively for the question</li>
                        <ul class="list-[circle] pl-5 mt-1 space-y-1">
                                <li>This gives you a quick overview of whether respondents view the situation, place or object positively or negatively</li>
                            </ul>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            Sentiment analysis involves categorising the emotional tone conveyed in survey responses. This means that the investigator determines whether to categorise a response positively or negatively, which introduces bias. Therefore, sentiment analysis may not be as reliable as environmental perception surveys, which reflect respondents’ actual rating.
                        </p>
                    </div>
                </div>
            `,
    },
{ 
        id: 15, 
        track: "Geography", 
        number: 15, 
        title: "Stacked Bar Graphs", 
        directUrl: "https://pub-437a98034bc3494e97b57ffdc5bf43af.r2.dev/GY%20Mission%2015%20-%20Stacked%20Bar%20Graphs.mp4", 
        producer: producers.stace, 
        desc: `
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">The Command</h3>
                    <p class="text-slate-600 mb-6">Interpret and compare data in stacked bar graphs</p>
                    
                    <h3 class="text-sm font-black text-emerald-600 uppercase tracking-wider mb-2">The Protocol</h3>
                    <p class="text-slate-600 mb-6"><strong>To interpret data</strong></p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 mb-6">
                        <li>Mark out the start (lower limit) and end (upper limit) of each category</li>
                        <li>Take the upper limit - lower limit = the percentage associated with each category</li>
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
                                <li>E.g. From 2015 to 2020, X increased by Y decreased.</li>
                                <li>E.g. In 2020, X had the highest percentage but Y had the lowest percentage.</li>
                            </ul>
                    </ul>
                    
                    <div class="p-5 bg-amber-50/60 border border-amber-100 rounded-2xl">
                        <h4 class="text-sm font-black text-amber-800 uppercase tracking-wider mb-1">⚠️ The Trap</h4>
                        <p class="text-amber-900/80 text-sm font-medium leading-relaxed">
                            Stacked bar graphs are different from simple bar graphs. Stacked bar graphs lay categories on top of each other or side by side to show you the proportion of each category. This is why you must take extra effort to calculate the percentage of each category for stacked bar graphs.
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
