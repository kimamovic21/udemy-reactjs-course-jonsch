import React from 'react';
import Skill from './Skill';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "TailwindCSS",
    level: "intermediate",
    color: "#60DAFB"
  },
  {
    skill: "React JS",
    level: "beginner",
    color: "#FF3B00"
  }
];

const SkillList = () => {
    return (
        <div className='skill-list'>
            {skills.map((skill) => {
                return (
                    <Skill 
                        skill={skill.skill}
                        color={skill.color}
                        level={skill.level}
                    />
                )
            })}
        </div>
    );
};

export default SkillList;