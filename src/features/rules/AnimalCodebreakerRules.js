import React, { useState } from 'react';
import './AnimalCodebreakerRules.css'; // Make sure the path matches your CSS file position

const AnimalCodebreakerRules = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="codebreaker-card">
      {/* Header Panel */}
      <div className="codebreaker-header">
        <h3 className="codebreaker-title">Rules</h3>
        <p className="codebreaker-subtitle">
          Crack the secret code using logic and deduction!
        </p>
        <button
          className="codebreaker-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Hide rules' : 'Show rules'}
        >
          {isOpen ? 'Hide' : 'Show'} Rules
        </button>
      </div>

      {/* Main Instructions Content */}
      <div className={`codebreaker-content ${!isOpen ? 'hidden' : ''}`}>
        <div className="codebreaker-intro-box">
          <p className="codebreaker-intro-text">
            Crack the secret code by finding the correct arrangement of animals.
            Every time you refresh, a brand-new puzzle is generated!
          </p>
        </div>

        <h2 className="codebreaker-heading">🎯 The Objective</h2>
        <div className="codebreaker-objective-card">
          <p className="codebreaker-paragraph">
            Each animal in the grid has two unique traits: a{' '}
            <strong>Name</strong> and a <strong>Color</strong>.
          </p>
          <p className="codebreaker-paragraph">
            To win, you must match the exact animal type and color in each
            column.
          </p>
        </div>

        <h2 className="codebreaker-heading">🔍 Decoding the Clues</h2>
        <p className="codebreaker-paragraph">
          After each guess, feedback circles indicate your progress:
        </p>

        <table className="codebreaker-table">
          <tbody>
            <tr className="codebreaker-row">
              <td className="codebreaker-badge-cell">
                <span className="codebreaker-badge">
                  <i className="FULL"></i> Green Circle
                </span>
              </td>
              <td className="codebreaker-cell">
                <strong>Perfect match!</strong> You have guessed the correct
                animal name and color in the right position.
              </td>
            </tr>
            <tr className="codebreaker-row">
              <td className="codebreaker-badge-cell">
                <span className="codebreaker-badge">
                  <i className="PARTIAL"></i> Yellow Circle
                </span>
              </td>
              <td className="codebreaker-cell">
                <strong>Close!</strong> You got either the correct name OR the
                correct color, but not both.
              </td>
            </tr>
            <tr className="codebreaker-row">
              <td className="codebreaker-badge-cell">
                <span className="codebreaker-badge">
                  <i className="NONE"></i> No Circle
                </span>
              </td>
              <td className="codebreaker-cell">
                <strong>Miss!</strong> Neither the animal name nor the color is
                correct for that spot.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="codebreaker-tip-box">
          <div className="codebreaker-tip-title">🏆 Strategy Tip</div>
          <p className="codebreaker-tip-content">
            Use the process of elimination! Pay close attention to your green
            and yellow circles to narrow down the correct combinations and solve
            the puzzle in record time.
          </p>
        </div>

        <div className="codebreaker-footer">
          Good luck, and happy guessing! 🚀
        </div>
      </div>
    </div>
  );
};

export default AnimalCodebreakerRules;
