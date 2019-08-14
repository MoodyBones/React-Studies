# React-Scrimba

{JavaScript} in JSX

surround JavaScript in {}

    ES6
    <h1>Hello {`${firstName} ${lastName}`}!</h1>
    
    old JS
    <h1>Hello {firstName + " " + lastName}!</h1>
    
    e.g.
    function App() {
      const firstName = "Bob"
      const lastName = "Ziroll"
    	return (
        <h1>Hello {`${firstName} ${lastName}`}!</h1>
      )
    }
    
    function App() {
      const date = new Date()
      
      return (
        <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
      )
    }
    

    function App() {
      const date = new Date()
      const hours = date.getHours()
      let timeOfDay
      
      if (hours < 12) {
        timeOfDay = "morning"
      } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
      } else {
        timeOfDay = "night"
      }
      
      return (
        <h1>Good {timeOfDay}!</h1>
      )
    }

React Inline styles

store as an object, surround in {}

can save as a variable to keep it cleaner

no - 

use camelCase instead..

fontSize

can emit pixels

make into a string where necessary

    const styles = {
        color: "#FF8C00", 
        backgroundColor: "#FF2D00",
        fontSize: 24,
    		
      }
      
      return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
      )

props modify how the component acts

similar to html tags

    <p style={{display: props.jokes.q ? "block" : "none"}}>

ternary operator

if empty display none

or more concise way..

    <h3 style={{display: !props.question && "none"}}>

if there isn't(!) a question, then display none

in reality, most of the data you'll be displaying on the page will be actually be coming from some http call to an API

where there is a server that holds a database

and that database and server are returning json data to you

React helps you become better JavaScript developers

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const doubled = nums.map(function(num) {
    	return num * 2
    })
    console.log(doubled)
    
    
    
    // or condensed in ES6
    
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const doubled = nums.map(num => num * 2)
    console.log(doubled) 

Higher Order Array Methods

Methods called on an Array that have a function as a parameter

& allow you (the developer) to decide exactly what should happen to the elements in the array.

Are key component of functional programming in JavaScript

study:

Map

Filter

Reduce

read up on

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

    /* 
    Given a list of products (as an array of objects, as seen in productsData.js)
    render a <Product /> component (which you'll also need to create) for each
    product in the list.
    
    Make sure to use the array's `.map()` method to create these components, and 
    don't forget to pass a `key` prop to it to avoid the warning.
    */
    
    import React from "react"
    import Product from "./Product"
    import productsData from "./vschoolProducts"
    
    function App() {
        const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
        
      return (
        <div>
            {productComponents}
        </div>
      )
    }
    
    export default App

Use toLocaleString to display as currency

    import React from "react"
    
    function Product(props) {
        return (
            <div>
                <h2>{props.product.name}</h2>
                <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
            </div>
        )
    }
    
    export default Product

Class-based Components

it is setting up a prototype with React.Component

basically this gives a bunch of pre-written React goodies :)

Every class based component needs AT LEAST ONE METHOD..

and that method is...        render()

and render will return exactly what we have in our functional component

If you have any code that determines the display logic,

(what exactly will show up on the page, or what the style of that page will be), 

Put it inside the render method, before the return.

when using a class based component you must use {this.props}

    class App extends React.Component {
    
    	yourMethodHere() {
    
    	}
    
    	render() {
    		const style = this.yourMethodHere()
    		const date = new Date();
    		return (
    	    <div>
    	      <h1>{this.props.whatever}</h1>
          </div>
    	  )
    	}	
    }

    /*
    
    Challenge:
    1. Convert all 3 components to be class-based
    2. Fix the small bug
    
    */
    
    import React, {Component} from "react"
    import ReactDOM from "react-dom"
    
    // #1
    class App extends React.Component {
        render() {
            return (
                <div>
                    <Header username='MoodyBones' />
                    <Greeting />
                </div>
            )
        }
    }
    
    // #2
    
    class Header extends React.Component {
        render() {
            return (
                <header>
                    <p>Welcome, {this.props.username}!</p>
                </header>
            )
        }
    }
    
    // #3
    class Greeting extends Component {
        render() {
    	    const date = new Date()
    	    const hours = date.getHours()
    	    let timeOfDay
    	
    			if (hours < 12) {
    	            timeOfDay = "morning"
    	        } else if (hours >= 12 && hours < 17) {
    	            timeOfDay = "afternoon"
    	        } else {
    	            timeOfDay = "night"
    	    }        
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
        }
    }
    
    ReactDOM.render(<App />, document.getElementById("root"))

