import { ArrowRight, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-20">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <h2 className="text-neon-green font-mono tracking-wide text-lg">Hello, I'm</h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              尚枢
            </h1>
            <h3 className="text-3xl md:text-4xl text-gray-400">
              无人车运营 / 解决方案
            </h3>
          </div>
          
          <p className="text-gray-400 max-w-lg text-xl leading-relaxed">
            不断尝试体验突破，与大家一同进步。
          </p>
          
          <div className="flex gap-4 pt-6">
            <a 
              href="#now" 
              className="px-6 py-3 bg-neon-green text-black font-bold rounded hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              See What I'm Doing <ArrowRight size={18} />
            </a>
            <Link 
              to="/about" 
              className="px-6 py-3 border border-white/20 rounded hover:border-neon-green hover:text-neon-green transition-all"
            >
              More About Me
            </Link>
          </div>
        </div>
        
        {/* Image Placeholder */}
        <div className="flex-1 relative flex justify-center md:justify-end">
          <div className="w-full h-[500px] md:h-[600px] relative">
            <img 
              src="/profile.png" 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-contain object-center md:object-right"
              onError={(e) => e.target.style.display = 'none'} 
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Now / Projects Section */}
      <section id="now" className="py-20 border-t border-white/5">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-neon-green w-12"></div>
          <h2 className="text-2xl font-bold tracking-wide">NOW & PROJECTS</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Now Focus Card */}
          <div className="bg-card-bg p-8 rounded-xl border border-white/5 hover:border-neon-green/50 transition-all group">
            <div className="text-neon-green mb-4 font-mono text-sm">⚡ CURRENT FOCUS</div>
            <h3 className="text-xl font-bold mb-3">Learning Vibecoding</h3>
            <p className="text-gray-400">
              正在深入学习和实践 Vibecoding 编程范式，探索 AI 辅助开发的无限可能。
            </p>
          </div>

          {/* Project 1 */}
          <div className="bg-card-bg p-8 rounded-xl border border-white/5 hover:border-neon-green/50 transition-all group relative overflow-hidden">
            <div className="absolute top-4 right-4 px-2 py-1 bg-neon-green/10 text-neon-green text-xs rounded font-mono">
              已上线
            </div>
            <h3 className="text-xl font-bold mb-3">VideoNote</h3>
            <p className="text-gray-400 mb-6">
              视频“速读”助手。本地视频智能摘要生成工具。
            </p>
            <a 
              href="https://848ab75b73cd4a53bf2391949892ecfa.prod.enter.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white group-hover:text-neon-green transition-colors"
            >
              Visit Project <ExternalLink size={14} />
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-card-bg p-8 rounded-xl border border-white/5 hover:border-neon-green/50 transition-all group relative overflow-hidden">
             <div className="absolute top-4 right-4 px-2 py-1 bg-neon-green/10 text-neon-green text-xs rounded font-mono">
              已上线
            </div>
            <h3 className="text-xl font-bold mb-3">Client Info Parser</h3>
            <p className="text-gray-400 mb-6">
              客户基本信息解析小工具，提高信息处理效率。
            </p>
            <a 
              href="https://pan.baidu.com/s/59Nd6ALb5wG7mFfp81jF_uw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white group-hover:text-neon-green transition-colors"
            >
              百度云下载 <Download size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
