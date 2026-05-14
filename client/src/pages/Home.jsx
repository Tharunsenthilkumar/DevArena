import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Brain, Trophy, Briefcase, ChevronRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section flex-center">
        <div className="hero-background"></div>
        <div className="container flex-col flex-center text-center z-10">
          <div className="badge glass-panel">🔥 Ranked #1 for Placement Prep</div>
          <h1 className="hero-title">
            Level Up Your <span className="gradient-text">Coding Journey</span>
          </h1>
          <p className="hero-subtitle">
            Master Data Structures, ace technical interviews, and compete with top student developers. The ultimate platform to make you industry-ready.
          </p>
          <div className="hero-ctas flex-center">
            <Link to="/problems" className="btn btn-primary btn-lg">
              Start Practicing <ChevronRight size={20} />
            </Link>
            <Link to="/contests" className="btn btn-outline btn-lg">
              Join Contest
            </Link>
          </div>
        </div>

        {/* Floating Icons Animation (CSS) */}
        <div className="floating-icons">
          <Terminal size={40} className="float-icon icon-1" />
          <Brain size={40} className="float-icon icon-2" />
          <Trophy size={40} className="float-icon icon-3" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="text-center section-header">
            <h2>Why choose <span className="gradient-text">DevArena?</span></h2>
            <p className="text-secondary">Everything you need to crack your dream job</p>
          </div>
          
          <div className="grid-cols-3">
            <div className="feature-card glass-panel">
              <div className="icon-wrapper bg-primary">
                <Code2 size={28} />
              </div>
              <h3>Curated Problems</h3>
              <p>Practice 1000+ company-wise questions from easy to hard levels with brilliant editorials.</p>
            </div>
            <div className="feature-card glass-panel">
              <div className="icon-wrapper bg-accent">
                <Briefcase size={28} />
              </div>
              <h3>Placement Sprints</h3>
              <p>Take dedicated assessments designed exactly like real technical interview rounds of top companies.</p>
            </div>
            <div className="feature-card glass-panel">
              <div className="icon-wrapper bg-secondary">
                <Trophy size={28} />
              </div>
              <h3>Live Contests</h3>
              <p>Compete globally, increase your rating, and win certifications and exclusive swag.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Re-importing Code2 because missed in destructure
import { Code2 } from 'lucide-react';

export default Home;