PROPS

one way to pass data from one component to another component

Don't forget to pass down props!!!!

can not be changed by the component receiving the props

props are immutable/unchangeable

you cant change props

STATE

one of the most important concepts in React

another way to pass data from one component to another component

It is simply the data that a component maintains, it can change it's value

!!

State is a way that a component can maintain is own data and change it, if it needs to

If you want use State, it must be a class based component,

AND have the constructor() method

The constructor is a place where you initialise some values

constructor() {}

FIRST call the global function... super()

Super goes to the parent class and accesses the goodies, so that we can use them

State will always be an object 

this.state = {}

you have intial data in the object that can changed later

this.state = {

answer: 'Yes'

}

    class App extends React.Component {
    	constructor() {
    		super()
    		this.state = {
    			answer: 'Yes'
    		}
    	}
    
    	render() {
    		return(
    			<div>
    	      <h1>Is state important to know? {this.state.answer}</h1>
          </div>
    		) 
    	}
    }
    export default App

IMPORTANT

We can pass State down to a child

and to do that, we must use props!!

    <ChildComponent answer={this.state.answer} />

!!!!!!!!!!!!!!!!!!! and the cool thing about React is....

If we use setState to change the state, 

React will automatically update every child component, that is receiving parts of that state

Changing the state will change how things are displayed on the screen

    import React from "react"
    
    // Challenge:
    // Given an incomplete class-based component without a constructor, 
    // add a constructor and initialize state to fix the broken component.
    
    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                name: 'Mel',
                age: 33
            }
        }
        render () {
            return (
                <div>
                    <h1>{this.state.name}</h1>
                    <h3>{this.state.age} years old</h3>
                </div>
            ) 
        }
             
    }
    
    export default App

    import React from 'react'
    
    class App extends React.Component {
    	constructor() {
    		super()
    		this.state = {
    			isLoggedIn: true
    		}
    	}
    	render() {
    		let statusWord
    // because it's a boolean you can remove === true
    //	if (this.state.isLoggedIn === true) {
    		if (this.state.isLoggedIn) {
    			statusWord = 'in'
    		} else {
    			statusWord = 'out'
    		}
    		return (
    			<div>
    				<h1>You are currently Logged {statusWord}</h1>
    			</div>
    		)
    	}
    }
    
    export default App

    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                todos: todosData
            }
        }
        render () {
            const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
            
            return (
                <div className="todo-list">
                    {todoItems}
                </div>
            )
        }
        
    }

!!!!!!

Event Handling

In React all event handlers will be JavaScript

use camelCase

pass in an anonymous function always!!!

    <button onClick={() => console.log("I was clicked!")}>Click me</button>
    
    or
    handleClick() => {
    		console.log("I was clicked!"
    }
    <button onClick={handleClick}>Click me</button>

allows the user to interact with your website, and do something specific (e.g. click or hover) happens

[https://reactjs.org/docs/events.html#supported-events](https://reactjs.org/docs/events.html#supported-events)

    function handleClick() {
        console.log("I was clicked")
    }
    
    function App() {
        return (
            <div>
                <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
                <br />
                <br />
                <button onClick={handleClick}>Click me</button>
            </div>
        )
    }
    
    export default App

**Never directly modify the original state!!**

**use setState() method instead**

Any time you create a class method, where you want to use setState,

you must bind the method to the class!

Bind it inside the constructor

    this.handleClick = this.handleClick.bind(this)

it makes sure that the handleClick method is bound to the context of this as it exists with this class

    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
            this.handleClick = this.handleClick.bind(this)
        }
        
        handleClick() {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        
        render() {
            return (
                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.handleClick}>Change!</button>
                </div>
            )
        }
    }

when the method is part of the class it must reference using **this**
e.g. {**this**.handleClick}

    <button onClick={this.handleClick}>Change!</button>

setState can take an object literal 

(a new version of state, that we want to pass to it)

    this.setState({ count: 1 })

or if we care about the current state, use a function

    this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })

