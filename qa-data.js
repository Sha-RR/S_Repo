const qaData = [
  {
    question: "What is an AI engineer?",
    answer: `AI engineer is the fastest growing job title for young people for the second year in a row, according
    to LinkedIn. The job responsibilities are broad, but generally involve building and running AI products, including
    AI agents and Large Language Models (LLMs) and integrating them into a business's workflow.
    "Ultimately, it comes down to building models, meaning that they're building something that can make a decision or
    make some inference or identify some patterns, and then they need to be able to evaluate those models and update
    them accordingly."`,
    tag: "AI",
    date: "Mar 03, 2026"
  },
  {
    question: "The fastest-growing job for young workers, LinkedIn says.",
    answer: `As the rise of artificial intelligence stirs anxiety over the technology taking people's jobs, AI is
    also opening pathways to new careers, according to LinkedIn.

    The fastest-growing job title for young workers on the networking platform is "AI engineer," a recent report from
    the company found. LinkedIn analyzed millions of member profiles to determine the number of entry-level workers
    hired over the last three years and the roles they were hired to fill.

    Getting started and breaking into the labor market right now probably does require a certain amount of AI aptitude,
    or AI literacy, to get ahead, because companiesa re increasingly looking for folks who can bring that skill into
    their company, help them actually scale up and figure out what they want to do and what the best use cases for AI are.
    Involving building and running AI products, integrating Large Language Models (LLMs) into workflows, and evaluating
    /updating models to solve business challenges and improve efficiency.
    Primarily hired by tech companies, followed by financial services, with opportunities in defense, universities, 
    and consulting, highlighting the need for AI literacy to enter the labor market.`,
    tag: "Tech",
    date: "Mar 03, 2026"
  },
  {
    question: "Jobs that cannot be replaced by AI, new study.",
    answer: `Hands-On & Physical Work: Jobs like construction, agriculture, and skilled trades rely on manual
    dexterity, situational awareness, and adaptability, making them difficult for AI to replace.
    Empathy & Care Roles: Healthcare workers, counselors, and social workers require emotional intelligence,
    rapid decision-making, and human connection, which AI cannot fully replicate.
    Creative & Strategic Work: Roles in arts, design, writing, leadership, and negotiation depend on original thought,
    aesthetic judgment, and complex interpersonal skills, keeping them largely safe from automation.
    It ultimately comes down to who is willing to pivot - who is open to stepping outside their original path and
    exploring opportunities in fields like construction or agriculture, even after earning a degree in computer science.
    This is not about chasing a job title. It's about breaking free from the rigid idea that success only comes with
    label of "Software Engineer," and instead choosing growth, adaptability, and real-world impact over a predefined
    dream.`,
    tag: "Tech",
    date: "Apr 27, 2026"
  },
  {
    question: "Companies are hitting a wall with AI - outdated systems are to blame?",
    answer: `AI adoption without shared standards creates fragmented systems that limit real transformation.
    Speed alone doesn't drive value; alignment, governance, and consistency determine outcomes.
    Leadership ownership is essential to turn AI from a tool into a scalable advantage.

    Nearly 80% of organizations have already flipped the switch on AI. Teams are racing to experiment, hacking
    their workflows, and hitting speeds that were impossible a year ago. But moving fast doesn't mean you are moving
    in the right direction.
    The consequences don't stay isolated to the individuals and teams using AI. They accumulate and are felt across
    the organization.
    AI adoption is accelerating across every function. Across most companies today, marketing is generating content at
    scale while operations is automating workflows. Engineering and product teams are weaving AI directly into their
    builds, while support teams are shifting heavily toward automated bots.
    Each department is successfully accelerating without a lack of alignment. Without a common operational standard,
    teams make disconnected choices about their tech stacks and data handling. Results lead to increasingly unreliable
    outcomes, which block transformation at the organizational level.

    Right now, most companies are using AI to move faster within existing workflows. Tasks are completed more quickly,
    content is produced at a higher volume, and certain processes require less manual, "HUMAN" effort.
    But acceleration within existing systems is not the same as transforming how a business operates.
    Transformation requires alignment. That may mean rewriting the rules of engagement for your data, your outputs,
    and your people. It’s a shift from celebrating ‘pockets of productivity’ to demanding an enterprise-grade standard
    of reliability. Put simply, if a solution isn’t consistent and accountable across the organization, it isn’t ready
    for a full-scale rollout.`,
    tag: "Tech",
    date: "Mar 03, 2026"
  },
  {
    question: "The AI revolution is mostly marketing - REALLY?",
    answer: `The U.S. economy, especially its once-inviolable tech sector, has shed nearly 160,000 jobs in January
    and February alone. AI-inspired layoffs are accelerating at an alarming rate, highlighted by Block founder Jack
    Dorsey's controversial 40% cut. Jeff Bezos' relentlessly laid off 16,000 in January, citing ongoing reorganization
    as the company relentlessly invests in AI. Ironically, amid tech's catastrophic reshuffling, A study from the
    National Bureau of Economic Research reports that "thousands" of CEO admit that AI has had no meaningful impact on
    employment and productivity. So who's lying?
    A total of 84% of the global population has yet to use AI, and only 0.3% pays for premium services. Yet Silicon
    Valley's dollars remain laser-focused on AI's future, most notably agentic products as both professional and personal
    labor. It's like they're mass-producing Tony Stark's Jarvis robot when no one asked for it.

    By all accounts, the industry's over its skis, burning billions on startups destined for demise and washing
    computing power amid a global energy crisis. Not to mention, geopolitical tensions and uncertainty are both at
    all-time highs.

    Without question, something's up.`,
    tag: "Tech",
    date: "Apr 01, 2026"
  },
  {
    question: "AI tools change fast. Here's what employees actually need to learn",
    answer: `Companies chasing tools are falling behind. The smart ones build skills.
    Every week, a new AI tool promises to revolutionize work. One writes emails. Another summarizes meetings. A
    third builds presentations in seconds. So, organizations rush to train employees on tools - workshops, certification,
    and playbooks.
    Yet there is a problem. By the time employees finish the training, the tools they learned are already evolving.
    The companies seeing real gains from AI aren't focusing on tools at all. They're focusing on skills.
    Still, many organizations misunderstand where the real value of AI adoption comes from.

    "Many organizations start AI training by teaching employees specific tools." But tools change constantly, if the
    training is centered on the technology itself, and the learning becomes outdated very quickly.
    The real unlock comes from building skills like problem framing, decision-making, and evaluating AI-generated
    work. When employees develop those capabilities, they can apply them across any tool that emerges.

    AI transformation is really a work transformation.

    Many AI initiatives stall because organizations assume adoption is primarily about technology. The bigger challenge
    is redesigning how work happens.
    Research from McKinsey & Company suggests generative AI could automate tasks that currently consume 60-70% of
    employees time, but capturing that value requires organizations to rethink workflows and decision processes rather
    than simply introducing new tools. That transformation requires employees who can analyze problems, collaborate
    with AI systems, and evaluate outputs thoughtfully. In other words, it requires skills.`,
    tag: "AI",
    date: "Apr 01, 2026"
  },
  {
    question: "Amazon's bio discovery tool uses AI to filter thousands of antibody candidates.",
    answer: `AWS reveals new AI drug discovery tool
    Amazon Bio Discovery removes the technical barriers to high computational AI experiments
    The tool can cut drug testing times significantly

    AI speeds up drug discovery
    Amazon Bio Discovery provides a catalog of foundational models specialized for drug discovery, with the option
    for scientists to upload models from third parties. Of course, the tool wouldn't be complete without an AI agent,
    which can guide users through selecting the right models and parameters for their research.
    When the experiment is ready to start, the AI agent begins searching through data sources and foundational
    biological factors - and it even provides references and scientific rationale for its predictions and suggestions.
    The tool then filters down the results to the top selection of results, which can then be sent to one of Amazon's
    integrated lab partners for synthesis and testing without the need for a manual handover that can cause delay.
    The results from lab testing are then automatically fed back into Amazon Bio Discovery for additional analysis.

    The continuous back-and-forth feedback between the integrated labs and researchers allows for rapid fine-tuning
    of results, speeding up the time between design, testing, and synthesis.`,
    tag: "Tech",
    date: "Apr 27, 2026"
  },
  {
    question: "Is Gen-Z losing faith in AI? If so, that's a serious problem for employers.",
    answer: `From job anxiety to burnout, the most tech-native generation is questioning whether AI is helping -or
    hurting - work.
    Gen-Z gets slapped with many labels, some ringing more true than others, but we can definitely all agree these
    youngsters are incredibly tech - savvy. As the first digital native generation, they live and breathe tech - 
    from smartphones to gaming consoles, social media, instant messaging, and more. Plenty of reports have also
    suggested that Gen-Z is leading the charge when it comes to AI, with basically "everyone" using it to help.
    Still, they are now growing wary about this revolutionary innovation. It means Trouble. Trouble that might play into
    your company's AI plans.
    According to new data from polling giant Gallup, over half of U.S. Gen-Z-ers use AI regularly,  and fully 52
    percentage of K-12 students think they’ll have to know AI for their postsecondary education—neatly matching the whole
    digitally-native narrative. But Gallup’s data also shows that Gen-Z’s feelings about the tech are “souring,” the
    New York Times wrote. The data says that the share of survey respondents aged 14 to 29 who said they’re “hopeful.”
    The AI has slipped sharply since 2025. It’s now just 18 percent, versus last year’s 27 percent. As well as
    hopefulness, “excitement” levels about AI have fallen, too. And almost one in three agreed AI actually made them
    feel “angry.”

    More interestingly, 48 percent said that they believe the "risks of AI in the workforce outweigh its benefits,"
    an 11 percentage point rise over last year's figure. Essentially, this means half of the generation for whom tech
    is natural, a part of life as sliced bread, think that it may actually be more dangerous to use this technology at
    work than not to use it. That's an astonishingly negative stance.`,
    tag: "Tech",
    date: "Apr 01, 2026"
  },
  {
    question: "AI revolution is sorting people into three camps.",
    answer: `Power Users: Run AI agents constantly, automate work, and gain significant productivity boosts. Experienced users
    tackle harder tasks and succeed more often, creating a new economic gap.
    Doubters: See AI as glitchy chatbots and viral fails, rarely using its full capabilities. Their understanding is limited by
    casual exposure, like a single ChatGPT session.
    Resisters: Actively oppose AI, sometimes violently. Recent incidents include an attack on data centers and OpenAI leadership,
    reflecting growing fear and anxiety about AI's societal impact.
    WHY IT MATTERS?
    AI is not just advancing-it is fragmenting how people see the world.
    The big picture: The disconnect is showing up everywhere - from job-loss fears to data center protests to actual violence.
    WHAT THEY'RE SAYING: There is a growing gap in the understanding of AI capability. Former OpenAI and Tesla AI leader,
    Andrej Karpathy posted on X. He added that many people let a single session with ChatGPT's free tier define their view of AI.

    Altman expressed optimism in a post after the attack, while acknowledging public fear and concern.
    "It will not all go well," Altman wrote. "The fear of and anxiety about AI is justified; we are in the process of
    witnessing the largest change to society in a long time, and perhaps ever.

    Summary: The people building and using AI at full power are living in a very different world from everyone else.`,
    tag: "Tech",
    date: "Apr 27, 2026"
  },
  {
    question: "Why smart leaders aren't panicking about AI?",
    answer: `We all have doubts in our mind about what exactly the tech leaders are doing with AI?
    Are they really helping people or making them crazy?
    Is AI really the future?
    If the AI is the future, then what happens to people? I mean, regular middle-class and poor people?
    Artificial intelligence is not the first time business leaders or people have felt this kind of pressure during a 
    tech disruption.
    
    It just feels like it is. It always does when it is happening.
    
    There is a familiar pattern that shows up whenever a major technology shift hits. The headlines get louder. The predictions
    get more extreme. And leaders and people across industries start asking a version of the same question: Where do I fit in this?
    
    That question matters more than people realize. Because the way leaders answer it often determines whether they move forward
    or stall out at exactly the wrong moment.
    After watching multiple ways of disruption unfold over the past few decades, one thing has become clear. These moments do not just
    create opportunity. They create a predictable cycle that leaders move through, whether they recognize it or not.
    Understanding the five stages of the disruption confidence cycle can make the difference between reacting to change and leading
    through it.`,
    tag: "Tech",
    date: "Mar 03, 2026"
  },
  {
    question: "AI in coding.",
    answer: `AI coding tools are moving beyond autocomplete. They can now:
    Create full apps from prompts.
    Connect frontend, backend, database, and APIs.
    Debug errors from terminal logs.
    Write tests.
    Regactor code.
    Explain the code line by line.
    Google AI Studio's newer Build mode, for example, is described as letting users turn prompts into production-ready apps with
    databases and real-world services.`,
    tag: "AI",
    date: "Mar 03, 2026"
  },
    {
    question: "AI in Drug Discovery and Healthcare.",
    answer: `AI models can now analyze molecular structures, simulate protein interactions, and suggest potential drug candidates.
    Personalized treatment recommendations based on patient history are also being deployed in clinical practice. 
    AI technologies, including machine learning and natural language processing, are used to analyze vast datasets, enabling rapid
    identification of drug targets, prediction of compound efficacy, and optimization of drug design. AI also enhances clinical trial
    efficiency by improving patient recruitment and data analysis. However, challenges such as data quality, model interpretability,
    and regulatory hurdles remain. Future advancements will require improved data standardization, transparency in AI model development,
    and collaboration between AI researchers and pharmaceutical experts. By addressing these challenges, AI holds the potential to
    deliver safer, more effective, and more affordable medicines to patients.`,
    tag: "AI",
    date: "Mar 02, 2026"
  },
  {
    question: "What is multimodal AI?",
    answer: `An AI system that can understand or work with more than one type of input.
    For example, normal AI might only understand text.
    
    Multimodal AI can understand combinations like:
    1. Text: questions, documents, prompts
    2. Images: photos, screenshots, medical scans
    3. Audio: voice, music, sounds
    4. Video: moving scenes, actions
    5. Files/data: PDFs, spreadsheets, charts

    Example:
    You upload a picture of a damaged car and ask:
    "Improve this for a software developer job."
    The AI reads the document, understands the job context, and rewrites it.
    In simple terms, Multimodal AI can understand and combine different types of information, not just text.
    `,
    tag: "AI",
    date: "Mar 02, 2026"
  },
  {
    question: "AI hallunications.",
    answer: `In the field of artificial intelligence, a model produces information that sounds confident, plausible-sounding, but false or nonsensical, outputs generated by AI models. These errors occur because models,
    such as LLMs, predict likely word sequences rather than verifying facts. Common causes include biased or insufficient training data and the inherent probabilistic nature of AI trying to fill in information gaps.
    Most of us think that it is just a bug that engineers have not fully fixed yet. In reality, it is a natural side effect of how LLMs work at a fundamental level. These systems do not decide what is true. They predict
    What is most statistically likely to come next in a sequence of words?
    
    When the data is weak or ambiguous, the model does not stop-it completes the pattern anyway. That's why hallucination often appears when context is vague, when questions demand certainty, or simply when a question
    asked beyond what its training data reliably support.
    Its hallucinations are human-like. Humans also guess when they are unsure and fill memory gaps with reconstructed stories. Some people they do speak confidently even though they know it is wrong.`,
    tag: "AI",
    date: "Mar 02, 2026"
  },
  {
    question: "Why is a perfect AI impossible?",
    answer: `A truly perfect AI is impossible because perfect breaks in a few different ways at once. First, the world is incomplete and messy. An AI never sees everything. It gets limited data, ambiguous language, missing context, and sometimes false information. If the input is imperfect, the output cannot be perfect every time. Second, human goals are not perfectly defined. People say things like be helpful, be fair, or make the best decision, but those goals often conflict. What is fair to one person may feel unfair to another.
    So even if the AI is very strong, it cannot satisfy all values at once. Third, there are tradeoffs. An AI cannot maximize everything together, speed vs accuracy, creativity vs safety, privacy vs personalization, honesty about uncertainty vs sounding confident. Improving one usually weakens another. Fourth, some problems are fundamentally solvable. In math and computer science, there are limits to computation. Some questions cannot be answered perfectly in general, or cannot be solved efficiently for all cases. Fifth, humans
    themselves are not perfect judges. We often disagree, change our minds, or want different outcomes in different situations. So perfect according to whom? because the main problem. SO the real goal is not perfect AI. It is useful, reliable, honest, aligned, and improving AI. In summary: Perfect AI is impossible because reality is uncertain, human values conflict, and computation itself has hard limits.`,
    tag: "AI",
    date: "Feb 27, 2025"
  },
  // -- Quantum --
  {
    question: "What is the current state of quantum computing in 2025?",
    answer: "Quantum computing in 2025 is still largely in the NISQ (Noisy Intermediate-Scale Quantum) era, meaning machines exist but are error-prone and not yet at fault-tolerant scale. Google, IBM, and Microsoft are competing to demonstrate 'quantum advantage' — real-world tasks where quantum processors outperform classical computers. IBM's 1,000+ qubit processors and Microsoft's topological qubit research are the biggest milestones of this cycle, though most quantum applications remain experimental.",
    tag: "Quantum",
    date: "Feb 27, 2025"
  },
  {
    question: "Is quantum computing the future of technology?",
    answer: `yes, but not as a replacement for today's computers. Quantum computing is likely to become a powerful specialized tool that works alongside classical computing, not instead of it.`,
    tag: "Quantum",
    date: "Mar 01, 2026"
  },
  {
    question: "Why quantum computing matters?",
    answer: `First, it solves different kinds of problems. Unlike Classical computers, which use bits (0 or 1). Quantum computers use qubits, which can exist in multiple states at once (called superposition) and influence each other (entanglement). This allows quantum machines to explore many possibilities simultaneously, giving a huge advantage for specific problems. Cryptography - breaking or strengthening encryption. Drug discovery & materials science - simulating molecules accurately. Optimization - logistics, supply chains, 
    traffic, finance. AI & machine learning - accelerating certain training and sampling tasks. Second, exponential speedups (in narrow areas). For some problems, quantum algorithms offer exponential or dramatic speedups over classical ones. A famous example: factoring large numbers (important for encryption). That's why companies like IBM, GOOGLE, and MICROSOFT are investing billions into quantum research.`,
    tag: "Quantum",
    date: "Mar 01, 2026"
  },
  {
    question: "Why quantum computing is not replacing classical computers",
    answer: `First, Quantum computers are extremely fragile. Must run near absolute zero. Qubits lose information easily (noise, decoherence). Error correction requires thousands of physical qubits per logical qubit. Right now, we're in the NISQ era (Noisy Intermediate-Scale Quantum). Second, Most everyday tasks don't benefit. Quantum computers are terrible at Web browsing, Mobile apps, Games, Databases, and General software. Our laptop, phone, and cloud servers aren't going anywhere. 
    So, we have a concept called Hybrid computing: The future looks like: Classical computers -> general-purpose work. Quantum processors -> specialized accelerators. Cloud access -> quantum-as-a-service (QaaS). Similar to how GPUs didn't replace CPUs, but became essential for AI. Timeline (rough, realistic). Now-5 years: Research, education, niche experiments. 5-15 years: Practical quantum advantage in chemistry, optimization. 15+ years: Fault-tolerant quantum computers with real-world impact.
    Quantum computers are part of the future of technology, but not the whole future. It is a revolutionary tool for specific, high-impact problems, while classical computing remains dominant for everything else.`,
    tag: "Quantum",
    date: "Mar 01, 2026",
  },
  {
    question: "What is OpenAI's GPT-4o and why does it matter?",
    answer: `GPT-4o is OpenAI's flagship multimodal model that can process and generate
text, audio, and images in a single unified architecture.

Unlike earlier models that handled modalities separately, GPT-4o reasons
across all three simultaneously, making interactions feel more natural.

It was a major step toward models that can see, hear, and respond in real time —
enabling use cases like live voice conversations with emotional awareness.`,
    tag: "AI",
    date: "Feb 27, 2026"
  },

  {
    question: "What is retrieval-augmented generation (RAG) and why is it widely used in 2025?",
    answer: `RAG is a technique that connects a large language model to an external
knowledge base, allowing it to retrieve relevant documents before generating a response.

This dramatically reduces hallucinations because the model grounds its answers
in retrieved facts rather than relying solely on training memory.

In 2025, RAG has become standard in enterprise AI applications — from customer
support bots to internal knowledge assistants.`,
    tag: "LLM",
    date: "Feb 26, 2026"
  },

  {
    question: "How is AI being used in space exploration?",
    answer: `AI is playing a growing role in space exploration — from autonomous navigation
on Mars rovers to anomaly detection in telescope data.

NASA and ESA use machine learning models to sift through terabytes of satellite data
imagery and spectral data to identify potentially habitable exoplanets.

SpaceX also uses AI for real-time trajectory optimization and fault detection
during rocket launches.`,
    tag: "Space",
    date: "Feb 26, 2026"
  },

  {
    question: "What is the current state of quantum computing in 2025?",
    answer: `Quantum computing in 2025 is still in the NISQ (Noisy Intermediate-Scale Quantum) era,
meaning machines exist but are error-prone and not yet fault-tolerant.

Google, IBM, and Microsoft are competing to demonstrate quantum advantage —
real-world tasks where quantum processors outperform classical computers.

IBM's 1,000+ qubit processors and Microsoft's topological qubit research
are the biggest milestones of this cycle.`,
    tag: "Quantum",
    date: "Feb 26, 2026"
  },

  {
    question: "What are AI agents and why is everyone talking about them?",
    answer: `AI agents are LLM-powered systems that can autonomously plan, take actions,
use tools, and complete multi-step tasks — not just answer questions.

Instead of a single query-response loop, an agent can browse the web,
write code, run it, read the output, and iterate on its own.

Frameworks like LangChain, AutoGen, and CrewAI have made it easier to build
agents, and companies are racing to deploy them for software development
and business automation.`,
    tag: "AI",
    date: "Feb 25, 2026"
  },

  {
    question: "What is the difference between supervised, unsupervised, and reinforcement learning?",
    answer: `Supervised learning trains models on labeled examples to predict outcomes
on new data — like classifying emails as spam or not spam.

Unsupervised learning finds patterns in unlabeled data — like grouping customers
by behavior without predefined categories.

Reinforcement learning trains agents through trial and error using reward signals —
it is the technique behind AlphaGo and is used to align large language models
with human preferences (RLHF).`,
    tag: "ML",
    date: "Feb 25, 2026"
  },

  {
    question: "What is edge AI and why is it becoming important?",
    answer: `Edge AI refers to running machine learning models directly on local devices —
phones, sensors, cameras — rather than sending data to the cloud.

This matters for latency (instant responses), privacy (data never leaves the device),
and reliability (works offline).

With Apple's Neural Engine, Qualcomm's AI chips, and models like Phi-3 Mini
optimized for on-device inference, edge AI is moving into mainstream products in 2025.`,
    tag: "Tech",
    date: "Feb 25, 2026"
  }

];
