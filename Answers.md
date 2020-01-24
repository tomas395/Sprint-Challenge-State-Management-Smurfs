1. What problem does the context API help solve?

<!-- it's supposed to solve the prop drilling problem throughout your app. rather than pass props many levels deep, you can use context to pass it directly into the node you want.  -->

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

<!-- so starting with actions, they can pass data to a reducer through a payload. that reducer would then have an initialState and then the payload that was passed through would change that state based on what payload was dumped into it. the store houses the apps state and the single source of truth would mean in order to move on, the actions and reducer need to refer to the state in the store -->

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

<!-- the app's state is global, and your component state is local. component state lives within that specific component and it can only be updated within that component and passed down to its children via props. -->

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

<!-- redux thunk is middleware that lets you call action creators that return functions. it can run async with your app. -->


1. What is your favorite state management system you've learned and this sprint? Please explain why!

<!-- i don't have one. if i had to pick one i'd choose the use of context and provider most of the time until i had to use redux. i find this topic to be really tough in the beginning so my opinion of it isn't so great when trying to learn it this quickly. -->
