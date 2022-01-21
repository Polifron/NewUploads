import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from 'semantic-ui-react';

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(s => !s);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 50) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "... read more" : " show less"}
            </span>
        </p>
    );
};

const ShowMore = ({ children }) => {
    const [showMore, setShowMore] = useState(true);
    const tasks = children;
    const [unit, setUnit] = useState("Down");
    const toggleShowMore = () => {
        setShowMore(s => !s);
        showMore ? setUnit("Up") : setUnit("Down");
    }
    return (
        <div>
            <button className="showMore" onClick={toggleShowMore}> {unit}</button>
            <p className="taks">
                {showMore ? "" : tasks}
            </p>

        </div>
    );
};

const SetingsDropDown = ({ children }) => {
    const [isDropDown, setDropDown] = useState(true);
    const setingsDrop = children;
    const toggleSettingDrop = () => {
        setDropDown(s => !s);
    }
    return (
        <div>
            <p onClick={toggleSettingDrop} className="settingsDropDown">...</p>
            <div className="settingsDropDownMenu">{isDropDown ? null : setingsDrop}</div>
        </div>
    )
}



const logo = require('./Avatar-PNG-Pic.png');


const Activity = () => {

    return (

        <Card>
            <CardHeader>
                <img className="avatar" src={logo} />
                <div className="rightHeader">
                    <div className="user__name">
                        Polifron ionut</div>
                    <p className="dateAdded"> At: 10-12-21 </p>
                </div>
                <SetingsDropDown className="settingsDropDown">
              
                        <p>Help</p>
                        <p>Post pone</p>
                        <p>Refuse</p>
                </SetingsDropDown>


                <div className="activityTitle">
                    Do your job motherfuker!
                </div>
            </CardHeader>
            <CardContent>
                <div className="description">
                    <ReadMore>
                        GeeksforGeeks: A Computer Science portal for geeks.
                        It contains well written, well thought and well explained
                        computer science, programming articles and quizzes.
                        It provides a variety of services for you to learn, so thrive
                        and also have fun! Free Tutorials, Millions of Articles, Live,
                        Online and Classroom Courses ,Frequent Coding Competitions,
                        Webinars by Industry Experts, Internship opportunities, and Job
                        Opportunities. Knowledge is power!
                    </ReadMore>
                </div>

                <div className="task_footer">
                    <p>Tasks <span>3/12</span></p>
                    <p>Due to: 10-02-22</p>
                </div>

                <ShowMore>
                    <div className="taskWarper">
                        <div>Task</div>
                        <input type="checkbox" />
                    </div>
                    <div className="taskWarper">
                        <div>Task</div>
                        <input type="checkbox" />
                    </div>
                    <div className="taskWarper">
                        <div>Task</div>
                        <input type="checkbox" />
                    </div>
                </ShowMore>
            </CardContent>

        </Card>
    );
}

export default Activity;