In React anytime a state changes, if there is a child component thats receiving a props with that state, it will trigger a re-render of the child component, or if it's a functional component it will run the function again.

So component will receive the new props

Exercise.

try adding a button that will double the number

and one that will halve the number

    import React from 'react'
    
    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
            this.handleClick = this.handleClick.bind(this)
            this.handleDouble = this.handleDouble.bind(this)
            this.handleHalved = this.handleHalved.bind(this)
        }
        
        handleClick() {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        handleDouble() {
            this.setState(prevState => {
                return {
                    count: prevState.count + prevState.count
                }
            })
        }
        handleHalved() {
            this.setState(prevState => {
                return {
                    count: prevState.count / 2
                }
            })
        }
        
        render() {
            return(
                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.handleClick}>Add 1!</button>
                    <button onClick={this.handleDouble}>Double it!</button>
                    <button onClick={this.handleHalved}>Halve it!</button>
                </div>
            )
        }
    }
    export default App

Exercise

React Todo App Phase 6

App.js

    /**
     * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
     * This challenge is a little more involved than some of the past ones. Check the comments 
     * in the code for some help on accomplishing this one
     * 
     * Challenge: 
     * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
     *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
     * 2. Pass the method down to the TodoItem component
     * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
     */
    
    import React from "react"
    import TodoItem from "./TodoItem"
    import todosData from "./todosData"
    
    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                todos: todosData
            }
            this.handleChange = this.handleChange.bind(this)
        }
        
        handleChange(id) {
    				this.setState(prevState => {
    					const updatedTodos = prevState.todos.map(todo => {
    						if (todo.id === id) {
    							todo.completed = !todo.completed
    						}
    						return todo
    					})
    					return {
    						todos: updatedTodos
    					}
    				})
    
            //console.log("Changed", id)
        }
        
        render() {
            const todoItems = this.state.todos.map(item => 
    					<TodoItem 
    						key={item.id} 
    						item={item}
    						handleChange={this.handleChange}
    					/>
    				)
            
            return (
                <div className="todo-list">
                    {todoItems}
                </div>
            )    
        }
    }
    
    export default App

TodoItem.js

    import React from "react"
    
    function TodoItem(props) {
        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={props.item.completed} 
                    onChange={(event) => props.handleChange(props.item.id)}
                />
                <p>{props.item.text}</p>
            </div>
        )
    }
    
    export default TodoItem

Events when they fire, they receive an event property

so it's not enough to just use 

    //wrong
    onChange{props.handleChange}

because it wont receive an id property, it will receive the event object instead

instead make it a function that calls handleChange and passes whatever properties i want (props.item.id) into it

    onChange{() => props.handleChange(props.item.id)}

When Updating the State & Dealing with an Array

because we are saving an array in our state, 

and we never want to modify a state directly

we cant simply loop through the array and finding the item that matches with the id, and flipping it, because it will change the state!

NEVER MODIFY THE STATE DIRECTLY

instead do the same thing but return a brand new array

and all the items will be almost exactly the same except one item will have changed its completed item from true/false

use map!!!

map()

returns a brand new array!!!

it loops over the array looking for something

and returns it in new array

to review see 

React Todo App Phase 6

/////////////////////////

// [https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

[https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes)

Lifecycle Methods

render() {}

its like getting dressed for the day

its job is to determine exactly what gets rendered to the screen, which is what is displayed to the world

it can be called many times

similarly to changing your clothes throughout the day, dependant what you're about to do

componentDidMount() {}

like saying you were just born

the very first time the component shows up, React will run componentDidMount

it will only run once

commonly used for an API call, when you need to get data from an external source

UNSAFE_componentWillReceiveProps() {}

is like when someone gives you a gift

it's receiving props from a parent component

and everytime its receiving props it will run the componentWillReceiveProps method

it will run everytime the component is mounted and everytime the parent decides to hand props to a child

e.g. if a parent decides to change the props its passing down, something we can do inside of componentWillReceiveProps is to check if the incoming props are different from the existing props, often we say if theyre not different do nothing, and if they are different run some calculation or state to set

it take a parameter called (nextProps)

    	UNSAFEcomponentWillReceiveProps(nextProps) {
            if (nextProps.whateverProperty !== this.props.whateverProperty) {
                // do something important here
            }
        }

