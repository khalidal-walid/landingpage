import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

function Timeline() {
  return (
    <div className='timeline-container'>
      <VerticalTimeline className='.vertical-timeline'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ border: '1px solid  #00838a', color: '#000', borderRadius: '10px' }}
          contentArrowStyle={{ borderRight: '7px solid  #00838a' }}
          date="Jun 2021"
          iconStyle={{ background: '#00838a', color: '#fff', boxShadow: '0 0 0 4px #1a1a1a, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Problem and Solution Validation</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">June 2021</h4> */}
          {/* <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ border: '1px solid  #00838a', color: '#000', borderRadius: '10px' }}
          contentArrowStyle={{ borderRight: '7px solid  #00838a' }}
          date="July 2021"
          iconStyle={{ background: '#00838a', color: '#fff', boxShadow: '0 0 0 4px #1a1a1a, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">One of the contenders for Malaysian Global Innovation Centre University Startup Challenge 2021</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">July 2021</h4> */}
          {/* <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ border: '1px solid  #00838a', color: '#000', borderRadius: '10px' }}
          contentArrowStyle={{ borderRight: '7px solid  #00838a' }}
          date="August 2021"
          iconStyle={{ background: '#00838a', color: '#fff', boxShadow: '0 0 0 4px #1a1a1a, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Company Incorporation</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">August 2021</h4> */}
          {/* <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
