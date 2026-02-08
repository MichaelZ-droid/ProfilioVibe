import { Code2, PenTool, Database, Layout } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
        About Me <span className="text-neon-green">.</span>
      </h1>

      {/* Intro */}
      <section className="mb-20 prose prose-invert max-w-none">
        <p className="text-xl text-gray-300 leading-relaxed">
          你好！我是詹尚枢。我拥有一段多元且有趣的职业经历，从医疗建筑设计研究，到宣传片制作，再到如今深耕于无人车运营与解决方案领域。
        </p>
        <p className="text-gray-400 mt-6 leading-relaxed">
          我始终保持着对新事物的好奇心，喜欢不断尝试、体验和突破自我。目前，我正在积极探索 AI 编程与自动化工作流（Vibecoding），致力于通过技术手段提升效率，与大家一同进步。
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Code2 className="text-neon-green" /> Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {['n8n', 'Coze', 'Python', 'Figma', 'Auto-driving Ops', 'Solution Design'].map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-card-bg border border-white/10 rounded-full text-sm text-gray-300 hover:border-neon-green/50 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Database className="text-neon-green" /> Experience
          </h2>
          <div className="space-y-8 border-l border-white/10 pl-8 relative">
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-green"></div>
              <div className="text-sm text-neon-green mb-1">1 Year</div>
              <h3 className="text-lg font-bold">自动驾驶运营 / 解决方案</h3>
              <p className="text-gray-500 mt-1">Focusing on autonomous driving operations and solution architecture.</p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-dark-bg border-2 border-gray-600"></div>
              <div className="text-sm text-gray-400 mb-1">1 Year</div>
              <h3 className="text-lg font-bold">宣传片制作</h3>
              <p className="text-gray-500 mt-1">Video production and creative direction.</p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-dark-bg border-2 border-gray-600"></div>
              <div className="text-sm text-gray-400 mb-1">3 Years</div>
              <h3 className="text-lg font-bold">医疗建筑设计研究</h3>
              <p className="text-gray-500 mt-1">Medical architecture design and research.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
