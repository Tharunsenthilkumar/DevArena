import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Play, Send, Settings, BookOpen } from 'lucide-react';
import './CodeEditor.css';

const CodeEditorNode = () => {
  const { id } = useParams();
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Write your solution here\n\nfunction solve() {\n  \n}');

  return (
    <div className="editor-container">
      <div className="split-panel flex-row">
        {/* Left Panel: Problem Description */}
        <div className="problem-panel glass-panel">
          <div className="panel-header flex-between">
            <div className="flex-center" style={{gap: '0.5rem'}}>
              <BookOpen size={18} className="text-secondary" />
              <h3 className="m-0">Problem {id || '1'}</h3>
            </div>
            <span className="text-easy">Easy</span>
          </div>
          
          <div className="panel-content">
            <h1>Two Sum</h1>
            <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to target.</p>
            <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
            
            <div className="example-block">
              <strong>Example 1:</strong>
              <pre>
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              </pre>
            </div>
            
            <div className="constraints-block">
              <strong>Constraints:</strong>
              <ul>
                <li><code>2 &lt;= nums.length &lt;= 10^4</code></li>
                <li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel: Code Editor */}
        <div className="code-panel">
          <div className="panel-header flex-between glass-panel mb-2">
            <select 
              className="lang-select" 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
            
            <div className="flex-center" style={{gap: '1rem'}}>
              <Settings size={18} className="text-secondary" style={{cursor: 'pointer'}} />
            </div>
          </div>

          <div className="editor-wrapper glass-panel">
            <Editor
              height="100%"
              theme="vs-dark"
              language={language}
              value={code}
              onChange={(val) => setCode(val)}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: 'Fira Code',
                padding: { top: 16 }
              }}
            />
          </div>

          <div className="editor-actions flex-between mt-2">
            <button className="btn btn-outline" style={{background: 'rgba(19, 26, 42, 0.7)'}}>
              Console
            </button>
            <div className="flex-center" style={{gap: '1rem'}}>
              <button className="btn btn-outline flex-center">
                <Play size={16} /> Run Code
              </button>
              <button className="btn btn-primary flex-center">
                <Send size={16} /> Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorNode;
