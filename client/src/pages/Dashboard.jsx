import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, 
  Title, Tooltip, Legend, ArcElement 
} from 'chart.js';
import { Flame, CheckCircle, Target, Award } from 'lucide-react';
import './Dashboard.css';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend
);

const Dashboard = () => {
  // Mock Data for Charts
  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Problems Solved',
      data: [2, 5, 3, 6, 8, 4, 10],
      borderColor: '#6366F1',
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      tension: 0.4,
      fill: true
    }]
  };

  const lineOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8' } },
      x: { grid: { display: false }, ticks: { color: '#94A3B8' } }
    }
  };

  const doughnutData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [{
      data: [45, 30, 5],
      backgroundColor: ['#10B981', '#F59E0B', '#EF4444'],
      borderWidth: 0,
      hoverOffset: 4
    }]
  };

  const doughnutOptions = {
    cutout: '75%',
    plugins: {
      legend: { position: 'bottom', labels: { color: '#fff' } }
    }
  };

  return (
    <div className="container section dashboard">
      <div className="dash-header flex-between mb-4">
        <div>
          <h2>Welcome back, <span className="gradient-text">Alex!</span> 👋</h2>
          <p className="text-secondary">Here's your progress for this week.</p>
        </div>
        <div className="streak-badge glass-panel flex-center">
          <Flame color="#F59E0B" size={24} />
          <div>
            <div className="font-bold">14 Day Streak</div>
            <small className="text-secondary">Keep it up!</small>
          </div>
        </div>
      </div>

      <div className="dash-grid">
        {/* Left Column */}
        <div className="dash-col-main">
          {/* Top Stat Cards */}
          <div className="stat-cards-row">
            <div className="dash-stat-card glass-panel flex-center">
              <div className="icon-wrapper" style={{background: 'rgba(16, 185, 129, 0.2)', color: '#10B981'}}>
                <CheckCircle />
              </div>
              <div>
                <div className="text-secondary">Total Solved</div>
                <h3>80 <small>/ 1000</small></h3>
              </div>
            </div>
            <div className="dash-stat-card glass-panel flex-center">
              <div className="icon-wrapper" style={{background: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8'}}>
                <Target />
              </div>
              <div>
                <div className="text-secondary">Acceptance Rate</div>
                <h3>64.2%</h3>
              </div>
            </div>
            <div className="dash-stat-card glass-panel flex-center">
              <div className="icon-wrapper" style={{background: 'rgba(139, 92, 246, 0.2)', color: '#8B5CF6'}}>
                <Award />
              </div>
              <div>
                <div className="text-secondary">Global Rank</div>
                <h3>#4,205</h3>
              </div>
            </div>
          </div>

          {/* Activity Graph */}
          <div className="glass-panel chart-container mt-4">
            <h4 className="mb-2">Activity Overview</h4>
            <div style={{height: '250px'}}>
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>

          {/* Recommended Problems */}
          <div className="glass-panel mt-4 recommended-section">
            <h4 className="mb-2">Recommended for You</h4>
            <div className="rec-list">
              <div className="rec-item flex-between">
                <div>
                  <div className="font-bold">Reverse Linked List</div>
                  <small className="text-secondary">Linked List • Companies: Amazon, Microsoft</small>
                </div>
                <button className="btn btn-outline" style={{padding: '0.4rem 1rem'}}>Solve</button>
              </div>
              <div className="rec-item flex-between">
                <div>
                  <div className="font-bold">Binary Tree Level Order Traversal</div>
                  <small className="text-secondary">Trees • Companies: Google, Facebook</small>
                </div>
                <button className="btn btn-outline" style={{padding: '0.4rem 1rem'}}>Solve</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="dash-col-side">
          <div className="glass-panel chart-container">
            <h4 className="mb-2 text-center">Difficulty Breakdown</h4>
            <div style={{height: '200px', display: 'flex', justifyContent: 'center'}}>
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>

          <div className="glass-panel mt-4 skill-progress">
            <h4 className="mb-4">Skill Progress</h4>
            
            <div className="skill-item">
              <div className="flex-between mb-1">
                <span>Arrays & Hashing</span>
                <span>85%</span>
              </div>
              <div className="progress-bar"><div className="fill" style={{width: '85%', background: '#6366F1'}}></div></div>
            </div>

            <div className="skill-item mt-3">
              <div className="flex-between mb-1">
                <span>Dynamic Programming</span>
                <span>30%</span>
              </div>
              <div className="progress-bar"><div className="fill" style={{width: '30%', background: '#F59E0B'}}></div></div>
            </div>

            <div className="skill-item mt-3">
              <div className="flex-between mb-1">
                <span>Graphs</span>
                <span>45%</span>
              </div>
              <div className="progress-bar"><div className="fill" style={{width: '45%', background: '#8B5CF6'}}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