this is one of the lifecycle method that is deprecated in React 16.3

until React 17 comes out it's been rename..

    UNSAFE_componentWillReceiveProps(nextProps)

shouldComponentUpdate() {}

this is like making a decision as to whether or not you should change your clothes

behind the scenes if anyone has any question about re-rendering a component, it will always choose to re-render just incase, without any logic to your apps needs

sometimes React will re-render even if nothing has changed. That can be an expensive or slow operation, if you let that to happen to every single component in a large application.

shouldComponentUpdate gives us a chance to optimise our app. Put in logic that allows the app to determine whether or not to its important to think about updating.

takes parameters (nextProps, nextState)

    shouldComponentUpdate(nextProps, nextState) {
            // return true if want it to update
            // return false if not
        }

returning false will make your app more performant, but make sure you really dont want it to update or you may get some weird bugs that are difficult to debug

componentWillUnmount() {}

like all good things in life, your component will come to and end and will eventually unmount (disappear) from the screen

the main use case is to do a cleanup or teardown of something you set up that could potential lead to clutter in the DOM or your application

a common use case is if in componentDidMount you had an event listener, like if something happened everytime you scrolled. This a chance to remove the event listener

    componentWillUnmount() {
            // teardown or cleanup your code before your component disappears
            // (e.g remove event listener)
        }

getDerivedStateFromProps() {}

    static getDerivedStateFromProps(props, state) {
    	// return the new, updated state based upon the props
    }

its a static method, so static must be included

https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

React has written a blog post about how you don't need to use derived state, because it alot of the time it's been misused and caused weird bugs or performance issues

more info on it here

[https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)

getSnapshotBeforeUpdate() {}

    getSnapshotBeforeUpdate() {
    		
    }

allows you to create a backup of the ways that current things are

probably an object with multiple points of data inside it

it's not a super common method

more info here

[https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)

//////////////

React Conditional render

Conditional.js

    import React from 'react'
    
    function Conditional(props) {
    	if(props.isLoading === true) {
    		return (
    			<h1>Loading...</h1>
    		)
    	} else {
    		return (
    			<h1>A Heading about Conditional Rendering</h1>
    		)
    	}
    }
    
    //can also be written without the else statement
    function Conditional(props) {
    	if(props.isLoading === true) {
    		return (
    			<h1>Loading...</h1>
    		)
    	} 
    	return (
    		<h1>A Heading about Conditional Rendering</h1>
    	)
    }
    
    //OR WITH A TERNARY OPERATOR
    
    
    function Conditional(props) {
    	return (
    		<div>
    			props.isLoading === true ? <h1>Loading...</h1> : <h1>A Heading about Conditional Rendering</h1>
    		</div>
    	)
    }
    export default Conditional

=== true is not necessary

 

A TERNARY OPERATOR

condition ? statement if true : statement if false

more examples

the below navbar and footer will immediately render while the other is 'loading'

    function Conditional(props) {
        return (
            <div>
                <h1>Navbar</h1>
                
                {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
                
                <h1>Footer</h1>
            </div>
        )
        
    }

A better way would be to have App.js control it, and the keep Conditional.js simple

App.js

    import React, {Component} from "react"
    import Conditional from "./Conditional"
    
    class App extends Component {
        constructor() {
            super()
            this.state = {
                isLoading: true
            }
        }
        
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    isLoading: false
                })
            }, 1500)
        }
        
        render() {
            return (
                <div>
                    {this.state.isLoading ?
                    <h1>Loading...</h1> :
                    <Conditional />}
                </div>
            )
        }
    }
    
    export default App

Conditional.js

    import React from "react"
    
    function Conditional(props) {
        return <h1>Some cool stuff about conditional rendering</h1>
    }
    
    export default Conditional

&&

true && true

false && false

can be used to shorten ternarys

is the thing to the left of the && truthy? if yes then execute the stuff to the right 

    {
    this.state.unreadMessages.length > 0 && 
    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
    }
    
    //is the same as 
    {
    this.state.unreadMessages.length > 0 ? <h2>You have {this.state.unreadMessages.length} unread messages!</h2> 
    : null
    }
    
    //using && shorten the code when one of the result is null

///////////

Challenge 

