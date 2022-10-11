import Accordion from 'react-bootstrap/Accordion';

function Blog() {
  return (
    <Accordion defaultActiveKey="0" className='container mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the purpose of react router?</Accordion.Header>
        <Accordion.Body>
        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does the context api work?</Accordion.Header>
        <Accordion.Body>
        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is useref hook in react?</Accordion.Header>
        <Accordion.Body>
        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  );
}

export default Blog;