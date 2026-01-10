import React from 'react';

const ReviewJobDescription = ({ selectedRole, selectedSkills, selectedLocation, selectedJobType, setSelectedJobType, atsScore, experienceRange, rawJD, onEdit, onSave, onAddSkill }) => {

    const roleDisplay = selectedRole ? selectedRole.label : "Not Specified";
    const locationDisplay = selectedLocation ? selectedLocation.label : "Not Specified";
    const skillList = selectedSkills || [];

    return (
        <div className="review-container" style={{
            padding: '40px',
            height: '100%',
            overflow: 'hidden', /* Disable scroll */
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* Header */}
            <div className="review-header" style={{ marginBottom: '24px', width: '100%', maxWidth: '800px' }}>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '8px' }}>
                    Dashboard › New Job Posting › <span style={{ color: 'white' }}>Review Job Description</span>
                </div>
                <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Review Job Description</h1>
                <div style={{ color: '#94a3b8', fontSize: '14px' }}>Confirm the details below before saving the job posting.</div>
            </div>

            {/* Main Review Card */}
            <div className="review-card" style={{
                background: '#1e293b',
                borderRadius: '16px',
                border: '1px solid #334155',
                padding: '32px',
                position: 'relative',
                width: '100%',
                maxWidth: '800px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>

                {/* Top Section: Summary & ATS */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', borderBottom: '1px solid #334155', paddingBottom: '24px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                            <h2 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>Parsed Summary</h2>
                            <span style={{ fontSize: '10px', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', padding: '4px 8px', borderRadius: '4px', fontWeight: '600', letterSpacing: '0.5px' }}>READY TO SAVE</span>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Please verify the extracted information below.</p>
                    </div>

                    {/* ATS Circle */}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ATS COMPATIBILITY</div>
                        <div style={{
                            background: '#0f172a',
                            padding: '8px 16px',
                            borderRadius: '12px',
                            border: '1px solid #334155',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{
                                width: '40px', height: '40px',
                                borderRadius: '50%',
                                background: `conic-gradient(#818cf8 ${atsScore}%, #334155 0)`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: '32px', height: '32px',
                                    background: '#0f172a',
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '11px', fontWeight: '700'
                                }}>{atsScore}%</div>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>Excellent</div>
                                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Score</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Details */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                    {/* Role */}
                    <div className="review-field">
                        <label style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>ROLE</label>
                        <div style={{ background: '#0f172a', padding: '12px 16px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="material-icons" style={{ color: '#818cf8', fontSize: '18px' }}>work</span>
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>{roleDisplay}</span>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="review-field">
                        <label style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>LOCATION</label>
                        <div style={{ background: '#0f172a', padding: '12px 16px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="material-icons" style={{ color: '#a855f7', fontSize: '18px' }}>place</span>
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>{locationDisplay}</span>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="review-field">
                        <label style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>EXPERIENCE</label>
                        <div style={{ background: '#0f172a', padding: '12px 16px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="material-icons" style={{ color: '#3b82f6', fontSize: '18px' }}>timeline</span>
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>{experienceRange.min} - {experienceRange.max} Yrs</span>
                        </div>
                    </div>

                    {/* Job Type */}
                    <div className="review-field">
                        <label style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>JOB TYPE</label>
                        <div style={{ background: '#0f172a', padding: '12px 16px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="material-icons" style={{ color: '#ec4899', fontSize: '18px' }}>schedule</span>
                            <select
                                value={selectedJobType}
                                onChange={(e) => setSelectedJobType(e.target.value)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    width: '100%'
                                }}
                            >
                                <option value="Full-time" style={{ background: '#1e293b' }}>Full-time</option>
                                <option value="Intern" style={{ background: '#1e293b' }}>Intern</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="review-field" style={{ marginBottom: '32px' }}>
                    <label style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>SKILLS</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {skillList.map(role => (
                            <span key={role.id} style={{
                                background: '#0f172a',
                                border: '1px solid #1e40af', // Blue border
                                padding: '6px 16px', // Slightly larger padding
                                borderRadius: '6px',
                                fontSize: '13px',
                                fontWeight: '500',
                                color: '#e2e8f0',
                                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' // Blue shadow at edges
                            }}>
                                {role.label}
                            </span>
                        ))}
                        <span
                            onClick={onAddSkill}
                            style={{
                                border: '1px dashed #475569',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                fontSize: '13px',
                                color: '#64748b',
                                cursor: 'pointer'
                            }}>+ Add</span>
                    </div>
                </div>

                {/* Footer Actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid #334155' }}>
                    <button
                        onClick={onEdit}
                        style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        <span className="material-icons" style={{ fontSize: '16px' }}>arrow_back</span> Back to Edit
                    </button>

                    <button
                        onClick={onSave}
                        className="btn-primary"
                        style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        <span className="material-icons" style={{ fontSize: '18px' }}>save</span> Save Description
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewJobDescription;
