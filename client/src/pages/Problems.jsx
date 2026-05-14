import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronRight, BarChart2 } from 'lucide-react';
import './Problems.css';

const MOCK_PROBLEMS = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', acceptance: '56.2%', topic: 'Arrays' },
  { id: 2, title: 'Add Two Numbers', difficulty: 'Medium', acceptance: '42.1%', topic: 'Linked List' },
  { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', acceptance: '34.5%', topic: 'Strings' },
  { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: '23.8%', topic: 'Arrays' },
  { id: 5, title: 'Valid Parentheses', difficulty: 'Easy', acceptance: '59.8%', topic: 'Strings' },
  { id: 6, title: 'Merge k Sorted Lists', difficulty: 'Hard', acceptance: '28.1%', topic: 'Linked List' },
];

const TOPICS = ['All', 'Arrays', 'Strings', 'Linked List', 'Trees', 'Graphs', 'DP', 'OOP'];

const Problems = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProblems = MOCK_PROBLEMS.filter(p => {
    return (filter === 'All' || p.topic === filter) && 
           (p.title.toLowerCase().includes(search.toLowerCase()));
  });

  return (
    <div className="problems-page container section">
      <div className="problems-header flex-between">
        <div>
          <h2>Coding Problems</h2>
          <p className="text-secondary">Master algorithms and data structures</p>
        </div>
        
        <div className="stats-cards flex-center">
          <div className="stat-card glass-panel flex-center">
            <BarChart2 className="text-easy" />
            <div>
              <h4>Easy</h4>
              <span>2/50</span>
            </div>
          </div>
          <div className="stat-card glass-panel flex-center">
            <BarChart2 className="text-medium" />
            <div>
              <h4>Medium</h4>
              <span>0/120</span>
            </div>
          </div>
          <div className="stat-card glass-panel flex-center">
            <BarChart2 className="text-hard" />
            <div>
              <h4>Hard</h4>
              <span>0/45</span>
            </div>
          </div>
        </div>
      </div>

      <div className="filters-section flex-between glass-panel">
        <div className="search-bar flex-center">
          <Search size={20} className="text-secondary" />
          <input 
            type="text" 
            placeholder="Search problems..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="topic-filters flex-center">
          <Filter size={20} className="text-secondary" />
          {TOPICS.map(topic => (
            <button 
              key={topic} 
              className={`filter-btn ${filter === topic ? 'active' : ''}`}
              onClick={() => setFilter(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      <div className="problems-table glass-panel">
        <div className="table-header">
          <div>Status</div>
          <div>Title</div>
          <div>Topic</div>
          <div>Acceptance</div>
          <div>Difficulty</div>
          <div></div>
        </div>
        
        <div className="table-body">
          {filteredProblems.map((p) => (
            <Link to={`/problems/${p.id}`} className="table-row" key={p.id}>
              <div className="status-col">
                <span className={`status-circle ${p.id === 1 ? 'solved' : 'unsolved'}`}></span>
              </div>
              <div className="title-col font-bold">{p.title}</div>
              <div className="topic-col"><span className="tag">{p.topic}</span></div>
              <div className="acc-col">{p.acceptance}</div>
              <div className={`diff-col text-${p.difficulty.toLowerCase()}`}>{p.difficulty}</div>
              <div className="action-col">
                <ChevronRight className="text-secondary" />
              </div>
            </Link>
          ))}
          {filteredProblems.length === 0 && (
            <div className="empty-state text-center text-secondary p-5">
              No problems found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Problems;