App.js

    import React from "react"
    import LogInButton from './LogInButton'
    
    
    /*
    Challenge:
    
    Given a stateless functional component:
    1. Follow the steps necessary to add state to it,
        // class-based component
        // constructor method
    2. Have state keep track of whether the user is logged in or not
        // isLoggedIn: Boolean (true or false)
    3. Add a button that logs the user in/out
        // event listener (onClick)
        a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
            // Conditional Rendering
    4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
        // Conditional Rendering
    */
    
    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                isLoggedIn: true
            }
            // this.handleChange = this.handleChange.bind(this)
        }
        
        // handleChange() {
        //     this.setState(prevState => {
        //         const updatedLogIn = prevState.isLoggedIn.map(status => {
        //             if (prevState.isLoggedIn = status) {
        //                 isLoggedIn = !isLoggedIn
        //             }
        //             return status 
        //         })
        //         return {
        //             isLoggedIn: updatedLogIn
        //         }    
        //     })
            //     
            //         this.isLoggedIn === true
            //         ? isloggedIn = !isLoggedIn
            //         : <button>Log In</button>
            //         return status
            //     })
            //     return {
            //     isloggedIn: updatedLogIn
            //     }
            // })
        //     console.log('clicked', this.isLoggedIn)
        // }
        
        render () {
            return (
                <div>
                    <LogInButton isLoggedIn={this.state.isLoggedIn} />
                </div>
            )
        }
    }
    
    export default App

LogInButton.js

    import React from "react"
    import Conditional from './Conditional'
    
    
    class LogInButton extends React.Component {
        constructor() {
            super()
    				this.handleClick = this.handleClick.bind(this)
        }
        
        handleClick(){
    			this.setState(prevState => {
    				return (
    					isLoggedIn: !prevState.isLoggedIn
    				)
    			}) 
                 
                // make question conditional
                // have just one button
                // have method change whats on the button
            return(
                 console.log('clicked')
            )
        }
        render() {
            let buttonText = this.props.isLoggedIn ? 'Log Out'
            : 'Log In'
            
            return(
                <div>
                    {this.props.isLoggedIn ?
                    <h1>You are current logged in</h1> :
                    <Conditional />}
                    <button onClick={this.handleClick}>{buttonText}</button>
                </div>     
            )
        }
    }
    
    export default LogInButton

Conditional.js

    import React from 'react'
    
    
    function Conditional(props) {
        return <h1>Please click the button to Log in</h1>
    }
    
    
    export default Conditional

ANSWER

    import React from "react"
    
    /*
    Challenge:
    
    Given a stateless functional component:
    1. Follow the steps necessary to add state to it,
        // class-based component
        // constructor method
    2. Have state keep track of whether the user is logged in or not
        // isLoggedIn: Boolean (true or false)
    3. Add a button that logs the user in/out
        // event listener (onClick)
        a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
            // Conditional Rendering
    4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
        // Conditional Rendering
    */
    
    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                isLoggedIn: false
            }
            this.handleClick = this.handleClick.bind(this)
        }
        
        handleClick() {
            this.setState(prevState => {
                return {
                    isLoggedIn: !prevState.isLoggedIn
                }
            })
        }
        
        render() {   
            let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
            let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
            return (
                <div>
                    <button onClick={this.handleClick}>{buttonText}</button>
                    <h1>{displayText}</h1>
                </div>
            )
        }
    }
    
    export default App


componentDidMount() {}

is like a hook in our react component, that allows us to run some kind of code, immediately after the component first mounts to the DOM

its a lifecycle method

it's common use case is to get data from somewhere (an API)

 

fetch()

for http requests

a built in JavaScript tool

a promise based way

[https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

SWAPI

Star Wars API

[https://swapi.co/](https://swapi.co/)

it's cores enabled, which means, that there are no issues with our front end application getting data from there database

Promises

[https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

A promise an object that may produce a single value sometime in the future:

either a resolved value, or reason not to be resolved (e.g. a network error occured)

A promise maybe in 1 of 3 states:

fullfiled

rejected

pending

Promises users can attach callbacks to hanlde the fulfilled value or the reason for rejection

    componenDidMount() {
    	fetch('https://swapi.com/api/person/1')
    		.then(response => response.json())
    	//json turns it into  JavaScript file for us
    }

