const Header =(props)=>{
  return(
    <h1>{props.course}</h1>
  )
}
const Part1 =(props)=>{
  console.log(props)
  return (
    <p>
    {props.part1} {props.exercies1}
</p>
  )
}

const Part2 =(props)=>{
  console.log(props)  
  return (
    <p>
    {props.part2} {props.exercies2}
</p>
  )
}
const Part3 =(props)=>{
  console.log(props)  
  return (
    <p>
    {props.part3} {props.exercies3}
</p>
  )
}
const Content =(props)=>{
  console.log("props from content",props)
  return(
    <>
    <Part1 part1={props.part1} exercies1={props.exercies1}/>
    <Part2 part2={props.part2} exercies2={props.exercies2}/>
    <Part3 part3={props.part3} exercies3={props.exercies3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercies {props.exercies1 + props.exercies2 + props.exercies3}</p>
)
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React '
  const exercies1 = 10
  const part2='Using props to pass data'
  const exercies2 = 7
  const part3 = 'State of a component'
  const exercies3 = 14
  return (
    <>
    <Header course={course}/>
      <Content  exercies1={exercies1} exercies2={exercies2} exercies3={exercies3} part1={part1}  part2={part2}  part3={part3}/>
      <Total exercies1={exercies1} exercies2={exercies2} exercies3={exercies3} />
    </>
  )
}

export default App
