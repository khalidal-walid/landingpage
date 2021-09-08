import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

function Timeline() {
  return (
    <div className='timeline-container'>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Problem and Solution Validation</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
          {/* <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">One of the contenders Malaysian Global Innovation Centre University Startup Challenge 2021 </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
          {/* <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Company Incorporation</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
          {/* <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
