import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const URL = 'http://localhost:3001/api/skills';
  //eventually Heroku url will go here
  const [state, setState] = useState({
    skills: [],
    newSkill: {
      skill: "",
      level: "3"
    }
  });

  async function getSkills() {
      const response = await fetch(URL);
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        skills: data
  }))
  }


  function handleSubmit(event) {
    event.preventDefault();
    setState((prevState) => ({
      skills: [...prevState.skills, state.newSkill],
      newSkill: { skill: "", level: "3" }
    }));
  }

  function handleChange(event) {
    setState(function (prevState) {
      return {
        ...prevState,
        newSkill: {
          ...prevState.newSkill,
          [event.target.name]: event.target.value
        }
      };
    });
  }
  
  useEffect(() =>{
    getSkills();
  }, [])
  
  return (
    <section>
      <h2>DEV SKILLS</h2>
      <hr />
      {state.skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          <span>SKILL</span>
          <input
            name="skill"
            value={state.newSkill.skill}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>LEVEL</span>
          <select
            name="level"
            value={state.newSkill.level}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button>ADD SKILL</button>
      </form>
    </section>
  );
}