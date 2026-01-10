import React from 'react';

const PasteDescription = ({ rawJD, setRawJD }) => {
    return (
        <div className="jd-card">
            <div className="card-header">
                <div className="card-title">
                    <div className="card-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#c084fc' }}>
                        <span className="material-icons" style={{ fontSize: '18px' }}>content_paste</span>
                    </div>
                    Paste Description
                    <span className="sub-label">Auto-parsing enabled</span>
                </div>
                <div className="toggle-switch">
                    <span className="toggle-option active">Raw</span>
                    <span className="toggle-option">Parsed</span>
                </div>
            </div>

            <textarea
                className="text-editor"
                placeholder="Paste your raw job description here (Ctrl+V)..."
                value={rawJD}
                onChange={(e) => setRawJD(e.target.value)}
            ></textarea>

            <div className="auto-tags-section">
                <div className="auto-label">AUTO-DETECTED TAGS</div>
                <div className="auto-tags">
                    <span className="tag-pill ai-active">
                        <span className="dot"></span> AI Active
                    </span>
                    <span className="tag-pill blue">Bachelors Degree</span>
                    <span className="tag-pill purple">React.js</span>
                    <span className="tag-pill dashed">+ Add Tag</span>
                </div>
            </div>
        </div>
    );
};

export default PasteDescription;
